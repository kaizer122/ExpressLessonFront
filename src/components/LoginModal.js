import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const LoginModal = ({ isOpen, onClose }) => {
  const finalRef = React.useRef();
  const initialRef = React.useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const login = () => {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
        } else
          toast({
            title: "Error",
            description: res.error,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
      });
  };
  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>SignIn</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              ref={initialRef}
              placeholder="First name"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Last name"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button variant="solid" colorScheme="green" onClick={login}>
            Sign In
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
