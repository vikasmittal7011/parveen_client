import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const KeyPoint = ({ children, title, defaultShow }) => {
  const [show, setShow] = useState(defaultShow);
  return (
    <div className="text-sm align-middle mx-2 base:mx-6 py-2 base:py-4 border-2 rounded-md px-4 my-6 cursor-pointer">
      <div
        className="flex justify-between text-base md:text-lg"
        onClick={() => setShow(!show)}
      >
        <p className={`${!show && "font-bold text-cyan-600"}`}>{title}</p>
        <div>
          {show ? (
            <PlusIcon className="h-6 w-6" />
          ) : (
            <PlusIcon className="h-6 w-6 transform rotate-45" />
          )}
        </div>
      </div>
      <div
        className={`text-base md:text-lg text-start py-4 leading-7 cursor-auto transition-transform duration-700 ease-in-out ${
          show ? "hidden" : "block"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default KeyPoint;
