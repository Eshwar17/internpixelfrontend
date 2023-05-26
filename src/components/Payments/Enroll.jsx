import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Center,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Link
} from "@chakra-ui/react";
import payment from "../../../src/assets/images/payment.jpg";

const Enroll = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <Container h="100vh" py={8}>
       <Heading
          children="Pay now or forever hold your intern-ship!"
          my={"8"}
          textAlign={"center"}
        />

      <VStack spacing={4} alignItems="stretch">
        <Box bg="blue.400" p={4} borderRadius="md" color="white">
        <Text color={"black"} >Pro Pack - ₹<strike>11999.00</strike> 2999.00/-</Text>
        </Box>

        <Box p={4} boxShadow="md" borderRadius="md">
          <Text mb={4}>
            To proceed with the payment, please click the button below to view
            the QR code:
          </Text>
          <Center>
          <Button colorScheme="blue" onClick={handleModalOpen}>
            View QR Code
          </Button>
          </Center>
        </Box>
      </VStack>

      <Text
                color={"black.500"}
                children={`Once done with the payment please enter the TRANSACTION DETAILS in the below page`}
              />
              {/* <a href="https://www.internpixel.fun/request" style={{color:"green",fontSize:"2rem"}}>Link</a> */}
              <Center>
      <Box
        bg="gray.800"
        p={3}
        borderRadius="md"
        display="inline-block"
      >
        <Link
          href="https://www.internpixel.fun/request"
          color="white"
          fontSize="2rem"
          fontWeight="bold"
          textAlign="center"
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          Submit Transaction
        </Link>
      </Box>
    </Center>
        {/* <Text color={"red.300"} children="We are currently experiencing technical difficulties with our Razorpay payment gateway. Our team is working hard to resolve the issue as soon as possible. Meanwhile, you can use our PhonePe QR code to make your payment and send us the transaction id of the payment via our 'Request Internship' link. We apologize for the inconvenience and appreciate your patience while we work to fix this issue." /> */}
       <Text color={"red.300"}><marquee width="100%" direction="left" height="100px">
        We are currently experiencing technical difficulties with our Razorpay payment gateway. Our team is working hard to resolve the issue as soon as possible. Meanwhile, you can use our PhonePe QR code to make your payment and send us the transaction id of the payment via our 'Request Internship' link. We apologize for the inconvenience and appreciate your patience while we work to fix this issue.
</marquee></Text>

      <Modal isOpen={showModal} onClose={handleModalClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment QR Code</ModalHeader>
          <ModalBody>
            <Center>
              <img
                src={payment}
                alt="Payment QR Code"
                width={250}
                height="auto"
              />
            </Center>
            <Text children="Experience convenient payment options, including PhonePe: Use our number 8497977530 for seamless transactions."/>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleModalClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Enroll;
