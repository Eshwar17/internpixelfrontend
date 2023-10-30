import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Flex, Center, Image, Icon, Button
} from "@chakra-ui/react";
import {FcTemplate, FcPrint} from 'react-icons/fc'
import {FiEdit} from "react-icons/fi"


function ResumePage() {
  return (
    <>
    <Container maxW={"container.2xl"} padding={"2"}>
      <Heading children="InternPixel's Resume Maker" fontFamily={"Poppins"} mt={16} textAlign={["center"]} />
      <Box p={6}>
      <Box flex="1" mb={6} order={[1, 1, 2]}>
          <Center>
            <Image
              src="https://cdn.dribbble.com/users/125056/screenshots/1476165/99miles-resume-builder-icon-ios.gif" // Add your image source here
              alt="InternPixel Team"
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
          InternPixel offers a cutting-edge Resume Maker feature on their website, revolutionizing the way individuals create their resumes. Here are three advantages of using this tool:
          </Text>
        </Box>
      </Flex>
      <Box mt={2}>
  <Flex justifyContent="space-between" flexWrap="wrap">
    <Box flexBasis={['100%', '49%', '30%']} textAlign="center" mb={4}>
      <Icon as={FcTemplate} boxSize={12} color="blue.500" />
      <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
      Diverse Template Selection
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
      Once the resume is customized, users can seamlessly print their resume using standard Windows or Mac shortcuts. They have the flexibility to select odd pages or specifically print only the first page. 
      </Text>
    </Box>
    <Container w={["95%","70%"]}>
    <marquee><Text color={"red.500"}>For the best user experience, the Resume Maker works optimally on larger screens. For optimal functionality, it's recommended to use the tool on a desktop or laptop.</Text></marquee></Container>
    
  </Flex>
</Box>
      </Box>
      
    </Container>
    <Heading as="h1" textAlign="center" fontFamily={"Poppins"} fontSize="3xl" color={"blue.800"} mt={8} mb={8} p={2}>
    Weekly Additions: Explore Our Growing Library of Resume Templates
      </Heading>
      <div className="main1">
        <ul className="cards1">
          <li className="cards1_item">
            <div className="card1">
              <div className="card1_image">
              <span className="note1">Template 1</span>
                <img src="https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-5166.jpg?size=626&ext=jpg&ga=GA1.1.377232785.1697539441&semt=ais" alt='img'/>
              </div>
              <div className="card1_content">
                <h2 className="card1_title">
                Crafting the Perfect Resume
                </h2>
                <div className="card1_text">
                  <p style={{"text-align":"center"}}>
                    <strong>Professional Elegance</strong>
                  </p>
                  <p style={{"text-align":"center","color":"blue", "opacity":"50%"}}>
                    <strong>Exclusive to InternPixels</strong>
                  </p>
                  <Center>
                  {/* <Link to={"https://www.internpixel.fun/resumetemplate1"}> */}
      {/* <Button
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          _hover={{ bg: 'blue.600' }}
        > */}
          {/* Edit Template */}
        {/* </Button> */}
        {/* </Link> */}
        {/* <a href="https://www.internpixel.fun/resumetemplate1"> */}
        <Button colorScheme="blue"
          size="lg"
          borderRadius="full"
          _hover={{ bg: 'blue.600' }}>Edit Template</Button>
          {/* </a> */}
                  </Center>
                  <hr />
                  {/* <p style={{"text-align":"center"}}>
                  Are you struggling to create a resume that stands out in a competitive job market? In our "Crafting the Perfect Resume" workshop, you'll learn the art of resume writing. We'll cover everything from structuring your resume effectively, choosing the right keywords, and tailoring your document for specific job applications. You'll also receive personalized feedback on your current resume to help you make it shine.
                  </p> */}
                  <p style={{"text-align":"center"}}>
                  Crafted for those aiming to make a refined first impression, this template seamlessly blends sophistication with a modern touch. The "Professional Elegance" template offers a clean, structured layout, perfect for professionals across various industries. Its well-defined sections and elegant design ensure your resume stands out while maintaining a professional aesthetic, making it an ideal choice for those seeking a classic yet contemporary appeal.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ResumePage