import ExperienceCard from "../ExperienceCard";


const title = "Medref Internship";
const position = "Lead Frontend Developer for Web and App";
const date = "15 May - Now";
const tasks = [
    "Worked on the Medref project at Healthbridge Solutions.",
    "Developed the frontend of the web and app using Next Js, Tailwind CSS and React Native respectively.",
    "Designed a significant portion of the startup.",
];

const title2 = "Ignition Nest Labs Internship";
const position2 = "Frontend Developer for Web and App";
const date2 = "15 Sep - Now";
const tasks2 = [
    "Working on the Apgyc project at Ignition Nest Labs.",
    "Developing the admin panel.",
    "Also Developed the app using React Native and Tailwind CSS.",
];

const Experience = () => {
    return (
        <section id="experience" className="w-full min-h-[90vh] flex flex-col justify-center ">
        <div className="flex items-center gap-x-4">
                <h2 className="flex items-center gap-x-2 text-2xl font-bold dark:text-gray-700 text-white">
                    <span className="rounded  text-pink-500 backdrop-blur ">02.</span>Experience</h2>
                <div className="relative top-[2px] h-[1px] flex-grow animate-bounce  dark:bg-neutral-950/10 bg-white/20"></div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 py-16 lg:grid-cols-2">
                <ExperienceCard title={title} position={position} date={date} tasks={tasks} />
                <ExperienceCard title={title2} position={position2} date={date2} tasks={tasks2} />
            </div>

        </section>
    );
};

export default Experience;