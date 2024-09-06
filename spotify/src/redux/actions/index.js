export const SET_SONGS = "SET_SONGS";
export const SELECT_SONG = "SELECT_SONG";
export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const setSongs = (songs) => ({
  type: SET_SONGS,
  payload: songs,
});
export const selectSong = (song) => ({
  type: SELECT_SONG,
  payload: song,
});

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId,
});
