"use client";
export const dynamic = "force-static";

import { supabase } from "@/lib/supabase.js";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { TiArrowLeftOutline } from "react-icons/ti";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    if (!email || !password || !confirmPassword) {
      alert("Semua field wajib diisi.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Kata sandi tidak cocok!");
      return;
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      alert(signUpError.message);
      return;
    }

    const user = data.user;

    if (!user) {
      alert("Terjadi kesalahan: user tidak ditemukan setelah sign up.");
      return;
    }

    alert("Akun berhasil dibuat. Silakan cek email untuk verifikasi.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="absolute top-10 left-10 text-cyan-500">
        <Link href="/">
          <TiArrowLeftOutline size={40} />
        </Link>
      </div>
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
        <div className="w-full max-w-md">
          {/* Card Container */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8 border border-zinc-200 dark:border-zinc-700">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Buat Akun Baru
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Bergabung dengan Skindex untuk memulai perjalanan kulit sehat
                Anda.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Alamat Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Kata Sandi
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                >
                  Konfirmasi Kata Sandi
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-zinc-600 dark:text-zinc-400">
                Sudah punya akun?{" "}
                <Link
                  href="/signin"
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium transition-colors"
                >
                  Masuk di sini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
