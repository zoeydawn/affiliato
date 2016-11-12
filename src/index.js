import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store from './store.js';
import Layout from './components/Layout';
import CampaignForm from './components/CampaignForm';
import ClientPage from './components/ClientPage';
import SearchPage from './components/SearchPage';

render(
  <Provider store={store}>

    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <Route path='/createNewCampaign' component={CampaignForm} />
        <Route path='/campaignProfile' component={ClientPage} />
        <Route path='/search/:query' component={SearchPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);


/*
ROUTES TO CREATE:
/createNewCampaign
/dashboard
/logout
/login
/register
/
*/
