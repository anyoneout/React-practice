import React, { useState } from 'react';
import Vimeo from './Vimeo';

export default function Practice1() {
  const [visibility, setVisibility] = useState("");
  let showStatus;
  let showVideo;

  function handleVisibilityChange(event) {
    setVisibility(event.target.value);
  }


  function visibilityMessageStatus(visibility) {

    if (visibility === "show") {
      showStatus = "visible";
      showVideo = <Vimeo />;
    } else {
      showStatus = "hidden";
      showVideo = null;
    }
    return { showStatus, showVideo };
  };

  visibilityMessageStatus(visibility);

  return (
    <div>
      <h1>React Practice</h1>
      <form>
        <input name="visible" type="radio" value="show" id="visibleButton" checked={visibility === "show"} onChange={handleVisibilityChange} />
        <label htmlFor="visibleButton">Show</label>
        <input name="visible" type="radio" value="hide" id="hiddenButton" checked={visibility === "hide"} onChange={handleVisibilityChange} />
        <label htmlFor="hiddenButton">Hide</label>
      </form>
      <p>Video is currently: {showStatus}</p>
      {showVideo}
    </div>
  );
}

