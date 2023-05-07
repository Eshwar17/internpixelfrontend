import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/Introduction.mp4';

const InternshipPage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const lectures = [
    {
      _id: 'sadsfdsf',
      title: 'Sample',
      description: 'Sample description',
      video: {
        url: 'saadsf',
      },
    },
    {
      _id: 'sadsfdsf2',
      title: 'Sample2',
      description: 'Sample description',
      video: {
        url: 'saadsf',
      },
    },
    {
      _id: 'sadsfdsf3',
      title: 'Sample3',
      description: 'Sample description',
      video: {
        url: 'saadsf',
      },
    },
  ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          width={'100%'}
          src={introVideo}
          controls
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading m={'4'}>{`#${lectureNumber + 1} ${
          lectures[lectureNumber].title
        }`}</Heading>
        <Heading m={'4'}>Description</Heading>
        <Text children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: 0,
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default InternshipPage;
