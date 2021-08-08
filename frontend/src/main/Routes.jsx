import React from "react";
import { Switch, Route, Redirect } from "react-router";
/* As routas vão fazer o mapeamento entre as url's e os componentes
ou seja, cada url vai renderizar determinados componentes na tela */

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/users" component={UserCrud} />
    {/* Caso não caia em nenhuma rota anterior redireciona para Home */}
    <Redirect from="*" to="/" />
  </Switch>
);
