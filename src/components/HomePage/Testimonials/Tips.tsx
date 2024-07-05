import React from "react";
import Image from "next/image";

const Tips = () => {
  const tips = [
    {
      id: 1,
      title: "Be Clear About Your Expectations",
      advice:
        "When looking for a flat-mate, be clear about your expectations regarding cleanliness, noise levels, and shared responsibilities.",
      image:
        "https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Meet in Person",
      advice:
        "Always meet potential flat-mates in person to ensure compatibility and to discuss important details face-to-face.",
      image:
        "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Check References",
      advice:
        "Don’t hesitate to ask for references or previous rental experiences. It’s important to know the history of your potential flat-mate.",
      image:
        "https://images.pexels.com/photos/5410070/pexels-photo-5410070.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Set Ground Rules Early",
      advice:
        "Establish ground rules early on to avoid any misunderstandings later. Discuss things like guests, cleaning schedules, and shared expenses.",
      image:
        "https://images.pexels.com/photos/5686478/pexels-photo-5686478.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold m-6 text-center gradient-text">
        Tips for Finding and Sharing Flats
      </h2>
      <div className="tips-container grid lg:grid-cols-2 gap-6 m-8">
        {tips.map((tip) => (
          <div key={tip.id} className="tip mb-4">
            <div className="relative w-full h-64 mb-4">
              <Image
                src={tip.image}
                alt={tip.title}
                className="rounded"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-lg font-black">{tip.title}</div>
            <p>{tip.advice}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tips;
