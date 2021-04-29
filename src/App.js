import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import UserTable from "./components/usertable";

function App() {
  return (
    <Router>
      <Navbar />
      <UserTable />
    </Router>
  );
}

export default App;
