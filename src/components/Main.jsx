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
import ContactPage from "./Contact";

const Main = () => {
  const handleChat = () => {};

  const handleJoin = () => {};

  const handleBuy = () => {};
  return (
    <>
      <Stack flexDir={"row"} flexWrap={"wrap"}>
        <Box w={"auto"}>
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
                  ......
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
                  do you want to sell harvest directly to consumers? Or perhaps
                  you're a consumer wanting to connect with local farmers and
                  access fresh, quality produce? Buy and sell at convenient
                  prices.
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
      <Box
        mt={20}
        mb={20}
        w={"full"}
        background={"#121712"}
        h={"20vh"}
        display={"flex"}
        opacity={"90%"}
        borderRadius={"5px"}
        flexDir={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Box display={"flex"} flexDir={"column"}>
          <Image src="src/assets/carrots-carrot-svgrepo-com.svg" w={"100px"} />
          <Text color={"green"}>Rift-Valley region</Text>
        </Box>
        <Box>
          <Image src="src/assets/cow-svgrepo-com.svg" w={"100px"} />
          <Text color={"green"}>Kiambu highlands</Text>
        </Box>
        <Box>
          <Image
            src="src/assets/harvest-bag-of-cereal-svgrepo-com.svg"
            w={"100px"}
          />
          <Text color={"green"}>Laikipia</Text>
        </Box>
      </Box>
      <div className="about">
        <Stack
          w={{ base: "full", md: "80%" }}
          h={{ base: "auto", md: "full" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          flexDir={{ base: "column", md: "row" }}
          mx="auto"
        >
          <Box
            mt={{ base: 4, md: 30 }}
            p={4}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"space-evenly"}
            w={{ base: "100%", md: "50%" }}
            h={{ base: "auto", md: "full" }}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={4}>
              About Us
            </Text>
            <Text mb={6} fontSize={{ base: "sm", md: "md" }}>
              AgriTek is more than a marketplace; it's a movement towards a
              sustainable future. We empower small-scale farmers in arid and
              semi-arid regions, connecting them with global markets. Our
              mission is to bridge the gap, ensure fair trade, and cultivate a
              healthier, more connected world.
            </Text>
            <Button colorScheme="green" size="lg" variant={"outline"}>
              View More
            </Button>
          </Box>
          <Box>
            <Image
              p={4}
              src="src/assets/Premium Vector _ Farmers planting potatoes vector illustration.jpg"
              w={{ base: "100%", md: "500px" }}
              h={{ base: "auto", md: "100%" }}
              objectFit={"cover"}
              borderRadius={{ base: "0", md: "lg" }}
            />
          </Box>
        </Stack>
        <Box id="Contact">
          <ContactPage />
        </Box>
      </div>
    </>
  );
};

export default Main;
