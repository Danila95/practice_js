import { Component, useState, useEffect, useCallback, useMemo } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

const countTotal = (num) => {
  console.log("couting...");
  return num + 10;
};

const Slider = (props) => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const getSomeImages = useCallback(() => {
    console.log("fetching");
    return [
      "https://klike.net/uploads/posts/2020-04/1587719791_1.jpg",
      "https://vjoy.cc/wp-content/uploads/2020/10/dlya_dushi_35_13130628.jpg",
    ];
  }, [slide]);

  useEffect(() => {
    document.title = `Slide: ${slide}`;
  }, [slide]);

  useEffect(() => {
    console.log("autoplay");
  }, [autoplay]);

  function changeSlide(i) {
    // setSlide(slide + i); // данная конструкция не учитывает асинхронность
    setSlide((slide) => slide + i); // данная конструкция учитывает асинхронность
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
  }

  const total = useMemo(() => {
    return countTotal(slide);
  }, [slide]);

  const style = useMemo(
    () => ({
      color: slide > 4 ? "red" : "black",
    }),
    [slide]
  );

  useEffect(() => {
    console.log("styles!");
  }, [style]);

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <Slide getSomeImages={getSomeImages} />
        <div className="text-center mt-5">
          Active slide {slide} <br /> {autoplay ? "auto" : null}
        </div>
        <div style={style} className="text-center mt-5">
          Total slides: {total}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => toggleAutoplay()}
          >
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages());
  }, [getSomeImages]);

  return (
    <>
      {images.map((url, i) => (
        <img key={i} className="d-block w-100" src={url} alt="slide" />
      ))}
    </>
  );
};

function App() {
  const [slider, setSlider] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setSlider(false);
        }}
      >
        Click
      </button>
      {slider ? <Slider /> : null}
    </>
  );
}

export default App;
