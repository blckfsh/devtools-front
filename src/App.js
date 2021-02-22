import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/navbar";
import SideBar from './components/sidebar';
import EditBookmark from "./components/bookmarks/edit-bookmark";
import EditFilter from "./components/filters/edit-filter";
import EditAccount from "./components/accounts/edit-account";
import EditTool from "./components/tools/edit-tool";
import CreateBookmark from "./components/bookmarks/create-bookmark";
import CreateFilter from "./components/filters/create-filter";
import CreateAccount from "./components/accounts/create-account";
import CreateTool from "./components/tools/create-tool";
import GameContainer from "./container/game-container";
import BookmarkContainer from './container/bookmark-container';
import FilterContainer from './container/filter-container';
import AccountContainer from './container/account-container';
import ToolContainer from './container/tool-container';


function App() {
  return (
    <Router>
      <div className="d-flex" id="wrapper">
        <SideBar />
        <div id="page-content-wrapper">
          <NavBar />
          <div className="container-fluid">
            <div className="dev-tool">
              <Route path="/bookmarks" exact component={BookmarkContainer} />
              <Route path="/games" exact component={GameContainer} />
              <Route path="/filters" exact component={FilterContainer} />
              <Route path="/accounts" exact component={AccountContainer} />
              <Route path="/tools" exact component={ToolContainer} />
              <Route path="/accounts/create" component={CreateAccount} />
              <Route path="/filters/create" component={CreateFilter} />
              <Route path="/bookmarks/create" component={CreateBookmark} />
              <Route path="/tools/create" component={CreateTool} />
              <Route path="/bookmarks/edit/:id" component={EditBookmark} />
              <Route path="/filters/edit/:id" component={EditFilter} />
              <Route path="/accounts/edit/:id" component={EditAccount} />
              <Route path="/tools/edit/:id" component={EditTool} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
