// import neccesery libraries
import { useEffect, useState } from "react";

function CardBackDetails(props) {
  const [details, setDetails] = useState(props); // tell the use state to take in the props from the page "cardback"

  useEffect(() => {
    setDetails(details);
  }, [details]);

  return (
    <div className="cardBackDetails-wrapper">
      <img src={details.location.state.image} alt="" />
      <div className="right-container">
        <h2 className="title">{details.location.state.title}</h2>
        <div>
          <strong>Description:</strong>
          <p>{details.location.state.description}</p>
        </div>
        <div>
          <strong>How can i get it?</strong>
          <p>{details.location.state.howToGet}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBackDetails;
