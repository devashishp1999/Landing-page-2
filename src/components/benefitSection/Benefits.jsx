import React from "react";
import "./Benefits.css";

const Benefits = () => {
  const benefits = [
    {
      img: "./images/icon-1.png",
      head: "Quick Response",
      para: "Lorem ipsum dolor",
    },
    {
      img: "./images/icon-2.png",
      head: "Expert Teachers",
      para: "Lorem ipsum dolor",
    },
    {
      img: "./images/icon-3.png",
      head: "Easy Access",
      para: "Lorem ipsum dolor",
    },
  ];

  return (
    <section className="benefit container">
      {benefits.map((b, i) => (
        <div key={i} className="b">
          <div className="b-img ">
            <img src={b.img} alt="" />
          </div>
          <h4>{b.head}</h4>
          <p>{b.para}</p>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
