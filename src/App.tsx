/* Imports */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

/* Relative Imports */
import Routing from "routes";
import ThemeConfig from "theme";
import { Provider } from "react-redux";
import store from "store/store";

// ----------------------------------------------------------------------

/**
 * App component to to set all the higher level components and routes.
 *
 * @component
 * @returns {JSX.Element}
 */
const App: React.FC = (): JSX.Element => {
  return (
    <HelmetProvider>
      <ThemeConfig>
        <Provider store={store}>
          <Router>
            <Routing />
          </Router>
        </Provider>
      </ThemeConfig>
    </HelmetProvider>
  );
};

export default App;
