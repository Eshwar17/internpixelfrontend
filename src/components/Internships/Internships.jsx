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
          children={"Duration"}
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
          colorScheme="green"
          variant={"ghost"}
          onClick={() => {
            if (title === "Front End Development" || title === "Back End Development" || title === "Full Stack Development" || title === "Javapalooza: A Comprehensive Core Java Internship" || title === "C++ Wizardry: Unleashing the Magic of Programming" || title === "Python Programming Internship: Building Core Skills" || title === "Data Detective Internship(Data Analyst)" || title === "Reactivate Your Coding Skills: Join Our ReactJS Internship Program!" || title === "JavaScript Ninja Internship: Mastering the Art of Web Development") {
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
  const [views, setViews] = useState(4);

  useEffect(() => {
    incrementViews();
  }, []);

  function incrementViews() {
    const startDate = new Date("2023-05-09T00:00:00");
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - startDate.getTime();
    const hourDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const viewsIncrement = Math.floor(hourDiff / 2);
    setViews(9 + viewsIncrement);
    setTimeout(() => {
      incrementViews();
    }, 7200000);
  }
  //auto scroll
  

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
          creator={"2 months"}
          lectureCount={"15"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Back End Development"}
          description={
            "Looking to deepen your backend development skills? Our Node.js internship will teach you how to build scalable and efficient web applications using the powerful JavaScript runtime. Learn how to work with popular Node.js frameworks like Express. Gain real-world experience by building and deploying your own Node.js projects. Join our Node.js internship program and take your backend development skills to the next level!"
          }
          views={"Registrations Closed"}
          imageSrc={"https://img.freepik.com/free-vector/back-end-development-concept-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-1064.jpg?size=626&ext=jpg&ga=GA1.1.136392163.1683044531&semt=ais"}
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"18"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Bug Hunter Internship"}
          description={
            "Looking for a challenging and rewarding internship that will boost your software testing skills? Look no further than our internship! You'll gain hands-on experience with test planning, execution, and automation while working on real-world projects. With expert mentorship, valuable certifications, and a collaborative team environment, this internship will give you the tools you need to succeed in your future career as a software tester."
          }
          views={"2"}
          imageSrc={
            "https://media.istockphoto.com/id/687203692/photo/software-testing-concept-on-black-chalkboard-3d-rendering.jpg?b=1&s=170667a&w=0&k=20&c=6GMTNQekCeIVCbhxhIEF6GL6yEqDQydShro4diLso6w="
          }
          id={"Eshwar"}
          creator={"2 Months"}
          lectureCount={"28"}
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
          creator={"2 Months"}
          lectureCount={"16"}
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
          creator={"1 Month"}
          lectureCount={"11"}
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
          creator={"1 Month"}
          lectureCount={"14"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Javapalooza: A Comprehensive Core Java Internship"}
          description={
            " The Core Java Internship is an opportunity for students to develop their Java programming skills and gain hands-on experience with the language. Through this internship, students will learn the fundamental concepts of Java programming, including object-oriented programming, data structures, and algorithms. Join now and upskill!"
          }
          views={views}
          imageSrc={
            "https://www.mtaeducation.in/images/courses/details/corejava.png"
          }
          id={"Eshwar"}
          creator={"2 Months"}
          lectureCount={"15"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Python Programming Internship: Building Core Skills"}
          description={
            "The Core Python Internship is an opportunity for students to learn the basics of Python programming language. In this internship, students will learn how to write Python scripts and programs, work with various data structures and modules, and develop real-world applications. The program will cover Python syntax, object-oriented programming."
          }
          views={"5"}
          imageSrc={
            "data:image/jpeg;base64,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"
          }
          id={"Eshwar"}
          creator={"2 Months"}
          lectureCount={"14"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"C++ Wizardry: Unleashing the Magic of Programming"}
          description={
            "Join our C++ internship program to explore the possibilities of this powerful programming language and unlock your potential for innovation. You will gain hands-on experience, learn best practices and industry standards, and collaborate with experienced mentors to develop your skills further. Build a strong foundation and unleash your creativity."
          }
          views={views}
          imageSrc={
            "data:image/png;base64,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"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"12"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"JavaScript Ninja Internship: Mastering the Art of Web Development"}
          description={
            "Join our JavaScript Ninja Internship program and take your web development skills to the next level. Learn from experienced mentors and work on real-world projects to gain hands-on experience. Develop your skills in JavaScript, jQuery, and other web technologies. Get certified at the end of the program and start your career as a web developer with confidence."
          }
          views={"9"}
          imageSrc={
            "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?size=626&ext=jpg&ga=GA1.1.136392163.1683044531&semt=sph"
          }
          id={"Eshwar"}
          creator={"4 Months"}
          lectureCount={"24"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Reactivate Your Coding Skills: Join Our ReactJS Internship Program!"}
          description={
            "Our ReactJS Internship provides hands-on experience in building responsive and dynamic user interfaces using the latest front-end web development technologies. Join us to gain practical knowledge on ReactJS, Redux, and other related tools, and to work on real-world projects to enhance your skills and marketability. Join us to become a ReactJS pro!"
          }
          views={"12"}
          imageSrc={
            "https://images.hdqwalls.com/download/react-js-logo-no-1360x768.jpg"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"20"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={"Data Detective Internship(Data Analyst)"}
          description={
            "Join our team as a Data Analyst Intern and become a data detective. Dive into the world of data analysis, unlock insights, and solve complex problems. Gain experience in data cleaning, visualization, and analysis while working with cutting-edge tools and technologies. Why worry about your future when you can analyze it with our Data Analyst Internship at InternPixel! Join us now!"
          }
          views={"4"}
          imageSrc={
            "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.2.136392163.1683044531&semt=ais"
          }
          id={"Eshwar"}
          creator={"3 Months"}
          lectureCount={"21"}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Internships;
