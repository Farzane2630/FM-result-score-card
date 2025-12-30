import type { ScoreCardProps } from "./types/ui";

function ScoreCard({ icon, title, score, backgroundColor, color }: ScoreCardProps) {
  return (
    <div style={{backgroundColor}} className="score__container p-3 flex justify-between items-center rounded-2xl">
      <div>
        {icon}
        <p style={{color}} className="score__card__title">{title}</p>
      </div>

      <div className="score__result">
        <p className="text-gray-900">
          {score} <span className="text-gray-400">/ 100</span>
        </p>
      </div>
    </div>
  );
}

export default ScoreCard;
