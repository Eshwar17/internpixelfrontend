import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import React from "react";
import payment from "../../../src/assets/images/payment.jpg";

const Enroll = () => {
  return (
    <>
      <Container h={"95vh"} padding={"8"}>
        <Heading
          children="Pay now or forever hold your intern-ship!"
          my={"8"}
          textAlign={"center"}
        />
        <VStack
          boxShadow={"lg"}
          alignItems={"stretch"}
          borderRadius={"lg"}
          spacing={"0"}
        >
          <Box bg={"blue.400"} p={"4"} css={{ borderRadius: "8px 8px 0 0" }}>
            <Text color={"black"} >Pro Pack - ₹<strike>11999.00</strike> 1999.00/-</Text>
          </Box>

          <Box p={"4"}>
            <VStack textAlign={"center"} px={"8"} mt={"2"} spacing={"0"}>
              {/* <Text
                color={"black.500"}
                children={`Join Pro Pack and Get Access to all content.`}
              /> */}
              <Text
                color={"black.500"}
                children={`Once done with the payment please enter the TRANSACTION DETAILS in the below page`}
              />
              <a href="https://www.internpixel.fun/request" style={{color:"green",fontSize:"2rem"}}>Link</a>

              {/* <Heading size={'sm'} children="₹2999 Only"/> */}
            </VStack>
            {/* <Img src={payment} size="md" w={'200'} /> */}
            {/* <Center><img src={payment} width="300" height="auto" alt="payment qr code" /></Center> */}
            <Center><img src={payment} width="250" height="auto" alt="payment qr code" /></Center>
            {/* <Button my={'8'} w={"full"} colorScheme='blue'>Buy Now</Button> */}
          </Box>
        </VStack>
        
      </Container>
      <VStack p='8' mt='4'>
        <Text color={"red.300"} children="We are currently experiencing technical difficulties with our Razorpay payment gateway. Our team is working hard to resolve the issue as soon as possible. Meanwhile, you can use our PhonePe QR code to make your payment and send us the transaction id of the payment via our 'Request Internship' link. We apologize for the inconvenience and appreciate your patience while we work to fix this issue." />
      </VStack>
    </>
  );
};

export default Enroll;
