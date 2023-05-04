import {
  Container,
  Heading,
  VStack,
  Box,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <Container py={'16'} h={'90vh'}>
      <form>
        <Heading
          children="Forget Password"
          my="16"
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="blue.500"
            />
          
          <Button type="submit" w={'full'} colorScheme="blue">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
