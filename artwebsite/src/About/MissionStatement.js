import React from "react";
import "./MissionStatement.css"

import Lightbox from "yet-another-react-lightbox";
import {msSlides} from "./MissionStatementSlides.js";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const MissionStatement = () => {
  const [index, setIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const toggleOpen = (state: boolean) => () => setOpen(state);
  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);
  const [autoplay, setAutoplay] = React.useState(true);
  const [delay, setDelay] = React.useState(5000);

  return (
    <div>
      <div className="mission-header">
        <p className="mission-pg-title">Mission Statement</p>
        <div className="mission-text">
          <p>
            Art brings joy into our world. We provide the studios and
            instruction to find that joy.
          </p>
          <p>
            Our studios are a safe and happy space for art to flourish. We
            thrive on molding the creativity of each student with applications
            and techniques that have been around for hundreds of years. The
            great masters of the Renaissance inspire us to find that inner
            artist in all of our students. From beginning to advanced students,
            let us help you create joy through art.
          </p>
        </div>
      </div>
      <div className='line-container'>
        <div className='line'></div>
      </div>

      <Lightbox
        index={index}
        slides={msSlides}
        slideshow={{ autoplay, delay }}
        plugins={[Inline, Fullscreen, Slideshow, Thumbnails, Zoom]}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "3/2",
            margin: "50px auto",
          },
        }}
      />

    </div>
  );
}

export default MissionStatement;