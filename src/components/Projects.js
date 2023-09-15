import React from "react";
import List from "../components/List";

const projects = [
  {
    id: 1,
    name: "Project 1",
    description: "Description",
    gitlink: "Git link here.",
    deployed: "Link to deployed app here."
  },
  {
   id: 2,
   name: "Project 2",
   description: "Description",
   gitlink: "Git link here.",
   deployed: "Link to deployed app here."
  },
  {
  id: 3,
  name: "Project 3",
  description: "Description",
  gitlink: "Git link here.",
  deployed: "Link to deployed app here."
  },
  {
  id: 4,
  name: "Project 4",
  description: "Description",
  gitlink: "Git link here.",
  deployed: "Link to deployed app here."
  },{
  id: 5,
  name: "Project 5",
  description: "Description",
  gitlink: "Git link here.",
  deployed: "Link to deployed app here."
  },{
  id: 6,
  name: "Project 6",
  description: "Description",
  gitlink: "Git link here.",
  deployed: "Link to deployed app here."
  },
];


function App() {
 return <List projects={projects} />;
}

export default App;


// This List component accepts props from App.js
// We pluck off the "projects" property of the props object using destructuring assignment
// This prevents us from having to type `props.projects` each time we want to refer to the projects object
