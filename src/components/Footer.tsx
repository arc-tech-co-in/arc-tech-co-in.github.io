import {
  ActionIcon,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { IconBrandLinkedin, IconMoon, IconSun } from "@tabler/icons-react";

const footerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "People",
    href: "/people",
  },
  // {
  //   label: "Technologies",
  //   href: "/technologies",
  // },
  {
    label: "About Us",
    href: "/about_us",
  },
  {
    label: "Contact Us",
    href: "/contact_us",
  },
];

const footerSocialLinks = [
  {
    icon: <IconBrandLinkedin size={26} stroke={1.2} />,
    href: "https://www.linkedin.com/company/arc-technologies-co-in",
  },
  // {
  //   icon: <IconBrandX size={26} stroke={1.2} />,
  //   href: "https://twitter.com/arc_technologies",
  // },
  // {
  //   icon: <IconBrandInstagram size={26} stroke={1.2} />,
  //   href: "https://www.instagram.com/arc_technologies/",
  // },
];

function Footer() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group justify={"space-between"} align={"center"} h={"100%"} p="sm">
      <Image
        src={colorScheme === "dark" ? "/images/logo_dark.png" : "/images/logo.png"}
        alt="ARC Technologies Light"
        width={"75px"}
        height={"75px"}
        visibleFrom={"md"}
      />
      <Group visibleFrom={"md"}>
        <Stack gap={"xs"} w={"100%"} align={"flex-end"}>
          <Group gap={"sm"}>
            {footerLinks.map((item, index) => (
              <Text key={index} size={"sm"} component="a" href={item.href}>
                {item.label}
              </Text>
            ))}
          </Group>
          <Group gap={"xs"}>
            {footerSocialLinks.map((item, index) => (
              <ActionIcon key={index} variant="subtle" component="a" href={item.href}>
                {item.icon}
              </ActionIcon>
            ))}
            <Divider orientation="vertical" />
            <ActionIcon variant={"transparent"} onClick={() => toggleColorScheme()}>
              {colorScheme == "dark" ? <IconSun size={20} /> : <IconMoon size={20} />}
            </ActionIcon>
          </Group>
          <Group gap={"xs"}>
            <Text size={"xs"} c={"dimmed"}>
              © {new Date().getFullYear()} ARC Technologies. All rights reserved.
            </Text>
          </Group>
        </Stack>
      </Group>
      <Stack gap={"xs"} h={"100%"} w={"100%"} align={"center"} hiddenFrom={"md"}>
        <Group gap={"xs"} justify={"center"}>
          {footerLinks.map((item, index) => (
            <Text key={index} size={"sm"} component="a" href={item.href}>
              {item.label}
            </Text>
          ))}
        </Group>
        <Group gap={"xs"} justify={"center"}>
          {footerSocialLinks.map((item, index) => (
            <ActionIcon key={index} variant="subtle" component="a" href={item.href}>
              {item.icon}
            </ActionIcon>
          ))}
          <Divider orientation="vertical" />
          <ActionIcon variant={"transparent"} onClick={() => toggleColorScheme()}>
            {colorScheme == "dark" ? <IconSun size={20} /> : <IconMoon size={20} />}
          </ActionIcon>
        </Group>
        <Text size={"xs"} c={"dimmed"}>
          © {new Date().getFullYear()} ARC Technologies. All rights reserved.
        </Text>
      </Stack>
    </Group>
  );
}

export { Footer };
