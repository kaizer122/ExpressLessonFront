import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext";

import LoginModal from "./LoginModal";
const Header = () => {
  const { itemCount } = useContext(CartContext);
  const { isLoggedIn } = useContext(UserContext);
  const { onOpen, ...modalprops } = useDisclosure();
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
      <HStack spacin={2}>
        <Button variant="none" color="white" onClick={() => history.push("/")}>
          {" "}
          Home
        </Button>
      </HStack>
      <HStack spacing={2}>
        {!isLoggedIn && (
          <Button variant="none" color="white" onClick={onOpen}>
            {" "}
            SignIn
          </Button>
        )}
        <IconButton
          variant={"link"}
          color="white"
          icon={<Icon as={FaShoppingCart} fontSize="20px" />}
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
      </HStack>

      <LoginModal {...modalprops} />
    </Box>
  );
};
export default Header;
