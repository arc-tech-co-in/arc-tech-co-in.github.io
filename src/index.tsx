import { JSX } from "react";
import { Shell } from "./components/shell/Shell";
import { Group, Stack, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Technologies } from "./pages/Technologies";
import { People } from "./pages/People";
import { Home } from "./pages/Home";

const footerItems = [
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
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function FooterLinks(): JSX.Element {
  return (
    <Stack w={"100%"} align={"flex-end"}>
      <Group gap={"sm"}>
        {footerItems.map((item, index) => (
          <Text key={index} size={"sm"}>
            {item.label}
          </Text>
        ))}
      </Group>
      <Group gap={"xs"}>
        <IconBrandLinkedin size={26} stroke={1.0} />
        <IconBrandX size={26} stroke={1.0} />
        <IconBrandInstagram size={26} stroke={1.0} />
      </Group>
      <Group gap={"xs"}>
        <Text size={"xs"} c={"dimmed"}>
          © {new Date().getFullYear()} ARC Technologies. All rights reserved.
        </Text>
      </Group>
    </Stack>
  );
}

function Index({ view }: { view: string }) {
  const contentView = () => {
    switch (view) {
      case "Home":
        return <Home />;
      case "People":
        return <People />;
      case "Technologies":
        return <Technologies />;
      case "About":
        return <Technologies />;
      case "Contact":
        return <Technologies />;
    }
  };

  return <Shell footerLinks={<FooterLinks />} content={contentView()}></Shell>;
}

export { Index };
