export default function ProjectPageHeader( { project }) {
    return (
        <section className="projectPageHeader">
            <div className="projectPageBoxLeft">
                <h4>CASE</h4>
            </div>
            <div className="projectPageBoxRight">
                <div> 
                    <h2>{project.acf.case}</h2>
                </div>
                <div className="projectPageBoxRightLower">
                    <div className="ppDetails">
                        <h6>CLIENT</h6>
                        <p>{project.acf.client}</p>
                    </div>
                    <div className="ppDetails">
                        <h6>SERVICE</h6>
                        <p>{project.acf.service}</p>
                    </div>
                    <div className="ppDetails">
                        <h6>DATE</h6>
                        <p>{project.acf.date}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}