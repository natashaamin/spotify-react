import React, { useEffect } from "react";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ token }, dispatch] = useDataLayerValue();

  // Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=> {
        dispatch({
          type: "SET_USER",
          user,
        })
      });
      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        })
      })

      spotify.getPlaylist("2rnfzM3nEbcIYYkc0KHVVq").then((playlists) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlists,
        })
      })
    }

    console.log("token", token)
  }, [token, dispatch]);

  return (
  <div className="app">
    {
      token ? <Player spotify={spotify}/> : ( <Login/>)
    }
  </div>
  )
}

 export default App;
