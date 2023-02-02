import React from "react";
import Home from "./pages/Home";


// React Router does not have any opinions about
// how you should parse URL query strings.
//
// If you use simple key=value query strings and
// you do not need to support IE 11, you can use
// the browser's built-in URLSearchParams API.
//
// If your query strings contain array or object
// syntax, you'll probably need to bring your own
// query parsing function.

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
