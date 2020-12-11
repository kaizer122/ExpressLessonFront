import React, { useContext, useEffect, useState } from "react";
import { Box, Image, Flex, Button, IconButton } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons";

import { CartContext } from "../contexts/CartContext";
const CartItem = (product) => {
  const { id, title, price, category, image } = product;
  const {
    cartItems,
    addProduct,
    removeProduct,
    increase,
    decrease
  } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index > -1) setQuantity(cartItems[index].quantity);
    else if (quantity !== 0) setQuantity(0);
  }, [cartItems, quantity, id]);

  return (
    <Box
      maxH="100px"
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      d="flex"
      flexDirection="row"
      justifyContent="space-between"
      key={id}
    >
      <Flex justifyContent="space-around">
        <Flex w="100px" align="start" mx="2">
          <Image src={image} alt={title} />
        </Flex>
        <Flex justify="space-between" align="center" mx={2}>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            mx="2"
          >
            {category}
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            noOfLines={2}
            mx={2}
          >
            {title}
          </Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-evenly" alignItems="center" minW={"30vw"}>
        <Flex mx={3}>{price + " dt"}</Flex>
        {quantity === 0 ? (
          <Button colorScheme="green" onClick={() => addProduct(product)}>
            Add to cart
          </Button>
        ) : (
          <>
            <IconButton
              icon={quantity === 1 ? <DeleteIcon /> : <MinusIcon />}
              colorScheme="red"
              borderRadius="100%"
              onClick={() =>
                quantity === 1 ? removeProduct(product) : decrease(product)
              }
            />
            {quantity}
            <IconButton
              icon={<AddIcon />}
              colorScheme="green"
              borderRadius="100%"
              onClick={() => increase(product)}
            />
          </>
        )}
      </Flex>
    </Box>
  );
};

export default CartItem;
