import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialLinkedinCircular,
  TiSocialTwitter,
} from 'react-icons/ti';
import { FaTelegram } from 'react-icons/fa';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.800" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            size="sm"
            textAlign={"center"}
            children="Copyright © 2023 | InternPixel"
            color={'white'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="#" target={'blank'}>
            {/* <TiSocialYoutubeCircular /> */}
            <TiSocialLinkedinCircular />
          </a>
          <a href="#" target={'blank'}>
            {/* <TiSocialInstagramCircular /> */}
            <TiSocialTwitter />
          </a>
          <a href="#" target={'blank'}>
            <FaTelegram />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
