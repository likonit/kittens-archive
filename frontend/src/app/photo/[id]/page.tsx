// app/page.tsx
import { Suspense } from "react";
import SearchParamsContent from "./page.client";

import Metrika from "../../metrika.component";
interface GetParam {page: string | null, filter: string | null}

export async function generateMetadata({ params }: {params: {id: string | null}}) {
  
  const imageUrl = `https://kittens-archive.site/assets/preview-photos/${params.id}.jpg`
  
  return {
    title: 'kittens-archive.site - cute pictures',
    openGraph: {
      title: 'kittens-archive.site - cute pictures',
      description: 'A collection of cute kitten pictures!',
      images: [
        {
          url: imageUrl,
          alt: 'Cute kitten picture',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      image: imageUrl,
    },
  };
}

export default function Page({ searchParams, params }: {searchParams: GetParam, params: {id: string | null}}) {

  return (
    <>
      <Metrika></Metrika>
      <Suspense fallback={<div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0 }}>Loading...</div>}>
        <SearchParamsContent id={params.id} filter={searchParams.filter} page={searchParams.page}/>
      </Suspense>
    </>
  );
  
}
