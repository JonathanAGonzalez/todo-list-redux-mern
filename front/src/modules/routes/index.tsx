import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Home } from '../../pages/home';

const routes = [
  {
    path: '/',
    Component: Home,
    id: uuid(),
  },
];

export const SystemRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ Component, id, path }) => (
          <Route path={path} key={id} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
};
