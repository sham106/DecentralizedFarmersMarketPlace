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
    <Stack flexDir={"row"} alignItems={"center"}>
      <Box>
        <Image
          src="src/assets/Premium Photo _ Children and parent hands planting young tree on black soil together.jpg"
          borderRadius={"lg"}
        />
      </Box>
      <Box w={"50%"}>
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
              <Input type="password" placeholder="JohnDoe" />
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
          <Text>
            Don't have an account?{" "}
            <span>
              <a href="/signup">Signup</a>
            </span>
          </Text>
        </Grid>
      </Box>
    </Stack>
  );
};

export default LoginPage;
