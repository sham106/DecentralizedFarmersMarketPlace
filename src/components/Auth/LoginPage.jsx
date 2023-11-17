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

const LoginPage = () => {
  return (
    <>
      <Heading textAlign={"center"} fontSize={"3xl"} mb={3}>
        Login
      </Heading>
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
            <Button
              variant={"ghost"}
              color={"green"}
              w={"60px"}
              alignItems={"center"}
            >
              Login
            </Button>
            <Button>Admin</Button>
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
