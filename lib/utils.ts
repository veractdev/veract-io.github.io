import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isMobile() {
  if (typeof window === 'undefined') return false;
  // return window.innerWidth < 768;
  if (!window) return false;
  if (window && typeof window !== undefined) {
    return window.innerWidth < 768;
  }
}

export function isTablet() {
  if (typeof window === 'undefined') return false;
  // return window.innerWidth >= 768 && window.innerWidth <= 1024;
  if (!window) return false;
  if (window && typeof window !== undefined) {
    return window.innerWidth >= 768 && window.innerWidth < 1280;
  }
}

export function isValidSlug(slug: string): boolean {
  const validSlugs = ["infrared-thermography", "accessible-web-widget"];
  return validSlugs.includes(slug);
}

export function getStrapiImage(image: string) {
  let url = process.env.STRAPI_URL;
  if(!url){
    url = "http://localhost:1337";
  }
  return `${url}${image}`;
}