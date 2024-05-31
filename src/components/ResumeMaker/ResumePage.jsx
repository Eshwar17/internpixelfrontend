import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Flex, Center, Image, Icon
} from "@chakra-ui/react";
import {FcTemplate, FcPrint} from 'react-icons/fc'
import {FiEdit} from "react-icons/fi"
import ResumeForm from '../ResumeBuilder/ResumeForm'


function ResumePage() {
  return (
    <>
    <Container maxW={"container.2xl"} padding={"2"}>
      <Heading children="GrapplTech's Resume Maker" fontFamily={"Poppins"} mt={16} textAlign={["center"]} />
      <Center>
      <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/></svg></Center>
      <Box p={6}>
      <Box flex="1" mb={6} order={[1, 1, 2]}>
          <Center>
            <Image
              src="https://cdn.dribbble.com/users/125056/screenshots/1476165/99miles-resume-builder-icon-ios.gif" // Add your image source here
              alt="GrapplTech Team"
              borderRadius="lg"
              maxW="45%"
              objectFit="cover"
              borderWidth={4}
              borderColor="blue.500"
            />
          </Center>
        </Box>
      <Flex flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Box flex="1" mb={6} pr={[0, 0, 4]} order={[2, 2, 1]}>
          <Heading as="h2" fontSize="2xl" fontFamily={"Poppins"} textAlign={["center"]} mb={4}>
          Crafting Effortless and ATS-Friendly Resumes
          </Heading>
          <Text textAlign={"center"}>
          GrapplTech offers a cutting-edge Resume Maker feature on their website, revolutionizing the way individuals create their resumes. Here are three advantages of using this tool:
          </Text>
        </Box>
      </Flex>
      <Box mt={2}>
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FcTemplate} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Diverse Template Selection(Comming Soon)
      </Heading>
      <Text>
      Users can access a wide array of professionally designed templates, with more continually being added. These templates cover various industries and design preferences, ensuring there's something for everyone. Even with a constantly expanding library, all templates are ATS-friendly.
      </Text>
    </Box>
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FiEdit} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Streamlined Editing Process
      </Heading>
      <Text>
      This Resume Maker simplifies the cumbersome process of creating a resume. Users can directly click on their chosen template, update the sections with their information, and customize it according to their needs. Unlike the traditional method of downloading a template, converting it into a Word document, and aligning content (which can be time-consuming and often leads to formatting issues), this tool offers a hassle-free, intuitive editing experience.
      </Text>
    </Box>
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FcPrint} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Seamless Printing and Saving
      </Heading>
      <Text>
      Once the resume is customized, users can seamlessly print their resume. Easily print your resume directly from our interface, ensuring that your document maintains its layout, formatting, and professional appearance. Whether for an interview or physical submission, our printing feature ensures your resume looks exceptional on paper. 
      </Text>
    </Box>
    <Container w={["95%","70%"]}>
    <marquee><Text color={"red.500"}>For the best user experience, the Resume Maker works optimally on larger screens. For optimal functionality, it's recommended to use the tool on a desktop or laptop.</Text></marquee></Container>
    
  </Flex>
</Box>
      </Box>
      
    </Container>
      <ResumeForm />
    </>
  )
}

export default ResumePage