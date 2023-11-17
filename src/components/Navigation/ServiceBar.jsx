import { Box, Flex, HStack, Link, Image, Input } from "@chakra-ui/react";
import Logo from "../../assets/AgriTek.png";

const ServiceBar = () => {
  const links = [
    {
      text: "Buy",
      url: "#buy",
    },
    {
      Text: "Sell",
      url: "#sell",
    },
    {
      Text: "Chat",
      url: "/chat",
    },
  ];

  return (
    <>
      <Box
        w={"100%"}
        h={"100px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          p={4}
          bg={"transparent"}
          color={"green.500"}
          wrap={"wrap"}
        >
          <Box>
            <Input
              background={"transparent"}
              placeholder="Search service/product"
            />
          </Box>
          <HStack
            spacing={4}
            p={4}
            m={2}
            display={{ base: "none", md: "flex" }}
          >
            {links.map((link) => {
              return (
                <div key={link.text}>
                  <Link href={link.url}>{link.text}</Link>
                </div>
              );
            })}
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default ServiceBar;
