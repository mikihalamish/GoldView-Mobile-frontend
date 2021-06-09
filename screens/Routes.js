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
   /*  <NativeRouter>
       <Route key="root">
          <Route key="Departments" component={Departments} title="Departments" initial={true} />
          <Route key="BreathingMachineScreen" component={BreathingMachineScreen} title="BreathingMachineScreen" initial={true} />
       </Route >
    </NativeRouter> */
}

export default Routes