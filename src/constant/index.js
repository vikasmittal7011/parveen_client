import { StarIcon } from "@heroicons/react/20/solid";

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const inputClass =
  "border-2 border-blue-400 focus:outline-blue-800 rounded-md w-full py-2 px-2 font-normal mt-2 text-lg";

export const inputClass_2 =
  "border-2 bg-gray-200 focus:outline-blue-800 rounded-sm w-full py-2 px-2 font-normal mt-2 text-md";

export const labelClass = "font-bold text-gray-700 text-lg flex-1";

export const labelClass_2 = "text-gray-700 flex-1";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const rating = (courseRating) => (
  <div className="flex items-center">
    {[0, 1, 2, 3, 4].map((rating) => (
      <StarIcon
        key={rating}
        className={classNames(
          courseRating > rating ? "text-gray-900" : "text-gray-200",
          "h-5 w-5 flex-shrink-0"
        )}
        aria-hidden="true"
      />
    ))}
  </div>
);
