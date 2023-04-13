// import styles from "./TextSection.module.css";
// TODO: check the styles module and add the tailwind classes or make a styled component
import { urlForImage } from "@/lib/sanity/sanity.image";

interface CategoriesListSectionProps {
  heading: string;
  subtext: string;
  categoriesList: Array;
  buttonText: string;
  buttonURL: string;
}

const CategoriesListSection = ({ heading, subtext, categoriesList, buttonText, buttonURL }: CategoriesListSectionProps) => {

  console.log(categoriesList)

  let HeadingText;

    HeadingText = <div className="flex flex-col items-center mb-20">
      <h2 className="text-center font-heading text-5xl max-w-3xl mb-4 font-bold">{heading}</h2>
      <h3 className="text-center font-text leading-6 font-medium">{subtext}</h3>
    </div>

  return (
    <div className="py-20">
      <section className="flex flex-col items-center container">

        {HeadingText}

        <div className="flex justify-center gap-6 flex-wrap">
        {categoriesList.map(item => {
          return <a className="w-44 h-36 border border-grey rounded-xl flex flex-col items-center justify-center"
            href={item.url}>
            <img src={urlForImage(item.image)} alt="" />
            <h6 className="text-center">{item.title}</h6>
          </a>;
        })}
        </div>

        <a className="border border-grey rounded-md mt-10 px-6 py-4 font-medium" href={buttonURL}>{buttonText}</a>

      </section>
    </div>
  );
};

export default CategoriesListSection;
