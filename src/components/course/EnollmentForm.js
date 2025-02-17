import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { inputClass_2 } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import {
  enrollStudentAync,
  selectenroll,
} from "../../features/enroll/enrollSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EnollmentForm = () => {
  const { status, dataSend } = useSelector(selectenroll);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (dataSend) {
      navigate("/enrollment-success");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSend]);

  return (
    <div>
      <h1 className="text-lg base:text-xl font-bold text-center text-gray-700">
        Enqiry Now
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
            <div>Submt</div>
            {/* <IoIosSend /> */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnollmentForm;
