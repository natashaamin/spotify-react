import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from 'react';
import { useDataLayerValue } from './DataLayer';
import  Header  from './Header';
import SongRow from './SongRow';
import "./Body.css";

function Body ({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:2rnfzM3nEbcIYYkc0KHVVq`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

      return (
        <div className="body">
          <Header spotify={spotify} />
    
          <div className="body-info">
            <img src={discover_weekly?.images[0].url} alt="" />
            <div className="body-infoText">
              <strong>PLAYLIST</strong>
              <h2>Discover Weekly</h2>
              <p>{discover_weekly?.description}</p>
            </div>
          </div>
    
          <div className="body-songs">
            <div className="body-icons">
              <PlayCircleFilledIcon
                className="body-shuffle"
                onClick={playPlaylist}
              />
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
            </div>
    
            {discover_weekly?.tracks.items.map((item) => (
              <SongRow playSong={playSong} track={item.track} />
            ))}
          </div>
        </div>
      );
}

export default Body;