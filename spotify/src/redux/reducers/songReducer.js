import { SELECT_SONG, SET_SONGS, TOGGLE_LIKE } from "../actions";

const initialState = {
  songs: {
    rockSection: [],
    popSection: [],
    hipHopSection: [],
  },
  selectedSong: null,
  likedSongs: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      console.log("SET_SONGS action payload:", action.payload);
      return {
        ...state,
        songs: {
          ...state.songs,
          [action.payload.section]: action.payload.songs,
        },
      };

    case SELECT_SONG:
      return {
        ...state,
        selectedSong: action.payload,
      };
    case TOGGLE_LIKE:
      const isLiked = state.likedSongs.includes(action.payload);
      return {
        ...state,
        likedSongs: isLiked
          ? state.likedSongs.filter((id) => id !== action.payload)
          : [...state.likedSongs, action.payload],
      };
    default:
      return state;
  }
};

export default songsReducer;
