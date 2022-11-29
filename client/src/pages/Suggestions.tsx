import React from 'react';
import AddFeedback from '../components/AddFeedback/AddFeedback';
import SortOptions from '../components/SortOptions/SortOptions';
import SuggestionList from '../components/SuggestionList/SuggestionList';

function Suggestions() {
  return (
    <div className="">
      <div className="flex bg-darkBlueXs p-3 h-full">
        <SortOptions />
        <AddFeedback color={'darkPurple'} text={'Add feedback'} />
      </div>
      <SuggestionList />
    </div>
  );
}

export default Suggestions;
