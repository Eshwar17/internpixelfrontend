import { Box, Grid, Heading, Stack, Text, HStack, Progress,Center,Img, Button, useColorModeValue,Avatar, Badge, Link, Image } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
// import Sidebar from '../Sidebar'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart} from './Chart';
import logo from "../../../assets/images/InternPixelLogo.png";
import Linechart from './Linechart'

const DataBox = ({title,qty,qtyPercentage,profit})=>(
    <Box w={['full','20%']} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'} p={'8'} borderRadius={'lg'} >
        <Text children={title}/>
        <HStack spacing={'6'}>
            <Text fontSize={'2xl'} fontWeight={'bold'} children={qty}/>
            <HStack>
            <Text children={`${qtyPercentage}%`}/>
            {profit?<RiArrowUpLine color='green'/>:(
                <RiArrowDownLine color='red'/>
            )}
        </HStack>
        </HStack>
        <Text opacity={0.6} children="Since Last 3 Months"/>
    </Box>
)

const Bar = ({title, value,profit}) => {
    return <Box py={'0'} px={['0','20']}>
        <Heading size={'sm'} children={title} mb={'2'} />
        <HStack w={'full'} alignItems={'center'}>
            <Text children={profit?"0%":`-${value}%`}/>
            <Progress w={'full'} value={profit?value:0} colorScheme='purple'/>
            <Text children={`${value>100?value:100}%`}/>
        </HStack>
    </Box>
}

const Dashboard = () => {
  return (
    <><Center><Img h="14" p="2" src={logo}/></Center>
    <Heading fontFamily={"Poppins"} children="Revenue Dashboard" size={"2xl"} mb={'1'} textAlign={['center']}/>
    <Grid css={{cursor:`url(${cursor}), default`}} minH={'100vh'} templateColumns={['1fr']}>
        <Box boxSizing='border-box' py={'4'} px={['4','0']}>
            <Text textAlign={'center'} opacity={'0.8'} children={`Last updated was on ${String(new Date()).split('G')[0]}`}/>
            <Center py={6}>
      <Box
        maxW={'620px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            ''
          }
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'Poppins'}>
          Full Name
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @linkedinprofile
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Resignation
          <Text color={'blue.400'}>#tags</Text> Location
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #LeadingPrincipals
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #PrincipalPioneers
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
        <marquee><Text color='red.300'>Privacy and Security Notice:This link and its contents are strictly confidential and intended for the exclusive use of the authorized user. It must not be shared with or accessed by any other individual or entity. Your access to this information is granted based on your role and responsibilities. Any unauthorized distribution or sharing of this link may result in a breach of our privacy and security policies. Please ensure that you maintain the confidentiality of this link and its associated data. If you suspect any unauthorized access or have concerns about the security of this information, please contact the appropriate administrator immediately. Thank you for your cooperation in safeguarding our privacy and security protocols.</Text></marquee>
        </Stack>
      </Box>
    </Center>
            
            <Stack direction={['column','row']} minH={'24'} justifyContent={'space-evenly'}>
                <DataBox title="Today's Revenue" qty={0} qtyPercentage={0} profit={true} />
                <DataBox title="Enrollments" qty={0} qtyPercentage={0} profit={true} />
                <DataBox title="Total Revenue Generated" qty={0} qtyPercentage={0} profit={false} />
            </Stack>
                <Heading fontFamily={"Poppins"} textAlign={['center','center']} size={'xl'} mt={4} children="Revolutionary Revenue Streams: The Top 5 Players" pt={['8','0']} ml={['0','16']}/>
            <Box m={['0','16']} borderRadius={'lg'} p={['0','16']} mt={['4','16']} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
                {/* Line Graph here */}
                <Linechart />
            </Box>
            <Grid templateColumns={['1fr','2fr 1fr']}>
                <Box p={'2'}>
                <Heading fontFamily={"Poppins"} textAlign={['center','left']} size={'lg'} children="2023's Unstoppable Revenue Stars: The Top 3 Performers of the Year" my={'8'} ml={['0','16']} />
                <Box textAlign={"center"}>
                    <Text>% - Contribution to InternPixel</Text>
                    <Text color={"blue.500"} fontWeight={"bold"} fontSize={"3xl"}>Rs.346670/-</Text>
                    <Bar profit={true} value={56} />
                    <Text color={"blue.500"} fontWeight={"bold"} fontSize={"3xl"}>Rs.230000/-</Text>
                    <Bar profit={true} value={45} />
                    <Text color={"blue.500"} fontWeight={"bold"} fontSize={"3xl"}>Rs.215480/-</Text>
                    <Bar profit={true} value={43} />
                </Box>
                </Box>
                <Box p={['0','16']} boxSizing='border-box' py='4'>
                    <Heading fontFamily={"Poppins"} textAlign={'center'} size="md" mb={'4'} children="Sales Overview (in %)"/>
                    {/* Doughnut graph */}
                    <DoughnutChart />
                </Box>
            </Grid>
        </Box>
        {/* <Sidebar /> */}
    </Grid>
    </>
  )
}

export default Dashboard
