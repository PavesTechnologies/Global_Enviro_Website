"use client";
import useScrollToHash from "@/lib/useScrollToHash";

export default function ScrollToHash({ ids }) {
  useScrollToHash(ids);
  return null;
}
