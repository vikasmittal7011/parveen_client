import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearEnrollSuccess,
  fetchCourseByTitleAsync,
  selectcourse,
} from "../features/course/courseSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import { selectuser } from "../features/user/userSlice";
import { scrollToTop } from "../constant";
import EnrollPopUp from "../components/course/EnrollPopUp";
import EnrollConfirm from "../components/course/EnrollConfirm";
import StudentsDetails from "../components/course/StudentsDetails";
import AlternativeImage from "../constant/images/alt.jpg";
import PostReviewForm from "../components/course/PostReviewForm";
import {
  fetchReviewsAsync,
  selectReview,
  clearMessage,
  postReviewAsync,
} from "../features/review/reviewSlice";
import Toast from "../components/common/Toast";
import InfiniteScroll from "react-infinite-scroll-component";
import CourseReview from "../components/course/CourseReview";
import { ClipLoader } from "react-spinners";
import EnollmentForm from "../components/course/EnollmentForm";

const Course = () => {
  const { user } = useSelector(selectuser);
  const { course, status, enrollSuccess } = useSelector(selectcourse);
  const {
    reviews,
    totalReviews,
    isReviewAdded,
    status: reviewStatus,
    message,
  } = useSelector(selectReview);
  const { title } = useParams();
  const params = useParams();

  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openDone, setOpenDone] = useState(false);
  const [openStudent, setOpenStudent] = useState(false);
  const [openReview, setOpenReview] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleEnroll = () => {
    if (user?.email) {
      setOpen(true);
    } else {
      navigate("/login");
    }
  };

  const handleModel = () => {
    setOpenReview(!openReview);
  };

  const handleEnrollConfirm = () => {
    // dispatch(enrollStudentAsync(id));
    setOpen(false);
  };

  const formAction = (data) => {
    dispatch(postReviewAsync(data));
    handleModel();
    const pagination = { _page: page, _limit: 5 };
    dispatch(fetchReviewsAsync({ name: title, pagination }));
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    dispatch(fetchCourseByTitleAsync(title));
    dispatch(
      fetchReviewsAsync({
        name: title,
        pagination: { _page: page, _limit: 5 },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReviewAdded]);

  useEffect(() => {
    if (enrollSuccess) {
      setOpenDone(true);
      dispatch(clearEnrollSuccess());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enrollSuccess]);

  useEffect(() => {
    const pagination = { _page: page, _limit: 5 };
    dispatch(fetchReviewsAsync({ name: title, pagination }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, page]);

  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <>
          <Toast
            type={status === "failed" ? "error" : "success"}
            message={message}
            clearMessage={clearMessage}
          />
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
          <PostReviewForm
            isOpen={openReview}
            handleModal={handleModel}
            action="Post Review"
            title="Post new review for course here...."
            course={course}
            formAction={formAction}
          />
          {course?.title !== undefined ? (
            <div className="md:mx-10">
              <div className="flex gap-5 justify-between flex-col md:flex-row">
                <div className="flex flex-col gap-5 border-r-2 p-5 bg-white shadow-lg rounded-lg overflow-hidden md:w-2/3">
                  <h1 className="text-3xl font-bold text-gray-600 leading-6">
                    {course?.title}
                  </h1>
                  <p className="text-lg">{course?.description}</p>

                  <button
                    className="outline-none py-2 px-5 bg-green-600 w-fit rounded-lg text-white font-semibold tracking-wide hover:bg-green-500 transition-all ease-in-out"
                    onClick={handleModel}
                  >
                    Post A Review
                  </button>
                  {/* <div className="flex justify-between">
                    <p className="text-lg">Price: {course?.price}</p>
                    <p className="text-lg">Duration: {course?.duration}</p>
                  </div>
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
                  </div> */}
                </div>
                <div className="md:w-1/3">
                  <img
                    alt={course?.title}
                    src={course?.image || AlternativeImage}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
              <div className="flex justify-between w-full my-10 flex-col md:flex-row">
                <div className="md:w-2/3">
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
                <div className="md:w-1/3">
                  <EnollmentForm />
                </div>
              </div>
              {reviews.length > 0 && (
                <div
                  className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-3 mt-3"
                  id="reviews"
                >
                  <h1 className="text-2xl font-bold tracking-tight my-3">
                    Reviews
                  </h1>
                  <InfiniteScroll
                    dataLength={totalReviews}
                    next={() => {
                      setPage(page + 1);
                    }}
                    hasMore={totalReviews > reviews.length}
                    loader={
                      <div className={`flex justify-center my-2`}>
                        <img
                          src={<ClipLoader size={100} color="blue" />}
                          alt="Loading"
                          width={100}
                          height={100}
                        />
                      </div>
                    }
                  >
                    <CourseReview reviews={reviews} course={course} />
                  </InfiniteScroll>
                </div>
              )}
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
