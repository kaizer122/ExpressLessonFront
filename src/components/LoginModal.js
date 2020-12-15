import {
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
} from "@chakra-ui/react"
import React, { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"

const LoginModal = ({ isOpen, onClose }) => {
  const finalRef = React.useRef()
  const initialRef = React.useRef()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const toast = useToast()
  const { login } = useContext(UserContext)
  const signin = () => {
    let formdata = new FormData()
    formdata.append("email", email)
    formdata.append("password", password)
    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          toast({
            title: "Connected",
            description: `Welcome ${res.data.name}`,
            status: "success",
            duration: 4000,
            isClosable: true,
          })
          login(res)
          onClose()
        } else
          toast({
            title: "Error",
            description: res.error,
            status: "error",
            duration: 4000,
            isClosable: true,
          })
      })
  }
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
          <Button variant="solid" colorScheme="green" onClick={signin}>
            Sign In
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
