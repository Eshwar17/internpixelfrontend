import { Container, Heading, VStack, Button, Box, FormLabel, Input, Textarea } from '@chakra-ui/react';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {


  const [data, setData] = useState({
    name: "",
    email: "",
    message:"",
  });
  const { name, email, message} = data;
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
          body: JSON.stringify([
            [name, email, message],
          ]),
        }
      );
      await response.json();
      setData({...data,name:"",email:"",message:""});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container h="92vh">
      <VStack h={"full"} justifyContent={"center"} spacing={'16'}>
      
        <Heading children="Contact Us" />
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name"
              type="text"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={'4'}>
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
          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Enter you message"
              focusBorderColor="blue.500"
            />
          </Box>
          
          <Button my="4" colorScheme="blue" type="submit">
            Send Mail
          </Button>

          <Box my={'4'}>
            Request for an internship?{' '}
            <Link to="/request">
              <Button colorScheme="blue" variant={'link'}>
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
