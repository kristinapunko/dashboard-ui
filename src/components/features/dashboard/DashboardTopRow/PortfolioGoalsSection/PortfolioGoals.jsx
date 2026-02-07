import CardComponent from "../../../../ui/CardComponent";
import Title from "../../../../ui/Title";
import PortfolioGoalCard from "./PortfolioGoalCard";

const PortfolioGoals = ({ goals }) => {
  return (
    <CardComponent className="p-1 sm:p-2 h-full">
      <Title className='text-[18px]' text='Portfolio goals' />
      {goals.map((goal) => (
        <PortfolioGoalCard key={goal.id} goal={goal} className='px-2' />
      ))}
    </CardComponent>
  );
};

export default PortfolioGoals