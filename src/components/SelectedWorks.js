import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import CategoryFetchPost from "./CategoryFetchPost";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function SelectedWorks() {
    gsap.registerPlugin(ScrollTrigger);

    // insert category ID below to fetch from
    // tag=X in Wordpress Rest API 💫
    // ON LOAD -> default = 11 - which is featured cat
    const onLoadCatID = 11;
    const [categoryID, setCategoryID] = useState(onLoadCatID);
    const buttonRef = useRef();

    // IDS for the different categories for the selector
    const selectorIDs = [
        {
            id: "1",
            categoryID: "11",
            title: 'FEATURED'
        },
        {
            id: "2",
            categoryID: "9",
            title: 'WEB'
        },
        {
            id: "3",
            categoryID: "5",
            title: 'GRAPHIC DESIGN'
        },
        {
            id: "4",
            categoryID: "12",
            title: '3D'
        },
        {
            id: "5",
            categoryID: "8",
            title: 'SOUND'
        },
        {
            id: "6",
            categoryID: "13",
            title: 'SOUND PACKS'
        }
    ]

    // animate after DOM is rendered 👀
    useEffect(() => {
        gsap.to(".selectedHeader", {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.selectedHeader',
            toggleActions: "restart none none none"
          }
        });

        gsap.to(".selectedWorksGrid", {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.selectedWorksGrid',
                scrub: true,
                toggleActions: "restart none none none"
            }
        });
    }, []);

    return (
        <section className="selectedWorks sectionWide">
            <div className="selectedHeader">
                <div className="selectedButtons">
                    {selectorIDs.map(selectorID => (
                            <button
                                ref={buttonRef}
                                key={selectorID.id}
                                onClick={() => {setCategoryID(selectorID.categoryID);}}
                            >
                                {selectorID.title}
                            </button>
                    ))}
                </div>
                <div className='selectedLink'>
                    <Link to="/projects">
                        <ArrowUpRightIcon/>SEE ALL PROJECTS
                    </Link>
                </div>
            </div>
            <div className="selectedWorksGrid">
                <CategoryFetchPost categoryID={categoryID}/>
            </div>
        </section>
    );
}