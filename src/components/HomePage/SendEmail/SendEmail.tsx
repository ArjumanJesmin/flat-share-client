"use client";
import Image from "next/image";
import bgImage from "@/assets/bg-2.png";
import contactImage from "@/assets/bg-3.png";
import TitleWithSubtitle from "@/components/utils/TitleWithSubtitle";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const SendEmail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name"));
  return (
    <div className="container relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          sizes="100vw"
          fill
          objectFit="cover"
          alt="Background Image"
          className="z-0"
        />
        <div className="absolute inset-0 bg-secondary-light1 opacity-10 z-10"></div>
      </div>

      {/* Form Content */}
      <div className="relative z-20 grid md:grid-cols-2 py-2">
        <div className="w-96 mx-auto mt-8">
          <TitleWithSubtitle
            subtitle="free quote"
            title="Get an insurance quote to get started"
          />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block py-1 text-lg" htmlFor="name">
                Name:
              </label>
              <input
                className="border-b w-full py-1 focus:outline-none"
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
            </div>
            <div>
              <label className="block py-1 text-lg" htmlFor="email">
                Email:
              </label>
              <input
                className="border-b w-full py-1 focus:outline-none"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label className="block py-1 text-lg" htmlFor="subject">
                Subject:
              </label>
              <input
                className="border-b w-full py-1 focus:outline-none"
                type="text"
                id="subject"
                {...register("subject", { required: true })}
              />
            </div>
            <div>
              <label className="block py-1 text-lg" htmlFor="message">
                Message:
              </label>
              <textarea
                className="border-b w-full py-1 focus:outline-none"
                id="message"
                rows={2}
                {...register("message", { required: true })}
              />
            </div>
            <div>
              <button
                className="btn bg-primary-main text-white w-1/2 py-1 focus:outline-none"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Right-side Image */}
        <div>
          <Image
            src={contactImage}
            alt="Contact Image"
            sizes="100vw"
            objectFit="cover"
            className="z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
