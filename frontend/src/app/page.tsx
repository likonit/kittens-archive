// app/page.tsx
import { Suspense } from "react";
import SearchParamsContent from "./page.client";
import Metrika from "./metrika.component";

export const metadata = {
  title: 'kittens-archive.site - cute pictures',
}

export default function Home() {
  return (
    <>
      <Metrika></Metrika>
      <Suspense fallback={<div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0 }}>Loading...</div>}>
        <SearchParamsContent />
      </Suspense>
    </>
  );
}
