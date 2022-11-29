import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../api/data.json';
import AddFeedback from '../AddFeedback/AddFeedback';
import EmptyContent from '../Icons/EmptyContent';
import SuggestionCard from '../SuggestionCard/SuggestionCard';

function SuggestionList() {
  return (
    <ul className="grid col-span-12 p-6 h-full">
      {products.productRequests ? (
        products.productRequests.map((product) => {
          return (
            <Link key={product.id} to={`feedback-detail/${product.id.toString()}`}>
              <SuggestionCard suggestion={product} />
            </Link>
          );
        })
      ) : (
        <div className="bg-whiteash h-full flex flex-col items-center gap-4 p-4">
          <EmptyContent />
          <h2 className="text-darkBlueXs font-bold text-2xl">There is no feedback yet.</h2>
          <p className="text-darkBlueXs">
            Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
          </p>
          <div className="">
            <AddFeedback color={'darkPurple'} text={'Add feedback'} />
          </div>
        </div>
      )}
    </ul>
  );
}

export default SuggestionList;
