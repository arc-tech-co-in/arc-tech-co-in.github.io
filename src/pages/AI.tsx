import { Badge, Container, Group, Title } from "@mantine/core";
import { Markdown } from "../components/Markdown";

function AI() {
  return (
    <Container size={"lg"}>
      <Title order={2}>AI</Title>
      <Markdown fname={"/public/markdowns/ai_1.md"} />
      <Badge radius={"sm"}>
        Posted {new Date("03/24/2025").toLocaleDateString()}
      </Badge>
    </Container>
  );
}

export { AI };
