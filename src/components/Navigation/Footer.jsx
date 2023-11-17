

import { Box, Flex, Link, Text, IconButton, Image } from "@chakra-ui/react";
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const handleSocialMediaClick = (url) => {
    window.open(url, "_blank");
  };

  const gmail = "kiarie7mbugua@gmail.com";
  const github = "https://github.com/sham106";
  const linkedIn = "https://linkedin.com/AgriTek";

  return (
    <Box as="footer" mt={10} py={4} bg="#131815" color="white">
      <Flex justify="space-between" align="center">
        <Text>
          <Link href="/">
            <Image
              src="src/assets/AgriTek.png"
              w={"100px"}
              borderRadius={"md"}
              m={3}
            />
          </Link>
          &copy;{" "}
        </Text>
        <Flex>
          <Link
            mr={2}
            onClick={() => handleSocialMediaClick(`mailto:${gmail}`)}
          >
            <IconButton icon={<FaEnvelope />} aria-label="Email" />
          </Link>
          <Link mr={2} onClick={() => handleSocialMediaClick(`#`)}>
            <IconButton icon={<FaTwitter />} aria-label="Twitter" />
          </Link>
          <Link mr={2} onClick={() => handleSocialMediaClick(`${linkedIn}`)}>
            <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" />
          </Link>
          <Link mr={4} onClick={() => handleSocialMediaClick(`${github}`)}>
            <IconButton icon={<FaGithub />} aria-label="GitHub" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
