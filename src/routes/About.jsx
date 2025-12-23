import { useStory } from "../customHooks/useStory";
import { GridSection } from "../storyblockComponents/CommonComponents/GridSection";
import { Hero } from "../storyblockComponents/CommonComponents/Hero";

export const About = () => {
  const data = useStory("about");
  const content = data?.story?.content;

  if (!content) return null;


  const heroBlock = content.Body?.find(
    (blok) => blok.component === "Hero"
  );

  if (!heroBlock) return null;

  const about_eyebrow = heroBlock.Eyebrow;
  const about_heading = heroBlock.Headline;
  const about_description = heroBlock.text;
  const about_heroImage = heroBlock.Image?.filename;
  const about_buttons = [];

 
  const gridSections = content.Body?.filter(
    (blok) => blok.component === "Grid_section"
  ) || [];

  const team_grid = gridSections.find(
    (grid) => grid.Headline === "Meet The Team"
  );
  console.log(team_grid);

  const achievements_grid = gridSections.find(
    (grid) => grid.Headline == "Our Achievments"
  );
  console.log(achievements_grid);

  return (
    <>
      <Hero
        eyebrow={about_eyebrow}
        heading={about_heading}
        description={about_description}
        heroImage={about_heroImage}
        buttons={about_buttons}
      />

      {team_grid && (
        <GridSection headline={team_grid.Headline} blok={team_grid} />
      )}

      {achievements_grid && (
        <GridSection
          headline={achievements_grid.Headline}
          blok={achievements_grid}
        />
      )}
    </>
  );
};
