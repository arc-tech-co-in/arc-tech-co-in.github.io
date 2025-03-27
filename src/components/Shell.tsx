import { AppShell } from "@mantine/core";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface ShellProps {
  headerLinks?: React.ReactNode;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

function Shell(props: ShellProps) {
  return (
    <AppShell
      header={{ height: { base: 80, md: 90, lg: 100 } }}
      footer={{ height: { base: 120, md: 130, lg: 140 } }}
      padding={"sm"}
    >
      <AppShell.Header px={"sm"}>
        <Header />
      </AppShell.Header>
      <AppShell.Main>{props.content}</AppShell.Main>
      <AppShell.Footer px={"md"}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export { Shell };
export type { ShellProps };
