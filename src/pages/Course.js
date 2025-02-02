import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearEnrollSuccess,
  enrollStudentAsync,
  fetchCoursesByIdAsync,
  selectcourse,
} from "../features/course/courseSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import { selectuser } from "../features/user/userSlice";
import { scrollToTop } from "../constant";
import EnrollPopUp from "../components/course/EnrollPopUp";
import EnrollConfirm from "../components/course/EnrollConfirm";
import StudentsDetails from "../components/course/StudentsDetails";

const Course = () => {
  const { user } = useSelector(selectuser);
  const { course, status, enrollSuccess } = useSelector(selectcourse);
  const { id } = useParams();

  const [open, setOpen] = useState(false);
  const [openDone, setOpenDone] = useState(false);
  const [openStudent, setOpenStudent] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEnroll = () => {
    if (user?.email) {
      setOpen(true);
    } else {
      navigate("/login");
    }
  };

  const handleEnrollConfirm = () => {
    dispatch(enrollStudentAsync(id));
    setOpen(false);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    dispatch(fetchCoursesByIdAsync(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("course", course);

  useEffect(() => {
    if (enrollSuccess) {
      setOpenDone(true);
      dispatch(clearEnrollSuccess());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enrollSuccess]);

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <>
          <EnrollPopUp
            open={open}
            setOpen={setOpen}
            courseTitle={course?.title || ""}
            handleEnrollConfirm={handleEnrollConfirm}
          />
          <EnrollConfirm
            open={openDone}
            setOpen={setOpenDone}
            courseTitle={course?.title || ""}
          />
          <StudentsDetails
            setOpen={setOpenStudent}
            open={openStudent}
            students={course?.enrolled || []}
          />
          {course?.title !== undefined ? (
            <div className="md:mx-10">
              <div className="flex gap-5 justify-between flex-col md:flex-row">
                <div className="flex flex-col gap-5 border-r-2 p-5 bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3">
                  <h1 className="text-3xl font-bold text-gray-600 leading-6">
                    {course?.title}
                  </h1>
                  <p className="text-lg">{course?.description}</p>
                  {/* <div className="flex justify-between">
                    <p className="text-lg">Price: {course?.price}</p>
                    <p className="text-lg">Duration: {course?.duration}</p>
                  </div> */}
                  <div className="flex justify-between items-center">
                    {!course?.enrolled?.includes(user?.id) && (
                      <button
                        className="outline-none py-2 px-5 bg-green-600 w-fit rounded-lg text-white font-semibold tracking-wide hover:bg-green-500 transition-all ease-in-out"
                        onClick={handleEnroll}
                      >
                        Enroll Now
                      </button>
                    )}
                    {user.role === "admin" && (
                      <button
                        className="outline-none py-2 px-5 bg-green-600 w-fit rounded-lg text-white font-semibold tracking-wide hover:bg-green-500 transition-all ease-in-out"
                        onClick={() => setOpenStudent(true)}
                      >
                        Students Details
                      </button>
                    )}
                  </div>
                </div>
                <div className="md:w-1/3">
                  <img
                    alt={course?.title}
                    src={course?.image}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-600 py-5">
                  Modules
                </h1>
                {course?.modules?.map((module, key) => (
                  <div key={key} className="p-4 mb-5">
                    <h2 className="text-xl font-bold">{module.title}</h2>
                    {module?.keyPoints?.map((keyPoint, keyPointIndex) => (
                      <div
                        key={keyPointIndex}
                        className="flex items-center gap-2 my-1 ps-1 text-gray-700"
                      >
                        <span className="text-gray-600">{"->"} </span>
                        <p>{keyPoint}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col gap-2">
              <h1 className="font-bold text-3xl text-red-600">
                Course Not Found
              </h1>
              <Link to="/" className="text-blue-600 underline">
                Back To Home
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Course;
