import { Link } from "react-router-dom";
import AlternativeImage from "../../constant/images/alt.jpg";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center p-4 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <img
          alt={course?.title}
          src={course?.image || AlternativeImage}
          className="object-fill w-full h-48"
        />
        <div className="mx-2">
          <h1 className="text-xl font-bold text-blue-700 py-2">
            {course?.title.slice(0, 15)}...
          </h1>
          {/* <p className="text-gray-600">Duration: {course?.duration}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
