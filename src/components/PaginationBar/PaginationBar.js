import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import {
  HStack,
  IconButton,
  Select,
  Stack,
  useRadioGroup,
} from "@chakra-ui/react"
import React from "react"
import CustomRadio from "./CustomRadio"

const PaginationBar = ({
  limit,
  setLimit,
  goToPage,
  goToNext,
  goToPrevious,
  pagesToShow,
  currentPage,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "pagination",
    defaultValue: currentPage,
    onChange: (val) => goToPage(Number(val)),
  })
  const group = getRootProps()
  return (
    <>
      <Select
        size="md"
        defaultValue={10}
        value={limit}
        maxW="120px"
        mr={4}
        onChange={(e) => setLimit(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Select>
      <Stack spacing={4} direction="row">
        <IconButton
          aria-label="Page précédente"
          icon={<ChevronLeftIcon />}
          onClick={goToPrevious}
        />
        <HStack {...group}>
          {pagesToShow.map((value) => {
            const radio = getRadioProps({ value })
            return (
              <CustomRadio
                key={value}
                {...radio}
                isChecked={currentPage === value}
              >
                {value}
              </CustomRadio>
            )
          })}
        </HStack>
        <IconButton
          aria-label="Page suivante"
          icon={<ChevronRightIcon />}
          onClick={goToNext}
        />
      </Stack>
    </>
  )
}

export default PaginationBar
