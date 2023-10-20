import { Box, Flex, Text, Image, VStack, Blur } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const SomethingBigIsComingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate the time left
    const today = new Date();
    const targetDate = new Date("2023-11-20"); // Replace with your target date
    const timeDifference = targetDate - today;
    const secondsLeft = Math.floor(timeDifference / 1000);

    const days = Math.floor(secondsLeft / (24 * 60 * 60));
    const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    setTimeLeft({ days, hours, minutes, seconds });

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      const today = new Date();
      const timeDifference = targetDate - today;
      const secondsLeft = Math.floor(timeDifference / 1000);

      const days = Math.floor(secondsLeft / (24 * 60 * 60));
      const hours = Math.floor((secondsLeft % (24 * 60 * 60)) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      py={{ base: 8, md: 16 }}
      direction={{ base: "column", md: "row" }}
    >
      {/* Blurred Image on the left */}
      <Image
        filter="blur(5px)"
        src={
          "https://img.freepik.com/premium-photo/ai-generated-illustrution-robot-is-interviewing-man-modern-office_441362-10368.jpg?size=626&ext=jpg&ga=GA1.1.377232785.1697539441&semt=ais"
        }
        alt="Blurred Image"
        w={{ base: "80%", md: "40%" }}
        h="auto"
      />

      {/* Text and Countdown on the right */}
      <Box w={{ base: "100%", md: "50%" }} p={8} borderRadius="md">
        <VStack align="center">
          <Text fontSize={{ base: "5xl", md: "5xl" }} color={"blue.600"} textShadow={"1px 2px 3px black"} textAlign={"center"} fontWeight="bold">
            Something Big is Coming
          </Text>
          <Text fontSize="lg" color={"gray.500"} fontWeight="bold" textAlign={"center"}>
            Beneficial to students and interns. Provided for free by InternPixel.
          </Text>
          <Text fontSize={{ base: "3xl", md: "5xl" }} color={"gray.600"} fontWeight="bold">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default SomethingBigIsComingSection;
