//components
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import HomeText from "@/components/HomeText";
import InfinityScrolle from "@/components/InfinityScrolle";

const Home = () => {
  return (
    <section className="h-full w-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:mt-10 xl:pb-2">
          {/* text */}
          <HomeText />
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <InfinityScrolle />
    </section>
  );
};

export default Home;
