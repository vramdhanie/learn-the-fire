import React from "react";
import { Center, Image } from "@chakra-ui/react";
import logo from "./images/logo.png";

function App() {
  return (
    <Center w="100vw" h="100vh" bg="green.600">
      <Image src={logo} alt="Logo" borderRadius="full" />
    </Center>
  );
}

export default App;
