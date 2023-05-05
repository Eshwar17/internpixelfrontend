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

} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
    <VStack className="internship" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={'3'}
        children={title}
        size={'sm'}
      />
      <Text children={description} noOfLines={'15'} />
      <HStack>
        <Text
          children={'Creator'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          noOfLines={'1'}
        />
        <Text
          children={creator}
          fontFamily={'body'}
          textTransform={'uppercase'}
          noOfLines={'1'}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        textTransform={'uppercase'}
        children={`Tasks - ${lectureCount}`}
      />
      <Heading
        size={'xs'}
        textTransform={'uppercase'}
        children={`Enrolled - ${views}`}
      />
      <Stack direction={['column', 'row']}
      alignItems={"center"}
      >
        <Link to={`/internship/${id}`}>
            <Button isDisabled="true" colorScheme='blue'>Curriculum</Button>
        </Link>
        {/* <Button colorScheme='blue' variant={"ghost"} onClick={()=>addToPlaylistHandler(id)}>Add to wishlist</Button> */}
      </Stack>
    </VStack>
  );
};

const Internships = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

    const addToPlaylistHandler = () => {
        console.log("Added to playlist");
    }

  const categories = [
    'Web Development',
    'Java Development',
    'Python Development',
    'Data Structures and Algorithms',
    'Front End Development',
    'Back End Development',
    'Ruby Development',
    'DevOps',
  ];

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Internships" m={'8'} />
      {/* <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search an internship..."
        type="text"
      /> */}

      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Internship
          title={'Front End Development'}
          description={'Our front end development internship program using HTML, CSS, and JavaScript provides hands-on experience in building modern and responsive websites. Interns will learn front-end web development fundamentals, responsive design principles, and JavaScript programming concepts. By the end of the internship, they will have practical skills that can be applied to real-world projects.'}
          views={23}
          imageSrc={'https://media.istockphoto.com/id/1408445036/photo/programming-web-pages-with-html-and-css-code-on-a-desktop-computer.jpg?b=1&s=170667a&w=0&k=20&c=8bzVsHnZpYnd11a97dRNSgGuuzXMP3qA5zqTGB7j97c='}
          id={'Eshwar'}
          creator={'Eshwar Nagaraj'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={'Back End Development'}
          description={'Looking to deepen your backend development skills? Our Node.js internship will teach you how to build scalable and efficient web applications using the powerful JavaScript runtime. Learn how to work with popular Node.js frameworks like Express. Gain real-world experience by building and deploying your own Node.js projects. Join our Node.js internship program and take your backend development skills to the next level!'}
          views={23}
          imageSrc={'https://wallpapercave.com/dwp1x/wp10318694.png'}
          id={'Eshwar'}
          creator={'Eshwar Nagaraj'}
          lectureCount={0}
          addToPlaylistHandler={addToPlaylistHandler}
        />
        <Internship
          title={'Front End Development'}
          description={'Our web development internship program using HTML, CSS, and JavaScript provides hands-on experience in building modern and responsive websites. Interns will learn front-end web development fundamentals, responsive design principles, and JavaScript programming concepts. By the end of the internship, they will have practical skills that can be applied to real-world projects.'}
          views={23}
          imageSrc={'https://media.istockphoto.com/id/1408445036/photo/programming-web-pages-with-html-and-css-code-on-a-desktop-computer.jpg?b=1&s=170667a&w=0&k=20&c=8bzVsHnZpYnd11a97dRNSgGuuzXMP3qA5zqTGB7j97c='}
          id={'Eshwar'}
          creator={'Eshwar Nagaraj'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Internships;
