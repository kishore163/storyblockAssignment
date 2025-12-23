// useStory.js
import { useEffect, useState } from "react";
import { useStoryblokApi } from "@storyblok/react";

export function useStory(slug, params = {}) {
  const storyblokApi = useStoryblokApi();
  const [data, setData] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const res = await storyblokApi.get(`cdn/stories/${slug}`, {
        version: "draft",
        ...params,
      });

      if (!cancelled) setData(res?.data);
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return data;
}
