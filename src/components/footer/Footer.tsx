import { Group, Image, Stack, useMantineColorScheme } from "@mantine/core";

interface FooterProps {
  footerLinks?: React.ReactNode;
  children?: React.ReactNode;
}
function Footer(props: FooterProps) {
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
        <Group>{props.footerLinks}</Group>
      </Group>
    </Stack>
  );
}

export { Footer };
export type { FooterProps };
