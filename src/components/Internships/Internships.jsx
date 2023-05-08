/* eslint-disable no-unused-vars */
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Internship = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="internship" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
      <Heading
        textAlign={["center", "left"]}
        maxW={"200px"}
        fontFamily={"sans-serif"}
        noOfLines={"3"}
        children={title}
        size={"sm"}
      />
      <Text children={description} noOfLines={"17"} />
      <HStack>
        <Text
          children={"Creator"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          noOfLines={"1"}
        />
        <Text
          children={creator}
          fontFamily={"body"}
          textTransform={"uppercase"}
          noOfLines={"1"}
        />
      </HStack>
      <Heading
        textAlign={"center"}
        size={"xs"}
        textTransform={"uppercase"}
        children={`Assignments - ${lectureCount}`}
      />
      <Heading
        size={"xs"}
        textTransform={"uppercase"}
        children={`Enrolled - ${views}`}
      />
      <Stack direction={["column", "row"]} alignItems={"center"}>
        <Link to={`/internship/${id}`}>
          <Button isDisabled="true" colorScheme="blue">
            Curriculum
          </Button>
        </Link>
        <Button
  colorScheme='blue'
  variant={"ghost"}
  onClick={() => {
    if (title === "Front End Development") {
      window.location.href = "https://www.internpixel.fun/enroll";
    } else {
      addToPlaylistHandler(id);
    }
  }}
>
  Checkout Our Plan
</Button>

      </Stack>
    </VStack>
  );
};

const Internships = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const addToPlaylistHandler = () => {
    console.log("Added to playlist");
  };

  const categories = [
    "Web Development",
    "Java Development",
    "Python Development",
    "DSA",
    "Front End Development",
    "Back End Development",
    "Ruby Development",
    "DevOps",
  ];
  const [views, setViews] = useState(9);

  useEffect(() => {
    incrementViews();
  }, []);

  function incrementViews() {
    const startDate = new Date("2023-05-08T00:00:00");
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const hourDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const viewsIncrement = Math.floor(hourDiff / 2);
    setViews(9 + viewsIncrement);
    setTimeout(() => {
      incrementViews();
    }, 7200000);
  }
  

  return (
    <Container minH={"95vh"} maxW={"container.lg"} paddingY={"8"}>
      <Heading children="All Internships" m={"8"} />
      {/* <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search an internship..."
        type="text"
      /> */}

      <HStack
        overflowX={"auto"}
        paddingY="8"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={"60"}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Internship
          title={"Front End Development"}
          description={
            "Our front end development internship program using HTML, CSS, and JavaScript provides hands-on experience in building modern and responsive websites. Interns will learn front-end web development fundamentals, responsive design principles, and JavaScript programming concepts. By the end of the internship, they will have practical skills that can be applied to real-world projects. Join Us and upskill yourself for your better career!"
          }
          views={views}
          imageSrc={
            "https://media.istockphoto.com/id/1408445036/photo/programming-web-pages-with-html-and-css-code-on-a-desktop-computer.jpg?b=1&s=170667a&w=0&k=20&c=8bzVsHnZpYnd11a97dRNSgGuuzXMP3qA5zqTGB7j97c="
          }
          id={"Eshwar"}
          creator={"Eshwar Nagaraj"}
          lectureCount={12}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Back End Development"}
          description={
            "Looking to deepen your backend development skills? Our Node.js internship will teach you how to build scalable and efficient web applications using the powerful JavaScript runtime. Learn how to work with popular Node.js frameworks like Express. Gain real-world experience by building and deploying your own Node.js projects. Join our Node.js internship program and take your backend development skills to the next level!"
          }
          views={"Registrations Closed"}
          imageSrc={"https://wallpapercave.com/dwp1x/wp10318694.png"}
          id={"Eshwar"}
          creator={"Eshwar Nagaraj"}
          lectureCount={20}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Full Stack Development"}
          description={
            "Our full-stack development internship program using HTML, CSS, and JavaScript provides hands-on experience in building modern and responsive web applications. Interns will learn full-stack web development fundamentals, including server-side programming with Node.js, database management with MongoDB. By the end of the internship, they will have practical skills that can be applied to real-world full-stack development projects."
          }
          views={"Coming Soon"}
          imageSrc={
            "https://e1.pxfuel.com/desktop-wallpaper/574/84/desktop-wallpaper-net-full-stack-developer-full-stack.jpg"
          }
          id={"Eshwar"}
          creator={"Eshwar Nagaraj"}
          lectureCount={22}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Client Project"}
          description={
            "The US-based client, an Apple retailer store, requires a website to showcase their products and services to potential customers. The website needs to have a clean and modern design that reflects the brand's aesthetics and values. It should be user-friendly and easy to navigate. The website should have a responsive design that works seamlessly across desktop and mobile devices. The client wants to have an online store feature where customers can make purchases directly."
          }
          views={views}
          imageSrc={
            "https://media.istockphoto.com/id/840610244/photo/business-people-negotiating-a-contract.jpg?b=1&s=170667a&w=0&k=20&c=trkY10lxjNdz1jENh-0puoF91D4TNK1QZln_2yBMdSw="
          }
          id={"Eshwar"}
          creator={"Interns"}
          lectureCount={"14 Tasks"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Client Project"}
          description={
            "A car reselling dealer is looking for a website to host their inventory of pre-owned vehicles for sale. The website should allow visitors to search for specific cars based on make, model, year, price, and other relevant criteria. The dealer wants to showcase high-quality images and detailed descriptions for each car, along with vehicle history reports and Carfax reports. The website should have a clean and modern design that is easy to navigate and mobile-friendly."
          }
          views={"0"}
          imageSrc={
            "https://media.istockphoto.com/id/1057946590/photo/professional-salesperson-during-work-with-customer-at-car-dealership.jpg?b=1&s=170667a&w=0&k=20&c=bJkXlImr6kQgBhdvLuA9Zj5F2ZVB7SsNwliVsY43r7A="
          }
          id={"Eshwar"}
          creator={"Interns"}
          lectureCount={"10 Tasks"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Client Project"}
          description={
            "The client is a travelling agency dealer who requires a website to showcase their range of travel packages and services. The website should allow users to search for destinations, view travel itineraries, and make bookings online. The design of the website should be modern and visually appealing, with an emphasis on user experience. The client also requires integration with popular payment gateways to enable secure transactions. The website should also be mobile responsive."
          }
          views={"0"}
          imageSrc={
            "https://cdn.pixabay.com/photo/2020/02/04/13/35/connection-4818168__340.jpg"
          }
          id={"Eshwar"}
          creator={"Interns"}
          lectureCount={"15 Tasks"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Internships;
