import { Box, Flex, Center, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { useRef, useState, useEffect } from "react";


const AutoCard = ({ cloudinaryUrl }) => {
  const playerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (playerRef.current && playerRef.current.children.length > 0) {
      const rect = playerRef.current.children[0].getBoundingClientRect();
      const translateY = (rect.top + rect.bottom) / 2 - window.innerHeight / 2;
      const scale = 1 - Math.abs(translateY) / window.innerHeight;

      playerRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
    }
  }, [scrollY]);
  return (
    <>
      <Flex align={"center"} justify={"center"} height={"100vh"}>
        <Box maxW={"70vw"} borderRadius={"5px"}>
          <Center ref={playerRef}>
            <ReactPlayer
              url={cloudinaryUrl}
              controls={false}
              playing
              loop
              width={"100%"}
              height={"100%"}
              style={{
                transition: "transform 0.2s ease-in-out",
              }}
            />
          </Center>
          <Text text align={"center"} fontSize={"lg"} mt={4}>
            AgriTek ltd.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

const VideoPlayer = () => {
  const videoUrl =
    "https://res.cloudinary.com/dqlqoetkn/video/upload/v1700111289/AgriTek_ltd._qscwvy.mp4";
  return (
    <>
      <AutoCard cloudinaryUrl={videoUrl} />
    </>
  );
};

export default VideoPlayer;
