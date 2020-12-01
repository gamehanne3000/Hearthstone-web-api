// import neccesery libraries
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CardBack() {
  const [cardBack, setCardBack] = useState([]);

  useEffect(() => {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3cd1410e14mshb2dc5c731d49f95p156c6fjsn9207d364f9b2",
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
                {"key => This way React can handle the DOM change. "}
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
