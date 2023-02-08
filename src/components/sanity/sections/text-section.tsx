import SimpleBlockContent from "@/components/common/utils/simple-block-content";
// import styles from "./TextSection.module.css";
// TODO: check the styles module and add the tailwind classes or make a styled component

interface TextSectionProps {
  heading: string;
  label: string;
  text?: object[];
}

const TextSection = ({ heading, label, text }: TextSectionProps) => {
  return (
    <div className="text-section-container">
      <section className="text-section-article">
        <div className="text-section-label">{label}</div>
        <h2 className="text-section-label">{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  );
};

export default TextSection;
