import { Container, Space, Title } from "@mantine/core";
import { JSX } from "react";
import { Heading } from "./Heading";

function Content({ title, children }: { title: string; children: JSX.Element }) {
  return (
    <Container size={"lg"} pt={"sm"} pb={"sm"}>
      <Heading text={<Title order={2}>{title}</Title>} />
      <Space h={"sm"} />
      {children}
    </Container>
  );
}

export { Content };
