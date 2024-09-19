import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
