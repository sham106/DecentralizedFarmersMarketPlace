import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Collapse,
  Image,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "../../assets/AgriTek.png";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isOn, setIsOn] = useState(false);
  const toggleBar = () => {
    setIsOn(!isOn);
  };
  const links = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Products",
      url: "/services",
    },
    {
      text: "About",
      url: "/about",
    },
    {
      text: "Contact",
      url: "#Contact",
    },

    {
      text: "Login",
      url: "/login",
    },
  ];

  return (
    <>
      <Box w={"100"} boxShadow={"lg"}>
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
            <Link href="/">
              <Image
                borderRadius={"md"}
                width={"100px"}
                height={"100px"}
                src={Logo}
                alt="Evergreen-Logo"
              />
            </Link>
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
                  <Link href={link.url}>{link.icon}</Link>
                  <Link href={link.url}>{link.text}</Link>
                </div>
              );
            })}
          </HStack>

          <HStack spacing={2}>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              size="md"
            />
            <IconButton
              aria-label="Open menu"
              onClick={toggleBar}
              icon={isOn ? <CloseIcon /> : <HamburgerIcon />}
              display={{ base: "flex", md: "none" }}
              size="md"
            />
            <Collapse in={isOn}>
              <Box
                bg={"blue.400"}
                display={isOn ? "block" : "none"}
                width={"full"}
                height={"full"}
                position={"fixed"}
                zIndex={1000}
                top={0}
                left={0}
              >
                <Flex
                  height={"full"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDir={"column"}
                >
                  <Link href="/">
                    <Button variant={"link"} color={"blue"} onClick={toggleBar}>
                      Home
                    </Button>
                  </Link>
                  <Link href="/aboutus">
                    <Button variant={"link"} color={"blue"} onClick={toggleBar}>
                      About
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant={"link"} color={"blue"} onClick={toggleBar}>
                      {" "}
                      Contact
                    </Button>
                  </Link>
                  <Link href="/"></Link>
                  <Link href="/login">
                    {" "}
                    <Button variant={"link"} color={"blue"} onClick={toggleBar}>
                      Login
                    </Button>
                  </Link>
                </Flex>
              </Box>
            </Collapse>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
