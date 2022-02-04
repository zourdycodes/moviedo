import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import "./dist/main.css";
import 'swiper/swiper.min.css';

export const App: React.FC =(): JSX.Element => {
  return (
   <BrowserRouter>
    <Route render={props => (
        <>
        <h1>boo</h1>
          </>
    )} />
   </BrowserRouter>
  );
}

