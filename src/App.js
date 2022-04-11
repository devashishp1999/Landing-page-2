import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HeroSection from "./components/heroSection/HeroSection";
import Benefits from "./components/benefitSection/Benefits";
import ImageText from "./components/imageTextComponent/ImageText";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF804F",
    },
  },
});

const imageTextData = {
  1: {
    img: "./images/image-1.png",
    head: "Advance learning using powerful technology and student success solutions.",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    btn: "KNOW MORE",
  },
  2: {
    img: "./images/image-2.png",
    head: "Success stories from our students!",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    btn: "LEARN MORE",
  },
  3: {
    img: "./images/image-3.png",
    head: "We help you achieve your goals!",
    para: "It is a long established fact that a reader will be distracted by the readable",
    btn: "GET STARTED",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <HeroSection />
      <Benefits />
      <ImageText
        customs={{ bg: "var(--theme-orange)", dir: "" }}
        datax={imageTextData[1]}
      />
      <Cards />

      <ImageText
        customs={{ bg: "var(--theme-orange)", dir: "-reverse" }}
        datax={imageTextData[2]}
      />
      <ImageText
        customs={{
          bg: "#fff",
          dir: "-reverse",
          color: "#000",
          btnColor: "var(--theme-orange)",
        }}
        datax={imageTextData[3]}
      />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
