import AddFeedback from '../components/AddFeedback/AddFeedback';
import SortOptions from '../components/SortOptions/SortOptions';
import SuggestionList from '../components/SuggestionList/SuggestionList';

function Suggestions() {
  return (
    <div className="bg-slate-200 h-full">
      <div className="flex bg-darkBlueXs p-3 h-full">
        <SortOptions />
        <AddFeedback />
      </div>
      <SuggestionList />
    </div>
  );
}

export default Suggestions;
