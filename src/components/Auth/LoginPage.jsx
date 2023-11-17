import {
  Box,
  Stack,
  Text,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
  Button,
  Input,
  FormLabel,
  FormControl,
  Image,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleClick = (role) => {
    if (role === "customer") {
      navigate("/login");
    } else if (role === "admin") {
      navigate("/admin");
    }
  };

  return (
    <>
      <Heading textAlign={"center"} fontSize={"3xl"} mb={3}>
        Login
      </Heading>
      <Box>
        <Text>Login as:</Text>
        <Button
          variant={"ghost"}
          color={"green"}
          alignItems={"center"}
          onClick={() => handleClick("customer")}
        >
          Customer
        </Button>
        <Button variant={"ghost"} onClick={() => handleClick("admin")}>
          Admin
        </Button>
      </Box>
      <Stack
        flexDir={"row"}
        alignItems={"center"}
        justify={"center"}
        flexWrap={"wrap"}
        w={"100%"}
      >
        <Box w={"50%"}>
          <Image
            src="src/assets/Premium Photo _ Children and parent hands planting young tree on black soil together.jpg"
            borderRadius={"lg"}
          />
        </Box>
        <Box justifyContent={"center"} alignItems={"center"}>
          <Grid>
            <GridItem>
              <FormControl>
                <FormLabel>Enter your name</FormLabel>
                <Input type="text" placeholder="JohnDoe" />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Password*</FormLabel>
                <Input type="password" placeholder="sgd****" />
              </FormControl>
            </GridItem>
            <Box>
              <Button variant={"ghost"} color={"green"} alignItems={"center"}>
                Login
              </Button>
            </Box>

            <Text>
              Don't have an account?{" "}
              <span>
                <a href="/signup">Signup</a>
              </span>
            </Text>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default LoginPage;
