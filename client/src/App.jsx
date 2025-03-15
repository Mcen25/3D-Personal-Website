// App.jsx
import { Router, Route } from "@solidjs/router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ContentPage from "./pages/ContentPage";

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/content" component={ContentPage} />
    </Router>
  );
}

export default App;
