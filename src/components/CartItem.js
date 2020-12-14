import { AddIcon, DeleteIcon, MinusIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, IconButton, Image } from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"

const CartItem = (product) => {
  const { _id, name, price, category, imageUrl: image } = product
  const {
    cartItems,
    addProduct,
    removeProduct,
    increase,
    decrease,
  } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const index = cartItems.findIndex((item) => item._id === _id)
    if (index > -1) setQuantity(cartItems[index].quantity)
    else if (quantity !== 0) setQuantity(0)
  }, [cartItems, quantity, _id])

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
      key={_id}
    >
      <Flex justifyContent="space-around">
        <Flex w="100px" align="start" mx="2">
          <Image src={image} alt={name} />
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
            {category.name}
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
            {name}
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
  )
}

export default React.memo(CartItem)
