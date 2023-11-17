import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  Image,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isCvvVisible, setIsCvvVisible] = useState(false);

  const Toast = useToast();
  const ShowToast = () => {
    Toast({
      title: "Payment Complete",
      description: "Thank you for being our valued Customer",
      duration: 4000,
      isClosable: True,
      Status: "success",
      position: "top",
    });
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleToggleCvvVisibility = () => {
    setIsCvvVisible(!isCvvVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the payment processing logic
    console.log("Payment submitted:", { cardNumber, expiry, cvv });
  };

  return (
    <>
      <Navbar />
      <Box>
        <Heading textAlign={"center"}>Evergreen-Payment</Heading>
      </Box>

      <Box ml={40} mr={40} p={4} borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <FormControl id="cardNumber" mb={3}>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="tel"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </FormControl>

          <FormControl id="expiry" mb={3}>
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={handleExpiryChange}
            />
          </FormControl>

          <FormControl id="cvv" mb={3}>
            <FormLabel>CVV</FormLabel>
            <InputGroup>
              <Input
                type={isCvvVisible ? "text" : "password"}
                placeholder="Enter CVV"
                value={cvv}
                onChange={handleCvvChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="2em" size="sm" onClick={handleToggleCvvVisibility}>
                  {isCvvVisible ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button type="submit" colorScheme="blue" onClick={ShowToast}>
            Submit Payment
          </Button>
        </form>
      </Box>
      <Box>
        <Heading textAlign={"center"}>Mode of payment</Heading>
      </Box>
      <Box>
        <Flex justify={"space-evenly"} align={"center"} flexDir={"row"}>
          <Link to={"/paypal"}>
            {" "}
            <Image
              src="src/assets/payment/paypal.svg"
              alt="paypal-logo"
              w={"100px"}
            />
            <Button
              color={"blue.800"}
              bg={"blue.300"}
              alignContent={"center"}
              ml={3}
            >
              Paypal
            </Button>
          </Link>
          <Link to={"/mpesa"}>
            <Image
              src="src/assets/payment/120px-M-PESA_LOGO-01.svg.png"
              alt="Mpesa-logo"
            />
            <Button
              color={"white"}
              bg={"green.300"}
              alignContent={"center"}
              ml={3}
            >
              Mpesa
            </Button>
          </Link>
          <Link to={"/payment"}>
            <Image
              src="src/assets/payment/cvv.svg"
              alt="CVV-Logo"
              w={"100px"}
            />
            <Button colorScheme="teal" ml={3} alignContent={"center"}>
              CVV
            </Button>
          </Link>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Payment;
//create paths and elements into the main.jsx folder
