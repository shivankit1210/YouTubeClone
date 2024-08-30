import React from "react";

const buttonList = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "ReactJs",
  },
  {
    id: 3,
    title: "Firebase",
  },
  {
    id: 4,
    title: "Tailwind CSS",
  },
  {
    id: 5,
    title: "Front-end",
  },
  {
    id: 6,
    title: "ExpressJs",
  },
  {
    id: 7,
    title: "Bootstrap",
  },
  {
    id: 8,
    title: "NodeJs",
  },
  {
    id: 9,
    title: "MongoDB",
  },
  {
    id: 10,
    title: "Web Development",
  },
  {
    id: 11,
    title: "Kedarnath",
  },
  {
    id: 12,
    title: "Vlog",
  },
  {
    id: 13,
    title: "ESports",
  },
  {
    id: 14,
    title: "Movies",
  },
  {
    id: 15,
    title: "Songs",
  },
  {
    id: 16,
    title: "Cartoons",
  },
  {
    id: 17,
    title: "Bhajan",
  },

];

const ButtonList = () => {
  return (
    <div className="flex w-full overflow-x-scroll">
      {buttonList.map((item, index) => {
        return (
         <div>
            <button
            key={buttonList.id}
            className="bg-gray-200 text-gray-900 rounded-lg px-1 py-1 m-1 text-sm font-semibold"
          >
            <span className="whitespace-nowrap">{item.title}</span>
            
          </button>
         </div>
          
        );
      })}
    </div>
  );
};

export default ButtonList;
