import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer,Image, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import cursor from '../../../assets/images/cursor.png'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import InternshipModal from './InternshipModal'

const AdminInternships = () => {
  const internships = [{
    _id:"sdfdgdff",
    title:"React Eshu",
    category:'Web Development',
    poster:{
      url:'https://media.istockphoto.com/id/1408445036/photo/programming-web-pages-with-html-and-css-code-on-a-desktop-computer.jpg?b=1&s=170667a&w=0&k=20&c=8bzVsHnZpYnd11a97dRNSgGuuzXMP3qA5zqTGB7j97c='
    },
    createdBy:"Eshwarrrr",
    views:123,
    numOfVideos:12,
  }]

  const {isOpen, onClose, onOpen} = useDisclosure();

const internshipDetailsHandler=({userId})=>{
onOpen();
}
const deleteButtonHandler=({userId})=>{
console.log(userId);
}

const deleteLectureButtonHandler = ({internshipId,lectureId})=>{
console.log(internshipId);
console.log(lectureId);
}

const addLectureHandler = (e,internshipId,title,description,video)=>{
e.preventDefault();
}

  return (
    <Grid css={{cursor:`url(${cursor}), default`}} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0','8']} overflowX={'auto'} >
        <Heading
            textTransform={'uppercase'}
            children="All Internships"
            my="16"
            textAlign={['center', 'left']}
          />
          <TableContainer w={['100vw','full']}>
            <Table variant={'simple'} size='lg'>
              <TableCaption >All available internships in the database</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creator</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  internships.map((item)=>(
                    <Row internshipDetailsHandler={internshipDetailsHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item}/>
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>

          <InternshipModal id={"sdfsdf"} internshipTitle={"react ourse"} deleteButtonHandler={deleteLectureButtonHandler} addLectureHandler={addLectureHandler} isOpen={isOpen} onClose={onClose} />
        </Box>
        <Sidebar />
    </Grid>
  )


function Row({item, updateHandler,deleteButtonHandler}){
  return (
    <Tr>
      <Td >{item._id}</Td>
      <Td >

        <Image src={item.poster.url}/>
      </Td>
      <Td >{item.title}</Td>
      <Td textTransform={'uppercase'} >{item.category}</Td>
      <Td >{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=>internshipDetailsHandler(item._id)} variant={'outline'} color={'purple.500'}>View Lectures</Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}
}
export default AdminInternships
