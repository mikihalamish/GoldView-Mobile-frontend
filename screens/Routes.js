import React from 'react'
import { NativeRouter, Route, Link } from "react-router-native";
import Departments from "./Departments";

const Routes = () => (
   <NativeRouter>
      <Route  key = "root">
         <Route  key = "Departments" component = {Departments} title = "Departments" initial = {true} />
       {/*   <Scene key = "about" component = {About} title = "About" /> */}
      </Route >
   </NativeRouter>
)
export default Routes