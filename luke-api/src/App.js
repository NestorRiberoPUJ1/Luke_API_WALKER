import CategorySelector from "./components/CategorySelector/CategorySelector";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <CategorySelector />} />
          <Route path="/:id" exact render={(routerProps) => <CategorySelector {...routerProps} />} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
