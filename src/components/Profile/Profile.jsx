import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register';

const Profile = () => {
  const user = {
    name: 'Eshwar',
    email: 'eshwar@gmail.com',
    createdAt: String(new Date().toISOString()),
    role: 'user',
    enrollment: {
      status: 'active',
    },
    wishlist: [
      {
        internship: 'dsfsdf',
        poster:
          'https://media.istockphoto.com/id/1408445036/photo/programming-web-pages-with-html-and-css-code-on-a-desktop-computer.jpg?b=1&s=170667a&w=0&k=20&c=8bzVsHnZpYnd11a97dRNSgGuuzXMP3qA5zqTGB7j97c=',
      },
    ],
  };

  const removeFromWishlistHandler = (id) => {
    console.log(id);
  }

  const changeImageSubmitHandler = (e, image) => {
    e.preventDefault();
    console.log(image);
  }

  const {isOpen, onClose, onOpen} = useDisclosure();

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading children={'Profile'} m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} />
          <Button onClick={onOpen} variant={'ghost'} colorScheme="blue">
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Enrollment" fontWeight={'bold'} />
              {user.enrollment.status === 'active' ? (
                <Text children="Enrolled" />
              ) : (
                <Link to="/enroll">
                  <Button colorScheme="blue">Enroll</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Wishlist" size={'md'} my={'8'} />
      {user.wishlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p="4"
        >
          {user.wishlist.map((element) => (
            <VStack w="48" m="2" key={element.internship}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={element.poster}
              />
              <HStack>
                <Link to={`/internship/${element.internship}`}>
                  <Button variant={'ghost'} colorScheme="blue">
                    Enroll Now
                  </Button>
                </Link>
                <Button onClick={()=>removeFromWishlistHandler(element.internship)}>
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}


      <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};

export default Profile;

function ChangePhotoBox({isOpen, onClose, changeImageSubmitHandler}){
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
        setImagePrev(reader.result);
        setImage(file);
    };
  };

  const closeHandler = ()=>{
    onClose();
    setImagePrev('');
    setImage('');
  }
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={"blur(10px)"}/>
      <ModalContent>
      <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e)=>changeImageSubmitHandler(e, image)}>
              <VStack spacing={'8'}>
                {
                  imagePrev && <Avatar src={imagePrev} boxSize={'48'}/>
                }
                <Input type={'file'} css={{"&::file-selector-button":fileUploadCss}} onChange={changeImage}/>
                <Button w={'full'} colorScheme='blue' type='submit'>Change</Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeHandler} mr={'3'}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
