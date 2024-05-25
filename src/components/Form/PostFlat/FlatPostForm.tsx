"use client";
import { usePostFlatMutation } from "@/redux/features/flat";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import upload from "@/assets/upload.svg";
import Image from "next/image";
import { toast } from "sonner";

type Inputs = {
  location: string;
  description: string;
  rentAmount: number;
  bedrooms: number;
  flatPhoto: FileList;
  amenities: string;
};

const img_hosting_token = process.env.IMAGE_UPLOAD_TOKEN;

const FlatPostForm = () => {
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
    } else {
      setSelectedFileName("");
    }
  };

  const [postFlat, { isLoading, isError, isSuccess }] = usePostFlatMutation();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      if (!img_hosting_token) {
        throw new Error("Image hosting token is missing");
      }

      const imageFormData = new FormData();
      imageFormData.append("image", formData.flatPhoto[0]);

      const imageResponse = await fetch(image_hosting_url, {
        method: "POST",
        body: imageFormData,
      });
      const imageResult = await imageResponse.json();

      if (!imageResult.success) {
        throw new Error("Image upload failed");
      }

      const flatData = {
        location: formData.location,
        description: formData.description,
        rentAmount: Number(formData.rentAmount),
        bedrooms: Number(formData.bedrooms),
        flatPhoto: imageResult.data.url,
        amenities: formData.amenities,
      };
      console.log(flatData);

      const response = await postFlat(flatData).unwrap();
      toast.success("Flat posted successfully!");
      console.log("Flat posted successfully:", response);
    } catch (error) {
      console.error("Failed to post flat:", error);
      toast.error("Failed to post flat.");
    }
  };

  return (
    <div className="mx-2 mt-0 border p-12 rounded shadow">
      <div className="flex items-center my-4 justify-between w-full">
        <h2 className="text-center text-2xl font-medium my-4 text-cyan-500">
          Create Flat
        </h2>
        <div>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="w-full mx-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div className="gap-2 mx-4">
              <label className="py-2 text-lg" htmlFor="location">
                Location:
              </label>
              <input
                className="border-b border-gray-300 w-full focus:outline-none"
                type="text"
                id="location"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="gap-2 mx-4">
              <label className="py-2 text-lg" htmlFor="description">
                Description:
              </label>
              <input
                className="border-b border-gray-300 w-full focus:outline-none"
                type="text"
                id="description"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="gap-2 mx-4">
              <label className="py-2 text-lg" htmlFor="rentAmount">
                Rent Amount
              </label>
              <input
                className="border-b border-gray-300 w-full focus:outline-none"
                type="number"
                id="rentAmount"
                {...register("rentAmount", { required: true })}
              />
              {errors.rentAmount && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="gap-2 mx-4">
              <label className="py-2 text-lg" htmlFor="bedrooms">
                Bedrooms
              </label>
              <input
                className="border-b border-gray-300 w-full focus:outline-none"
                type="number"
                id="bedrooms"
                {...register("bedrooms", { required: true })}
              />
              {errors.bedrooms && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="gap-2 mx-4">
              <label className="py-2 text-lg" htmlFor="flatPhotos">
                Flat Photos
              </label>
              <div className="relative w-full border-b border-gray-300 flex items-center">
                <input
                  type="file"
                  id="flatPhotos"
                  {...register("flatPhoto", { required: true })}
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center w-full cursor-pointer">
                  <Image
                    src={upload}
                    alt="upload file"
                    width={30}
                    height={30}
                  />
                  <span className="ml-2 text-gray-500">
                    {selectedFileName || "Upload a photo"}
                  </span>
                </div>
              </div>
              {errors.flatPhoto && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="gap-2 mx-4">
              <label className="text-lg" htmlFor="amenities">
                Amenities
              </label>
              <input
                className="border-b border-gray-300 w-full focus:outline-none"
                type="text"
                id="amenities"
                {...register("amenities", { required: true })}
              />
              {errors.amenities && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          </div>

          <div className="w-1/2 mx-auto mt-8">
            <button type="submit" className="btn bg-cyan-500 text-white w-full">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlatPostForm;
