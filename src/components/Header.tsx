import { Button, Group, Image, useMantineColorScheme } from "@mantine/core";

function Header() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Group align={"center"} justify={"space-between"} h={"100%"} p={"sm"}>
      <Image
        src={
          colorScheme === "dark"
            ? "images/logo_dark_no_text.png"
            : "images/logo_no_text.png"
        }
        alt="logo"
        width={"auto"}
        height={"28px"}
      />
      <Group gap={"sm"} align={"center"} h={"100%"}>
        <Button variant={"outline"} size={"compact-lg"} component="a" href="/ai">
          AI
        </Button>
        <Button variant={"outline"} size={"compact-lg"} component="a" href="/tech_blog">
          Tech Blog
        </Button>
      </Group>
    </Group>
  );
}

export { Header };
