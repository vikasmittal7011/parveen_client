import { Link } from "react-router-dom";
import AlternativeImage from "../../constant/images/alt.jpg";

const CourseCard = ({ course, category }) => {
  return (
    <Link target="_blank" to={`/our-course/${category}/${course.title}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-row-reverse justify-between p-4 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
        <img
          alt={course?.title}
          src={course?.image || AlternativeImage}
          className="object-fill w-60 h-48"
        />
        <div className="mx-2">
          <h1 className="text-xl font-bold text-blue-700 py-2">
            {course?.title}
            {/* {course?.title.slice(0, 15)}... */}
          </h1>
          <p className="text-gray-600">Duration: {course?.duration}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
