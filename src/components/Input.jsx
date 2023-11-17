import { Box, Input, Button } from "@chakra-ui/react";

const InputField = () => {
  return (
    <>
      <Input placeholder="Service" w={"500px"} />
      <Button color={"green"} variant={"ghost"}>
        Search
      </Button>
    </>
  );
};

export default InputField;
