"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'I create modern, high-performance websites tailored to every ' +
            'device and optimized for the best user experience. Whether you need a ' +
            'simple portfolio site, an e-commerce platform, or a complex web application, ' +
            'I am committed to delivering custom solutions that precisely meet your needs.',
        href: ""
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'I design attractive and intuitive user interfaces, ' +
            'focusing on creating engaging and effective user experiences. ' +
            'My goal is to design products that are not only visually appealing ' +
            'but also easy to use, thereby enhancing user engagement and satisfaction.',
        href: ""
    },
    {
        num: '03',
        title: 'SEO',
        description: 'I help improve your website\'s visibility on search ' +
            'engines through proven SEO techniques. From technical site optimization ' +
            'to crafting SEO-friendly content, I work to increase your organic traffic and' +
            ' help you achieve your business goals.',
        href: ""
    },
];

import {motion} from 'framer-motion';

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col h-full justify-center gap-6 group">
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent
                                    group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link href={service.href}
                                          className="w-[50px] h-[50px] rounded-full bg-white
                                          group-hover:bg-accent transition duration-500 flex justify-center items-center
                                          hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-2xl"/>
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/* description */}
                                <p className="text-white/60 text-justify flex flex-grow">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;