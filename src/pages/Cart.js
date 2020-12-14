import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react"
import React, { useContext } from "react"
import CartItem from "../components/CartItem"
import { CartContext } from "../contexts/CartContext"

const Cart = () => {
  const { cartItems, itemCount, total } = useContext(CartContext)
  return (
    <VStack h="full" w="full" mt={"5rem"} spacing={2}>
      <Box w="full" textAlign="center" mb={6}>
        <Heading> Panier </Heading>
      </Box>
      <Box w="full" textAlign="center">
        Nombre d'items: <b>{itemCount} </b>
      </Box>
      {cartItems.map((prod) => (
        <CartItem {...prod} key={prod._id} />
      ))}
      <Box w="full" textAlign="right">
        <Divider />
        <Text fontSize="lg" mr={8}>
          Total:<b> {total + " Td"} </b>
        </Text>
      </Box>
    </VStack>
  )
}

export default Cart
