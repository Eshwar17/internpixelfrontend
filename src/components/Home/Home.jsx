/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { Button, Stack, Text, VStack, Image, Box, Center } from "@chakra-ui/react";
import "./home.css";
import { Link } from "react-router-dom";
import vg from "../../assets/images/studying.png";
import vg1 from "../../assets/images/standing.png";
import introVideo from "../../assets/videos/Introduction.mp4";
import Features from "../Features/Features";
import FeaturesSection from "../Features/FeaturesSection";
import Alumni from "../alumni/Alumni";
import CardSlider from "../CardSliders/CardSlider";
import FaqPage from "../Faq/FaqPage";

function Home() {
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
        chatBoxElement.style.right = "6%";
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
              fontSize={"1.2rem"}
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
            alignItems={["center", "center"]}
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
              pr="0"
            />
            <Text
              textAlign={["center", "left"]}
              fontSize={"1rem"}
              pr="0"
              children="At Internpixel, we know that coffee runs are an essential part of any internship experience. And while you're sipping on that latte, why not also gain some valuable skills and experience in your chosen industry? We promise we won't judge you if you spill your coffee during a video call with your boss, but we will encourage you to keep learning and growing in your internship. Join us today and let's make your coffee-fueled internship dreams a reality!"
            />
            
            <Link to="/internships">
              <Button
                size={"m"}
                colorScheme="blue"
                opacity={0.57}
                p={[2,4]}
                m={0}
              >
                Apply for a Latte-tude of Opportunities!
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

      <Text children="" />
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
        fontSize={"1.7rem"}
        children="Trending and Upcoming Internships for Tomorrow's Innovators"
      />
      <Text
        textAlign={"center"}
        fontSize={"1rem"}
        children="Unleash your potential with InternPixel's curated collection of trending and upcoming internships. Elevate your skills, embrace cutting-edge industries, and embark on a transformative career journey that paves the way for future innovation."
      />
      <CardSlider />
      {/* <Faq /> */}
      <FaqPage />
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
    </section>
  );
}

export default Home;
