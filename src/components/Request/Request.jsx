import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Select,
  Link,
  Center,
} from "@chakra-ui/react";
import Confetti from "react-confetti";
import "./Request.css";

const Request = () => {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    domain: "",
    college: "",
    referralId: "",
    date: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const internshipDomains = [
    "Web Development",
    "Java Development",
    "Python Development",
    "Data Structures And Algorithms",
    "Front End Development",
    "Back End Development",
    "Ruby Development",
    "DevOps",
    "C Programming",
    "NodeJS Development",
    "JavaScript Development",
    "C++ Development",
    "Full Stack Development",
    "Data Science",
    "Data Analyst",
    "Data Engineering",
    "QA Engineer",
    "Software Testing",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/eshwar17/google_sheets/yHlEAzVFvPSMDOOW?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              formData.name,
              formData.email,
              formData.whatsapp,
              selectedDomain,
              formData.college,
              formData.referralId,
              formData.date,
            ],
          ]),
        }
      );
      await response.json();

      setIsOpen(true);
      setShowConfetti(true);

      // Clear form data after successful submission
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        domain: "",
        college: "",
        referralId: "",
        date: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setShowConfetti(!showConfetti);
  };

  return (
    <Container className="requestHeading" h="100vh" mb={"14"}>
      <VStack h="full" justifyContent={"center"} spacing="8">
        <Heading
          className="requesttitle"
          fontFamily={"Poppins"}
          children="Apply For An Internship"
          textAlign={"center"}
          mt={0}
        />

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box my={"4"}>
            <FormLabel htmlFor="name" children="Name*" />
            <Input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              type={"text"}
              focusBorderColor="blue.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="email" children="Email Address*" />
            <Input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              type={"email"}
              focusBorderColor="blue.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="whatsapp" children="WhatsApp Mobile Number*" />
            <Input
              required
              name="whatsapp"
              value={formData.whatsapp}
              type="tel"
              onChange={handleChange}
              placeholder="Enter your whatsapp number"
              focusBorderColor="blue.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="domain" children="Internship Domain Name*" />
            <Select
              required
              name="domain"
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              placeholder="Select the internship domain you are interested in"
              focusBorderColor="blue.500"
            >
              {internshipDomains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </Select>
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="college" children="College Name*" />
            <Input
              required
              name="college"
              value={formData.college}
              type="text"
              onChange={handleChange}
              placeholder="Enter your college name"
              focusBorderColor="blue.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel
              htmlFor="referralId"
              children="Referral Id (If you have one)"
            />
            <Input
              name="referralId"
              value={formData.referralId}
              type="text"
              onChange={handleChange}
              placeholder="Enter your referral Id"
              focusBorderColor="blue.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="date" children="Date*" />
            <Input
              required
              name="date"
              value={formData.date}
              type="date"
              onChange={handleChange}
              placeholder="Enter the date of the payment"
              focusBorderColor="blue.500"
            />
          </Box>
          <Center>
          <button
              className="register-button"
              type="submit"
              onClick={togglePopup}
              disabled={
                !formData.name ||
              !formData.email ||
              !formData.whatsapp ||
              !selectedDomain ||
              !formData.college ||
              !formData.date
              }
            >
              Send
            </button></Center>
            <Center><Box my="2">
            See available internships!{" "}
            <Link to="/internships">
              <Button colorScheme={"blue"} variant="link">
                Click
              </Button>{" "}
              here
            </Link>
          </Box></Center>
        </form>

        {/* Popup message */}
        {isOpen && (
          <div className="popup">
            <div className="popup-inner">
              <img
                className="success-icon"
                src="https://cdn-icons-png.flaticon.com/512/4997/4997714.png"
                alt="Success Icon"
              />
              <h2>Success!</h2>
              <p>
                Thank you for submitting your application for the internship.
                Our team will review your application and get back to you soon.
              </p>
              <button className="close-button" onClick={togglePopup}>
                Close
              </button>
            </div>
          </div>
        )}

        {showConfetti && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
      </VStack>
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

export default Request;
