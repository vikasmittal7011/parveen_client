import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";

import TransitionEffet from "../common/TransitionEffet";
import { useForm } from "react-hook-form";
import { inputClass, labelClass_2 } from "../../constant";
import { selectReview } from "../../features/review/reviewSlice";
import { ClipLoader } from "react-spinners";

const PostReviewForm = ({
  isOpen,
  handleModal,
  title,
  action,
  course,
  formAction,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      rating: 0,
    },
  });

  const { status } = useSelector(selectReview);

  const onSubmit = handleSubmit((data) => {
    formAction({ ...data, course: course.id });
    reset();
  });

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleModal}>
        <TransitionEffet>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionEffet>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="flex justify-center items-center p-4 text-center sm:items-center sm:p-0"
            style={{ height: "100vh" }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-1/3">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold text-purple-600"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-red-600 text-center my-3 font-bold text-2xl capitalize">
                          {/* {message?.message} */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={onSubmit} className="flex flex-col">
                    <label className={labelClass_2}>
                      Your Name
                      <input
                        type="text"
                        {...register("userName", {
                          required: "Pleace enter name...",
                        })}
                        className={`${inputClass} mt-0`}
                      />
                      {errors.userName && (
                        <span className="text-red-500">
                          {errors.userName.message}
                        </span>
                      )}
                    </label>
                    <label className={labelClass_2}>
                      Rating
                      <input
                        type="range"
                        min={1}
                        max={5}
                        step={0.5}
                        {...register("rating", {
                          required: "Pleace select rating...",
                        })}
                        className={`${inputClass} mt-0`}
                      />
                      {watch("rating") > 0 && (
                        <p className="mb-2">
                          Selected Rating: {watch("rating")}
                        </p>
                      )}
                      {errors.rating && (
                        <span className="text-red-500">
                          {errors.rating.message}
                        </span>
                      )}
                    </label>
                    <label className={labelClass_2}>
                      Comment
                      <input
                        type="text"
                        {...register("comment", {
                          required: "Pleace enter comment...",
                        })}
                        className={`${inputClass} mt-0`}
                      />
                      {errors.comment && (
                        <span className="text-red-500">
                          {errors.comment.message}
                        </span>
                      )}
                    </label>
                    <div className="bg-gray-50 px-4 py-3 flex sm:px-6 justify-center items-center gap-2 my-2">
                      <button
                        type="submit"
                        className={`inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto ${
                          status === "loading"
                            ? "cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                      >
                        <ClipLoader
                          size={20}
                          color="white"
                          loading={status === "loading"}
                        />
                        {action}
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => {
                          reset();
                          handleModal();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PostReviewForm;
