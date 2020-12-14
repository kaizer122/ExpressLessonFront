import { Box, Flex } from "@chakra-ui/react"
import React from "react"
import BootcampBottomSection from "../components/BootcampDetail/BootcampBottomSection"
import BootcampTopSection from "../components/BootcampDetail/BootcampTopSection"

const ProductDetail = () => {
  return (
    <Flex h="full">
      <Box h="full" w="15vw" bg="gray.200" />
      <Box w="70vw" mt={"5rem"}>
        <BootcampTopSection />
        <BootcampBottomSection />
      </Box>
      <Box h="full" w="15vw" bg="gray.200" />
    </Flex>
  )
}

export default ProductDetail
