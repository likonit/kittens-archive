// components/SearchParamsContent.tsx
"use client";

import Content from "./page.content"

export default function SearchParamsContent({id, page, filter}: {id: string | null, page: string | null, filter: string | null}) {

  return (
    <Content
      id={id}
      filter_type={filter}
      page_num={page}
    />
  );
}
