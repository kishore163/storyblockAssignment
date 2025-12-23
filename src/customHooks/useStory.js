import { useEffect, useState } from "react";
import { useStoryblokApi } from "@storyblok/react";

export const useStory = (slug) => {
  const storyblokApi = useStoryblokApi();
  const [data, setData] = useState(null);

  const version = import.meta.env.VITE_STORYBLOK_VERSION;

  useEffect(() => {
    if (!slug) return;

    const fetchStory = async () => {
      const res = await storyblokApi.get(
        `cdn/stories/${slug.replace(/^\/+/, "")}`,
        {
          version,
        }
      );
      setData(res.data);
    };

    fetchStory();

   
    if (version === "draft" && window.storyblok) {
      window.storyblok.on(["change", "published"], fetchStory);
    }
  }, [slug, storyblokApi, version]);

  return data;
};
