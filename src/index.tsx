import { Shell } from "./components/shell/Shell";
import { Technologies } from "./pages/Technologies";
import { People } from "./pages/People";
import { Home } from "./pages/Home";

function Index({ view }: { view: string }) {
  const contentView = () => {
    switch (view) {
      case "Home":
        return <Home />;
      case "People":
        return <People />;
      case "Technologies":
        return <Technologies />;
      case "About":
        return <Technologies />;
      case "Contact":
        return <Technologies />;
    }
  };

  return <Shell content={contentView()}></Shell>;
}

export { Index };
