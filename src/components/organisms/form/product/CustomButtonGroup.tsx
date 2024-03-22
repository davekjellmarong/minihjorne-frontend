const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
    nextSlide,
  } = rest;
  console.log(rest);

  return (
    <div className="carousel-button-group">
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      />
      <button onClick={() => next()} />
      <button onClick={() => goToSlide(currentSlide + 1)}>
        {" "}
        Go to any slide{" "}
      </button>
    </div>
  );
};

export default CustomButtonGroup;
