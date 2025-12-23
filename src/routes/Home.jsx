import { useStory } from "../customHooks/useStory";
import { Hero } from "../storyblockComponents/CommonComponents/Hero"
import { HomeTabSection } from "../storyblockComponents/HomeComponents/HomeTabSection"

export const Home = () => {
  const data = useStory("home");
  const content = data?.story?.content;

  if (!content) return null;

  const heroBlock = content.Body?.find(
    (blok) => blok.component === "Hero"
  );

  if (!heroBlock) return null;

  const eyebrow = heroBlock.Eyebrow;
  const heading = heroBlock.Headline;
  const description = heroBlock.text;
  const heroImage = heroBlock.Image?.filename;
  const buttons = heroBlock.button || [];

   const sectionBlock = content.Body?.find(
    (blok) => blok.component === "Home_tab_col_section"
  );

  if (!sectionBlock) return null;

  const heading_for_home_tab = sectionBlock.Headline;
  const entries = sectionBlock.entry || [];
  return (
    <>
      <Hero class="homehero" eyebrow={eyebrow} heading={heading} description={description} heroImage={heroImage} buttons={buttons} />
      <HomeTabSection heading={heading_for_home_tab} entries={entries} />
    </>
  )
}