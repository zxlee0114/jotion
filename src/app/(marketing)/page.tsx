import Heading from "./_components/heading";
import Heros from "./_components/heros";

const MarketingPage = () => {
  return (
    <div className="flex-center flex-col md:flex-start gap-y-8 flex-1 px-6 pb-10 text-center">
      <Heading />
      <Heros />
    </div>
  );
};

export default MarketingPage;
