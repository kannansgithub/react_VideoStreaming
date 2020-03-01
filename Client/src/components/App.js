import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function FirstPage() {
  return (
    <div>
      <h1>Am First page</h1>
      <br />
      <Link to="/secondpage">Go to second page</Link>
    </div>
  );
}
export function SecondPage() {
  return (
    <div>
      <h1>Am Second page</h1>
      <br />
      <Link to="/">Go to first page</Link>
    </div>
  );
}
export default function App() {
  /**
   * ? Browser routing is showing without # in URL
   * ? Ex: http://localhost:3000/,http://localhost:3000/secondpage
   */
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={FirstPage}></Route>
        <Route path="/secondpage" extract component={SecondPage}></Route>
      </div>
    </BrowserRouter>
  );
}
