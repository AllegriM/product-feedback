import React from 'react';
import data from '../api/data.json';
import { useParams } from 'react-router-dom';
import SuggestionCard from '../components/SuggestionCard/SuggestionCard';
import SuggestionComments from '../components/SuggestionComments/SuggestionComments';
import AddComment from '../components/AddComment/AddComment';

function FeedBackDetail() {
  const { id } = useParams<string>();

  const productData = data.productRequests[Number(id) - 1];
  const commentsLength = productData.comments?.length;

  return (
    <div className="p-4">
      <SuggestionCard suggestion={productData} />;
      <div className="p-4 bg-white text-left text-darkBlueXs rounded-lg shadow-md">
        <h4 className="text-xl font-bold">{commentsLength ? `${commentsLength} comments` : 'No comments yet'}</h4>
        <ul>
          {productData.comments?.map((comment) => {
            return <SuggestionComments key={comment.id} comment={comment} />;
          })}
        </ul>
      </div>
      <AddComment />
    </div>
  );
}

export default FeedBackDetail;
