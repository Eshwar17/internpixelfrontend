import {
  Container,
  Heading,
  VStack,
  Button,
  Box,
  FormLabel,
  Input,
  Textarea,
  Center,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LuckyWheel from "../LuckyWheels/LuckyWheel";
import LuckyWheelCA from "../LuckyWheels/LuckyWheelCA";
import spinner11 from '../../assets/images/spinner11.png'
import spinner22 from '../../assets/images/spinner22.png'

const CampusAmbassador = () => {
  const [isDesktop, setIsDesktop] = useState(false);

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
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = data;
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/eshwar17/google_sheets/yHlEAzVFvPSMDOOW?tabId=Sheet2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[name, email, message]]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const checkIfDesktop = () => {
      const screenWidth = window.innerWidth;
      setIsDesktop(screenWidth > 1024); // Set the width threshold for laptops/desktops
    };

    checkIfDesktop(); // Check initially
    window.addEventListener("resize", checkIfDesktop); // Check on window resize

    return () => {
      window.removeEventListener("resize", checkIfDesktop); // Remove event listener on component unmount
    };
  }, []);

  return (
    <Container w={"full"}>
      <VStack h={"full"} justifyContent={"center"} spacing={"6"}>
        <Heading
          children="Campus Ambassador Application Form"
          pt={16}
          textAlign={"center"}
          fontFamily={"Poppins"}
        />
        <Box>
          <Center>
            <Image
              src="https://www.mind-spark.org/ms21/campusAmbassador/images/participation.gif" // Add your image source here
              alt="InternPixel Team"
              borderRadius="lg"
              maxW="60%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
        </Box>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex="1" mb={6} pr={[0, 0, 4]} order={[2, 2, 1]}>
            <Heading
              as="h2"
              fontSize="2xl"
              fontFamily={"Poppins"}
              textAlign={["center"]}
              mb={4}
            >
              Why Join as a Campus Ambassador at InternPixel?
            </Heading>
            <Text>
              Are you a student who thrives on taking the lead, has a passion
              for networking, and dreams of creating a positive impact on your
              campus community? Look no further - becoming a Campus Ambassador
              at InternPixel might just be the perfect opportunity for you.
              InternPixel is a dynamic platform committed to empowering students
              in their professional journeys, and we're on the lookout for
              enthusiastic and dedicated individuals like you to represent us on
              your campus.
            </Text>
            <Text mt={4}>
              So, are you ready to take your college experience to the next
              level? Join us as a Campus Ambassador and embark on a rewarding
              journey of growth, learning, and making a meaningful impact on
              your campus community. Together, we'll empower students to reach
              their full potential and create a brighter future. Join the
              InternPixel family today and be the change you want to see in your
              campus community!
            </Text>
            <Heading
              as="h2"
              fontSize="2xl"
              fontFamily={"Poppins"}
              textAlign={["center"]}
              mb={4}
            >
              Exclusive Rewards for Campus Ambassadors!
            </Heading>
            <Text mt={4}>
              Welcome to our Campus Ambassador Program! Get ready for an
              exhilarating opportunity to win fantastic rewards every Friday.
              Our program offers two thrilling spinners, one dedicated to Campus
              Ambassadors (CA) in Group 1, featuring a collection of amazing
              gifts, and the other, exclusively for CA Group 2, where a brand
              new laptop is up for grabs! As a token of our appreciation for
              your dedication and hard work, we've curated an array of exciting
              gifts for CA Group 1 and a guaranteed chance to win a laptop for
              CA Group 2. The anticipation builds each week as we spin the
              wheels every Friday, granting our dedicated Campus Ambassadors
              with delightful surprises. Join us in this rewarding journey as we
              celebrate your commitment and contributions. Elevate your
              experience with us and stand a chance to be one of our lucky
              winners every week!
            </Text>
          </Box>
        </Flex>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5%",
          }}
        >
          {isDesktop ? (
            <>
              <LuckyWheel />
              <LuckyWheelCA />
            </>
          ) : (
            <div>
            <img src={spinner11} alt="Lucky Wheel"/>
            <img src={spinner22} alt="Lucky Wheel"/>
            <p>
              Sorry, these wheels aren't built for thumb-twirling on tiny
              screens. Laptop up for some wheelie fun!
            </p></div>
          )}
        </div>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box my={"2"}>
            <FormLabel htmlFor="name" children="Full Name" />
            <Input
              required
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your full name"
              type="text"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel
              htmlFor="message"
              children="Why do you want to be a Campus Ambassador for InternPixel?"
            />
            <Textarea
              required
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Enter you message"
              focusBorderColor="blue.500"
            />
          </Box>
          <Center>
            <Button my="4" colorScheme="blue" type="submit">
              Apply Now
            </Button>
          </Center>

          <Box my={"4"}>
            Register for an internship?{" "}
            <Link to="/request">
              <Button colorScheme="blue" variant={"link"}>
                Click
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
      <>
        <div id="chat-box">
          <div id="chat-top">
            PixelPal: Your Guide{" "}
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

export default CampusAmbassador;
