import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles/global.scss';

const loading = (
  <div style={{ height: '100vh', textAlign: 'center', marginTop: '50%' }}>
    <CircularProgress />
  </div>
);

const HomeScreen = React.lazy(() => import('./pages/Home'));
const MenuScreen = React.lazy(() => import('./pages/Menu'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact path="/" name="Home" component={HomeScreen} />
          <Route exact path="/menu" name="Menu" component={MenuScreen} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
