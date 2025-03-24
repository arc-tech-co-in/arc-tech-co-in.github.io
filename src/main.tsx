import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { appTheme } from "./theme.tsx";
import { Index } from "./index.tsx";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={appTheme} defaultColorScheme="auto">
      <Index view={"Home"} />
    </MantineProvider>
  </StrictMode>
);
