import { Box, Container, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
// import { Col, Container, Grid, Text } from '@nextui-org/react';
import Spline from '@splinetool/react-spline';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Navbar } from "../components";

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Flex paddingX={12} flexDirection="column" paddingY={0} margin={0} width="100%" height="100%" maxWidth="100%" maxHeight="100%" gap={4}>
      <Navbar />

      <Flex flexGrow={1} flexFlow="row" alignContent="space-between" gap={2}>
        <Grid alignItems='center'>
          <GridItem>
            <Heading
              paddingY={2}
              textDecoration="none"
              as="h1"
              textColor="blue.500"
              fontWeight="bold"
              >
                Nextjs
            </Heading>
            <Heading
              paddingY={2}
              textDecoration="none"
              as="h1"
              textColor="purple.500"
              fontWeight="bold"
              >
                RainbowKit
            </Heading>
            <Heading
              paddingY={2}
              textDecoration="none"
              as="h1"
              textColor="orange.400"
              fontWeight="bold"
              >
                Rainplate
            </Heading>
          </GridItem>
        </Grid>
        <Box flex='1' m="auto" px={8}>
          {mounted && <Spline height="300px" width="300px" style={{ pointerEvents: 'none', maxWidth: '600px', maxHeight: '600px', width: '600px', marginLeft: "auto", marginTop: "auto", marginBottom: 'auto', height: '600px' }} scene="https://prod.spline.design/KEGKpuSmhfmsFczx/scene.splinecode" />}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home
