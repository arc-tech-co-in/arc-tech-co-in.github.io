import { Center, Container, Image } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

function Home() {
  const [colorScheme] = useColorScheme();

  return (
    <Container size={"lg"}>
      <Center>
        <Image
          src={
            colorScheme == "dark"
              ? "/images/home_1_dark.svg"
              : "/images/home_1_light.svg"
          }
          w={"700px"}
          h={"auto"}
        />
      </Center>
    </Container>
  );
}

export { Home };
