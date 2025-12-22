import { generateRecommendations } from "./recommendation.engine.js";
import { getSeverity } from "./severity.js";
import { introCopy, pickRandom } from "./intro.copy.js";
import { SkinConcern } from "../../types/types.js";

export function buildAnalysisResult({
  concerns,
  scores,
}: {
  concerns: SkinConcern[];
  scores: {
    acne: number;
    oil: number;
    redness: number;
    moisture: number;
  };
}) {
  const overallSeverity = getSeverity(
    Math.max(scores.acne, scores.oil, scores.redness, scores.moisture)
  );

  return {
    intro: pickRandom(introCopy[overallSeverity]),
    severity: overallSeverity,
    recommendations: generateRecommendations(concerns, scores),
  };
}
