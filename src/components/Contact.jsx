import { motion } from "framer-motion";
import { Box, Heading, Text, Input, Button, VStack } from "@chakra-ui/react";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Box p={8} textAlign="center">
        <Heading mb={4}>Contact Us</Heading>
        <Text mb={8}>We`d love to hear from you! Drop us a message below:</Text>
        <VStack spacing={4} align="stretch">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="textarea" placeholder="Your Message" rows={4} />
          <Button colorScheme="green" size="lg">
            Send Message
          </Button>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default ContactPage;
