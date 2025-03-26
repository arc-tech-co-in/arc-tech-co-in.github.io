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
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBrandWhatsapp, IconMail, IconPhone } from "@tabler/icons-react";

interface ContactInfoData {
  subject: string;
  message: string;
}

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
    description: "+91 9740792309",
    href: "tel:+919740792309",
  },
  {
    icon: <IconBrandWhatsapp size={26} stroke={1.0} />,
    title: "WhatsApp",
    description: "+91 9740792309",
    href: "https://wa.me/+919740792309",
  },
];

function ContactUsForm() {
  // Form values
  const formValues = useForm<ContactInfoData>({
    mode: "uncontrolled",
  });

  return (
    <form>
      <Stack gap={"sm"}>
        <TextInput
          id="contact-subject"
          label="Subject"
          placeholder="Subject"
          required
          withAsterisk
          key={formValues.key("subject")}
          {...formValues.getInputProps("subject")}
        />
        <Textarea
          id="contact-message"
          label="Message"
          placeholder="Message"
          autosize={false}
          key={formValues.key("message")}
          {...formValues.getInputProps("message")}
        />
        <Group w={"100%"} justify={"flex-end"}>
          <Button
            type="submit"
            disabled={!formValues.isValid()}
            component="a"
            href={`mailto:contact@arc-tech.co.in?subject=${
              formValues.getValues().subject
            }&body=${formValues.getValues().message}`}
          >
            Send Message
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

function ContactUs() {
  return (
    <Container size={"lg"}>
      <Title order={2}>Contact Us</Title>
      <Card w={"100%"} h={"100%"} p={"lg"} mt={"md"} withBorder>
        <Group w={"100%"} justify={"space-between"} align={"flex-center"} gap={"md"}>
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
