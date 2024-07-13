import { useIntegration } from '@telegram-apps/react-router-integration';
import { initNavigator } from '@telegram-apps/sdk-react';
import { useEffect, useMemo } from 'react';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import './styles.scss';

import Home from './components/screens/Home';

function App() {
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  return (
    <Router location={location} navigator={reactNavigator}>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'*'} element={<Navigate href={'/'} />} />
      </Routes>
    </Router>
  );
}

export default App;
