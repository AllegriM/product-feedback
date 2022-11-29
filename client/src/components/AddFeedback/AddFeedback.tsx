import Plus from '../Icons/Plus';
import React from 'react';
import z from 'zod';

const ButtonProps = z.object({
  color: z.string().min(10),
  text: z.string(),
});

type ButtonProps = z.infer<typeof ButtonProps>;

function AddFeedback({ color, text }: ButtonProps) {
  return (
    <button className={`flex items-center bg-${color} rounded-lg gap-2 px-3 py-2 ml-auto`}>
      <Plus />
      {text}
    </button>
  );
}

export default AddFeedback;
