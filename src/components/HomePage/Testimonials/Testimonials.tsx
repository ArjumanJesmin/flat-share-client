import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      user: "Alice Johnson",
      story:
        "Thanks to this platform, I found a wonderful flat-mate who has become a great friend!",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      user: "Bob Smith",
      story:
        "This website made it so easy to find someone compatible. Highly recommend it!",
      image:
        "https://images.pexels.com/photos/3781964/pexels-photo-3781964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      user: "Carol Lee",
      story:
        "I moved to a new city and found a flat and a flat-mate in just a few days. Amazing experience!",
      image:
        "https://images.pexels.com/photos/3756907/pexels-photo-3756907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="mx-auto my-10 border-b-2 shadow-md p-6">
      <h2 className="text-3xl font-bold m-6 text-center gradient-text">
        Testimonials
      </h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {testimonials.map((testimonial, index) => (
          <li key={testimonial.id}>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`timeline-${
                index % 2 === 0 ? "start md:text-end" : "end"
              } mb-10`}
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="rounded-full"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="font-mono italic">{testimonial.user}</div>
              <div className="text-lg font-black">{testimonial.story}</div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
