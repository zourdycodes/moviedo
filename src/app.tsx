import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/organisms/Header";

import "./dist/main.css";
import "swiper/swiper.min.css";
import { Footer } from "./components/organisms/Footer";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};
