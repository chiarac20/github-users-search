import { Route, Switch } from 'react-router-dom';

import { ContextWrapper } from './Components/Context';
import { Search } from './Pages/Search/Search';
import { User } from './Pages/User/User';
import { Users } from './Pages/Users/Users';
import './App.css';

function App() {
  return <ContextWrapper>
    <Switch>
    <Route exact path="/">
      <Search />
    </Route>
    <Route path="/users">
        <Users />
    </Route>
    <Route path="/users/:userLogin">
      <User />
    </Route>
    </Switch>
  </ContextWrapper>
}

export default App;
