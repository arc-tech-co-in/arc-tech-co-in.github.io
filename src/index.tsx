import { Shell } from "./components/shell/Shell";
import React from "react";

function Index({ view }: { view: React.ReactNode }) {
  return <Shell content={view}></Shell>;
}

export { Index };
