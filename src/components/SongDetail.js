import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};
// mapStatetoProps
const selectedSongDetail = (state) => {
  return { song: state.selectedSong };
};

export default connect(selectedSongDetail)(SongDetail);