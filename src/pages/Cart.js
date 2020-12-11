import React, { useContext } from "react";
import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, itemCount, total } = useContext(CartContext);
  return (
    <VStack h="full" w="full" mt={"5rem"} spacing={2}>
      <Box w="full" textAlign="center" mb={6}>
        <Heading> Panier </Heading>
      </Box>
      <Box w="full" textAlign="center">
        Nombre d'items: <b>{itemCount} </b>
      </Box>
      {cartItems.map((prod) => (
        <CartItem {...prod} key={prod.id} />
      ))}
      <Box w="full" textAlign="right">
        <Divider />
        <Text fontSize="lg" mr={8}>
          Total:<b> {total + " Td"} </b>
        </Text>
      </Box>
    </VStack>
  );
};

export default Cart;
