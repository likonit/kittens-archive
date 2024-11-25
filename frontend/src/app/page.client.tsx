// components/SearchParamsContent.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Content from "./page.content"

export default function SearchParamsContent() {
  const searchParam = useSearchParams();
  const page_id = searchParam.get("page");
  const filter_type = searchParam.get("filter");

  return <Content page_id={page_id} filter_type={filter_type} />;
}
