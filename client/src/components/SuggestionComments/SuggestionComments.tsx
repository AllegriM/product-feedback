import React from 'react';
import { z } from 'zod';
import AddComment from '../AddComment/AddComment';
import CommentReplies, { ReplyProps } from '../CommentReplies/CommentReplies';

const CommentProps = z.object({
  comment: z.object({
    id: z.number(),
    content: z.string(),
    user: z.object({
      image: z.string(),
      name: z.string(),
      username: z.string(),
    }),
    replies: z.array(ReplyProps),
  }),
  lastComment: z.number(),
});

type CommentsProps = z.infer<typeof CommentProps>;

function SuggestionComments({ comment, lastComment }: CommentsProps) {
  return (
    <li className={`${lastComment === comment.id ? '' : 'border-b-2'} grid grid-cols-4 items-center py-4`}>
      <img src={comment.user.image} className="rounded-full w-12 col-span-1" alt={comment.user.name} />
      <div className="col-span-2">
        <p className="font-bold">@{comment.user.name}</p>
        <p>{comment.user.username}</p>
      </div>
      <p className="text-darkBlue font-bold col-span-1 text-right">Reply</p>
      <p className="col-span-4 pt-2">{comment.content}</p>
      <ul className="col-span-4">
        {comment.replies?.map((reply) => {
          return <CommentReplies key={reply.content} reply={reply} />;
        })}
      </ul>
    </li>
  );
}

export default SuggestionComments;
