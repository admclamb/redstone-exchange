import CustomContainer from "@/components/CustomContainer/CustomContainer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>
        <CustomContainer>{children}</CustomContainer>
      </main>
    </>
  );
};

export default Layout;
