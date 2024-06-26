"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 1,
        text: "Years of experience",
    },
    {
        num: 3,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Known technologies",
    },

]

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pb-0 flex justify-center items-center">
            <div className="container flex flex-wrap gap-6 justify-center">
                {stats.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex-1 flex flex-col xl:flex-row items-center gap-4"
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-3xl xl:text-5xl font-extrabold text-accent"
                            />
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                            } leading-snug text-center text-white/80`}>{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
};

export default Stats;
