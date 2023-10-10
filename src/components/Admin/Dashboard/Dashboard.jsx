import { Box, Grid, Heading, Stack, Text, HStack, Progress,Center,Img } from '@chakra-ui/react'
import React from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
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
    return <Box py={'4'} px={['0','20']}>
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
    <Grid css={{cursor:`url(${cursor}), default`}} minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box boxSizing='border-box' py={'16'} px={['4','0']}>
            <Text textAlign={'center'} opacity={'0.5'} children={`Last updated was on ${String(new Date()).split('G')[0]}`}/>
            <Heading fontFamily={"Poppins"} children="Leaderboard" ml={['0','16']} mb={'16'} textAlign={['center']}/>
            <Stack direction={['column','row']} minH={'24'} justifyContent={'space-evenly'}>
                <DataBox title="Intern Newbies" qty={1690} qtyPercentage={96} profit={true} />
                <DataBox title="Intern Achievers" qty={1679} qtyPercentage={96} profit={true} />
                <DataBox title="Intern Wannabes" qty={11} qtyPercentage={4} profit={false} />
            </Stack>
            <Box m={['0','16']} borderRadius={'lg'} p={['0','16']} mt={['4','16']} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
                <Heading fontFamily={"Poppins"} textAlign={['center','left']} size={'md'} children="The Fab Five Interns" pt={['8','0']} ml={['0','16']}/>
                {/* Line Graph here */}
                <Linechart />
            </Box>
            <Grid templateColumns={['1fr','2fr 1fr']}>
                <Box p={'4'}>
                <Heading fontFamily={"Poppins"} textAlign={['center','left']} size={'md'} children='Top 3 Intern Avengers' my={'8'} ml={['0','16']} />
                <Box>
                    <Bar fontFamily={"Poppins"} profit={true} title="Aarav Patel(B24)" value={94} />
                    <Bar profit={true} title="Bharath(B13)" value={93} />
                    <Bar profit={true} title="Riya Sharma(B23)" value={89} />
                </Box>
                </Box>
                <Box p={['0','16']} boxSizing='border-box' py='4'>
                    <Heading fontFamily={"Poppins"} textAlign={'center'} size="md" mb={'4'} children="The Intern Brigade"/>
                    {/* Doughnut graph */}
                    <DoughnutChart />
                </Box>
            </Grid>
        </Box>
        <Sidebar />
    </Grid>
    </>
  )
}

export default Dashboard
