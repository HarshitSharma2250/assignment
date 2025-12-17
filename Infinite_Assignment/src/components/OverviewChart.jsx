import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Link,
  useBreakpointValue,
  Grid,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { IoIosArrowDown } from "react-icons/io";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Aug",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Sales",
      data: [950, 600, 1100, 300, 1300, 750, 850, 500, 1350, 500,700, 200, 500],
      backgroundColor: "rgba(100, 40, 200, 0.5)", // Darker color with higher opacity

      borderRadius:5,
      // barThickness: 20, 
    }
  ],
};

// Updated chart options
const options = {
  responsive: true,
  maintainAspectRatio: false, // Helps with responsiveness
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      display:false,
      beginAtZero: true,
      max: 1500,
      ticks: {
        color: "gray.100",
        stepSize:250,
        autoSkip: false,
      },
      grid: {
        display: false, // Hides grid lines for y-axis
      },
    },
    x: {
      ticks: {
        color: "gray.500",
      },
      grid: {
        display: false, // Hides grid lines for x-axis
      },
    },
  },
};

export function OverviewChart() {
  const [selectedTab, setSelectedTab] = useState("Yearly");

  const chartHeight = useBreakpointValue({ base: 200, md: 300, lg: 400 });

  return (
    <Box
      p={{ base: 2, md: 4 }}
      bg="white"
      borderRadius="md"
      boxShadow="base"
      w="100%"
      mt={1}
    >
      {/* Header */}
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Heading as="h1" size={{ base: "14px", md: "16px",lg:"17px",xl:"18px"}}>
          Overview
        </Heading>
        <Link href="#" color="purple.500" fontWeight="medium">
          <Flex alignItems="center">
            <IoIosArrowDown style={{ marginRight: "4px" }} />
            <Text>Download Report</Text>
          </Flex>
        </Link>
      </Flex>

      {/* Tabs */}
      <ButtonGroup size="sm" isAttached variant="outline" mb={2}>
        <Button
          colorScheme={selectedTab === "Monthly" ? "purple" : "gray"}
          onClick={() => setSelectedTab("Monthly")}
          ontSize="12px" 
        padding="0.5rem" 
        height="1.5rem"
        >
          Monthly
        </Button>
        <Button
          colorScheme={selectedTab === "Yearly" ? "purple" : "gray"}
          onClick={() => setSelectedTab("Yearly")}
          ontSize="12px" 
          padding="0.5rem" 
          height="1.5rem"
        >
          Yearly
        </Button>
      </ButtonGroup>

      {/* Chart */}
    <Grid gridTemplateColumns={'50px 1fr'} gap={["2px","7px","5px","7px"]}>
    <Flex  gap={'6px'} mb={['40px','27px','27px','27px']}>
      <Flex flexDirection={'column'} justifyContent={'space-between'} alignItems={'flex-end'} fontSize={["12px","14px","14px",]}>
       <Text color={'gray.500'}>$1500</Text>
        <Text color={'gray.500'}>$1000</Text>
        <Text color={'gray.500'}>$500</Text>
        <Text color={'gray.500'}>$250</Text>
        <Text color={'gray.500'}>0</Text>
      </Flex>
      <Box width={'1px'} bg={'gray.500'} pb={'5px'} opacity={'.2'}></Box>
    </Flex>
    <Box height={`${chartHeight}px`} width={'99%'}>
        <Bar data={data} options={options} />
      </Box>
    </Grid>
    </Box>
  );
}
