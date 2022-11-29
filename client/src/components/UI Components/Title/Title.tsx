import React from 'react';
import { z } from 'zod';

const HeadingProps = z.object({
  text: z.string(),
  type: z.string().max(2).min(2),
  className: z.string(),
});

type HeadingProps = z.infer<typeof HeadingProps>;

function Heading({ text, className, type }: HeadingProps) {
  return React.createElement(type, { className }, text);
}

export default Heading;
