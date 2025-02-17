import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetDataSend } from "../features/enroll/enrollSlice";

const ThankYou = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDataSend());
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-lg p-8 text-center shadow-lg bg-white rounded-2xl border border-gray-200">
        <div className="bg-blue-500 text-white py-6 rounded-t-2xl">
          {/* <CheckCircle className="w-16 h-16 text-white mx-auto" /> */}
        </div>
        <div>
          <h1 className="text-3xl font-bold my-4">Thank You</h1>
          <p className="text-gray-700 text-lg mb-4">
            Thanks for enrollment. Our representative will contact you shortly.
          </p>
          <p className="text-gray-600 text-sm mb-6">
            You can reach us at{" "}
            <a href="mailto:ith@ittransitionhub.com" className="text-blue-500">
              ith@ittransitionhub.com
            </a>
          </p>
          <button
            onClick={() => navigate("/")}
            className="w-full bg-blue-500 text-white"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
