import image from "../components/images.jpg";
import image2 from "../components/banner-bg.webp";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

const Slider = () => {
  return (
    <container className="slider  my-5">
      <Carousel className=" Carousel my-6" variant="dark">
        <Carousel.Item>
          <img className="" src={image} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" " src={image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="  " src={image} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </container>
  );
};

export default Slider;
