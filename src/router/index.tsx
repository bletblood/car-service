import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '../App';
import { Home } from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
