// import styles from "./TextSection.module.css";
// TODO: check the styles module and add the tailwind classes or make a styled component

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
      <h2 className="search-bar-heading text-center font-heading text-white text-5xl max-w-3xl">{heading}</h2>
      <h3 className="search-bar-subtext text-center font-text text-white leading-6">{subtext}</h3>
    </div>
  }

  return (
    <div className="search-bar-section-container bg-blue pt-52 pb-40 rounded-b-3xl">
      <section className="search-bar-section container mx-auto">

        {HeadingText}

        <div className="search-bar-fields-wrap flex justify-center pt-16">

          <div className="search-bar-query-wrap p-3 bg-white flex-initial w-96 rounded-l">
            <div className="search-bar-query-icon"></div>
            <input placeholder={searchPlaceholder} type="text" className="search-bar-query-field w-full" />
          </div>

          <div className="search-bar-postal-wrap p-3 bg-white flex-initial w-48">
            <div className="search-bar-postal-icon"></div>
            <input placeholder={postalPlaceholder} type="text" className="search-bar-postal-field w-full" />
          </div>

          <div className="search-bar-submit-button p-3 bg-red flex-none rounded-r">{buttonText ? buttonText : "->"}</div>
        </div>

      </section>
    </div>
  );
};

export default SearchBarSection;
