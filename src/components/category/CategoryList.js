import { Link } from "react-router-dom";

const CategoryList = ({ category }) => {
  return (
    <Link
      target="_blank"
      to={`/our-courses/${category.name}`}
      className="border-1 custom-bg py-2 px-4 rounded-md text-white cursor-pointer"
    >
      <p className="text-xl font-bold tracking-wider">{category.name}</p>
      <p className="">No. of Courses : {category.totalCourses}</p>
    </Link>
  );
};

export default CategoryList;
