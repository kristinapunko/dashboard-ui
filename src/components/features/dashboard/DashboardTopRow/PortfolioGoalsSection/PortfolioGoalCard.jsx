import ProgressBar from "../../../../ui/ProgressBar";
import SegmentedProgressBar from "./SegmentedProgressBar";

const PortfolioGoalCard = ({ goal, className }) => {
  return (
    <div className={`mb-1 sm:mb-4 ${className}`}>
      <h6 className="text-slate-400 text-[9px] font-medium uppercase mb-1 sm:mb-2 sm:mt-3">
        {goal.title}
      </h6>

      {goal.segments ? (
        <div className="py-2">
          <SegmentedProgressBar
            segments={goal.segments}
            current={goal.current}
            subtitle={goal.subtitle}
            delta={goal.delta}
          />
        </div>
      ) : (
        <ProgressBar
          label={goal.targetLabel}
          score={goal.percentage}
          showScore={false}
          endValue={true}
          showEndValue={goal.current}
          showEndPercentage={true}
        />
      )}
    </div>
  );
};

export default PortfolioGoalCard