import {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404/404.js'));
const MainPage = lazy(() => import('../pages/MainPage.js'));
const ComicsPage = lazy(() => import('../pages/MainPage.js'));
const SingleComicPage = lazy(() => import('../pages/MainPage.js'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route exact path="/comics">
                <ComicsPage />
              </Route>
              <Route exact path="/comics/:comicId">
                <SingleComicPage />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
