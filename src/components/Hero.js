import React, { useState, useEffect } from 'react';
import './HeroStyles.css';
import realestatehouse from '../assets/realestatehouse.png';
import { FaLocationDot } from 'react-icons/fa6';

const Hero = () => {
  const [premiumProductsCount, setPremiumProductsCount] = useState(8800);
  const [happyCustomersCount, setHappyCustomersCount] = useState(1950);
  const [awardWinningCount, setAwardWinningCount] = useState(0);

  useEffect(() => {
    const premiumProductsInterval = setInterval(() => {
      if (premiumProductsCount < 9000) {
        setPremiumProductsCount((prevCount) => prevCount + 1);
      }
    }, 6); // Adjust the interval time for a smoother animation

    const happyCustomersInterval = setInterval(() => {
      if (happyCustomersCount < 2000) {
        setHappyCustomersCount((prevCount) => prevCount + 1);
      }
    }, 6);

    const awardWinningInterval = setInterval(() => {
      if (awardWinningCount < 28) {
        setAwardWinningCount((prevCount) => prevCount + 1);
      }
    }, 6);

    // Clear intervals on component unmount
    return () => {
      clearInterval(premiumProductsInterval);
      clearInterval(happyCustomersInterval);
      clearInterval(awardWinningInterval);
    };
  }, [premiumProductsCount, happyCustomersCount, awardWinningCount]);

  return (
    <div className="wrapper">
      <section className="hero-wrapper">
        {/* LEFT SIDE */}
        <div className="hero-details">
          <div className="hero-title">
            <h1>
              Discover <br /> most suitable <br /> property
            </h1>
            <span className="orange-circle"></span>
          </div>
          <div className="hero-descr">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar">
            <FaLocationDot className="locationIcon" />
            <input type="text" className="search-input" />
            <button className="search-btn">search</button>
          </div>
          <div className="flexCenter-stats">
            <div className="flexColStarts stat">
              <span>
                {premiumProductsCount}
                <span>+</span>
              </span>
              <span className="secondaryText">premium products</span>
            </div>

            <div className="flexColStarts stat">
              <span>
                {happyCustomersCount}
                <span>+</span>
              </span>
              <span className="secondaryText">Happy customers</span>
            </div>
            <div className="flexColStarts stat">
              <span>
                {awardWinningCount}
                <span>+</span>
              </span>
              <span className="secondaryText">award winning</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-image">
          <div className="imageContainer">
            <img src={realestatehouse} alt="Real Estate House" className="houseImg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;