import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
export default function App() {
  /**
   * ? Browser routing is showing without # in URL
   * ? Ex: http://localhost:3000/,http://localhost:3000/secondpage
   */
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/:id/edit" exact component={StreamEdit} />
          <Route path="/streams/:id/delete" exact component={StreamDelete} />
          <Route path="/streams/:id/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
}
