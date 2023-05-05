/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'
import "./home.css";
import { Link } from "react-router-dom";
import vg from "../../assets/images/studying.png";
import vg1 from "../../assets/images/standing.png";
import introVideo from "../../assets/videos/intro.mp4";
import Features from "../Features/Features";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <VStack
            width={"full"}
            alignItems={["center", "flex-end"]}
            spacing="8"
          >
            <Heading
              children="LEARN FROM THE EXPERTS"
              size={"2xl"}
              fontFamily={"cursive"}
              fontWeight={"bold"}
              color={"blue.500"}
            />
            <Text
              textAlign={["center", "left"]}
              fontSize={'1.2rem'}
              children="Don't break the bank, break into your dream career with Internpixel's affordable internships!"
            />
            <Link to="/internships">
              <Button size={"lg"} colorScheme="blue">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={"md"}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Heading
        children="InternPixel"
        size="2xl"
        m="4"
        textAlign={"center"}
        fontFamily={"fantasy"}
      />
      <Text
        textAlign={"center"}
        fontFamily={"monospace"}
        fontSize={"2rem"}
        children="Your Gateway to Landing the Perfect Internship!"
      />
      <Text
        textAlign={"center"}
        fontFamily={"monospace"}
        fontSize={"1rem"}
        children="Internpixel is the ultimate platform for students and recent graduates to find internship opportunities across a wide range of industries. Our platform connects aspiring interns with top companies, offering them invaluable experience, skills, and contacts to jumpstart their careers. "
      />
      {/* features */}
      <Features />
      <Divider />
      {/* second hero */}
      <div className="container1">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <Image
            className="vector-graphics"
            boxSize={"md"}
            src={vg1}
            objectFit="contain"
          />
          <VStack
            width={"full"}
            alignItems={["center", "flex-end"]}
            spacing="8"
          >
            <Heading
              children="Internpixel"
              size={"2xl"}
              fontFamily={"cursive"}
            />
            <Text
              textAlign={["center", "left"]}
              fontFamily={"cursive"}
              fontSize={"1.8rem"}
              children="Where Coffee Runs and Learning Happens!"
            />
            <Text
              textAlign={["center", "left"]}
              fontFamily={"monospace"}
              fontSize={"1rem"}
              children="At Internpixel, we know that coffee runs are an essential part of any internship experience. And while you're sipping on that latte, why not also gain some valuable skills and experience in your chosen industry? We promise we won't judge you if you spill your coffee during a video call with your boss, but we will encourage you to keep learning and growing in your internship. Join us today and let's make your coffee-fueled internship dreams a reality!"
            />
            <Link to="/internships">
              <Button size={"md"} colorScheme="blue" opacity={0.57}>
              Apply Now for a Latte-tude of Opportunities!
              </Button>
            </Link>
          </VStack>
        </Stack>
      </div>
<Text children=""/>
      <Box padding={"8"} bg="blackAlpha.800">
        <Heading
          textAlign={"center"}
          fontFamily="body"
          color={"blue.400"}
          children="Our Students Work At"
        />
        <HStack
          className="brandsBanner"
          justifyContent={"space-evenly"}
          marginTop="4px"
        >
          {/* <SiUdemy /> */}
          <h1 className="company">Cognizant</h1>
          <h1 className="company">Wipro</h1>
          <h1 className="company">Zoho</h1>
          <h1 className="company">IBM</h1>
          <h1 className="company">Focus Edumatics</h1>
          <h1 className="company">Accenture</h1>
          <h1 className="company">Sutherland</h1>
          <h1 className="company">Acuvate</h1>
          {/* <CgGoogle /> */}
          {/* <CgYoutube />
          <SiCoursera />
          <DiAws /> */}
        </HStack>
      </Box>

      {/* video */}
      <div className="container2">
        <video
          src={introVideo}
          autoPlay
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
      {/* features */}

      
    </section>
  );
}

export default Home;
