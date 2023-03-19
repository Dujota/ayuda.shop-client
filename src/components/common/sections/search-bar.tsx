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
    HeadingText = <div>
      <h2 className="search-bar-heading">{heading}</h2>
      <h3 className="search-bar-subtext">{subtext}</h3>
    </div>
  }

  return (
    <div className="search-bar-section-container">
      <section className="search-bar-section">

        {HeadingText}

        <div className="search-bar-fields-wrap">

          <div className="search-bar-query-wrap">
            <div className="search-bar-query-icon"></div>
            <input placeholder={searchPlaceholder} type="text" className="search-bar-query-field" />
          </div>

          <div className="search-bar-postal-wrap">
            <div className="search-bar-postal-icon"></div>
            <input placeholder={postalPlaceholder} type="text" className="search-bar-postal-field" />
          </div>

          <div className="search-bar-submit-button">{buttonText ? buttonText : "->"}</div>
        </div>

      </section>
    </div>
  );
};

export default SearchBarSection;
