// App.jsx
import { Router, Route } from "@solidjs/router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import IntroPage from "./pages/IntroPage";

function App() {
  return (
    <Router>
      <Route path="/" component={IntroPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Router>
  );
}

export default App;
