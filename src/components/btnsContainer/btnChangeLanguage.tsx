import React, { useContext, useEffect } from "react";
import { TranslationContext } from "../../context/TranslationContext"; // Verifica que el nombre del archivo sea correcto.
import { LanguageType } from "../../types/interfaceContext";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTheme } from "../../context/ThemeContext";

export const BtnChangeLanguage: React.FC = () => {
  const { language, setLanguage } = useContext(TranslationContext);
  const { theme } = useTheme();

  const handleLanguageChange = () => {
    const newLanguage: LanguageType = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <button
      name="change language"
      data-aos="fade-in"
      onClick={handleLanguageChange}
      className={`w-[44px] h-[44px] p-1 flex justify-center items-center border-2 ${
        theme === "light" ? "border-darkTheme" : "border-white"
      } overflow-hidden rounded-full hover:border-purple`}
    >
      <img
        className="rounded-full w-[44px] h-[36px]"
        src={`https://flagsapi.com/${
          language === "es" ? "ES" : "GB"
        }/flat/64.png`}
        alt={language}
      />
    </button>
  );
};
