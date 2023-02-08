import { Fragment } from "react";
import * as SectionComponents from "./sections";
import capitalizeString from "@/lib/utils/capitalizeString";

interface Section {
  _type: string;
  _key: string;
  section: object; // TODO: look into what this type should be
}

interface Props {
  sections: Section[];
}

const resolveSections = (section: Section) => {
  const ComponentName = capitalizeString(section._type);
  // @ts-ignore TODO: look into this type issue
  const Section = SectionComponents[ComponentName];

  if (Section) {
    return Section;
  }

  console.error("Cant find section", section);
  return null;
};

const RenderSections = (props: Props) => {
  const { sections } = props;

  if (!sections) {
    console.error("Missing section");
    return <div>Missing sections</div>;
  }

  return (
    <Fragment>
      {sections.map((section, i) => {
        const SectionComponent = resolveSections(section);
        if (!SectionComponent) {
          return (
            <div key={section._key || i}>Missing section {section._type}</div>
          );
        }
        return <SectionComponent {...section} key={section._key} />;
      })}
    </Fragment>
  );
};

export default RenderSections;
