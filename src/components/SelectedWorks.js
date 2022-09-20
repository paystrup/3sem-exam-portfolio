import CategoryFetchPost from "./CategoryFetchPost";

export default function SelectedWorks() {
    return (
        <section className="selectedWorks sectionWide">
            <CategoryFetchPost categoryID={9}/>
        </section>
    );
}