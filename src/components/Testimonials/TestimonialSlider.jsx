// CardSlider.js

import React, { useState, useEffect } from 'react';
import {Text, Center, Avatar, Stack, useColorModeValue, Box,Container} from '@chakra-ui/react';
import { testimonials } from './data'; // Import your data
import './Services.css';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 7000); // Change testimonials every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (<div className="area">
  <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    <Box bg={'transparent'}>
    
      <Container w={'full'} py={4} as={Stack} spacing={4}>
        <Stack spacing={0} align={'center'}>
        <h1 className="mainHeading1">Voices of Success</h1>
          <Text textAlign={"center"}>Discover the stories of our thriving community and how InternPixel transformed their careers.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}></Stack>
    <Center>
    
    <Stack
      bg={useColorModeValue('white.200', 'gray.800')}
      boxShadow={'xl'}
      w={["90vw","60vw"]}
      p={2}
      mb={4}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}><Center>
<Avatar name={testimonials[currentIndex].name} /></Center>
  <Text fontSize="xl" fontWeight="bold" color={"#0963ac"} textAlign={"center"}>
  
    {testimonials[currentIndex].name}
  </Text>
  <Text fontSize="md" mt="2" color={"gray.600"} textAlign={"center"}>
    {testimonials[currentIndex].review}
  </Text>
  <Center mt="2">
 <Text color={"#0963ac"}> Rating: {Array(+testimonials[currentIndex].rating).fill("⭐").join("")}</Text>
</Center>
  <Text fontSize="sm" mt="4" color="gray.600" textAlign={"center"}>
    Location: {testimonials[currentIndex].place}
  </Text>
</Stack></Center>
      </Container>
    </Box></div>
  );
};

export default TestimonialSlider;
