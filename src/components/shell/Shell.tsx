import { AppShell } from "@mantine/core";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

interface ShellProps {
  headerLinks?: React.ReactNode;
  content?: React.ReactNode;
  footerLinks?: React.ReactNode;
  children?: React.ReactNode;
}

function Shell(props: ShellProps) {
  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 } }}
      footer={{ height: { base: 120, md: 140, lg: 160 } }}
      padding={"md"}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>{props.content}</AppShell.Main>
      <AppShell.Footer>
        <Footer footerLinks={props.footerLinks} />
      </AppShell.Footer>
    </AppShell>
  );
}

export { Shell };
export type { ShellProps };
