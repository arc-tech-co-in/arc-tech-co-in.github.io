import { TypographyStylesProvider } from "@mantine/core";
import { Content } from "../components/Content";

export default function AboutUs() {
  return (
    <Content title={"About Us"}>
      <TypographyStylesProvider>
        <p>
          At <b>ARC technologies</b>, we are dedicated to democratizing access to
          Artificial Intelligence for businesses and individuals alike. Our mission is to
          simplify the complex world of AI technologies, enabling our clients to extract
          maximum value without being bogged down by technical intricacies.
        </p>
        <p>
          We are a team of seasoned industry veterans and tech-savvy visionaries,{" "}
          <b>ARC Technologies</b> brings together decades of collective experience in both
          business strategy and cutting-edge AI technologies. We understand that while AI
          holds immense potential to revolutionize industries and transform personal
          lives, its implementation is often shrouded in technical complexities and unseen
          assumptions.
        </p>
        <p>
          Our approach is rooted in the belief that AI should be accessible, usable, and
          beneficial for all and we strive to distill the inherent complexities into
          user-friendly solutions, creating AI solutions that are intuitive, efficient,
          and powerful.
        </p>
        <p>
          At <b>ARC Technologies</b>, we pride ourselves on delivering AI solutions that
          are not only technically sound but also intuitive and easy to integrate into
          existing workflows. Our commitment is to make AI work for you, simplifying the
          journey towards AI-driven success, without losing sight of the big picture.
        </p>
        <p>
          Do you have a project in mind? <a href="/contact_us">Let's talk</a>.
        </p>
      </TypographyStylesProvider>
    </Content>
  );
}

