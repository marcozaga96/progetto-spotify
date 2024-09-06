import React from "react";
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => state.selectedSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 playerControls">
              {selectedSong ? (
                <div className="d-flex align-items-center">
                  <img
                    src={selectedSong.album.cover_small}
                    alt="track"
                    className="img-fluid mb-2 "
                  />
                  <p className="text-light ">
                    Album: "{selectedSong.album.title}"<br />
                    Artist: {selectedSong.artist.name}
                  </p>
                </div>
              ) : (
                <p>Seleziona una canzone per ascoltarla</p>
              )}

              <div className="d-flex ">
                <a href="#">
                  <img src="../shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="../prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="../play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="../next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="../repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
