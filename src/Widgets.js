import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div
      class="fb-page"
      data-href="https://www.facebook.com/SwazilandComputerSociety"
      data-tabs="timeline"
      data-width="500px"
      data-height="500px"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="true"
      data-show-facepile="true"
      width="500"
      height="100%"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    >
      <blockquote
        cite="https://www.facebook.com/SwazilandComputerSociety"
        class="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/SwazilandComputerSociety">
          Swaziland Computer Society
        </a>
      </blockquote>
    </div>
  );
}

export default Widgets;
