import React from 'react';
import { z } from 'zod';

export const ReplyProps = z.object({
  reply: z.object({
    content: z.string(),
    replyingTo: z.string(),
    user: z.object({
      image: z.string(),
      name: z.string(),
      username: z.string(),
    }),
  }),
});

type ReplyProps = z.infer<typeof ReplyProps>;

function CommentReplies({ reply }: ReplyProps) {
  return (
    <li className="relative grid grid-cols-4 items-center py-4 pl-4">
      <div className="absolute w-[2px] bg-slate-200 h-full rounded-md"></div>
      <img src={`${reply.user.image}`} alt={reply.user.name} className="rounded-full w-12 col-span-1" />
      <div className="col-span-2">
        <p className="font-bold">@{reply.user.name}</p>
        <p>{reply.user.username}</p>
      </div>
      <p className="text-darkBlue font-bold col-span-1 text-right">Reply</p>
      <p className="col-span-4 pt-2">
        <span className="text-darkPurple font-bold">@{reply.replyingTo} </span>
        {reply.content}
      </p>
    </li>
  );
}

export default CommentReplies;
