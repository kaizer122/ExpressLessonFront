import { Box, Icon, IconButton } from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
const Header = () => {
  const { itemCount } = useContext(CartContext);
  const history = useHistory();
  return (
    <Box
      as="header"
      pos="fixed"
      top="0"
      zIndex={4}
      left={0}
      right="0"
      borderBottomWidth="1px"
      height="50px"
      bg={"teal.400"}
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      px={5}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>
      <IconButton
        variant={"link"}
        color="white"
        icon={<Icon as={FaShoppingCart} fontSize="20px" />}
        mx="2"
        my="4"
        onClick={() => history.push("/cart")}
      />
      <Box
        position="absolute"
        bg="red.500"
        top={1}
        right={7}
        borderRadius="100%"
        w="15px"
        h="15px"
        d="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="xs"
        color="white"
      >
        {itemCount}
      </Box>
    </Box>
  );
};
export default Header;
