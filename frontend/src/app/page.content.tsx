// components/Content.tsx
import Menu from "../components/Menu/Block";
import Main from "../components/Main/Main";
import Footer from "@/components/Footer";

import styles from "./page.module.css"

export async function generateMetadata({ params }: {params: {id: string | null}}) {
  
  const imageUrl = `https://kittens-archive.site/assets/preview-photos/${params.id}.jpg`
  
  return {
    title: 'kittens-archive.site - cute pictures',
    openGraph: {
      title: 'kittens-archive.site - cute pictures',
      description: 'A collection of cute kitten pictures!',
    },
    twitter: {
      card: 'summary_large_image',
      image: imageUrl,
    },
  };
}

export default function Content({
  page_id,
  filter_type,
}: {
  page_id: string | null;
  filter_type: string | null;
}) {
  return (
    <div className={styles.mainBlock}>
        <Menu />
        <Main page_id={page_id ? +page_id : 1} filter={filter_type ? filter_type : "1"} />
        <Footer />
    </div>
  );
}
