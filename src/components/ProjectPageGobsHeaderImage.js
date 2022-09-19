import parse from "html-react-parser";

export default function ProjectPageGobsHeaderImage({ projects }) {
    let image = "https://images.unsplash.com/photo-1662997928780-527effae2443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

    if (projects._embedded && projects._embedded["wp:featuredmedia"]) {
        image = projects._embedded["wo:featuredmedia"][0].source_url;
    }

    return (
        <div>
            {parse(projects.content.rendered)}
        </div>
    )
}