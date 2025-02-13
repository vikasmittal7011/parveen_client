import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
// import { IoIosSend } from "react-icons/io";
import { inputClass_2 } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessage,
  enrollStudentAync,
  selectenroll,
} from "../../features/enroll/enrollSlice";
import Toast from "../common/Toast";

const NewsPaperForm = () => {
  const { status, message } = useSelector(selectenroll);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    dispatch(enrollStudentAync(data));
    reset();
  });

  return (
    <div>
      <Toast
        type={status === "failed" ? "error" : "success"}
        message={message}
        clearMessage={clearMessage}
      />
      <h1 className="text-lg base:text-xl font-bold text-center text-gray-700">
        Register
      </h1>

      <form className="flex flex-col gap-2 my-5" onSubmit={onSubmit}>
        <input
          {...register("name", {
            required: "Required...",
          })}
          placeholder="Full Name"
          className={inputClass_2}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}

        <input
          {...register("email", {
            required: "Required...",
          })}
          placeholder="Email"
          className={inputClass_2}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}

        <input
          {...register("phone", {
            required: "Required...",
          })}
          placeholder="Contact"
          className={inputClass_2}
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}

        <input
          {...register("course", {
            required: "Required...",
          })}
          placeholder="Interested Course"
          className={inputClass_2}
        />
        {errors.course && (
          <span className="text-red-500">{errors.course.message}</span>
        )}

        <textarea
          {...register("msg", {
            required: "Required...",
          })}
          rows={3}
          placeholder="Message"
          className={inputClass_2}
        />
        {errors.msg && (
          <span className="text-red-500 text-start">{errors.msg.message}</span>
        )}

        <div className="flex justify-center pt-5">
          <button
            type="submit"
            className={`outline-none bg-green-700 text-white p-2 px-4 rounded-md font-bold base:text-xl hover:bg-green-500 transition-all ${
              status === "loading" ? "cursor-not-allowed" : "cursor-pointer"
            } flex justify-center items-center gap-2 w-fit`}
          >
            <ClipLoader
              size={20}
              color="white"
              loading={status === "loading"}
            />
            <div>Enroll Now</div>
            {/* <IoIosSend /> */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsPaperForm;
