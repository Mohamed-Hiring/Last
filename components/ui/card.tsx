import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {children}
    </div>
  );
};

export const CardContent = ({ children }: { children: ReactNode }) => {
  return <div className="p-4">{children}</div>;
};
