import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Upcoming from '../Views/Upcoming';
import Completed from '../Views/Completed';
import Past from '../Views/Past';

const Router: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="px-8">
        <Header />
        <div className="content app__element">
          <Switch>
            <Route path="/" element={<Upcoming />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/past" element={<Past />} />
            {/* <Route path="/country/:code" element={<Country />} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
