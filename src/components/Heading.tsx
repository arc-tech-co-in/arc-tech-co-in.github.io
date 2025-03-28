import { Box } from "@mantine/core";
import { JSX } from "react";

function Heading({ text }: { text: JSX.Element }) {
  return (
    <Box
      w={"100%"}
      p={"xs"}
      style={{
        borderLeftWidth: "3px",
        borderLeftStyle: "solid",
        borderLeftColor: "var(--mantine-color-darkviolet-5)",
      }}
    >
      {text}
    </Box>
  );
}

export { Heading };
