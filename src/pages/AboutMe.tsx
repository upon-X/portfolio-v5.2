import { useTranslation } from "../context/TranslationContext";
import { Description } from "../components/AboutMe/Description";
import { MySkils } from "../components/AboutMe/MySkills";
import myPhoto from "../assets/myphotonobg.webp";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTheme } from "../context/ThemeContext";
import { Experience } from "../components/AboutMe/Experience";

export default function AboutMe() {
  const { content, language } = useTranslation();
  const { theme } = useTheme();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <section
      className={`flex flex-col gap-10 items-center py-14
    ${theme === "light" ? "" : "bg-darkTheme text-white"}
    `}
    >
      <h4 data-aos="fade-down" className="text-center text-2xl">
        {content?.aboutMe[language].subtitle}
      </h4>
      <div
        data-aos="fade-in"
        className=" overflow-hidden rounded-full border-4 border-purple "
      >
        <img
          className="w-[230px] h-[230px] aspect-square"
          src={myPhoto}
          alt="Valentino Micheloni Photo"
        />
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <Description />
        </div>
        <div>
          <Experience />
        </div>
        <div className=" col-span-2">
          <MySkils />
        </div>
      </div>
    </section>
  );
}
