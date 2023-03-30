import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/User";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaerOnry } from "../components/templates/HeaerOnry";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaerOnry>
            <Users />
          </HeaerOnry>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
