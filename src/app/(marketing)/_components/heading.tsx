import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
  return (
    <section className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        讓你的想法、文件與計畫結合在一起。歡迎來到{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion 是個混合工作空間 <br />
        讓你的工作更加美好、更有效率
      </h3>
      <Button>
        馬上使用
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </section>
  );
};

export default Heading;
