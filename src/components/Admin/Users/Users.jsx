import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import cursor from '../../../assets/images/cursor.png'
import logo from "../../../assets/images/InternPixelLogo.png";
import { Center, Img } from '@chakra-ui/react';

const Users = () => {
  const users = [{
    _id:"1",
    name:"Aarav Patel",
    role:'Student',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Team Lunch"
  },
  {
    _id:"2",
    name:"Bharath",
    role:'Student',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Team Lunch"
  },
  {
    _id:"3",
    name:"Riya Sharma",
    role:'Working Professional',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Team Lunch"
  },
  {
    _id:"4",
    name:"Arjun Gupta",
    role:'Student',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Team Lunch"
  },
  {
    _id:"5",
    name:"Siddharth Reddy",
    role:'Student',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Team Lunch"
  },
  {
    _id:"6",
    name:"Nisha Verma",
    role:'Student',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Goodies"
  },
  {
    _id:"7",
    name:"Rohan Desai",
    role:'Student',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Goodies"
  },
  {
    _id:"8",
    name:"Ananya Choudhary",
    role:'Student',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Goodies"
  },
  {
    _id:"9",
    name:"Aditya Mehta",
    role:'Student',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Goodies"
  },
  {
    _id:"10",
    name:"Pooja Singh",
    role:'Working Professional',
    enrollment:{
      status:'active'
    },
    email:"Eligible for Goodies"
  }
]


const updateHandler=(userId)=>{
console.log(userId);
}
const deleteButtonHandler=(userId)=>{
console.log(userId);
}

  return (
    <Grid css={{cursor:`url(${cursor}), default`}} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0','16']} overflowX={'auto'} >
        {/* <Center><Img h="14" p="2" src={logo}/></Center> */}
        <Heading
            // textTransform={'uppercase'}
            children="Top Ten Interns"
            fontFamily={"Poppins"}
            my="16"
            textAlign={['center']}
          />
          <TableContainer w={['100vw','full']}>
            <Table variant={'simple'} size='lg'>
              <TableCaption >Our top interns can code with one hand and drink coffee with the other, all while juggling deadlines like a pro</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Incentives</Th>
                  <Th>Role</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  users.map((item)=>(
                    <Row updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item}/>
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Sidebar />
    </Grid>
  )
}

export default Users

function Row({item, updateHandler,deleteButtonHandler}){
  return (
    <Tr>
      <Td >{item._id}</Td>
      <Td >{item.name}</Td>
      <Td >{item.email}</Td>
      <Td >{item.role}</Td>
      {/* <Td >{item.enrollment.status==="active"?"Active":"Not Active"}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button onClick={()=>updateHandler(item._id)} variant={'outline'} color={'purple.500'}>Change Role</Button>
          <Button onClick={()=>deleteButtonHandler(item._id)} color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td> */}
    </Tr>
  )
}