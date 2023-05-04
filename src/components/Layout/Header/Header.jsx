import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiMenu5Fill,RiLogoutBoxLine,RiDashboardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = false;
  const user = {
    role: "admin",
  };
  const logoutHandler = () => {
    console.log("Logged Out");
    onClose();
  }

  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme={'blue'}
        width="12"
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top="6"
        left="6"
        zIndex={"10"}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(1px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>IteTech</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'6'} alignItems={'flex-start'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/internships" title="Browse All Internships" />
              <LinkButton onClose={onClose} url="/request" title="Request An Internship" />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About Us" />

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated?(<>
                  <VStack>
                    <HStack>
                    <Link onClick={onClose} to="/profile">
                    <Button variant={"ghost"} colorScheme={'blue'}>Profile</Button>
                    </Link>
                    <Button variant={"ghost"} onClick={logoutHandler}>
                    <RiLogoutBoxLine />
                    Logout</Button>
                    </HStack>


{
  user && user.role==="admin" && <Link onClick={onClose} to='/admin/dashboard'>
    <Button colorScheme={"purple"} variant={"ghost"}>
    <RiDashboardFill style={{margin:'4px'}}/>
    Dashboard</Button>
  </Link>
}

                  </VStack>
                </>):(<>
                  <Link onClick={onClose} to="/login">
                    <Button colorScheme={'blue'}>Login</Button>
                  </Link>
                  <p>OR</p>
                  <Link onClick={onClose} to="/register">
                    <Button colorScheme={'blue'}>Sign Up</Button>
                  </Link>
                </>)}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
