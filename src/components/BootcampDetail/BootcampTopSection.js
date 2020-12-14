import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const BootcampTopSection = () => {
  const { id } = useParams();
  const [{ data: bootcamp }, loading] = useFetch(
    "http://localhost:5000/bootcamps/" + id
  );
  if (loading) return <Skeleton h="30vh" m="6" />;

  return (
    <Box w="full">
      <Flex justify="center" align="center" direction="column" pos="relative">
        <Avatar
          minW="200px"
          minH="200px"
          objectFit="cover"
          src={bootcamp.imageUrl}
        />
      </Flex>
      <Box>
        <Heading size={"lg"} px={5} pb={1}>
          {bootcamp.name}
          <span style={{ marginLeft: "10px" }}>
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  fontSize="20px"
                  key={i}
                  color={i < bootcamp.rating ? "teal.500" : "gray.300"}
                />
              ))}
          </span>
        </Heading>
        <Divider />
        <Flex dir="row" w="full" px={5}>
          <Box w="50%" minH="200px" borderRightWidth="1px" mr={2} pt={2}>
            <Text fontWeight="semibold" color="gray.500" mb={1} fontSize="lg">
              Category
            </Text>
            <Text ml={1} mb={2}>
              {" "}
              {bootcamp.category.name}
            </Text>
            <Text fontWeight="semibold" color="gray.500" mb={1} fontSize="lg">
              Bootcamp published by
            </Text>
            <Flex align="center">
              <Avatar src={bootcamp.creator.avatar} />
              <Text ml={1}> {bootcamp.creator.name}</Text>
            </Flex>
          </Box>
          <Box w="50%" minH="200px" borderRightColor="gray.200" pt={2} pl={2}>
            <Text fontWeight="semibold" color="gray.500" mb={1} fontSize="lg">
              Description
            </Text>
            <Text>{bootcamp.description}</Text>
          </Box>
        </Flex>
        <Divider />
      </Box>
    </Box>
  );
};

export default BootcampTopSection;
