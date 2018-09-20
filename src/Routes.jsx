import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./modules/Component/Header";
import Footer from "./modules/Component/Footer";
import Redirect404 from "./modules/Component/404";

import Index from "./modules/Index/Index";
import List from "./modules/List/List";

//import createHashHistory from 'history/createHashHistory';
//import createBrowserHistory from 'history/createBrowserHistory';
//const history = createHashHistory();

const UrlHome = () => (
  <Index/>
);
const UrlList = props => (
  <div>    
    <List id={props.match.params.id}/>
  </div>
);
const Url404 =()=>{
  return(
    <Redirect404/>
  )
};

const BasicExample = () => (
  /*
  <BrowserRouter>
    <div className="doc-app">
      <Header/>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={UrlHome} />
          <Route path="/list" component={UrlList} />
          <Route path="/404" component={Url404} />
          <Redirect from="/" to="/404"></Redirect>
        </Switch>
      </div>
      <Footer/>
    </div>
  </BrowserRouter>
  */
  <HashRouter>
    <div className="doc-app">
      <Header/>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={UrlHome} />
          <Route path="/list/:id" component={UrlList} />
          <Route path="/404" component={Url404} />
          <Redirect from="/" to="/404" replace={true}></Redirect>
        </Switch>
      </div>
      <Footer/>
    </div>
  </HashRouter>
  /*
  <Router history={history}>
    <div className="doc-app">
      <Header/>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={UrlHome} />
            <Route path="/list" component={UrlList} />
            <Route path="/404" component={Url404} />
            <Redirect from="/" to="/404"></Redirect>
          </Switch>
        </div>
      <Footer/>
    </div>
  </Router>*/
);

export default BasicExample;
