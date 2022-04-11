import { CameraAltOutlined, SearchSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <div className="container hero-content">
          <h1>Get your doubts solved</h1>
          <p>Tap to snap a picture and find the solution</p>
          <div className="upload">
            <Button className="upload-btn" startIcon={<CameraAltOutlined />}>
              Upload
            </Button>
            <input
              className="input"
              type="text"
              placeholder="Type your question here lorem"
            />
            <SearchSharp sx={{ mr: "0.5rem" }} color="primary" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
