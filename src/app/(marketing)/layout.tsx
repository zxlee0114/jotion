import { type ReactNode } from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const MarketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex flex-col dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
