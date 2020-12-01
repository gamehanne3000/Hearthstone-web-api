import { useState, useEffect } from "react";
import axios from "axios";

function CardSet() {
  const [cardSet, setCardSet] = useState([]);
  const [cardName, setCardName] = useState("");
  const [image, setImage] = useState("");
  const [goldImage, setGoldImage] = useState("");
  const [imageState, setImageState] = useState(false);

  useEffect(() => {
    const information = {
      method: "GET",
      url: `---/${cardName}`,
      headers: {
        "x-rapidapi-key": "---",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    };

    axios
      .request(information)
      .then(function (response) {
        // Cardset (useState) is now an array
        setCardSet(response.data);

        // Display data
        if (response.status === 200) {
          setImage(response.data[0].img);
          setGoldImage(response.data[0].imgGold);

          // Sometimes the databse has 2 objects in an array and will not show otherwise
          if (response.data.length > 1) {
            setImage(response.data[1].img);
            setGoldImage(response.data[1].imgGold);
          }
          setImageState(true); // succes to find an object -> wich tells the ternery operator in render() to switch from false to true
        }
      })
      .catch(function (error) {
        setImageState(false); // this does the opposite -> when no object is found switch to "false" instead
        console.error("can't fetch the card: " + error);
      });
  }, [cardName, imageState]);

  return (
    cardSet && (
      <div className="cardset-wrapper">
        <form className="search">
          <h2>Enter a card you know in hearthstone</h2>
          <input // listen for changes in the text input field
            onChange={(event) => setCardName(event.target.value)}
            value={cardName} // it's value get saved in the cardname useState
          ></input>
        </form>
        {/* if the img corresponds to the DB img => show */}
        <div className="placeholder-wrapper">
          <div className="text">
            <h3>try these out if you dont know any names of the cardset</h3>
            <p>* Abomination</p>
            <p>* Ysera</p>
            <p>* Akama</p>
            <p>* Gorehowl</p>
            <p>* Lesser Diamond Spellstone -> spell</p>
            <p>* Ancient shade</p>
            <p>* Exotic Mountseller</p>
          </div>

          {/* if succes -> display correct cardSet, otherwise put in a placeholder for the moment */}
          <>
            <div className="placeholder-content">
              {/* the imageState is always false as long as the user is not typing in the correct name */}
              {imageState ? (
                <>
                  {/* onload => switch from the placeholder to respective card, after the page has been loaded */}
                  <img src={image} alt="" onLoad={() => setImageState(true)} />
                  <img
                    src={goldImage}
                    alt=""
                    onLoad={() => setImageState(true)}
                  />
                </>
              ) : (
                <>
                  <img
                    src="https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4d5548e8d548ed82d1d5f13f4601a622f4929d4fe699859c6d4e1455b791f46b.png"
                    alt=""
                  />
                  <img
                    src="https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4d5548e8d548ed82d1d5f13f4601a622f4929d4fe699859c6d4e1455b791f46b.png"
                    alt=""
                  />
                </>
              )}
            </div>
          </>
        </div>
      </div>
    )
  );
}

export default CardSet;
