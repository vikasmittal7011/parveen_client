import dayjs from "dayjs";
import { rating } from "../../constant";
import usericon from "../../constant/images/usericon.png";

const CourseReview = ({ reviews }) => {
  return (
    <div className="space-y-4">
      {reviews.map((r, i) => (
        <div key={i} className="border p-4 rounded bg-gray-100">
          <div className="flex items-center space-x-2">
            <img src={usericon} alt="icon" className="w-8 h-8 rounded-full" />
            <p className="font-bold">{r.userName}</p>
          </div>
          <p className="text-gray-600 text-sm my-2">
            Posted On: {dayjs(r.createdAt).format("YYYY-MM-DD HH:mm:ss")}
          </p>
          <p className="text-gray-600 text-sm my-2 flex gap-3">
            <span>
              {rating(r.rating)} {r.rating.toFixed(1)}
            </span>
          </p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseReview;
