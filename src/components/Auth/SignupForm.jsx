import {
  Heading,
  Text,
  VStack,
  Box,
  Stack,
  Flex,
  Button,
  Input,
  Image,
  Grid,
  GridItem,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

const SignupForm = () => {
  return (
    <div>
      <Stack
        w={"full"}
        h={"full"}
        justifyContent={"space-evenly"}
        flexDir={"row"}
        flexWrap={"wrap"}
        boxShadow={"lg"}
      >
        <Box w={"50%"}>
          <Image
            src="src/assets/Agri Tek.png"
            alt="Signup img"
            sizes="md"
            borderRadius={"lg"}
            objectFit={"contain"}
          />
        </Box>
        <Box alignItems={"center"} justifyContent={"center"} h={"full"}>
          <form action="">
            <Grid m={5} justifyContent={"center"} alignItems={"center"}>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input type="text" placeholder="John" />
                </FormControl>

                <FormControl>
                  <FormLabel>Surname</FormLabel>
                  <Input type="text" placeholder="Doe" />
                </FormControl>
              </GridItem>

              <GridItem m={2}>
                <FormControl>
                  <FormLabel>Email *</FormLabel>
                  <Input type="email" placeholder="Johndoe@gmail.com" />
                </FormControl>
              </GridItem>
              <GridItem m={2}>
                <FormControl>
                  <FormLabel>County*</FormLabel>
                  <Input type="text" placeholder="Kiambu" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1} m={2}>
                <FormControl>
                  <FormLabel>Constituency *</FormLabel>
                  <Input type="text" placeholder="Kiambaa" />
                </FormControl>
              </GridItem>
              <GridItem m={2}>
                <FormControl>
                  <FormLabel>Address *</FormLabel>
                  <Input type="text" placeholder="4562-Kiuna Rd" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Farmer Specialization</FormLabel>
                  <Input type="text" placeholder="Specialization " />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input type="Password" placeholder="sgd***** " />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="Password" placeholder="fgr****** " />
                </FormControl>
              </GridItem>
            </Grid>
            <Button variant={"ghost"} type="submit " color={"green"} mb={10}>
              Signup
            </Button>
          </form>
          <p>
            Have an account?
            <span>
              <a href="/login">Login</a>
            </span>
          </p>
        </Box>
      </Stack>
    </div>
  );
};

export default SignupForm;
