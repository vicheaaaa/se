import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {assets} from '../assets/assets'

const SliderBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
      };

      console.log(assets.slide1)
    
      return (
        <div className="hidden md:block lg:block relative" style={{ maxWidth: "100%", margin: "0 auto" }}>
          <Slider {...settings}>
            <div>
              <img className="w-full object-cover" src={assets.slide1} alt="Slide 1" />
            </div>
            <div>
              <img className="w-full object-cover sm:hidden" src={assets.slide2} alt="Slide 2" />
            </div>
            <div>
              <img className="w-full object-cover sm:hidden" src={assets.slide3} alt="Slide 3" />
            </div>
          </Slider>
        </div>
      );
}

export default SliderBanner
