import { useStory } from "../customHooks/useStory";
import { GridSection } from "../storyblockComponents/CommonComponents/GridSection";

export const Store = () => {
  const data = useStory("store");
  const content = data?.story?.content;

  if (!content) return null;

  const gridSections =
    content.Body?.filter(
      (blok) => blok.component === "Grid_section"
    ) || [];

    const productsGrid = gridSections[0];

  if (!productsGrid) return null;


  return (
    <GridSection
      headline={productsGrid.Headline}
      blok={productsGrid}
    />
  );
};
