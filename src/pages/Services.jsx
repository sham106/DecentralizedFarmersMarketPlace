import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import ServiceBar from "../components/Navigation/ServiceBar";
import Data from "./../../AgriTek.json";
import { useState, useEffect } from "react";
import {
  Heading,
  Card,
  SimpleGrid,
  CardBody,
  CardFooter,
  Text,
  Button,
  Divider,
  ButtonGroup,
  Stack,
  Image,
  Link,
  Box,
} from "@chakra-ui/react";

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Data);
  }, []);
  return (
    <>
      <nav>
        <Navbar />
        <ServiceBar />
      </nav>
      <Box>Join Group pool</Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={2}>
        {products.map((product) => (
          <Card maxW="sm" key={product.id}>
            <CardBody>
              <Image src={product.ImageUrl} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.name}</Heading>
                <Text size="lg">{product.Category}</Text>
                <Text>{product.Description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  ${product.price} per {product.weight}(kg)
                </Text>
                <Text>Produce in stock: {product.stock}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link href="/payment">
                  <Button variant="solid" colorScheme="green">
                    Buy now
                  </Button>
                </Link>
                <Button variant="ghost" colorScheme="green">
                  Add to cart
                </Button>
                <Button variant="solid" colorScheme="blue">
                  Negotiate
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Services;
