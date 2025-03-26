import {
  ActionIcon,
  Button,
  Group,
  Image,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group
      align={"center"}
      justify={"space-between"}
      h={"100%"}
      p={"md"}
    >
      <Group>
        {colorScheme == "dark" ? (
          <Image
            src="images/logo_dark_no_text.png"
            alt="logo"
            width={"28px"}
            height={"28px"}
          />
        ) : (
          <Image
            src="images/logo_no_text.png"
            alt="logo"
            width={"28px"}
            height={"28px"}
          />
        )}
      </Group>
      <Group gap={"sm"} align={"center"} h={"100%"}>
        <Button
          variant={"outline"}
          size={"compact-lg"}
          component="a"
          href="/ai"
        >
          AI
        </Button>
        <Button
          variant={"outline"}
          size={"compact-lg"}
          component="a"
          href="/tech_blog"
        >
          Tech Blog
        </Button>
        <ActionIcon variant={"transparent"} onClick={() => toggleColorScheme()}>
          {colorScheme == "dark" ? (
            <IconSun size={20} />
          ) : (
            <IconMoon size={20} />
          )}
        </ActionIcon>
      </Group>
    </Group>
  );
}

export { Header };
