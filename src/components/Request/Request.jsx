import {
  Container,
  Heading,
  VStack,
  Button,
  Box,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [internship, setInternship] = useState('');

  return (
    <Container h="92vh">
      <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Request New Internship" />
        <form style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              type="text"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="blue.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="internship" children="Internship" />
            <Textarea
              required
              id="internship"
              value={internship}
              onChange={e => setInternship(e.target.value)}
              placeholder="Explain the internship details..."
              focusBorderColor="blue.500"
            />
          </Box>

          <Button my="4" colorScheme="blue" type="submit">
            Send Mail
          </Button>

          <Box my={'4'}>
            See available Internships!{' '}
            <Link to="/internships">
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

export default Request;
