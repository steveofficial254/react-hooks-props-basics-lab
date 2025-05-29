import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

const user = {
  name: "Liza",
  city: "New York",
  color: "firebrick",
  bio: "I made this!",
  links: {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  },
};

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;