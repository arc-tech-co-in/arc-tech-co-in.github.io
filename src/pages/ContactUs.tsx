import {
  Button,
  Card,
  Container,
  Divider,
  Group,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconBrandWhatsapp, IconMail, IconPhone } from "@tabler/icons-react";

const contactInfoItems = [
  {
    icon: <IconMail size={26} stroke={1.0} />,
    title: "Email",
    description: "contact@arc-tech.co.in",
    href: "mailto:contact@arc-tech.co.in",
  },
  {
    icon: <IconPhone size={26} stroke={1.0} />,
    title: "Phone",
    description: "+91 9880424911",
    href: "tel:+919876543210",
  },
  {
    icon: <IconBrandWhatsapp size={26} stroke={1.0} />,
    title: "WhatsApp",
    description: "+91 9880424911",
    href: "https://wa.me/+919880424911",
  },
];

function ContactUsForm() {
  return (
    <form>
      <Stack gap={"sm"}>
        <Group w={"100%"} justify={"space-between"}>
          <TextInput
            w={"48%"}
            label="Name"
            placeholder="Tony Stark"
            required
            withAsterisk
          />
          <TextInput
            w={"48%"}
            label="Email"
            placeholder="tony@starkindustries.com"
            required
            withAsterisk
          />
        </Group>
        <TextInput
          label="Subject"
          placeholder="Subject"
          required
          withAsterisk
        />
        <Textarea
          label="Message"
          placeholder="Message"
          autosize={false}
          minRows={50}
        />
        <Group w={"100%"} justify={"flex-end"}>
          <Button type="submit">Send Message</Button>
        </Group>
      </Stack>
    </form>
  );
}

function ContactUs() {
  return (
    <Container size={"lg"}>
      <Text size={"lg"}>Contact Us</Text>
      <Card w={"100%"} h={"100%"} p={"lg"} withBorder>
        <Group
          w={"100%"}
          justify={"space-between"}
          align={"flex-center"}
          gap={"md"}
        >
          <Card w={"28%"} p={"lg"}>
            <Stack>
              <Text fw={600}>Contact Information</Text>
              <Space h={"md"} />
              {contactInfoItems.map((item, index) => (
                <Group key={index} align={"center"} gap={"sm"}>
                  {item.icon}
                  <Stack gap={"0"}>
                    <Text size={"xs"}>{item.title}</Text>
                    <Text size={"sm"} fw={600} component="a" href={item.href}>
                      {item.description}
                    </Text>
                  </Stack>
                </Group>
              ))}
            </Stack>
          </Card>
          <Divider orientation="vertical" />
          <Card w={"68%"} p={"lg"}>
            <Stack>
              <Text fw={600}>Contact Form</Text>
              <Space h={"md"} />
              <ContactUsForm />
            </Stack>
          </Card>
        </Group>
      </Card>
    </Container>
  );
}

export { ContactUs };
