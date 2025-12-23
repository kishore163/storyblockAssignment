import { StoryblokComponent } from "@storyblok/react";

export const GridSection = ({ headline, blok }) => {
  if (!blok?.Inner_ele?.length) return null;

  console.log(
    blok.Inner_ele.map((i) => i.component)
  );

  return (
    <section className="grid_section">
      <h1 className="grid_heading">{headline}</h1>

      <div className="grid_inner_ele_container">
        {blok.Inner_ele.map((inner_ele) => (
          <StoryblokComponent
            key={inner_ele._uid}
            blok={inner_ele}
          />
        ))}
      </div>
    </section>
  );
};
