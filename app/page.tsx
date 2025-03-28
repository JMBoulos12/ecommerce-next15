import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
        accusantium nesciunt commodi voluptates error? Molestiae minus aliquid
        quis dolore ipsa deleniti quisquam veritatis enim! Aperiam maiores
        expedita consequuntur quos magni?
      </p>
      <Button size="lg">Check Out</Button>
    </Container>
  );
};

export default Home;
