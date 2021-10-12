import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Header.css";

function Header() {
    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header-left">
                <Search/>
                <input placeholder="Search for Artists, Songs, or Albums" type="text"/>
            </div>
            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt={user?.displayName}/>
                <h4> { user?.displayNname }</h4>
            </div>
        </div>
    )
}

export default Header;