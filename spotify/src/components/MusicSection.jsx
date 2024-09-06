import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSong, setSongs, toggleLike } from "../redux/actions";

const MusicSection = ({ artistName, querySelector }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);
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
          dispatch(setSongs(data.slice(0, 4)));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchSongs();
  }, [artistName, dispatch]);

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
          <button onClick={() => handleLikeClick(song.id)}>
            {likedSongs.includes(song.id) ? "❤️" : "♡"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MusicSection;
