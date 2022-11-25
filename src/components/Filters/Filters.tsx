import Roadmap from '../Roadmap/Roadmap';

type isOpen = {
  isOpen: boolean;
};

const Filters: React.FC<isOpen> = ({ isOpen }: isOpen) => {
  const categories: string[] = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : 'translate-x-80'
      } fixed z-50 right-0 transition-transform max-w-sm  bg-slate-200 ml-auto h-full py-7 px-5`}
    >
      <div className="max-w-[255px] flex flex-wrap mx-auto gap-3 bg-white rounded-lg py-4 px-6">
        {categories.map((category) => {
          return (
            <button key={category} className="px-3 py-2 text-purpleBlue font-bold rounded-lg bg-whiteash">
              {category}
            </button>
          );
        })}
      </div>
      <Roadmap />
    </div>
  );
};

export default Filters;
