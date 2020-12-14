import { Flex, Select } from "@chakra-ui/react"
import React from "react"

const SelectFilter = ({ filterOptions, selectProps, setFilter, key }) => {
  return (
    <Flex {...key}>
      <Select
        size="md"
        mr={4}
        onChange={(e) => setFilter(e.target.value)}
        {...selectProps}
      >
        {filterOptions.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}{" "}
          </option>
        ))}
      </Select>
    </Flex>
  )
}

export default React.memo(SelectFilter)
