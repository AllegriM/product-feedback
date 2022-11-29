import React from 'react';

function AddComment() {
  return (
    <div className="p-6 bg-white text-left text-darkBlueXs rounded-lg shadow-md mt-10">
      <h4 className="text-darkBlueXs font-bold text-2xl">Add Comment</h4>
      <textarea
        className="bg-slate-200 p-4 mt-4 rounded-md w-full resize-none"
        placeholder="Type your comment here"
        name=""
        id=""
        rows={5}
      />
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-slate-400">250 characters left</span>
        <button className="bg-darkPurple p-2 rounded-lg text-white text-base font-bold">Post Comment</button>
      </div>
    </div>
  );
}

export default AddComment;
