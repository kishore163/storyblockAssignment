import { useEffect, useState } from "react";
import { useStoryblokApi } from "@storyblok/react";

export const useStory = (slug) => {
  const storyblokApi = useStoryblokApi();
  const [data, setData] = useState(null);

  const isPreview =
    import.meta.env.VITE_STORYBLOK_ENV === "preview";

  const version = isPreview ? "draft" : "published";

  useEffect(() => {
    if (!slug) return;

    const fetchStory = async () => {
      const res = await storyblokApi.get(
        `cdn/stories/${slug.replace(/^\/+/, "")}`,
        { version }
      );
      setData(res.data);
    };

    fetchStory();

    if (!isPreview) return;

    const onStoryblokEvent = () => fetchStory();

    if (window.storyblok) {
      window.storyblok.on(
        ["input", "change", "published"],
        onStoryblokEvent
      );
    }

    return () => {
      if (window.storyblok) {
        window.storyblok.off(
          ["input", "change", "published"],
          onStoryblokEvent
        );
      }
    };
  }, [slug, storyblokApi, isPreview, version]);

  return data;
};
