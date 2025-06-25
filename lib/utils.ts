import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isMobile() {
  return window && typeof window !== 'undefined' && window.innerWidth < 768;
}

export function isTablet() {
  return window && typeof window !== 'undefined' && window.innerWidth > 768 && window.innerWidth < 1024;
}