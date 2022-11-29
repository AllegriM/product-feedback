import React from 'react';
import { Suggestion } from '../../vite-env';
import ArrowUp from '../Icons/ArrowUp';
import Comments from '../Icons/Comments';

function SuggestionCard({ suggestion }: Suggestion) {
  return (
    <li className="p-4 bg-white text-left text-darkBlueXs mb-6 rounded-lg shadow-md list-none">
      <h4 className="font-bold mb-2">{suggestion.title}</h4>
      <p className="mb-3">{suggestion.description}</p>
      <span className="bg-whiteash text-darkBlue p-2 rounded-md font-bold">
        {suggestion.category.charAt(0).toUpperCase() + suggestion.category.substring(1, suggestion.category.length)}
      </span>
      <div className="flex justify-between mt-4">
        <button className="flex items-center gap-2 bg-whiteash px-2 rounded-md">
          <ArrowUp />
          <p className="mt-1 text-black font-bold">{suggestion.upvotes}</p>
        </button>
        <div className={`${!suggestion.comments?.length ? 'opacity-50' : 'opacity-100'} flex items-center gap-2`}>
          <Comments />
          <p className="mt-1 font-bold">{suggestion.comments?.length ? suggestion.comments?.length : 0}</p>
        </div>
      </div>
    </li>
  );
}

export default SuggestionCard;
