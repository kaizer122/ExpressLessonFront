import { Box, Heading, Skeleton, VStack } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Review from "./Review";

const BootcampBottomSection = () => {
  const { id } = useParams();
  const [{ data: reviews }, loading] = useFetch(
    "http://localhost:5000/reviews/" + id
  );
  if (loading) return <Skeleton h="40vh" m="6" />;
  console.log(reviews);
  return (
    <Box w="full" mb={5}>
      <Heading size={"md"} px={5} pb={1} pt={3} color="gray.500">
        Reviews
      </Heading>
      <VStack mx="4" align="flex-start" spacing={2}>
        {reviews.map((review) => (
          <Review key={review._id} {...review} />
        ))}
      </VStack>
    </Box>
  );
};

export default BootcampBottomSection;
