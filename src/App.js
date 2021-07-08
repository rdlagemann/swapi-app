import { Provider } from "react-redux";

import { GlobalStyle } from "./components/_ui";
import store from "./store";
import Routes from "./pages/Routes";
import DataFetchingConfig from "./components/DataFetchingConfig/DataFetchingConfig";

function App() {
  return (
    <>
      <DataFetchingConfig>
        <Provider store={store}>
          <GlobalStyle />
          <Routes />
        </Provider>
      </DataFetchingConfig>
    </>
  );
}

export default App;
