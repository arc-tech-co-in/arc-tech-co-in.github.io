import { AppShell } from "@mantine/core";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

interface ShellProps {
  headerLinks?: React.ReactNode;
  content?: React.ReactNode;
  children?: React.ReactNode;
}

function Shell(props: ShellProps) {
  return (
    <AppShell
      header={{ height: { base: 80, md: 90, lg: 100 } }}
      footer={{ height: { base: 130, md: 140, lg: 160 } }}
      padding={"md"}
    >
      <AppShell.Header px={'md'}>
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
