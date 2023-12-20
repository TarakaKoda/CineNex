import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

const App = () => (
  <div>
    <CssBaseline />
    <main>
      <h1>Movies</h1>
      <Link to='/users'>Users</Link>
    </main>
  </div>
);

export default App;
