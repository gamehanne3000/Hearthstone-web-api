// import neccesery libraries
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardBack() {
  const [cardBack, setCardBack] = useState([]);

  useEffect(() => {
    fetch("---", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "---",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCardBack(result);
      })
      .catch((err) => {
        console.error("can't fetch cardBacks: " + err);
      });
  }, []);

  return (
    cardBack && (
      <div className="cardBack-wrapper">
        <h1>Lets take a look on all the different card backs that exist </h1>
        <div className="grid-of-cardBacks-wrapper">
          <div className="grid-of-cardBacks">
            {cardBack.map((cardback) => (
              // must be wrapped in an parent alement for JSX to work
              <div key={cardback.cardBackId}>
                <Link
                  key={cardback.cardBackId}
                  className="onFocus"
                  to={{
                    //  A string representing the path to link to.
                    pathname: `/cardback/id=${cardback.cardBackId}`,
                    // State to persist to the location
                    state: {
                      title: cardback.name,
                      image: cardback.img,
                      description: cardback.description,
                      howToGet: cardback.howToGet,
                    },
                  }}
                >
                  <img src={cardback.img} alt="" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
export default CardBack;
