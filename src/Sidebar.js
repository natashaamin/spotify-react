import React from "react";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import "./Sidebar.css";

function Sidebar() {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img
                className="sidebar-logo"
                src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
                alt="Spotify logo"
            />

            <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
            <SidebarOption title="Search" Icon={SearchIcon}></SidebarOption>
            <SidebarOption title="Your Library" Icon={LibraryMusic}></SidebarOption>
            <strong className="sidebar-title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))} 
        </div>
    )
}

export default Sidebar;