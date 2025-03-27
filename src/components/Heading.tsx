import { Card } from "@mantine/core";
import { JSX } from "react";

function Heading({ text }: { text: JSX.Element }) {
  return (
    <Card w={"100%"} p={"xs"}>
      {text}
    </Card>
  );
}

export { Heading };
