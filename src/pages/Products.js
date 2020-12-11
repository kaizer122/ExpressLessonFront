import React from "react";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import Product from "../components/Product";
import useFetch from "../hooks/useFetch";
// fc

const Products = () => {
  const [products, loading] = useFetch("http://localhost:5000/bootcamps");
  return (
    <SimpleGrid h="full" mt={"5rem"} minChildWidth="250px" spacing={5} mx={5}>
      {loading
        ? Array(10)
            .fill()
            .map((_, i) => (
              <Skeleton
                h="300px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="sm"
                key={i}
              />
            ))
        : products &&
          products.map((prod) => <Product {...prod} key={prod.id} />)}
    </SimpleGrid>
  );
};

export default Products;
