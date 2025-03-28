import { Text, List, Badge, Grid, TableOfContents } from "@mantine/core";
import { Content } from "../components/Content";
import { Markdown } from "../components/Markdown";
import Blog from "../components/Blog.mdx";

const techPosts = [
  {
    id: "tech_1",
    title: "First Tech Post",
    date: "03/28/2025",
    file: "/markdowns/tech_1.md",
  },
];

export default function TechBlog() {

  return (
    <Content title={"Tech Blog"}>
      <Grid>
        <Grid.Col span={8}>
          <List spacing="sm" size="sm" center mb="md">
            {techPosts.map((post) => (
              <List.Item key={post.id}>
                <Text>{post.title}</Text>
                <Badge radius="sm" color="gray">
                  {new Date(post.date).toLocaleDateString()}
                </Badge>
              </List.Item>
            ))}
          </List>

          {/* Example MDX post */}
          <Blog />

          {/* Example markdown post */}
          <Markdown fname={techPosts[0].file} />
        </Grid.Col>
        <Grid.Col span={4}>
          <TableOfContents
            variant={"light"}
            size={"sm"}
            scrollSpyOptions={{
              selector: "h1, h2, h3, h4, h5, h6",
            }}
            getControlProps={({ data }) => ({
              onClick: () => data.getNode().scrollIntoView({ behavior: "smooth" }),
              children: data.value,
            })}
          />
        </Grid.Col>
      </Grid>
    </Content>
  );
}
