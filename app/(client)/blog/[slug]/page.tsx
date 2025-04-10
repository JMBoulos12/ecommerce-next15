import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return (
    <div>
      <Container>
        <Title>Single Blog Page</Title>
        <p>{slug}</p>
      </Container>
    </div>
  );
};

export default SingleBlogPage;
