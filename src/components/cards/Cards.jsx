import React from "react";
import "./Cards.css";

const cardsData = [
  ["./images/feature-1.png", "Mathematical", 55],
  ["./images/feature-2.png", "Subject Name", 48],
  ["./images/feature-3.png", "Translation Quality", 25],
  ["./images/feature-4.png", "Chemistry", 43],
  ["./images/feature-5.png", "Multimedia", 65],
  ["./images/feature-6.png", "Data Science", 57],
  ["./images/feature-7.png", "Machine Learning", 53],
  ["./images/feature-8.png", "Subject Name", 35],
];

const Cards = (props) => {
  return (
    <section className="cards-c container">
      <p>Lorem ipsum dolor sit.</p>
      <div className="hrs">
        <hr />
        <h4 className="">Find Teachers By Subject</h4>
        <hr />
      </div>
      <div className="cards">
        {cardsData.map((card, i) => (
          <div key={i} className="c">
            <img src={card[0]} alt="" />
            <p>
              {card[1]}
              <br />
              <span>{card[2]} Teachers</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
