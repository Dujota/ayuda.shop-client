// import styles from "./TextSection.module.css";
// TODO: check the styles module and add the tailwind classes or make a styled component

import { ImLocation, ImSearch, ImArrowRight2 } from "react-icons/im";

interface SearchBarSectionProps {
  heading: string;
  subtext: string;
  label: string;
  searchPlaceholder: string;
  postalPlaceholder: string;
  buttonText: string;
}

const SearchBarSection = ({ heading, subtext, label, searchPlaceholder, postalPlaceholder, buttonText }: SearchBarSectionProps) => {

  let HeadingText;

  if (label) {
    HeadingText = <div className="search-bar-label">{label}</div>
  } else {
    HeadingText = <div className="flex flex-col items-center">
      <h2 className="search-bar-heading text-center font-heading text-white text-5xl max-w-3xl mb-6 leading-none">{heading}</h2>
      <h3 className="search-bar-subtext text-center font-text text-white leading-6">{subtext}</h3>
    </div>
  }

  return (
    <div className="search-bar-section-container bg-blue pt-52 pb-40 rounded-b-3xl">
      <section className="search-bar-section container mx-auto">

        {HeadingText}

        <div className="search-bar-fields-wrap flex justify-center pt-16">

          <div className="search-bar-query-wrap p-3 bg-white flex-initial w-96 rounded-l flex items-center">
            <ImSearch />
            <input placeholder={searchPlaceholder} type="text" className="search-bar-query-field w-full ml-2" />
          </div>

          <div className="search-bar-postal-wrap p-3 bg-white flex-initial w-48 flex items-center">
            <ImLocation />
            <input placeholder={postalPlaceholder} type="text" className="search-bar-postal-field w-full ml-2" />
          </div>

          <div className="search-bar-submit-button py-3 px-5 bg-red flex-none rounded-r flex items-center">{buttonText ? buttonText : <ImArrowRight2 color="white"/>}</div>
        </div>

      </section>
    </div>
  );
};

export default SearchBarSection;
