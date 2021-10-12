import React from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
          className="footer-albumLogo"
        />
        <div className="footer-songInfo">
          <h4>My fav song</h4>
          <p>Atharva</p>
        </div>
      </div>
      <div className="footer-center">
        <Shuffle className="footer-green" />
        <SkipPrevious className="footer-icon" />
        <PlayCircleOutline fontSize="large" className="footer-icon" />
        <SkipNext className="footer-icon" />
        <Repeat className="footer-green" />
      </div>
      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;