// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// const Section = ({ section, setActiveSection, timeOfLastClick }) => {
//     const { id, heading, paragraph } = section;
//     const { inView, ref } = useInView({ threshold: 0.7 });

//     useEffect(() => {
//         if (inView && Date.now() - timeOfLastClick > 1000)
//         setActiveSection(id);
//     }, [inView, id, setActiveSection, timeOfLastClick]);

//     return (
//         <section
//         id={id}
//         ref={ref}
//         className="section"
//         >
//         <h1>{heading}</h1>
//         <p>{paragraph}</p>
//         </section>
//     );
// };

// export default Section;
