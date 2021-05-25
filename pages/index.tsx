import React from 'react'
import {
  SimpleGrid,
  Box,
  Container,
  Heading,
  Spacer,
  Stack,
  Center,
} from '@chakra-ui/react'
import LightSwitch from 'components/LightSwitch'
import { DarkModeSwitch } from 'components/DarkModeSwitch'
import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Dachgeschoss</title>
      </Head>
      <Container>
        <Box mx="auto" my="auto" padding="25px">
          <Stack spacing={4} direction="row">
            <Center>
              <Heading as="h1" size="2xl" className="header">
                Dachgeschoss
              </Heading>
              <DarkModeSwitch />
            </Center>
          </Stack>
        </Box>
        <Spacer />
        <SimpleGrid column={{ base: '1', lg: '2' }} spacing={16}>
          <Box height="40px">
            <LightSwitch title="Kugellampe" id="1" />
          </Box>
          <Box height="40px">
            <LightSwitch title="Stehlampe" id="3" />
          </Box>
          <Box height="40px">
            <LightSwitch title="Mittlere Stehlampe" id="4" />
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  )
}
