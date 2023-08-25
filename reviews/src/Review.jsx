import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, id, image, text, job } = people[index];

  function checkNumber(number) {
    if (number < 0) {
      return people.length - 1;
    } else if (number > people.length - 1) {
      return 0;
    } else {
      return number;
    }
  }

  function prevButton() {
    setIndex((index) => {
      let newIndex = index - 1;

      return checkNumber(newIndex);
    });
  }
  function nextButton() {
    setIndex((index) => {
      let newIndex = index + 1;

      return checkNumber(newIndex);
    });
  }
  function supriseButton() {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  return (
    <article key={id} className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevButton} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextButton} className="next-btn">
          <FaChevronRight />
        </button>
        <button onClick={supriseButton} className="random-btn">
          suprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
