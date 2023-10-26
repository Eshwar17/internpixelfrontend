import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack, Flex, Center, Image, Icon
} from "@chakra-ui/react";
import { FaGraduationCap, FaUsers, FaLightbulb, FaCrown } from 'react-icons/fa';
import {RiCustomerService2Line} from 'react-icons/ri';
import {MdChat, MdVideoCall, MdVoiceChat, MdVoicemail} from 'react-icons/md';
import React from "react";
import { useEffect } from "react";
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
        <Heading children="Charishma" size={["md", "xl"]} />
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
        fontFamily={"Poppins"}
        children="Terms And Conditions"
        textAlign={["center"]}
        my="4"
      />
      <Box h="sm" p="4" overflowY={"scroll"}>
        <Text
          fontFamily={"Poppins"}
          letterSpacing={"1"}
          textAlign={["center", "left"]}
        >
          {termsAndCondition}
        </Text>
      </Box>
    </Box>
  );
};
const About = () => {
  useEffect(() => {
    const chatElement = document.getElementById("whats-chat");
    const chatTopRightElement = document.getElementById("chat-top-right");
    const sendBtnElement = document.getElementById("send-btn");

    function showchatbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "8%";
      }
    }

    function closechatbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "-500px";
      }
    }

    function showchatboxtime() {
      setTimeout(launchbox, 5000);
    }

    function launchbox() {
      const chatBoxElement = document.getElementById("chat-box");
      if (chatBoxElement) {
        chatBoxElement.style.right = "8%";
      }
    }

    function sendmsg() {
      const msgElement = document.getElementById("whats-in");
      if (msgElement) {
        var msg = msgElement.value;
        var relmsg = msg.replace(/ /g, "%20");
        window.open(
          "https://api.whatsapp.com/send?phone=8688561178&text=" + relmsg,
          "_blank"
        );
      }
    }

    if (chatElement) {
      chatElement.addEventListener("mouseover", showchatbox);
    }

    if (chatTopRightElement) {
      chatTopRightElement.addEventListener("click", closechatbox);
    }

    if (sendBtnElement) {
      sendBtnElement.addEventListener("click", sendmsg);
    }

    // You can use window.onload here to ensure the elements are present in the DOM
    window.onload = showchatboxtime;
  }, []);
  return (
    <Container maxW={"container.lg"} padding={"2"}>
      <Heading children="About Us" fontFamily={"Poppins"} textAlign={["center"]} />
      {/* <Founder /> */}
      <Box p={6}>
      <Heading as="h1" textAlign="center" fontFamily={"Poppins"} fontSize="3xl" color={"blue.800"} mt={0} mb={8}>
        Welcome to InternPixel
      </Heading>
      <Box flex="1" mb={6} order={[1, 1, 2]}>
          <Center>
            <Image
              src="https://stemettes.org/zine/wp-content/uploads/sites/3/2021/12/custom-erp-software-development.gif" // Add your image source here
              alt="InternPixel Team"
              borderRadius="lg"
              maxW="60%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
        </Box>
      <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Box flex="1" mb={6} pr={[0, 0, 4]} order={[2, 2, 1]}>
          <Heading as="h2" fontSize="2xl" fontFamily={"Poppins"} textAlign={["center"]} mb={4}>
            Our Story
          </Heading>
          <Text>
            At InternPixel, we're passionate about connecting students and
            companies. Our journey began with a simple idea: to bridge the gap
            between aspiring students seeking internships and companies
            searching for bright talent.
          </Text>
          <Text mt={4}>
            Founded in 2022, we've since grown into a trusted platform that has
            helped thousands of students kickstart their careers and hundreds of
            companies find their next star intern.
          </Text>
          <Text mt={4}>
            Join us in our mission to make the internship search process easier,
            more efficient, and more rewarding for students and employers alike.
          </Text>
        </Box>
        {/* <Box flex="1" mb={6} order={[1, 1, 2]}>
          <Center>
            <Image
              src="https://i.pinimg.com/originals/b5/71/7f/b5717f76996829bc2bc02d6cb91c2594.gif" // Add your image source here
              alt="InternPixel Team"
              borderRadius="lg"
              boxShadow="lg"
              maxW="90%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
        </Box> */}
      </Flex>
      <Box mt={10}>
  <Heading as="h2" fontSize="2xl" fontFamily={"Poppins"} textAlign={["center"]} mb={4}>
    Our Values
  </Heading>
  <Flex justifyContent="space-between" flexWrap="wrap">
    {/* Education First */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FaGraduationCap} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
        Education First
      </Heading>
      <Text>
        We believe in the power of education and strive to create opportunities
        for learning and growth.
      </Text>
    </Box>
    {/* Community Driven */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FaUsers} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
        Community Driven
      </Heading>
      <Text>
        Our community is our strength. We foster collaboration and inclusivity.
      </Text>
    </Box>
    {/* Innovation Hub */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FaLightbulb} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
        Innovation Hub
      </Heading>
      <Text>
        We embrace innovation and creativity to continuously improve our
        platform.
      </Text>
    </Box>
    {/* Customer-Centric */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={RiCustomerService2Line} boxSize={12} color="blue.500" />
      <Heading as="h3" fontFamily={"Poppins"} fontSize="xl" mt={2}>
        Customer-Centric
      </Heading>
      <Text>
        Our customers' success is our success. We go the extra mile to meet
        their needs.
      </Text>
    </Box>
    {/* Ownership and Responsibility */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FaCrown} boxSize={12} color="blue.500" />
      <Heading as="h3" fontFamily={"Poppins"} fontSize="xl" mt={2}>
        Ownership and Responsibility
      </Heading>
      <Text>
        We take ownership of our work and hold ourselves accountable for
        delivering results.
      </Text>
    </Box>
    {/* Diversity and Inclusion */}
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={MdVoiceChat} boxSize={12} color="blue.500" />
      <Heading as="h3" fontFamily={"Poppins"} fontSize="xl" mt={2}>
        Diversity and Inclusion
      </Heading>
      <Text>
        We celebrate diversity and promote an inclusive environment where
        everyone's voice is heard.
      </Text>
    </Box>
  </Flex>
</Box>
      <Box mt={12} textAlign="center">
      <Link to={"/request"}>
      <Button
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          _hover={{ bg: 'blue.600' }}
        >
          Join Us Today
        </Button>
        </Link>
      </Box>
    </Box>
      <Stack m={"8"} direction={["column", "row"]} alignItems={"center"}>
        <Text m="8" textAlign={["center", "left"]}>
          We are a live streaming platform with some premium internships
          available only for premium users.
        </Text>
        <Link to={"/request"}>
          <Button variant={"ghost"} colorScheme="blue">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} />
      <HStack my={"4"} padding={"4"}>
        <RiSecurePaymentFill />
        <Heading size={"xs"} fontFamily={"Poppins"} children="Payment is secured by RAZORPAY" />
      </HStack>
      <>
        <div id="chat-box">
          <div id="chat-top">
            PixelPal: Your Internship Guide{" "}
            <span id="chat-top-right">
              <svg
                id="close-box"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 48 48"
              >
                <path
                  d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
                  fill="#fff"
                />
              </svg>
            </span>
            <div className="clear" />
          </div>
          <div id="chat-msg">
            <p>
              Welcome to InternPixel, your gateway to exciting internship
              opportunities!
            </p>
            <div id="chat-form">
              <div className="chat-in">
                <input
                  type="text"
                  id="whats-in"
                  placeholder="Send Your Message..."
                />
              </div>
              <div id="send-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={38}
                  height={38}
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M4.02 42L46 24 4.02 6 4 20l30 4-30 4z"
                    fill="rgb(18, 140, 126)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="whats-chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version={1}
            width={35}
            height={35}
            viewBox="0 0 90 90"
          >
            <path
              d="M90 44a44 44 0 0 1-66 38L0 90l8-24A44 44 0 0 1 46 0c24 0 44 20 44 44zM46 7C25 7 9 24 9 44c0 8 2 15 7 21l-5 14 14-4a37 37 0 0 0 58-31C83 24 66 7 46 7zm22 47l-2-1-7-4-3 1-3 4h-3c-1 0-4-1-8-5-3-3-6-6-6-8v-2l2-2 1-1v-2l-4-8c0-2-1-2-2-2h-2l-3 1c-1 1-4 4-4 9s4 11 5 11c0 1 7 12 18 16 11 5 11 3 13 3s7-2 7-5l1-5z"
              fill="#FFF"
            />
          </svg>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  body{width:100%}\n*{margin:0px;padding:0px;box-sizing:border-box;}\n#whats-chat{position:fixed;right:3%;bottom:10%;height:auto;width:auto;background:#0963ac;padding:12.5px;border-radius:50px;}\n#whats-chat:hover{cursor:pointer;box-shadow:2px 2px 15px #ccc;bottom:11%;}\n/*===============================*/\n#chat-box{position:fixed;right:-500px;bottom:18%;width:250px;height:200px;transition:all .5s;}\n#chat-top{width:100%;line-height:2;background:rgb(18, 140, 126);color:white;text-align:center;border-radius:5px 5px 0 0;padding:0 10px;}\n#chat-msg{background:#ece5dd;padding:10px;border-radius:0 0 5px 5px;box-shadow:0 0 25px -10px #999;}\n#chat-msg p{font-size:14px;padding:5px;border-radius:0 50px 50px 50px;margin-bottom:10px;}\n#chat-form{display:flex;}\n.chat-in{width:80%;}\n#chat-form input{border-radius:5px 0 5px 5px;border:none;outline:none;font-size:14px;padding:5px;line-height:2;}\n#send-btn{width:20%;padding: 0 5px;}\n#chat-top-right{float:right;padding:5px 0;}\n#chat-box:after{content:'';\n    position: absolute;\n    top:58%;\n    left: 90%;\n    width: 0;\n    height: 0;\n    border-top: 25px solid transparent;\n  border-bottom: 25px solid transparent; \n  \n  border-right:25px solid #ece5dd;}\n.right{float:right}\n.clear{clear:both}\n",
          }}
        />
      </>
    </Container>
  );
};

export default About;
