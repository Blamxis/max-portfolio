import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
      <section className="h-full">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                {/* text */}
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <span className="text-xl">Full-Stack Developer</span>
                    <h1 className="h1 mb-6">
                        Hello I'm <br /><span className="text-accent">Maxime Gavinet</span>
                    </h1>
                    <p className="max-w-[500px] mb-9 text-white/80">
                        I have practical skills in full-stack development,
                        mainly for web projects, with a good understanding of common
                        programming languages and technologies.
                    </p>
                    {/* Btn & social */}
                    <div className="flex flex-col xl:flex-row items-center gap-8">
                        <Button
                            variant="outline"
                            size="lg"
                            className="uppercase flex items-center gap-2 rounded-full border-2
                            border-accent text-white hover:bg-accent hover:text-white
                            transition-colors duration-300"
                        >
                            <span>Download CV</span>
                            <FiDownload className="text-xl" />
                        </Button>
                        <div className="mb-8 xl:mb-8">
                            <Social
                                containerStyles="flex h-2 gap-6"
                                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                                items-center text-white text-base hover:bg-accent hover:text-primary
                                hover:transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
                {/* photo */}
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo />
                </div>
            </div>
        </div>
          <Stats />
      </section>
  )
}

export default Home;