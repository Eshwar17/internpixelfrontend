import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Request.css";
import Confetti from "react-confetti";

const Request = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    domain: "",
    transactionId: "",
    referralId: "",
    date: "",
  });
  const { name, email, whatsapp, domain, transactionId, referralId, date } = data;
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

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
            [name, email, whatsapp, domain, transactionId,referralId, date],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        email: "",
        whatsapp: "",
        domain: "",
        transactionId: "",
        referralId: "",
        date: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setShowConfetti(!showConfetti);
  };

  return (
    <Container className="requestHeading" h="100vh" mb={"16"}>
      <VStack h="full" justifyContent={"center"} spacing="8">
        <Heading className="requesttitle" children="Request An Internship" />

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box my={"4"}>
            <FormLabel htmlFor="name" children="Name*" />
            <Input
              required
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Abc"
              type={"text"}
              focusBorderColor="blue.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="email" children="Email Address*" />
            <Input
              required
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              type={"email"}
              focusBorderColor="blue.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="whatsapp" children="Whatsapp Mobile Number*" />
            <Input
              required
              name="whatsapp"
              value={whatsapp}
              type="tel"
              onChange={handleChange}
              placeholder="Enter your whatsapp number"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel htmlFor="domain" children="Internship Domain Name*" />
            <Input
              required
              name="domain"
              type="text"
              value={domain}
              onChange={handleChange}
              placeholder="Enter the internship domain you are interested for"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel
              htmlFor="transactionId"
              children="Payment Transaction ID"
            />
            <Input
              required
              name="transactionId"
              value={transactionId}
              type="text"
              onChange={handleChange}
              placeholder="Enter your payment transaction id"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel
              htmlFor="referralnId"
              children="Referral Id (If you have one)"
            />
            <Input
              name="referralId"
              value={referralId}
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
              value={date}
              type="date"
              onChange={handleChange}
              placeholder="Enter the date of the payment"
              focusBorderColor="blue.500"
            />
          </Box>

          {/* <Button my="4" colorScheme={"blue"} type="submit">
            Send Mail
          </Button> */}
          <div className="popup-container">
            <button
              className="register-button"
              type="submit"
              onClick={togglePopup}
              disabled={!name || !email || !whatsapp || !domain || !transactionId || !date}
            >
              Send
            </button>
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
                    Thank you for submitting your application for the
                    internship. Our team will review your application and get
                    back to you soon. You can even attach payment screenshots and mail us at internpixel@zohomail.in.
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
          </div>

          <Box my="2">
            See available Courses!{" "}
            <Link to="/internships">
              <Button colorScheme={"blue"} variant="link">
                Click
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};
export default Request;
