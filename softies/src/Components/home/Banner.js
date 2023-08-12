import React from "react";
import Carousel from "react-material-ui-carousel";
import "./banner.css";

const data = [
  "https://cdn.pixabay.com/photo/2016/11/23/15/40/teddy-bear-1853609_640.jpg",
  "https://m.media-amazon.com/images/I/41XKC2RiIwL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingTHREEANDHALF%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA18%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
  "https://cdn.pixabay.com/photo/2014/11/09/21/44/teddy-bear-524251_640.jpg",
  "https://cdn.pixabay.com/photo/2016/08/23/13/12/knitting-1614283_640.jpg",
];

const Banner = () => {
  return (
    <Carousel
    className="carasousel"
                autoPlay={true}
                animation="fade"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 100,
                        marginTop: -22,
                        height: "60px",
                    }
                }}>
      {data.map((imag, i) => {
        return (
          <>
            <img src={imag} alt="img" key={i} className="banner_img" />
          </>
        );
      })}
    </Carousel>
  );
};

export default Banner;
