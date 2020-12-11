import React from "react";
import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import Product from "../components/Product";

class ProductsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      products: []
    };
  }

  async componentDidMount() {
    const data = await fetch("https://fakestoreapi.com/products/");

    const products = await data.json();

    this.setState({ products, loading: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loading !== this.state.loading) {
      console.log("state has changed");
    }
  }

  render() {
    const { loading, products } = this.state;
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
          : products.map((prod) => <Product {...prod} key={prod.id} />)}
      </SimpleGrid>
    );
  }
}

export default ProductsClass;
