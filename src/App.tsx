import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginPage} />
    </Switch>
  );
}

export default App;
