import { StarIcon } from "@chakra-ui/icons"
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import React, { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import LoginModal from "../LoginModal"
const AddReview = ({ onReviewAdded }) => {
  const { user, isLoggedIn, token } = useContext(UserContext)
  const { id } = useParams()

  const [text, setText] = useState(null)
  const [rating, setRating] = useState(0)
  const { onOpen, ...rest } = useDisclosure()
  const toast = useToast()
  const onSubmit = () => {
    if (!isLoggedIn) onOpen()
    else {
      if (!text.trim().length > 0) return
      let formdata = new FormData()
      formdata.append("text", text)
      formdata.append("rating", rating)

      const headers = {
        Authorization: "Bearer " + token,
      }
      fetch("http://localhost:5000/reviews/" + id, {
        method: "POST",
        body: formdata,
        headers,
      })
        .then((res) => res.json())
        .then((res) => {
          const { success, data } = res
          if (!success)
            toast({
              title: "Error",
              description: `Something went wrong!`,
              status: "error",
              duration: 4000,
              isClosable: true,
            })
          else {
            toast({
              title: "Review added",
              description: `Thank you for your feedback`,
              status: "success",
              duration: 4000,
              isClosable: true,
            })
            onReviewAdded({ ...data, creator: user })
            setText(null)
            setRating(0)
          }
        })
    }
  }
  return (
    <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
      <Flex direction="row" align="center" mb={2}>
        <Avatar src={user?.avatar} mr={3} />
        <Text fontWeight={"semibold"} color="gray.500" mr={3}>
          {user?.name ?? "Visitor"}
        </Text>
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              onClick={() => setRating(i + 1)}
              color={i < rating ? "teal.500" : "gray.300"}
            />
          ))}
      </Flex>
      <Textarea
        placeholder="Add a review"
        size="sm"
        resize={"vertical"}
        isFullWidth={true}
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <Flex w="100%" direction="row" align="flex-end" justify="flex-end" mb={2}>
        <Button variant="solid" colorScheme="teal" onClick={onSubmit}>
          Submit
        </Button>
      </Flex>
      <LoginModal {...rest} />
    </Box>
  )
}

export default AddReview
