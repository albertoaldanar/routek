import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
// import Commerce from './Commerce';
// import Crypto from './Crypto';
// import Documentation from './Documentation';
import DefaultPages from './DefaultPages';
import Account from './Account';
import ECommerce from './ECommerce';
import Maps from './Maps';
import Charts from './Charts';
import Tables from './Tables';
import Forms from './Forms';
import UI from './UI';

import Chat from '../../../Chat/index';
import Todo from '../../../Todo/index';

// Dashboards routes
import Projects from '../../../Dashboards/Projects/index';
import Teams from '../../../Dashboards/Teams/index';
import Stats from '../../../Dashboards/Stats/index';
import Records from '../../../Dashboards/Records/index';
import Tasks from '../../../Dashboards/Tasks/index';
import Settings from '../../../Dashboards/Settings/index';

// Original example routes
import Default from '../../../Originals/Default/index';
import Ecommerce from '../../../Originals/ECommerce/index';
import Fitness from '../../../Originals/Fitness/index';
import Booking from '../../../Originals/Booking/index';
import Mobile from '../../../Originals/Mobile/index';
import Crypt0 from '../../../Originals/Crypt0/index';

import Mail from '../../../Mail/index';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/teams" component={Teams} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/projects" component={Projects} />
      <Route path="/settings" component={Settings} />
      <Route exact path="/stats" component={Stats} />
      <Route path="/records" component={Records} />
      <Route path="/default" component={Default} />
      <Route path="/ecommerce" component={Ecommerce} />
      <Route path="/fitness" component={Fitness} />
      <Route path="/booking" component={Booking} />
      <Route path="/mobile" component={Mobile} />
      <Route path="/crypto" component={Crypt0} />
      <Route path="/ui" component={UI} />
      <Route path="/mail" component={Mail} />
      <Route path="/chat" component={Chat} />
      <Route path="/todo" component={Todo} />
      <Route path="/forms" component={Forms} />
      <Route path="/tables" component={Tables} />
      <Route path="/charts" component={Charts} />
      <Route path="/maps" component={Maps} />
      <Route path="/account" component={Account} />
      <Route path="/e-commerce" component={ECommerce} />
      <Route path="/default_pages" component={DefaultPages} />
      <Route path="/documentation" componen />
    </div>
  </div>
);
