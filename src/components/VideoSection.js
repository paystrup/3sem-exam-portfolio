import video from "../components/assets/test2.mp4"
export default function VideoSection() {
    return (
        <section className="videoSection">
            <video autoPlay loop muted>
                <source src={video} type="video/mp4"/>
            </video>

        </section>
    )
}