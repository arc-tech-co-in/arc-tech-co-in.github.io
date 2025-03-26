/**
 * Global theme definitions
 *
 * @see https://mantine.dev/core/theme
 */

import { createTheme, MantineColorsTuple } from "@mantine/core";

const darkviolet: MantineColorsTuple = [
  "#fbebff",
  "#f3d1fb",
  "#e89efa",
  "#dc69f9",
  "#d33ff8",
  "#cd28f8",
  "#ca1ff9",
  "#b315de",
  "#9f0ec6",
  "#8a00ad",
];

const appTheme = createTheme({
  fontFamily: "'Inter'",
  defaultRadius: "md",
  colors: {
    darkviolet,
  },
  primaryColor: "darkviolet",
});

export { appTheme };
