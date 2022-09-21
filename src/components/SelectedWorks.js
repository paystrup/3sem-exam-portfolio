import CategoryFetchPost from "./CategoryFetchPost";

export default function SelectedWorks() {
    // insert category ID below to fetch from
    // tag=X in Wordpress Rest API 💫
    return (
        <section className="selectedWorks sectionWide">
            {/* <h2>Featured, Graphic Design, Web, School, Sound</h2> */}
            <div className="selectedWorksGrid">
                <CategoryFetchPost categoryID={11}/>
            </div>
        </section>
    );
}