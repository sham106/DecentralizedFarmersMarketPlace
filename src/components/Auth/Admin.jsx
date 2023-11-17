import { Button, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleClick = (role) => {
    if (role === "customer") {
      navigate("/login");
    } else if (role === "admin") {
      navigate("/admin");
    }
  };
  return (
    <Box>
      <Text>Login as:</Text>
      <Button
        variant={"ghost"}
        color={"green"}
        alignItems={"center"}
        onClick={() => handleClick("customer")}
      >
        Customer
      </Button>
      <Button variant={"ghost"} onClick={() => handleClick("admin")}>
        Admin
      </Button>
    </Box>
  );
};

export default Admin;
