// components/Content.tsx
import Menu from "../../../components/Menu/Block";
import PageBlock from "@/components/Photo";
import Footer from "@/components/Footer";

export default function Content({
  page_num,
  id,
  filter_type,
}: {
  page_num: string | null;
  id: string | null;
  filter_type: string | null;
}) {
  return (
    <div className="pageBlock">
        <Menu />
        <PageBlock
            page={page_num ? +page_num : 1}
            photo_id={id ? id : "no"}
            filter={filter_type ? filter_type : "1"}
        />
        <Footer />
    </div>
  );
}
