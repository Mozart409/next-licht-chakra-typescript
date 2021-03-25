import React from 'react'
import { SimpleGrid, Button, Heading } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function LightSwitch({ title, id }: any) {
  const handleOn = (id: any) => {
    axios
      .get(`/api/sendon/${id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(function (response) {
        // handle success
        toast.success(response.data)
      })
      .catch(function (error) {
        // handle error
        toast.error(error)
      })
  }

  const handleOff = (id: any) => {
    axios
      .get(`/api/sendoff/${id}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(function (response) {
        // handle success
        toast.success(response.data)
      })
      .catch(function (error) {
        // handle error
        toast.error(error)
      })
  }
  return (
    <div>
      <Heading as="h2" size="lg" isTruncated>
        {title}
      </Heading>
      <SimpleGrid columns={2} spacing={16}>
        <Button
          onClick={() => handleOn(id)}
          leftIcon={<SunIcon />}
          colorScheme="green"
          variant="solid"
        >
          On
        </Button>

        <Button
          onClick={() => handleOff(id)}
          leftIcon={<MoonIcon />}
          colorScheme="gray"
          variant="outline"
        >
          Off
        </Button>
      </SimpleGrid>
    </div>
  )
}
