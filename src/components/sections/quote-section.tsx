import { cn } from "@/lib/utils";
import SmoothReveal from "../animations/smooth-reveal";

const cardContent = {
  title: "Quote of the day",
  description:
    '"To be insanely hopeful even after all that, you call it madness, I call it strength."',
};
const CardBody = ({ className = "p-4" }) => (
  <div className={cn("text-left", className)}>
    <h3 className="font-medium mb-3 text-gray-900 dark:text-[#EEEEEE]">
      {cardContent.title}
    </h3>

    <p className="text-gray-700 dark:text-[#B4B4B4] italic">
      {cardContent.description}
    </p>
  </div>
);

export const QuoteComponent = () => {
  const Ellipses = () => {
    const sharedClasses =
      "rounded-full outline outline-8 dark:outline-zinc-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-green-400";
    return (
      <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
        <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
        </section>
      </div>
    );
  };

  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-full rounded-2xl border border-dashed border-zinc-300 px-4 dark:border-zinc-800 sm:px-6 md:px-8 bg-[#141415]">
      <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-800 sm:top-6 md:top-8"></div>
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-800 sm:bottom-6 md:bottom-8"></div>
      <div className="relative w-full border-x border-zinc-400 dark:border-zinc-800">
        <Ellipses />
        <div className="relative z-20 mx-auto py-8">{children}</div>
      </div>
    </div>
  );

  return (
    <SmoothReveal delay={0.3} className="w-full">
      <Container>
        <div className="p-3 w-full center">
          <CardBody />
        </div>
      </Container>
    </SmoothReveal>
  );
};

export default QuoteComponent;
