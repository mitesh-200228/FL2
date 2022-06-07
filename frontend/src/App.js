import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Entry from './components/Entry';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact>
            <Entry />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
