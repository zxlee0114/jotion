import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="flex items-center w-full h-full p-6 bg-background dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full flex-between md:justify-end items-center gap-x-2 text-muted-foreground dark:bg-[#1F1F1F]">
        <Button variant={"ghost"} size={"sm"}>
          隱私政策
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          服務條款
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
