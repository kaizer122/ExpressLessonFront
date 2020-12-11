import { Box, Skeleton } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductDetail = () => {
  const { id } = useParams();
  const { bootcamp, loading } = useFetch(
    "http://localhost:5000/bootcamps/" + id
  );
  return (
    <Box h="full" w="full" mt={"5rem"}>
      {!loading && <h1>{bootcamp.name}</h1>}
    </Box>
  );
  if (loading) return <div>loading....</div>;
  else return;
};

export default ProductDetail;
