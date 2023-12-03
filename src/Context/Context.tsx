import React from "react";
export type TodosContextState = {
  packages: any;
  setPackages: Function;
  packagesName: any;
  setPackagesName: Function;
  data: any;
  setData: Function;
 

};
const contextDefaultValues: TodosContextState = {
  packages:[],
  setPackages: Function,
  packagesName: [],
  setPackagesName: Function,
  data: [],
  setData: Function,

};
const Context = React.createContext<TodosContextState>(contextDefaultValues);

export default Context;
