import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../src/theme/globals.css";
import withFontProvider from "./withFontProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#000" },
        { name: "Light", value: "#fff" },
      ],
      default: "Dark",
    },
  },
  decorators: [withFontProvider],
};

export default preview;
