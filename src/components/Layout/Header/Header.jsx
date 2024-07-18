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
  useDisclosure,
  Img
} from '@chakra-ui/react';
import { RiMenu5Fill } from 'react-icons/ri';
import logo from "../../../assets/images/grappltechlogoimg1.png";
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ColorModeSwitcher zIndex="1000"/>
      <Button
        onClick={onOpen}
        colorScheme={'blue'}
        width="12"
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top="6"
        left="6"
        zIndex={"1000"}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay backdropFilter={'blur(1px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}><center>
            <Img src={logo} maxW="100%" h="auto"/></center>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'6'} alignItems={'flex-start'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/bootcamps" title="Browse All Bootcamps" />
              <LinkButton onClose={onClose} url="/request" title="Apply For A Bootcamp" />
              <LinkButton onClose={onClose} url="/gtcommunitycomponents" title="GT Community Components" />
              <LinkButton onClose={onClose} url="/workshops" title="Workshops & Hackathons" />
              <LinkButton onClose={onClose} url="/resumemaker" title="GrapplTech's Resume Maker" />
              <LinkButton onClose={onClose} url="/partnerregistration" title="Become A Partner" />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About Us" />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
