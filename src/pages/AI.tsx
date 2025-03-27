import { Badge } from "@mantine/core";
import { Markdown } from "../components/Markdown";
import { Content } from "../components/Content";
import { Fragment } from "react/jsx-runtime";

export default function AI() {
  return (
    <Content title={"AI"}>
      <Fragment>
        <Markdown fname={"/markdowns/ai_1.md"} />
        <Badge radius={"sm"}>Posted {new Date("03/24/2025").toLocaleDateString()}</Badge>
      </Fragment>
    </Content>
  );
}

