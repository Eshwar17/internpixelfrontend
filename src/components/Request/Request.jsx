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


const Request = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    domain: "",
    transactionId: "",
    date: "",
  });
  const { name, email, whatsapp, domain, transactionId, date } = data;
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
            [name, email, whatsapp, domain, transactionId, date],
          ]),
        }
      );
      await response.json();
      setData({...data,name:"",email:"",whatsapp:"",domain:"",transactionId:"",date:""});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={"center"} spacing="16">
        <Heading children="Request New Course" />

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Box my={"4"}>
            <FormLabel htmlFor="name" children="Name" />
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
            <FormLabel htmlFor="email" children="Email Address" />
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
            <FormLabel htmlFor="whatsapp" children="Whatsapp Mobile Number" />
            <Input
              required
              name="whatsapp"
              value={whatsapp}
              type="tel"
              onChange={handleChange}
              placeholder="Enter your whatsapp number...."
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel htmlFor="domain" children="Internship Domain Name" />
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
              placeholder="Enter the payment transaction id"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel htmlFor="date" children="Date" />
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

          <Button my="4" colorScheme={"blue"} type="submit">
            Send Mail
          </Button>

          <Box my="4">
            See available Courses!{" "}
            <Link to="/courses">
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
