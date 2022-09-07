import { Box, Container, Flex, Grid, GridItem, Heading, Img } from '@chakra-ui/react';
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

      <Flex margin="auto" flexGrow={1}>
        <Img unselectable='off' src="/whitenoise.png" margin="auto" css={{ userSelect: 'none', pointerEvents: 'none' }} />
      </Flex>

      <Flex paddingBottom={4} flexFlow="row" alignContent="space-between" gap={2}>
        <Grid marginTop="auto" paddingBottom={8} pl={4} alignItems='center'>
          <GridItem>
            <Heading
              paddingY={2}
              textDecoration="none"
              as="h1"
              textColor="blue.500"
              fontWeight="bold"
              css={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                Nextjs
            </Heading>
            <Heading
              paddingY={2}
              textDecoration="none"
              as="h1"
              textColor="purple.500"
              fontWeight="bold"
              css={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                RainbowKit
            </Heading>
            <Heading
              paddingY={2}
              textDecoration="none"
              as="h1"
              textColor="orange.400"
              fontWeight="bold"
              css={{ userSelect: 'none', pointerEvents: 'none' }}
              >
                Rainplate
            </Heading>
          </GridItem>
        </Grid>
        <Box flex='1' marginTop="auto">
          {mounted && <Spline height="200px" width="200px" style={{ pointerEvents: 'none', maxWidth: '200px', maxHeight: '200px', width: '200px', marginLeft: "auto", marginTop: "auto", marginBottom: 'auto', height: '200px' }} scene="https://prod.spline.design/KEGKpuSmhfmsFczx/scene.splinecode" />}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home
