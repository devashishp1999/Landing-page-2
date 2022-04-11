import React from "react";
import "./ImageText.css";

const ImageText = (props) => {
  const data = props.datax;
  const customs = props.customs;

  const secStyle = {
    background: customs.bg,
    flexDirection: "row" + (customs.dir && customs.dir),
    color: customs.color,
  };

  const btnTextColor = customs.btnColor ? "#fff" : "var(--theme-orange)";

  return (
    <section className="image-text-outer" style={{ background: customs.bg }}>
      <div className="container image-text" style={secStyle}>
        <div>
          <img className="it-img" src={data.img} alt="" />
        </div>
        <div className="it-text">
          <h2>{data.head}</h2>
          <p>{data.para}</p>
          <ul>
            <li>lorem ipsum lorem</li>
            <li>lorem ipsum lorem</li>
          </ul>
          <button
            style={{ background: customs.btnColor, color: btnTextColor }}
            className="btn it-btn"
          >
            {data.btn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageText;
