import CardComponent from "../../../../ui/CardComponent";
import Title from "../../../../ui/Title";

const QuickActions = ({ actions }) => {
  return (
    <CardComponent className="p-1 sm:p-3">
      <Title className='text-base sm:text-[18px]' text='Quick actions' />
      <div className="space-y-2 sm:mt-2">
        {actions.map((action) => (
          <button
            key={action.id}
            className="w-full bg-[var(--color-brand-accent)] hover:bg-blue-700 text-white py-1.5 px-4 sm:px-6 rounded-full text-sm font-medium transition-colors"
          >
            {action.label}
          </button>
        ))}
      </div>
    </CardComponent>
  );
};

export default QuickActions