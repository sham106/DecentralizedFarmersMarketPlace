import { Box, Button, Stack, Heading, Link, Text } from "@chakra-ui/react";
import "./../index.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Stack
          m={2}
          w={"full"}
          height={"100%"}
          flexDir={{ base: "column", md: "row" }}
          flexWrap={"wrap"}
        >
          <Box
            m={{ base: 3, md: 6 }}
            w={{ base: "100%", md: "50%" }}
            display={"flex"}
            justifyContent={{ base: "center", md: "flex-start" }}
            flexDir={"column"}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              as={"h1"}
              size={{ base: "2xl", md: "4xl" }}
              mt={{ base: 4, md: 50 }}
              color={"white"}
            >
              Seeding Chan<span className="letter">ge</span> to bring v
              <span className="letter">alue</span> a
              <span className="letter">cross the</span>{" "}
              <span className="letter">food</span> sy
              <span className="letter">stem</span>
            </Heading>
            <Text
              mt={{ base: 4, md: 6 }}
              fontSize={{ base: "md", md: "xl" }}
              color={"white"}
            >
              Get to know the field in seconds and take informed decisions with
              AgriTek solutions. To make farming, marketing, and interaction
              simple, we integrate services for you and the public at the palm
              of your hands.
            </Text>

            <Link href="/about">
              <Button
                variant={"outline"}
                color={"green"}
                mt={{ base: 4, md: 6 }}
                ml={{ base: 4, md: 6 }}
                w={"300px"}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Stack>
      </div>
    </>
  );
};

export default Hero;
