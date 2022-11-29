import Plus from '../../Icons/Plus';
import React from 'react';
import z from 'zod';
import { useNavigate } from 'react-router-dom';

const ButtonProps = z.object({
  color: z.string().min(10),
  text: z.string(),
  icon: z.boolean(),
});

type ButtonProps = z.infer<typeof ButtonProps>;

function Button({ color, text, icon }: ButtonProps) {
  console.log(color);
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/new-feedback')}
      className={`flex items-center bg-${color} text-white font-bold justify-center bg- rounded-lg gap-2 px-3 py-2 ml-auto w-full`}
    >
      {icon ? <Plus /> : null}
      {text}
    </button>
  );
}

export default Button;
