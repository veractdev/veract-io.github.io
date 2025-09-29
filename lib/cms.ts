import "server-only";
import qs from "qs";

const BASE = process.env.STRAPI_URL!;
const TOKEN = process.env.STRAPI_TOKEN!;

type StrapiOptions = {
  preview?: boolean; // draft content if true
  locale?: string; // e.g. "en", "en-US"
  page?: number;
  pageSize?: number;
  sort?: string;
  tag?: string;
};

export async function strapi<T>(path: string) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${TOKEN}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Strapi ${res.status}: ${await res.text()}`);
  return (await res.json()) as T;
}

export async function getCaseStudyDataBySlug(slug: string) {
    const query = qs.stringify({
        filters: { slug_id: { $eq: slug } },
        populate: {
            list_image:{populate: "*"},
            hover_image:{populate: "*"},
          banner: { populate: {
            image: { populate: "*" },
          }},
          showreel: { populate: {
            video_web_tab_mobile :{populate: "*"},
          } },
          description: { populate: "*" },
          challenges: { populate: {
            indication_icon:{populate: "*"},
            video_web_tab_mobile :{populate: "*"},
            solution_list :{populate: "*"},
          } },
          services:{populate: {
            service_list :{populate: {
                background_image:{populate: "*"},
                background_hover_image:{populate: "*"},
            }},
          }},
          key_features:{populate:{
            key_features_list :{populate: {
                image:{populate: "*"},
            }},
          }},
          testimonials:{populate:{
            quote_image:{populate: "*"},
            image:{populate: "*"},
          }},
          faq:{populate:{
            faq_list :{populate: "*"},
          }},
        },  
      });
      return strapi<any>(`/api/case-studies?${query}`);
}