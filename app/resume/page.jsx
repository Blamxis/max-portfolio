"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

// About Data
const about = {
    title: "About me",
    description: "Currently undergoing a professional transition, I am passionate about web and mobile development. " +
        "After a career in another sector, I decided to follow my passion for technology and undergo intensive training in " +
        "this dynamic field. Thanks to my training at STUDI and my personal projects, I am acquiring in-depth knowledge of the " +
        "latest technologies and industry best practices.\n" +
        "\n" +
        "Motivated by challenges and endowed with a quick adaptability, I am determined to make a significant contribution " +
        "in the field of web development. I am particularly interested in opportunities that will allow me to apply my skills " +
        "and continue learning in a stimulating environment.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Maxime Gavinet"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+33) 616 683 209"
        },
        {
            fieldName: "Experience",
            fieldValue: "1 Years"
        },
        {
            fieldName: "Email",
            fieldValue: "mgavinet.tech@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "French"
        },
        {
            fieldName: "Languages",
            fieldValue: "French, English"
        },
    ]
};

// Experience Data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'I am currently in the learning phase of web and mobile development, ' +
        'passionate about technology and determined to master this field. My portfolio, ' +
        'which is constantly evolving, demonstrates my commitment to adopting best practices ' +
        'and cutting-edge technologies. Stay tuned to follow my progress!',
    items: [
        {
            company: "JMT Breizh",
            position: "Sales Consultant",
            duration: "2020 - 2023",
        },
        {
            company: "Gendarmerie",
            position: "Military",
            duration: "2016 - 2020",
        },
    ]
};

// Skill data
const skills = {
    title: 'My skills',
    description: "Through my web development training and personal projects, " +
        "I have acquired fundamental knowledge of several essential technologies in the field. " +
        "Here are the tools and languages I am familiar with:\n" +
        "\n",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "Html 5",
        },
        {
            icon: <FaCss3/>,
            name: "Css 3",
        },
        {
            icon: <FaJs/>,
            name: "Javascript",
        },
        {
            icon: <FaReact/>,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss/>,
            name: "Tailwind.css",
        },
        {
            icon: <FaNodeJs/>,
            name: "Node.js",
        },
        {
            icon: <FaFigma/>,
            name: "Figma",
        },
    ]
};

// Education Data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: 'Currently undergoing professional retraining, I have trained in web and mobile web development at STUDI. ' +
        'This intensive training has allowed me to acquire practical skills in the latest web technologies, thus preparing me ' +
        'to meet the technical challenges of tomorrow.',
    items: [
        {
            institution: "Studi",
            position: "Professional retraining as a web and mobile web developer",
            duration: "2023 - 2024",
        },
        {
            institution: "Les Catalins School Complex",
            position: "Baccalaureate",
            duration: "2013 - 2016",
        },
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";

import {motion} from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* Contents */}
                    <div className="min-h-[70vh] w-full text-center">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col xl:text-left gap-[30px]">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="text-justify max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                    text-center lg:text-left"
                                                    >
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col xl:text-left gap-[30px]">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="text-justify max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-lg max-w-[260px] min-h-[90px]
                                                    text-center lg:text-left"
                                                    >
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="mt-6 w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 pt-5 text-sm lg:text-[14px]">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 max-auto xl:mx-0 text-justify">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger
                                                            className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group"
                                                        >
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-start xl:justify-start gap-4">
                                                <span className="text-white/60 hover:text-accent">{item.fieldName}</span>
                                                <span className="md:text-xl w-[screen] h-[screen] bg-[#232329] rounded-lg text-white/90">{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                                    {about.description}
                                </p>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;