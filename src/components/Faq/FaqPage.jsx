import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';

const FaqPage = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6} fontFamily={"Poppins"} textAlign="center" fontWeight={"bold"} fontSize="4xl">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is InternPixel?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            InternPixel is a platform that connects students and companies by providing internship opportunities, trainings(live sessions) and resources to help students advance their careers.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I find internships on InternPixel?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            To find internships on InternPixel, you can browse through our internship(trainings included) listings and apply using the Apply Link.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do I need to pay to use InternPixel?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Yes, you have to pay as little as possible for our training programs, which are designed to enhance your skills and prepare you for internships. However, access to our internship listings and resources is provided to you for free. We believe in making valuable opportunities accessible, and that's why we offer affordable training options to help you excel in your career journey.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Do I get stipend for internship?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Yes, at InternPixel, we offer a two-phase internship program. Initially, you will be assigned an unpaid internship to gain valuable experience and build your skills. After the first phase, based on your performance and dedication, your internship may be extended, and you will receive a very competitive stipend. We believe in rewarding talent and hard work, and our stipends reflect our commitment to recognizing your contributions.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Who are the clients at InternPixel?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Our clients at InternPixel include a diverse range of stakeholders, from young startups to local businesses looking to enhance their online presence. Our client base consists of individuals and organizations seeking various services such as web development, landing page creation, web application development, app maintenance, and more. We partner with them to meet their specific requirements, helping them grow and succeed in the digital landscape.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Can I get career advice and guidance on InternPixel?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, InternPixel offers career advice and resources to help you with resume building, interview preparation, and career development.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Is InternPixel available globally?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, InternPixel is available to students and companies worldwide. You can access our platform from anywhere to find internships or post internship opportunities.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I contact InternPixel support?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            You can reach out to our support team by visiting the Contact Us page on our website. We'll be happy to assist you with any questions or issues you may have.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do you offer internships in specific industries?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, InternPixel provides internship listings in various industries, including technology, finance, healthcare, and more. You can explore internships in your preferred industry on our platform.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Can I apply to multiple internships at once?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, you can apply to multiple internships on InternPixel. Simply browse the listings, review the requirements, and submit applications to the internships that interest you.
          </AccordionPanel>
        </AccordionItem>

        
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              During the internship, do you allow interns to work on real client projects?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Yes, at InternPixel, we provide our interns with valuable hands-on experience. Interns have the opportunity to work on real client projects right from the inception. This practical exposure allows interns to collaborate with our clients, contribute to project development from scratch, and gain insights into real-world challenges and solutions. We believe in offering a dynamic learning environment that prepares interns for their future careers.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default FaqPage;
