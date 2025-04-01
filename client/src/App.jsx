// App.jsx
import { Router, Route } from "@solidjs/router";
import HomePage from "./pages/HomePage.jsx";
import ThreePage from "./pages/ThreePage.jsx";
import IntroPage from "./pages/IntroPage.jsx";

function App() {
  return (
    <Router>
      <Route path="/" component={IntroPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/Three" component={ThreePage} />
    </Router>
  );
}

export default App;
