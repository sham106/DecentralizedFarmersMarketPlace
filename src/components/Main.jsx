import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Heading,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Main = () => {
  const handleChat = () => {};

  const handleJoin = () => {};

  const handleBuy = () => {};
  return (
    <>
      <Stack flexDir={"row"}>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="src/assets/organic-farm.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h={"40vh"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Connect with your customers</Heading>
                <Text>
                  Connect with the source of your food! AgriTek encourages
                  direct communication between farmers and consumers. Learn
                  about farming practices, ask questions, and build trust in the
                  food you consume.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  <Image></Image>
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter w={"100vw"}>
              <ButtonGroup spacing="2" alignItems={"center"}>
                <Button
                  variant={"solid"}
                  colorScheme={"green"}
                  onClick={handleChat}
                >
                  <Link to={"/chat"}>Chat</Link>
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  View more
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="src/assets/Ilustración colorida con concepto de agricultura _ Vector Gratis.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h={"40vh"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Interact with other farmers</Heading>
                <Text>
                  Join a community passionate about sustainable agriculture.
                  AgriTek facilitates connections between farmers, consumers,
                  and enthusiasts, fostering a sense of shared responsibility
                  for our food system.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Join our community
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant={"solid"}
                  colorScheme={"green"}
                  onClick={handleJoin}
                >
                  Join
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  View more
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
        <Box>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="src/assets/org-farm.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                h={"40vh"}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Buy/Sell produce</Heading>
                <Text>
                  Are you a farmer looking to reach a wider audience and sell
                  your harvest directly to consumers? Or perhaps you're a
                  consumer wanting to connect with local farmers and access
                  fresh, quality produce? Buy and sell at convenient prices.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  from Ksh3000 stock price
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="green" onClick={handleBuy}>
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  View more
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </Stack>
    </>
  );
};

export default Main;
