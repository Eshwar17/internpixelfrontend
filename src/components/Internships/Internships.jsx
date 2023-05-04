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
      <Text children={description} noOfLines={'2'} />
      <HStack>
        <Text
          children={'Creator'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          noOfLines={'2'}
        />
        <Text
          children={creator}
          fontFamily={'body'}
          textTransform={'uppercase'}
          noOfLines={'2'}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size={'xs'}
        textTransform={'uppercase'}
        children={`Lecture - ${lectureCount}`}
      />
      <Heading
        size={'xs'}
        textTransform={'uppercase'}
        children={`Views - ${views}`}
      />
      <Stack direction={['column', 'row']}
      alignItems={"center"}
      >
        <Link to={`/internship/${id}`}>
            <Button colorScheme='blue'>Watch Now</Button>
        </Link>
        <Button colorScheme='blue' variant={"ghost"} onClick={()=>addToPlaylistHandler(id)}>Add to wishlist</Button>
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
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search an internship..."
        type="text"
      />

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
          title={'Sample'}
          description={'Sample'}
          views={23}
          imageSrc={'https://media.istockphoto.com/id/1408445036/photo/programming-web-pages-with-html-and-css-code-on-a-desktop-computer.jpg?b=1&s=170667a&w=0&k=20&c=8bzVsHnZpYnd11a97dRNSgGuuzXMP3qA5zqTGB7j97c='}
          id={'Sample'}
          creator={'Sample boy'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Internships;
