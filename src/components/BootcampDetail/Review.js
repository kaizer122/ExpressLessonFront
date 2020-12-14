import { StarIcon } from "@chakra-ui/icons"
import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import React from "react"

const Review = ({ creator: { avatar, name }, text, rating }) => {
  return (
    <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
      <Flex direction="row" align="center" mb={2}>
        <Avatar src={avatar} mr={3} />
        <Text fontWeight={"semibold"} color="gray.500" mr={3}>
          {name}
        </Text>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon key={i} color={i < rating ? "teal.500" : "gray.300"} />
          ))}
      </Flex>
      <Box>{text}</Box>
    </Box>
  )
}

export default Review
