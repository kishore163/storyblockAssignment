import { StoryblokComponent } from "@storyblok/react";
import { useStory } from "../customHooks/useStory"
import { GridSection } from "../storyblockComponents/CommonComponents/GridSection";
import { Hero } from "../storyblockComponents/CommonComponents/Hero";

export const Academy = () => {
  const data = useStory('academy')
  const content = data?.story?.content;
  if (!content)
    return null;

  const heroBlock = content.Body?.find(blok => blok.component === "Hero");
  if (!heroBlock)
    return null;

  const eyebrow = heroBlock.Eyebrow;
  const heading = heroBlock.Headline;
  const description = heroBlock.text;
  const heroImage = heroBlock.Image?.filename;
  const buttons = heroBlock.button || [];

   const gridSections = content.Body?.filter(
    (blok) => blok.component === "Grid_section"
  ) || [];

  const day_night_ele = gridSections.find(
    (grid) => grid.Headline === "Coaching Hours"
  );

  const men_women_ele = gridSections.find(
    (grid) => grid.Headline === "Coaching Type"
  );


  return (
    <>
      <Hero eyebrow={eyebrow} heading={heading} description={description} button={buttons} heroImage={heroImage} />
      <GridSection headline={day_night_ele.Headline} blok={day_night_ele} />
      <GridSection headline={men_women_ele.Headline} blok={men_women_ele} />

      
    
    </>
    


  )
}