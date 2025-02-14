import { useSelector } from "react-redux";
import CourseCard from "../course/CourseCard";
import { selectcourse } from "../../features/course/courseSlice";

const Course = () => {
  const { courses } = useSelector(selectcourse);

  return (
    <div className="container mx-auto py-6 md:py-20">
      <div className="text-center">
        <h1 className="text-xl base:text-2xl md:text-3xl font-bold text-gray-700 py-2">
          Cource
        </h1>
        <p className="text-3xl xs:text-base">
          Our courses catalogue enable individuals and teams to perform.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-${
          courses.length >= 4 ? 4 : 2
        } gap-4 mt-6`}
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Course;
