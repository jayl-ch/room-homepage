// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
//
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// mobile
import imageMobileOne from "../../assets/images/mobile-image-hero-1.jpg";
import imageMobileTwo from "../../assets/images/mobile-image-hero-2.jpg";
import imageMobileThree from "../../assets/images/mobile-image-hero-3.jpg";

// desktop
import imageDesktopOne from "../../assets/images/desktop-image-hero-1.jpg";
import imageDesktopTwo from "../../assets/images/desktop-image-hero-2.jpg";
import imageDesktopThree from "../../assets/images/desktop-image-hero-3.jpg";

const CarousellBtn = () => (
  <div className="carousell__btn">
    <button className="btn--prev">
      <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 0L1 12l12 12"
          stroke="#FFF"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
    <button className="btn--next">
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

const ImageCarousell = () => {
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
            <img src={image.mobile} alt="" />
          </picture>
        ))}
      </div>
      <CarousellBtn />
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

const Description = () => (
  <div className="home__discover-description c-card-description">
    <h2 className="home__discover-title">
      Discover innovative ways to decorate
    </h2>
    <p className="home__discover-paragraph c-card-paragraph">
      We provide unmatched quality, comfort, and style for property owners
      across the country. Our experts combine form and function in bringing your
      vision to life. Create a room in your own style with our collection and
      make your property a reflection of you and what you love.
    </p>
    <ShopNow />
  </div>
);

function Discover() {
  return (
    <section className="home__discover">
      <ImageCarousell />
      <Description />
    </section>
  );
}

export default Discover;
