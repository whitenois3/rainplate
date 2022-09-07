import { Col, Container, Grid, Text } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Spline from '@splinetool/react-spline';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Container display='flex' justify='center' style={{ height: '100%' }} gap={5}>
      <Grid.Container gap={2} alignItems='center' style={{ marginTop: '1em' }}>
        <Grid xs={9}>
          <Text h1>Rainplate</Text>
        </Grid>
        <Grid xs={3} justify='flex-end'>
          <ConnectButton />
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid xs={6} alignItems='center'>
          <Col>
            <Text
              h1
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              NextJS
            </Text>
            <Text
              h1
              css={{
                textGradient: "45deg, $purple600 -20%, $pink600 100%",
              }}
              weight="bold"
            >
              RainbowKit
            </Text>
            <Text
              h1
              css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
              }}
              weight="bold"
            >
              Rainplate
            </Text></Col>
        </Grid>
        <Grid xs={6}>
          {mounted && <Spline height={'700px'} width={'700px'} scene="https://prod.spline.design/KEGKpuSmhfmsFczx/scene.splinecode" />}
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Home
