import { Box, useRadio } from "@chakra-ui/react"
import React from "react"

// const CustomRadio = React.forwardRef((props, ref) => {
//   const { isChecked, isDisabled, value, ...rest } = props
//   return (
//     <Button
//       ref={ref}
//       variantColor={isChecked ? "teal" : "gray"}
//       aria-checked={isChecked}
//       isDisabled={isDisabled}
//       role="radio"
//       maxW="40px"
//       maxH="40px"
//       fontWeight="normal"
//       fontSize="normal"
//       {...rest}
//     />
//   )
// })
// CustomRadio.displayName = "CustomRadio"

const CustomRadio = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={4}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  )
}
export default CustomRadio
