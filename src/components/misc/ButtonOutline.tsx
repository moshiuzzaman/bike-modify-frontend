import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface ButtonOutlineProps {
  children: ReactNode;
  to: string;
}

const ButtonOutline = ({ children, to }: ButtonOutlineProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/${to}`)}
      className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-black-600 bg-primary outline-none rounded-l-full rounded-r-full capitalize hover:bg-white-500 hover:text-primary-500 transition-all hover:shadow-orange "
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
