// textarea.tsx
import { TextareaHTMLAttributes } from "react";

const Textarea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
    />
  );
};

export default Textarea;
