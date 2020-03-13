import * as React from "react"
import { Switch } from "react-router-dom";
// import { hot, setConfig } from 'react-hot-loader'
import Config from "@router/config";


import { renderRoutes } from "react-router-config";

class Routers extends React.Component {
  render() {
    return (
      <React.Suspense fallback={null}>
        <Switch>
          {
            renderRoutes(Config)
          }
        </Switch>
      </React.Suspense>
    );
  }
}

export default Routers;
// export default hot(module)(Routers);
