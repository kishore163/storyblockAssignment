import { apiPlugin, storyblokInit } from "@storyblok/react";

import { ImageTextComp } from "./AboutPageComponents/ImageTextComp";
import { SuccessCard } from "./AboutPageComponents/SuccessCard";
import { DayNight } from "./AcademyComponents/DayNight";
import { CoachingType } from "./AcademyComponents/CoachingType";
import { Product } from "./StorePageComponents/Product";
import { FAQItem } from "./HelpPageComponents/FAQItem";

const isPreview =
  import.meta.env.VITE_STORYBLOK_ENV === "preview";

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  bridge: isPreview,
  components: {
    Image_Text_comp: ImageTextComp,
    success_card: SuccessCard,
    Day_Night: DayNight,
    boys_and_girls_academy: CoachingType,
    product: Product,
    faq: FAQItem,
  },
});
