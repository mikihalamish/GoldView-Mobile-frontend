import React from 'react'
import { NativeRouter, Route, Link } from "react-router-native";

const Routes = (route) => {
   return (
      <Route
         path={route.path}
         render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
         )}
      />
   )
}

export default Routes