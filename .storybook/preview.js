import { mswDecorator } from "msw-storybook-addon";

import DataFetchingConfig from "../src/components/DataFetchingConfig/DataFetchingConfig";
import GlobalStyle from "../src/components/_ui/GlobalStyle/GlobalStyle";

if (typeof global.process === "undefined") {
  const { worker } = require("../src/mocks/browser");
  worker.start();
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['ui'],
    },
  },
};

export const decorators = [
  (Story) => (
    <DataFetchingConfig value={{ dedupingInterval: 0 }}>
      <GlobalStyle />
      <Story />
    </DataFetchingConfig>
  ),
];
