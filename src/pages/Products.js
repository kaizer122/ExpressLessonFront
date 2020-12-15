import { Box, Flex, SimpleGrid, Skeleton } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import PaginationBar from "../components/PaginationBar/PaginationBar"
import Product from "../components/Product"
import Searchbar from "../components/Searchbar"
import SelectFilter from "../components/SelectFilter"
import useFetch from "../hooks/useFetch"
import usePagination from "../hooks/usePagination"

const Products = () => {
  const [maxCount, setmMaxCount] = useState(10)
  const { limit, skip, paginationProps } = usePagination({
    maxCount: maxCount ?? 100,
  })
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")
  const [{ data: products, count }, loading] = useFetch(
    `http://localhost:5000/bootcamps?skip=${skip}&limit=${limit}&category=${category}&searchQuery=${search}`
  )
  const [{ data: categories }, loadingCategories] = useFetch(
    "http://localhost:5000/categories"
  )
  useEffect(() => {
    setmMaxCount(count)
  }, [count])

  return (
    <Box mt={"4rem"}>
      <Flex
        px={4}
        pb={4}
        pt={8}
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Searchbar
          setSearch={(v) => {
            console.log("okokoko")
            setSearch(v)
          }}
        />
        {!loadingCategories && (
          <SelectFilter
            filterOptions={[
              { label: "Category", value: "" },
              ...categories.map((categ) => ({
                label: categ.name,
                value: categ._id,
              })),
            ]}
            setFilter={(v) => setCategory(v)}
          />
        )}
        <PaginationBar {...paginationProps} />
      </Flex>
      <SimpleGrid h="full" minChildWidth="250px" spacing={5} mx={5}>
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
    </Box>
  )
}

export default Products
