import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong, setSongs, toggleLike } from "../redux/actions";
import "bootstrap-icons/font/bootstrap-icons.css";

const MusicSection = ({ artistName, querySelector }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs[querySelector] || []);
  const likedSongs = useSelector((state) => state.likedSongs);

  useEffect(() => {
    console.log("Current artistName:", artistName);
    const fetchSongs = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artistName
        );
        if (response.ok) {
          let { data } = await response.json();
          console.log("Fetch data:", data);
          dispatch(setSongs(querySelector, data.slice(0, 4)));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchSongs();
  }, [artistName, dispatch, querySelector]);

  const handleSongClick = (song) => {
    dispatch(selectSong(song));
  };

  const handleLikeClick = (songId) => {
    dispatch(toggleLike(songId));
  };

  return (
    <div id={querySelector} className="d-flex flex-grow-1">
      {songs.map((song, index) => (
        <div
          key={index}
          className="col text-center"
          onClick={() => handleSongClick(song)}
        >
          <img
            className="img-fluid"
            src={song.album.cover_medium}
            alt="track"
          />
          <p>
            Track: "{song.title}"<br />
            Artist: {song.artist.name}
          </p>
          <button
            className="bg-secondary "
            onClick={() => handleLikeClick(song.id)}
          >
            {likedSongs.includes(song.id) ? (
              <i class="bi bi-heart-fill"></i>
            ) : (
              <i class="bi bi-heart"></i>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MusicSection;
