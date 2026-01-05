// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
//
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import { useState } from "react";

// mobile
import imageMobileOne from "../../assets/images/mobile-image-hero-1.jpg";
import imageMobileTwo from "../../assets/images/mobile-image-hero-2.jpg";
import imageMobileThree from "../../assets/images/mobile-image-hero-3.jpg";

// desktop
import imageDesktopOne from "../../assets/images/desktop-image-hero-1.jpg";
import imageDesktopTwo from "../../assets/images/desktop-image-hero-2.jpg";
import imageDesktopThree from "../../assets/images/desktop-image-hero-3.jpg";

const CarousellBtn = ({ setIndex }) => (
  <div className="carousell__btn">
    <button
      onClick={() => setIndex((prev) => (prev === 0 ? prev : prev - 1))}
      className="btn--prev"
    >
      <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 0L1 12l12 12"
          stroke="#FFF"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
    <button
      onClick={() => setIndex((prev) => (prev === 2 ? prev : prev + 1))}
      className="btn--next"
    >
      <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 0l12 12L1 24"
          stroke="#FFF"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  </div>
);

const ImageCarousell = ({ setIndex, index }) => {
  const images = [
    { image: { id: 1, mobile: imageMobileOne, desktop: imageDesktopOne } },
    { image: { id: 2, mobile: imageMobileTwo, desktop: imageDesktopTwo } },
    {
      image: { id: 3, mobile: imageMobileThree, desktop: imageDesktopThree },
    },
  ];

  return (
    <div className="home__images">
      <div className="home__carousell">
        {images.map(({ image }) => (
          <picture key={image.id}>
            <source srcSet={image.desktop} media="(width > 62.5rem)" />
            <img
              src={image.mobile}
              alt=""
              style={{
                transform: `translateX(calc(-${index * 100}% - ${
                  index * 16
                }px))`,
              }}
            />
          </picture>
        ))}
      </div>
      <CarousellBtn setIndex={setIndex} />
    </div>
  );
};

const ShopNow = () => (
  <button className="home__shopnow-btn">
    shop now
    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
        fill="#000"
        fillRule="nonzero"
      />
    </svg>
  </button>
);

const Description = ({index}) => {
  const card = [
    {
      title: "Discover innovative ways to decorate",
      paragraph:
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      title: "We are available all across the globe",
      paragraph:
        "With atores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      title: "Manufactured with the best materials",
      paragraph:
        "Our modern furniture store provide high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. WIth three decades of experience in this undustry, we understand what customers want for their home and office.",
    },
  ];

  return (
    <div className="home__discover-description c-card-description">
      <h2 className="home__discover-title">{card[index].title}</h2>
      <p className="home__discover-paragraph c-card-paragraph">{card[index].paragraph}</p>
      <ShopNow />
    </div>
  );
};

function Discover() {
  const [index, setIndex] = useState(0);

  return (
    <section className="home__discover">
      <ImageCarousell setIndex={setIndex} index={index} />
      <Description index={index}/>
    </section>
  );
}

export default Discover;
