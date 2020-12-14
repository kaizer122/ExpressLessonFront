import { AddIcon, DeleteIcon, MinusIcon, StarIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, IconButton, Image } from "@chakra-ui/react"
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"

const Product = (product) => {
  const {
    _id: id,
    name: title,
    price,
    category,
    imageUrl: image,
    rating,
  } = product
  const {
    cartItems,
    addProduct,
    removeProduct,
    increase,
    decrease,
  } = useContext(CartContext)
  const history = useHistory()

  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const index = cartItems.findIndex((item) => item.id === id)
    if (index > -1) setQuantity(cartItems[index].quantity)
    else if (quantity !== 0) setQuantity(0)
  }, [cartItems, quantity, id])

  return (
    <Box
      h="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={() => history.push("/bootcamps/" + id)}
      >
        <Image
          height="150px"
          w="100%"
          objectFit="cover"
          src={image}
          alt={title}
        />
      </Flex>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {category.name}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          onClick={() => history.push("/bootcamps/" + id)}
          cursor="pointer"
        >
          {title}
        </Box>

        <Box d="flex" alignItems="center" justifyContent="space-between">
          {price + " dt"}
          <Box maxW="250px">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? "teal.500" : "gray.300"}
                />
              ))}
          </Box>
        </Box>
        <Flex justifyContent="space-evenly" alignItems="center" mt={2}>
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
        {/*
        <Box>
          <Text color="gray.500" isTruncated>
            {description}
          </Text>
        </Box>
*/}
      </Box>
    </Box>
  )
}

export default Product
