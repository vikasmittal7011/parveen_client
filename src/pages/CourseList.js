import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../components/course/CourseCard";
import { useParams } from "react-router-dom";
import { selectcategory } from "../features/category/categorySlice";
import { useEffect } from "react";
import {
  fetchCoursesByCategoryAsync,
  selectcourse,
} from "../features/course/courseSlice";
import SimpleLoading from "../components/common/SimpleLoading";

const CourseList = () => {
  const { categories } = useSelector(selectcategory);
  const { courses, status } = useSelector(selectcourse);
  const { category } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (category && categories) {
      const catgoryId = categories.find((c) => c.name === category)?.id;
      if (catgoryId) {
        dispatch(fetchCoursesByCategoryAsync(catgoryId));
      }
    }
  }, [category, categories, dispatch]);

  return (
    <div className="container mx-auto py-6 md:py-10">
      <div className="text-left">
        <h1 className="text-xl base:text-2xl md:text-3xl font-bold text-gray-700 py-2">
          {category}
        </h1>
        <p className="text-3xl xs:text-base">
          Our courses catalogue enable individuals and teams to perform.
        </p>
      </div>

      {status === "loading" ? (
        <SimpleLoading />
      ) : (
        <div className={`mt-6`}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
