import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
        <main className="mt-[88px]">
          {children}
        </main>
      <Footer />
    </>
  );
};

export { Layout };
