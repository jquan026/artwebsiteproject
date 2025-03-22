import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import './Slides.css'
import slide1 from './slideshow/slide1.webp'
import slide2 from './slideshow/slide2.avif'
import slide3 from './slideshow/slide3.avif'

import { Link } from "react-router-dom";

const Slide = () => {
  const images = [slide1, slide2, slide3]

  // React.useEffect(() => {
  //   const preloadImages = images.map((image) => {
  //     const img = new Image();
  //     img.src = image;
  //     return img;
  //   });
  // }, [images]);

  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false })
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [autoplay])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => {
            return (
              <div className="embla__slide" key={index}>
                <div>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="slide"
                  />
                  {index === 0 && (
                    <div className="slide-text">
                      Try Your First Class Free!
                      <br />
                      <button className="free-class-button">
                        <Link to="/regular-classes">Learn More</Link>
                      </button>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="slide-text">
                      Check out our Summer Camp!
                      <br />
                      <button className="free-class-button">
                        <Link to="/summercamp">Learn More</Link>
                      </button>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="slide-text">
                      Tap Into Your Creativity – Enroll or Renew Your Art
                      Classes Today!
                      <br />
                      <button className="free-class-button">
                        <a
                          href="https://artwithlarisse.square.site/shop/pay-tuition/2"
                          target="_blank"
                          rel="noopener noreferrer"
                        > Pay Here! </a>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Slide