import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
    render() {
        return (
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Foxy Dev Tools</div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action bg-light" to={"/accounts/"}>Accounts - Sitecore</Link>
                    <Link className="list-group-item list-group-item-action bg-light" to={"/bookmarks/"}>Bookmarks</Link>
                    <Link className="list-group-item list-group-item-action bg-light" to={"/filters/"}>Filters</Link>
                    <Link className="list-group-item list-group-item-action bg-light" to={"/games/"}>Games</Link>
                    <Link className="list-group-item list-group-item-action bg-light" to={"/tools/"}>Tools - Dev</Link>
                </div>
            </div>
        )
    }
}