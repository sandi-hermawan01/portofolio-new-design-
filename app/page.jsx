import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Fjalla_One } from "next/font/google";

//components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-FjallaOne",
});
const font_use = fjallaOne.variable;

const Home = () => {
  return (
    <section className="h-full w-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left xl:justify-center order-2 xl:order-none">
            <h1 className={`${font_use} h1 mb-6 font-fjallaOne`}>
              Zsans Personal{" "}
              <span className="text-accent font-fjallaOne">Portofolio</span>
            </h1>
            <span className={`text-xl font-semi`}>
              Web Depeloper || Frontend Developer
            </span>
            <p className="max-w-[700px] mt-2 mb-9 text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* social btn */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
