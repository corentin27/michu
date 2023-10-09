import React from "react";
import {Link, BrowserRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import {URL_HOME,URL_PRODUCT} from "./constants/urls/urlFront";

const App = () => {

  return (
      <BrowserRouter>
          <div>
              <Link to={URL_HOME}>HOME</Link>
              <p>---</p>
              <Link to={URL_PRODUCT}>PRODUIT</Link>
          </div>
          <Routes/>
      </BrowserRouter>
)
};

export default App;
