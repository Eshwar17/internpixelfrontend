import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { TiSocialLinkedinCircular, TiSocialTwitter } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <Box padding={"4"} bg="blackAlpha.800" minH={"10vh"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Heading
            className="mainHeading1"
            children="All Rights Reserved"
            color={"white"}
          />
          {/* <h1 className="mainHeading1">InternPixel</h1> */}
          <Heading
            size="sm"
            textAlign={"center"}
            fontWeight={"200"}
            children="Copyright © 2023 | InternPixel"
            color={"white"}
          />
        </VStack>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Text size={"s"}>Roshini Tech Hub, PFS Club House,</Text>
          <Text>Marathahalli Main Rd, R.J.Gardens,</Text>
          <Text>Bengaluru, Karnataka 560037</Text>
        </VStack>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Text>Mail : support@internpixel.fun</Text>
          <Text>careers@internpixel.fun</Text>
          <Text>Phone : +91 8688561178</Text>
        </VStack>
        <HStack
          spacing={["2", "10"]}
          justifyContent="center"
          color={"white"}
          fontSize="50"
        >
          <a
            href="https://www.linkedin.com/company/internpixel/"
            target={"blank"}
          >
            {/* <TiSocialYoutubeCircular /> */}
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://twitter.com/InternPixel" target={"blank"}>
            {/* <TiSocialInstagramCircular /> */}
            <TiSocialTwitter />
          </a>
          <a href="https://telegram.dog/internpixel" target={"blank"}>
            <FaTelegram />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
