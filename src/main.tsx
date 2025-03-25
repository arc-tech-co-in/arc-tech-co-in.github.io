import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { appTheme } from "./theme.tsx";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router";
import { Routes } from "./routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={appTheme} defaultColorScheme="auto">
      <RouterProvider router={Routes} />
    </MantineProvider>
  </StrictMode>
);
