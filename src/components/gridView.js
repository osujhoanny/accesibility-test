import React from "react";
import GaugeBar from "../components/gaugeBar";

function gridView({
  Showbuttons,
  view,
  data,
  submitVote,
  submitThumbsDown,
  submitThumbsUp,
  dataVotesValidation,
  eyebrowText,
  disableButton,
  buttonText,
  positivevotes,
  negativevotes,
}) {
  return (
    <div className="gridCard">
      <div className="grid-background"></div>
      <img src={`./img/${data.picture}`} className="gridcontainerImage" />
      <div className="cardContent">
        <div className="winningGridContainer">
          <div
            className="winningGrid"
            style={
              dataVotesValidation()
                ? { backgroundColor: "rgba(60, 187, 180, 0.8)" }
                : { backgroundColor: "#FBBD4A" }
            }
          >
            {dataVotesValidation() ? (
              <img src="./img/thumbs-up.svg" alt="thumbs up" />
            ) : (
              <img src="./img/thumbs-down.svg" alt="thumbs down" />
            )}
          </div>
        </div>
        <div className="cardContentGrid">
          <p className="cardTitleGrid">{data.name}</p>
          <p className="cardSubtitleGrid">{data.description}</p>

          <div className="voteContainerGrid">
            <p className="eyebrowGrid">{eyebrowText}</p>

            <div className="buttonsContainerGrid">
              {Showbuttons && (
                <>
                  <button
                    className="thumbsGrid thumbs-up-button"
                    onClick={() => submitThumbsUp()}
                  >
                    <img
                      src="./img/thumbs-up.svg"
                      alt="thumbs up"
                      width="15"
                    />
                  </button>
                  <button
                    className="thumbsGrid thumbs-down-button"
                    onClick={() => submitThumbsDown()}
                  >
                    <img
                      src="./img/thumbs-down.svg"
                      alt="thumbs down"
                      width="15"
                    />
                  </button>
                </>
              )}
              <button
                className="vote-button gridButton"
                disabled={disableButton}
                onClick={(e) => submitVote(e)}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <GaugeBar view={view} positive={positivevotes} negative={negativevotes} />
    </div>
  );
}

export default gridView;
