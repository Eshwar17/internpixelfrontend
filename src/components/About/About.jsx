import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import introVideo from "../../assets/videos/intro1.mp4";
import { RiSecurePaymentFill } from "react-icons/ri";
import termsAndCondition from "../../assets/docs/termsAndCondition";

const Founder = () => {
  return (
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={"8"}>
      <VStack>
        <Avatar
          src="https://avatars.githubusercontent.com/u/65604208?s=400&u=959b887db91a42581928dc606f3e9a4259c6d53d&v=4"
          boxSize={["40", "48"]}
        />
        <Text children="Founder & Instructor" opacity={0.7} />
      </VStack>
      <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
        <Heading children="Eshwar Nagaraj" size={["md", "xl"]} />
        <Text
          textAlign={["center", "left"]}
          children={`Hi there, I'm Eshwar Nagaraj, the founder and software engineering instructor at InternPixel. With a deep passion for both technology and education, I've dedicated my career to helping students and recent graduates launch their careers through impactful internship experiences. As a software engineer myself, I know firsthand the importance of hands-on, real-world experience in the tech industry. That's why I founded InternPixel - to provide students with the opportunity to gain the skills, knowledge, and connections they need to succeed in this ever-evolving field. As an instructor, I'm committed to providing our interns with the guidance and support they need to make the most of their internship experiences. Whether it's helping them navigate complex technical challenges or providing mentorship on career development, I'm here to help our interns succeed every step of the way. I'm incredibly proud of what we've accomplished at InternPixel so far, and I'm excited to continue growing our platform and empowering the next generation of professionals.`}
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => {
  return (
    <Box>
      <video
        src={introVideo}
        loop
        muted
        autoPlay
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
      ></video>
    </Box>
  );
};

const TandC = ({ termsAndCondition }) => {
  return (
    <Box>
      <Heading
        size={"md"}
        children="Terms And Conditions"
        textAlign={["center", "left"]}
        my="4"
      />
      <Box h="sm" p="4" overflowY={"scroll"}>
        <Text
          letterSpacing={"widest"}
          fontFamily={"heading"}
          textAlign={["center", "left"]}
        >
          {termsAndCondition}
        </Text>
      </Box>
    </Box>
  );
};
const About = () => {
  return (
    <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
      <Heading children="About Us" textAlign={["center", "left"]} />
      <Founder />
      <Stack m={"8"} direction={["column", "row"]} alignItems={"center"}>
        <Text m="8" textAlign={["center", "left"]}>
          We are a live streaming platform with some premium internships available
          only for premium users.
        </Text>
        <Link to={"/enroll"}>
          <Button variant={"ghost"} colorScheme="blue">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} />
      <HStack my={"4"} padding={"4"}>
        <RiSecurePaymentFill />
        <Heading
          size={"xs"}
          children="Payment is secured by RAZORPAY"
        />
      </HStack>
    </Container>
  );
};

export default About;
