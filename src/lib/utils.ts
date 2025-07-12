import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FormData } from "@/components/form"
import { Case } from "@/providers/case-provider";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function capitalizeAll(sentence: string): string {
  return sentence
    .split(" ")
    .map(capitalize)
    .join(" ");
}
