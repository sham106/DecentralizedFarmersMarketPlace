import {
  Box,
  Input,
  Button,
  Stack,
  Heading,
  Image,
  Text,
  Wrap,
} from "@chakra-ui/react";
import "./../index.css";
import VideoPlayer from "./VideoPlayer";

const Hero = () => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        w={"full"}
        mt={10}
      >
        <Input placeholder="Service" w={"500px"} />
        <Button color={"green"} variant={"ghost"}>
          Search
        </Button>
      </Box>
      <Stack
        w={"full"}
        h={"full"}
        m={2}
        flexDir={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"50%"} m={3}>
          <Heading textAlign={"center"} as={"h3"} size={"2xl"}>
            Seeding Change to bring value across the food system
          </Heading>
          <Text textAlign={"center"} mt={3} size={"4xl"}>
            Get to know the field in seconds and take informed decisions with
            AgriTek solutions.To make farming,marketing and interaction simple
            we intergrate services for you and the public at the palm of your
            hands.
          </Text>
        </Box>
        <Box w={"50%"}>
          <Image
            src="src/assets/hero.jpg"
            borderRadius={"md"}
            objectFit={"contain"}
          />
        </Box>
      </Stack>
      <Box></Box>
      <Box
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
      <Box>
        <VideoPlayer />
      </Box>
    </>
  );
};

export default Hero;
