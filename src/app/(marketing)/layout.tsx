import { type ReactNode } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
