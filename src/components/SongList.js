import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderSongList() {
    return this.props.songs.map((sn) => {
      return (
        <div className="item" key={sn.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(sn)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{sn.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className="ui divedid list">{this.renderSongList()}</div>;
  }
}

//song from reducers
const getMySongs = (state) => {
  console.log(state);
  return {
    songs: state.song,
  };
};

export default connect(getMySongs, {
  selectSong: selectSong,
})(SongList);
