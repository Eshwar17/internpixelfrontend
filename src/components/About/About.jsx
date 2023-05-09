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
import introVideo from "../../assets/videos/Introduction1.mp4";
import { RiSecurePaymentFill } from "react-icons/ri";
import termsAndCondition from "../../assets/docs/termsAndCondition";
import nithish from './nithishvarma.jpg';

const Founder = () => {
  return (<>
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
          children={`Hi there, I'm Eshwar Nagaraj, the founder and software engineering instructor at InternPixel. With a deep passion for both technology and education, I've dedicated my career to helping students and recent graduates launch their careers through impactful internship experiences. As a software engineer myself, I know firsthand the importance of hands-on, real-world experience in the tech industry. That's why I founded InternPixel - to provide students with the opportunity to gain the skills, knowledge, and connections they need to succeed in this ever-evolving field.`}
        />
      </VStack>
    </Stack>
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={"8"}>
      <VStack>
        <Avatar
          src="https://media.licdn.com/dms/image/D5603AQFMcqoY8-cQpQ/profile-displayphoto-shrink_400_400/0/1681185325300?e=1689206400&v=beta&t=esUO6yDcyHT9NzOGa8z1vYaqX1ETrdWRg8AHvuNHK0o"
          boxSize={["40", "48"]}
        />
        <Text children="Managing Director" opacity={0.7} />
      </VStack>
      <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
        <Heading children="Charishma Nagaraj" size={["md", "xl"]} />
        <Text
          textAlign={["center", "left"]}
          children={`Hello, I am the Managing Director at InternPixel. With over 5 years of experience in the field, I am dedicated to providing top-notch internship experiences to our clients. My goal is to help individuals and businesses achieve their full potential by providing them with the best resources and opportunities available. I look forward to working with our interns and clients to create valuable experiences that will help shape their careers and contribute to the growth of our company.`}
        />
      </VStack>
    </Stack>
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding={"8"}>
      <VStack>
        <Avatar
          src={nithish}
          boxSize={["40", "48"]}
        />
        <Text children="Operations Manager" opacity={0.7} />
      </VStack>
      <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
        <Heading children="Nithish Varma" size={["md", "xl"]} />
        <Text
          textAlign={["center", "left"]}
          children={`Hello there! My name is Nithish Varma and I am thrilled to introduce myself as the Operations Manager at Internpixel. As the Operations Manager, I am responsible for ensuring the smooth functioning of our programs, from coordinating with clients to delivering exceptional internship experiences to our interns. I am committed to providing the best possible support to both our team and our clients, and I am excited to be a part of this dynamic and innovative company.`}
        />
      </VStack>
    </Stack></>
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
          We are a live streaming platform with some premium internships
          available only for premium users.
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
        <Heading size={"xs"} children="Payment is secured by RAZORPAY" />
      </HStack>
    </Container>
  );
};

export default About;
