import { Input, InputGroup, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
const Searchbar = ({ setSearch }) => {
  const timeout = useRef(null);
  const [val, setVal] = useState("");

  useEffect(() => {
    if (timeout.current !== null) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setSearch(val), 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [val, setVal]);
  return (
    <Flex pr={2}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={"text"}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Search ..."
        />
      </InputGroup>
    </Flex>
  );
};

export default Searchbar;
