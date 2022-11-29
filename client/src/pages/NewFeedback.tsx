import React from 'react';
import Plus from '../components/Icons/Plus';
import Button from '../components/UI Components/Button/Button';
import Heading from '../components/UI Components/Title/Title';
function NewFeedBack() {
  return (
    <div className="p-6 mt-2">
      <div className="bg-white relative rounded-lg text-darkBlueXs p-6 text-left">
        <div className="absolute top-[-20px] left-5 flex justify-center items-center w-12 h-12 rounded-full bg-gradient-to-bl from-darkPurple to-darkBlueXs">
          <Plus />
        </div>
        <Heading
          text="Create New Feedback"
          type="h4"
          className={'text-darkBlueXs font-bold text-xl pb-6 pt-3 text-left'}
        />
        <form action="">
          <label className="font-bold" htmlFor="">
            Feedback Title
          </label>
          <p className="text-lightGray tracking-tight text-sm">Add a short, descriptive headline</p>
          <textarea className="bg-slate-100 w-full resize-none rounded-md mt-3 mb-5" name="" id="" rows={3}></textarea>
          <label className="font-bold" htmlFor="">
            Category
          </label>
          <p className="text-lightGray tracking-tight text-sm">Choose a category for your feedback</p>
          <input className="bg-slate-100 w-full rounded-md mt-3 mb-5 p-3" type="" />
          <label className="font-bold" htmlFor="">
            Feedback Detail
          </label>
          <p className="text-lightGray tracking-tight text-sm">
            Include any specific comments on what should be improved, added, etc.
          </p>
          <textarea
            className="bg-slate-100 w-full resize-none rounded-md mt-3 mb-5"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <div className="flex flex-col gap-3 mt-5">
            <Button text={'Add Feedback'} color={'darkPurple'} icon={false} />
            <Button text={'Cancel'} color={'darkBlueXs'} icon={false} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewFeedBack;
