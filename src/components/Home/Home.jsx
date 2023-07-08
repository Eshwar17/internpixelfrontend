/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect, useRef } from "react";
import {
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  Box,
  HStack,
  Divider,
  Flex

} from "@chakra-ui/react";
import "./home.css";
import { Link } from "react-router-dom";
import vg from "../../assets/images/studying.png";
import vg1 from "../../assets/images/standing.png";
import introVideo from "../../assets/videos/Introduction.mp4";
import Features from "../Features/Features";
import Faq from "../Faq/Faq";
import FeaturesSection from "../Features/FeaturesSection";
import Alumni from "../alumni/Alumni";
import CardSlider from "../CardSliders/CardSlider";

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
            {/* <Heading
              className="headingele"
              children="Pixelate Your Career"
              size={"3xl"}
              fontWeight={"bold"}
              color={"blue.500"}
            /> */}
            <h1 id="mainHeading">Pixelate Your Career</h1>
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
      {/* <Heading
        children="InternPixel"
        size="2xl"
        m="4"
        textAlign={"center"}
      /> */}
      <h1 className="mainHeading1">InternPixel</h1>
      <Text
        textAlign={"center"}
        fontSize={"2rem"}
        children="Your Gateway to Landing the Perfect Internship!"
      />
      <Text
        textAlign={"center"}
        fontSize={"1rem"}
        children="Internpixel is the ultimate platform for students and recent graduates to find internship opportunities across a wide range of industries. Our platform connects aspiring interns with top companies, offering them invaluable experience, skills, and contacts to jumpstart their careers. "
      />
      {/* features */}
      <Features />
      
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
            {/* <Heading
              children="Internpixel"
              size={"2xl"}
              pr='6'
            /> */}
            <h1 className="mainHeading1">Pixel Brew</h1>
            <Text
              textAlign={["center", "left"]}
              fontSize={"1.8rem"}
              children="Where Coffee Runs and Learning Happens!"
              pr='6'
            />
            <Text
              textAlign={["center", "left"]}
              fontSize={"1rem"}
              pr='6'
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
      {/* Features2 */}
      <h1 className="mainHeading1">InternPixel Xperience</h1>
      <Text
        textAlign={"center"}
        fontSize={"2rem"}
        children="Revolutionizing the Internship Experience with Unparalleled Features for Your Success"
      />
      <Text
        textAlign={"center"}
        fontSize={"1rem"}
        children="Immerse yourself in an unparalleled learning journey with InternPixel's unique features. Engage in live classes, work on real client projects, receive guidance from dedicated mentors, earn valuable certificates, explore multiple domains, and savor the camaraderie of team lunches. Prepare to level up your skills and create unforgettable memories as you embark on a transformative internship experience."
      />
      <FeaturesSection />
   
      
<Text children=""/>
      <Box padding={"8"}>
        {/* <Heading
        className="alumniHeading"
          textAlign={"center"}
          color={"black.400"}
          children="Our Students Work At"
        /> */}
        <h1 className="alumniHeading">Our Students Work At</h1>
      </Box>
<Alumni />
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
      <h1 className="mainHeading1">InternPixel's Trailblazing Path</h1>
      <Text
        textAlign={"center"}
        fontSize={"2rem"}
        children="Trending and Upcoming Internships for Tomorrow's Innovators"
      />
      <Text
        textAlign={"center"}
        fontSize={"1rem"}
        children="Unleash your potential with InternPixel's curated collection of trending and upcoming internships. Elevate your skills, embrace cutting-edge industries, and embark on a transformative career journey that paves the way for future innovation."
      />
      <CardSlider />
      <Faq />
    </section>
  );
}

export default Home;
