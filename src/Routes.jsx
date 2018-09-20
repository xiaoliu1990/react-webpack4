import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from "./modules/Component/Header"
import Footer from "./modules/Component/Footer"

import Index from "./modules/Index/Index"
import List from "./modules/List/List"


const UrlHome = () => (
  <Index/>
);

const UrlList = () => (
  <List/>
);

const BasicExample = () => (
  <BrowserRouter>
    <div className="doc-app">
      <Header/>
      <div className="app-container">
        <Route exact path="/" component={UrlHome} />
        <Route path="/list" component={UrlList} />
      </div>
      <Footer/>
    </div>
  </BrowserRouter>
);

export default BasicExample;