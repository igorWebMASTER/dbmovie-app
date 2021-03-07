import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import How from './pages/How';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />

        <Route path='/how'>
          <How />0
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
