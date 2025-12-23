import { useStory } from "../customHooks/useStory";
import { ExtraHelp } from "../storyblockComponents/HelpPageComponents/ExtraHelp";
import { FAQSection } from "../storyblockComponents/HelpPageComponents/FQQSection";
import '../App.css';

export const Help = () => {
  const data = useStory("/help");

  const content = data?.story?.content;
  if (!content)
    return null;

  const FAQSec = content.Body?.find((ele) => ele.component === "faq_section");
  const extraHelp = content.Body?.find((ele) => ele.component === "help_required");

  return (
    <div className="faq_outer_container">
      <FAQSection blok={FAQSec} />
      <ExtraHelp blok={extraHelp}/>
      

    </div>
  )

}