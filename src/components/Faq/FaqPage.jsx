import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Container,
  Heading,
  Center,
} from '@chakra-ui/react';

const FaqPage = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={6} fontFamily={"Poppins"} textAlign="center" fontWeight={"bold"} fontSize="4xl">
        Frequently Asked Questions
      </Heading>
      <Center>
        <svg width="260" height="20" viewBox="0 0 628 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z" fill="#FEBD00"/>
</svg></Center>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            GrapplTech is a platform that connects students and companies by providing bootcamps, trainings(live sessions) and resources to help students advance their careers.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I find bootcamps on GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            To find bootcamps on GrapplTech, you can browse through our bootcamps listings and apply using the Apply Link.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do I need to pay to use GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Yes, you have to pay as little as possible for our training programs, which are designed to enhance your skills and prepare you for your dream careers. However, access to some of our bootcamp listings is provided to you for free. We believe in making valuable opportunities accessible, and that's why we offer affordable training options to help you excel in your career journey.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Do I get placement support for bootcamp?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Yes, at GrapplTech, we offer perfect placement guidance.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Who are the clients at GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Our clients at GrapplTech include a diverse range of stakeholders, from young startups to local businesses looking to enhance their online presence. Our client base consists of individuals and organizations seeking various services such as web development, landing page creation, web application development, app maintenance, and more. We partner with them to meet their specific requirements, helping them grow and succeed in the digital landscape.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Can I get career advice and guidance on GrapplTech?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, GrapplTech offers career advice and resources to help you with resume building, interview preparation, and career development.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Is GrapplTech available globally?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, GrapplTech is available to students and companies worldwide. You can access our platform from anywhere to find bootcamps or career opportunities.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I contact GrapplTech support?
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
                Do you offer bootcamps in specific industries?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, GrapplTech provides bootcamps in various industries. You can explore bootcamp in your preferred domain on our platform.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Can I apply to multiple bootcamps at once?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
            Yes, you can apply to multiple bootcamps on GrapplTech. Simply browse the listings, review the requirements, and submit applications to the bootcamps that interest you.
          </AccordionPanel>
        </AccordionItem>

        
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              During the bootcamp, do you allow grapplers to work on real client projects?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel>
          Yes, at GrapplTech, we provide our grapplers with valuable hands-on experience. Grapplers have the opportunity to work on real client projects right from the inception. This practical exposure allows grapplers to collaborate with our clients, contribute to project development from scratch, and gain insights into real-world challenges and solutions. We believe in offering a dynamic learning environment that prepares grapplers for their future careers.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default FaqPage;
