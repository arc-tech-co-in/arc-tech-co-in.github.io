import {
  ActionIcon,
  Group,
  Image,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const footerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "People",
    href: "/people",
  },
  {
    label: "Technologies",
    href: "/technologies",
  },
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
    icon: <IconBrandLinkedin size={26} stroke={1.0} />,
    href: "https://www.linkedin.com/company/arc-technologies/",
  },
  {
    icon: <IconBrandX size={26} stroke={1.0} />,
    href: "https://twitter.com/arc_technologies",
  },
  {
    icon: <IconBrandInstagram size={26} stroke={1.0} />,
    href: "https://www.instagram.com/arc_technologies/",
  },
];

function Footer() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Stack gap={0} h={"100%"}>
      <Group justify={"space-between"} align={"center"} h={"100%"} p="md">
        <Group>
          {colorScheme === "dark" ? (
            <Image
              src="/images/logo_dark.png"
              alt="ARC Technologies Light"
              width={"75px"}
              height={"75px"}
            />
          ) : (
            <Image
              src="/images/logo.png"
              alt="ARC Technologies Dark"
              width={"75px"}
              height={"75px"}
            />
          )}
        </Group>
        <Group>
          <Stack w={"100%"} align={"flex-end"}>
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
            </Group>
            <Group gap={"xs"}>
              <Text size={"xs"} c={"dimmed"}>
                © {new Date().getFullYear()} ARC Technologies. All rights
                reserved.
              </Text>
            </Group>
          </Stack>
        </Group>
      </Group>
    </Stack>
  );
}

export { Footer };
