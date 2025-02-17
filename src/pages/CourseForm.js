import { ClipLoader } from "react-spinners";
import Images from "../components/courseForm/Images";
import Toast from "../components/common/Toast";
import { FormProvider, useForm, useFieldArray } from "react-hook-form";
import { useEffect, useState } from "react";
import { inputClass } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessage,
  createCourceAsync,
  emptyNewCourse,
  selectcourse,
} from "../features/course/courseSlice";
import { useNavigate } from "react-router-dom";
import {
  getCategoriesAsync,
  selectcategory,
} from "../features/category/categorySlice";

const CourseForm = () => {
  const dispatch = useDispatch();

  const { newCourse, status, message } = useSelector(selectcourse);
  const { categories } = useSelector(selectcategory);

  const navigate = useNavigate();

  const formMethods = useForm({
    defaultValues: {
      title: "",
      description: "",
      price: "",
      duration: "",
      modules: [{ title: "", keyPoints: [""] }],
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
  } = formMethods;

  const {
    fields: moduleFields,
    append: addModule,
    remove: removeModule,
  } = useFieldArray({
    control,
    name: "modules",
  });

  const [photos, setPhotos] = useState();
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    // if (!photos) {
    //   setError("Please provide some images...");
    //   return;
    // }
    dispatch(createCourceAsync({ ...data, image: photos || "" }));
  });

  useEffect(() => {
    if (newCourse?.title !== undefined) {
      const id = newCourse?.id;
      dispatch(emptyNewCourse());
      navigate(`/course/${id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newCourse]);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategoriesAsync());
    }
  }, []);

  return (
    <FormProvider {...formMethods}>
      <Toast
        type={status === "failed" ? "error" : "success"}
        message={message}
        clearMessage={clearMessage}
      />
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        {/* Category Dropdown */}
        <select
          {...register("category", {
            required: "Category is required...",
          })}
          className={inputClass}
        >
          <option value="">Select Category</option>
          {categories.map((c, i) => (
            <option key={i} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className="text-red-500">{errors.category.message}</span>
        )}
        {/* Title */}
        <input
          type="text"
          {...register("title", {
            required: "Title is required...",
          })}
          className={inputClass}
          placeholder="Title"
        />
        {errors.title && (
          <span className="text-red-500">{errors.title.message}</span>
        )}

        {/* Description */}
        <textarea
          {...register("description", {
            required: "Description is required...",
          })}
          className={inputClass}
          placeholder="Description"
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}

        {/* Price */}
        <input
          type="number"
          {...register("price", {
            required: "Price is required...",
          })}
          className={inputClass}
          placeholder="Price"
        />
        {errors.price && (
          <span className="text-red-500">{errors.price.message}</span>
        )}

        {/* Duration */}
        <input
          type="text"
          {...register("duration", {
            required: "Duration is required...",
          })}
          className={inputClass}
          placeholder="Duration"
        />
        {errors.duration && (
          <span className="text-red-500">{errors.duration.message}</span>
        )}

        {/* Modules */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg">Modules</h3>
          {moduleFields.map((module, moduleIndex) => (
            <div key={module.id} className="border p-4 rounded-md bg-gray-50">
              {/* Module Title */}
              <input
                type="text"
                {...register(`modules[${moduleIndex}].title`, {
                  required: "Module title is required...",
                })}
                className={inputClass}
                placeholder="Module Title"
              />
              {errors.modules?.[moduleIndex]?.title && (
                <span className="text-red-500">
                  {errors.modules[moduleIndex].title.message}
                </span>
              )}

              {/* Key Points */}
              <div className="mt-2">
                <h4 className="font-semibold">Key Points</h4>
                <div className="flex flex-col gap-2">
                  {watch(`modules[${moduleIndex}].keyPoints`)?.map(
                    (_, kpIndex) => (
                      <div key={kpIndex} className="flex items-center gap-2">
                        <input
                          type="text"
                          {...register(
                            `modules[${moduleIndex}].keyPoints[${kpIndex}]`,
                            {
                              required: "Key point is required...",
                            }
                          )}
                          className={inputClass}
                          placeholder={`Key Point ${kpIndex + 1}`}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updatedKeyPoints = [
                              ...watch(`modules[${moduleIndex}].keyPoints`),
                            ];
                            updatedKeyPoints.splice(kpIndex, 1);
                            setValue(
                              `modules[${moduleIndex}].keyPoints`,
                              updatedKeyPoints
                            );
                          }}
                          className="text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    )
                  )}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setValue(`modules[${moduleIndex}].keyPoints`, [
                      ...watch(`modules[${moduleIndex}].keyPoints`),
                      "",
                    ])
                  }
                  className="text-blue-500 mt-2"
                >
                  Add Key Point
                </button>
              </div>
              <button
                type="button"
                onClick={() => removeModule(moduleIndex)}
                className="text-red-500 mt-3"
              >
                Remove Module
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addModule({ title: "", keyPoints: [""] })}
            className="text-blue-500 mt-3"
          >
            Add Module
          </button>
        </div>

        {/* Images */}
        <Images
          images={photos}
          setImages={setPhotos}
          error={error}
          setError={setError}
        />

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-blue-700 outline-none text-white p-2 px-4 rounded-md font-bold text-xl hover:bg-blue-500 transition-all ${
              status === "loading" ? "cursor-not-allowed" : "cursor-pointer"
            } flex justify-center items-center gap-2`}
          >
            <ClipLoader
              size={20}
              color="white"
              loading={status === "loading"}
            />
            <div>Save</div>
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default CourseForm;
