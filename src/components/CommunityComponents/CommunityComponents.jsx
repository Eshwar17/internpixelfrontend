import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Center,
  Image,
  Icon,
  Button
} from "@chakra-ui/react";
import { HiLibrary } from "react-icons/hi";
import { FaBusinessTime } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import cooking from "../../assets/images/cooking.png";

function Services() {
  return (
    <>
      <Container maxW={"container.2xl"} padding={"2"}>
        <Heading
        class="headerddd"
          children="LEGO for Web Developers: Build Anything with Grabbit & Go"
          fontFamily={"Poppins"}
          textAlign={["center"]}
        />
        <Center>
          <svg
            width="260"
            height="20"
            viewBox="0 0 628 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
              fill="#FEBD00"
            />
          </svg>
        </Center>
        <Box p={6}>
          <Box flex="1" mb={6} order={[1, 1, 2]}>
            <Center>
              <Image
                src="https://img.freepik.com/free-vector/people-communicating-via-social-media_74855-5551.jpg?w=1060&t=st=1718341179~exp=1718341779~hmac=c7623ee89914fa53c79933f5a54e9da4da35b201ced4ffd81b648730a870cf54" // Add your image source here
                alt="GrapplTech Team"
                borderRadius="lg"
                maxW="45%"
                objectFit="cover"
                borderWidth={4}
                borderColor="blue.500"
              />
            </Center>
          </Box>
          <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box flex="1" mb={6} pr={[0, 0, 4]} order={[2, 2, 1]}>
              <Heading
                as="h2"
                fontSize="2xl"
                fontFamily={"Poppins"}
                textAlign={["center"]}
                mb={4}
              >
                Grapplers Unite! Discover Powerful Web Components Created by
                Your Peers.
              </Heading>
              <Center>
                <svg
                  width="260"
                  height="20"
                  viewBox="0 0 628 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
                    fill="#FEBD00"
                  />
                </svg>
              </Center>
              <Text textAlign={"center"}>
                Tired of building websites from scratch? Feeling like a hamster
                on a wheel of code? Introducing Grabbit & Go, your one-stop shop
                for web components built by the awesome GrapplTech community!
                Stop reinventing the wheel (or the dropdown menu) and unleash
                your inner Picasso (of web design, that is). With Grabbit & Go,
                you can:
              </Text>
            </Box>
          </Flex>
          
          <Box mt={2}>
            <Flex justifyContent="space-between" flexWrap="wrap">
              {/* Education First */}
              <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={4}>
                <Icon as={HiLibrary} boxSize={12} color="blue.500" />
                <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
                  Mix and match like a coding fashionista
                </Heading>
                <Text>
                  Forget monolithic libraries, pick the exact components you
                  need to build your dream website.
                </Text>
              </Box>
              {/* Community Driven */}
              <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={4}>
                <Icon as={FaBusinessTime} boxSize={12} color="blue.500" />
                <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
                  Stop writing the same code over and over (and over)
                </Heading>
                <Text>
                  Why waste time when the GrapplTech community has already done
                  the heavy lifting? Snag those pre-built components and focus
                  on what matters - making your website epic.
                </Text>
              </Box>
              {/* Innovation Hub */}
              <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={4}>
                <Icon as={FaCoffee} boxSize={12} color="blue.500" />
                <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
                  Channel your inner couch potato coder
                </Heading>
                <Text>
                  Building websites shouldn't be a chore. Grab a cup of chai (or
                  your beverage of choice) and browse our curated selection of
                  web components.
                </Text>
              </Box>
            </Flex>
          </Box>
          {/* Application process */}
          
        </Box>
      </Container>
      <Heading
        as="h1"
        textAlign="center"
        fontFamily={"Poppins"}
        fontSize="3xl"
        color={"blue.800"}
        mt={8}
        mb={8}
        p={2}
      >
        Fresh Out the Oven: Community-Cooked Web Component Templates (Coming
        Soon!)
      </Heading>
      <Center>
        <svg
          width="260"
          height="20"
          viewBox="0 0 628 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
            fill="#FEBD00"
          />
        </svg>
      </Center>
      <div className="main1">
        
        <center>
          <Text>
            Our amazing Grappler community isn't just building awesome
            components, they're whipping up some incredible web component
            templates too! Get ready to level up your development workflow with
            pre-built solutions you can easily customize. Stay tuned, these
            tasty templates will be served up soon!
          </Text>
          <img src={cooking} width={"500px"} alt="img" />
        </center>
      </div>
      <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box flex="1" mb={6} pr={[0, 0, 4]} order={[2, 2, 1]}>
              <Heading
                as="h2"
                fontSize="2xl"
                fontFamily={"Poppins"}
                textAlign={["center"]}
                mb={4}
              >
                Join Us in Building the Future: Contribute to GrapplTech!
              </Heading>
              <Center>
                <svg
                  width="260"
                  height="20"
                  viewBox="0 0 628 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M627.986 1.00956C606.425 2.19536 584.864 3.33831 563.318 4.58126C526.8 6.68141 490.282 8.83876 453.764 10.9675C417.073 13.1105 380.369 15.2678 343.678 17.3822C326.496 18.368 309.299 19.8824 292.102 19.9967C278.063 20.0824 264.024 18.4966 249.986 17.5537C206.994 14.6535 164.016 11.6104 121.024 8.79587C90.6637 6.81001 60.2894 5.13845 29.9294 3.2526C19.9529 2.63826 9.97646 1.80961 0 0.466655C14.0388 0.466655 28.0632 0.466655 42.1021 0.466655C74.7875 0.495229 107.473 0.552373 140.158 0.552373C153.494 0.552373 166.858 -0.00475617 180.165 0.609576C188.347 0.981032 196.457 0.266665 204.611 0.580974C213.396 0.923857 222.195 0.566659 230.994 0.552373C239.779 0.552373 248.579 0.523809 257.364 0.652391C259 0.680964 260.608 1.46674 262.546 1.99535C264.986 -2.07638 269.996 1.48104 274.001 0.666691C274.876 0.480963 276.183 2.3668 276.786 2.88113C277.991 2.28108 279.671 0.680992 281.365 0.680992C317.237 0.580984 353.109 0.652418 388.981 0.680992C394.924 0.680992 400.867 0.680992 406.968 0.680992C407.212 2.56685 407.413 4.08124 407.743 6.56714C408.705 4.13839 409.35 2.50971 410.183 0.42384C418.021 0.42384 425.916 0.609499 433.811 0.352337C438.821 0.195182 442.223 1.16671 441.72 7.25288C441.964 5.58132 441.663 3.42406 442.61 2.38112C443.658 1.22389 445.811 0.852423 447.548 0.580974C449.429 0.295238 451.395 0.509558 453.821 0.509558C454.323 2.49542 454.812 4.45265 455.601 7.59575C455.73 1.95247 455.658 -0.819169 462.348 1.88103C467.228 3.85261 473.961 0.766681 479.875 0.738108C528.379 0.55238 576.897 0.552418 625.402 0.509558C626.263 0.509558 627.124 0.595229 628 0.63809C628 0.766671 628 0.880979 628 1.00956H627.986Z"
                    fill="#FEBD00"
                  />
                </svg>
              </Center>
              
              <Text textAlign={"center"}>
              We welcome your passion and creativity! Please fill out the application form below so that our team can reach out to you. By participating in this initiative, you will gain valuable experience, and we will recognize your efforts with a certificate that you can proudly add to your resume and coursework.
              <br></br>
              <br></br>
              The main advantage of this contribution is that it is considered as an internship experience, allowing you to receive a certificate upon completion. This certificate can be a valuable addition to your resume and coursework, showcasing your skills and dedication.

Ready to make an impact? Apply now and become a part of the GrapplTech community!
              </Text>
              <Center>
              <a href="https://forms.gle/J94QRjhk6x5AUDmc8" target="_blank" rel="noopener noreferrer">
              <Button size={"lg"} colorScheme="blue">
                Click here to apply
              </Button>
              </a></Center>
            </Box>
          </Flex>
          
          <Box mt={2}>
            <Flex justifyContent="space-between" flexWrap="wrap">
              {/* Education First */}
              <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={4}>
                <Icon as={FaFileAlt} boxSize={12} color="blue.500" />
                <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
                Fill out the application form
                </Heading>
                <Text>
                Provide your personal details, resume, and explain your motivation for contributing to GrapplTech.
                </Text>
              </Box>
              {/* Community Driven */}
              <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={4}>
                <Icon as={FaEye} boxSize={12} color="blue.500" />
                <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
                Review process
                </Heading>
                <Text>
                Our team will carefully review your application and resume. You will be notified of the outcome within 1 week.
                </Text>
              </Box>
              {/* Innovation Hub */}
              <Box flexBasis={["100%", "49%", "30%"]} textAlign="center" mb={4}>
                <Icon as={FaAward} boxSize={12} color="blue.500" />
                <Heading as="h3" fontSize="xl" fontFamily={"Poppins"} mt={2}>
                Certificate issuance
                </Heading>
                <Text>
                Upon successful review and completion of your contribution, we will issue a certificate of appreciation. This will serve as an internship experience, enhancing your professional credentials.
                </Text>
              </Box>
            </Flex>
            {/* Application process */}
            
          </Box>
    </>
  );
}

export default Services;
