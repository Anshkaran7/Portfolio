// components/Profile.tsx

import Image from 'next/image';
import React from 'react';
import Arrow from '../Icons';
import Label from '../Label';

const Profile: React.FC = () => {
    return (
        <section className='relative py-12 '>
            <div className="flex items-center gap-x-4"><h2 className="flex items-center gap-x-2 text-2xl font-bold text-neutral-900 dark:text-white">
                <span className="rounded bg-white/20 text-pink-500 backdrop-blur dark:bg-neutral-900/20">01.</span>About Me</h2>
                <div className="relative top-[2px] h-[1px] flex-grow animate-bounce bg-neutral-950/10 dark:bg-white/20"></div>
            </div>

            <div className="fade-in flex w-full flex-col items-center  justify-between lg:flex-row lg:items-start lg:gap-x-8 text-white">
                <div className="mr-10 mt-12 w-[17rem] p-1  rounded-lg border-2 border-pink-400">
                    <Image
                        alt="me"
                        loading="lazy"
                        width={600}
                        height={600}
                        decoding="async"
                        data-nimg="1"
                        className="rounded-lg contrast-75 grayscale transition-all hover:grayscale-0"
                        style={{ color: 'transparent' }}
                        src="/assets/Me.jpg"
                    />
                </div>
                <div className="mt-12">
                    <h4 className="mb-6 text-xl">Short-Bio:</h4>
                    <p className="lg:w-[80%] ">
                        Hi, I'm Karan Kumar, a Full Stack Developer from India. I specialize in frontend development and have been in the field for 6-7 months.                        <br />
                        <br />
                        And I love designing websites and mobile apps,
                        <br />


                    </p>
                    <h4 className="my-10 text-xl">Technologies I'm using now:</h4>
                    <div className="mt-4 w-[100%]">
                        <h5 className="mb-2 font-medium">Languages:</h5>
                        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
                            {/* Add language items here */}
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <p className="text-neutral-900/80 transition hover:text-neutral-900 group-hover:translate-x-2 dark:text-white/70 dark:group-hover:text-white">
                                    C++
                                </p>
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <p className="text-neutral-900/80 transition hover:text-neutral-900 group-hover:translate-x-2 dark:text-white/70 dark:group-hover:text-white">
                                    JavaScript
                                </p>
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"TypeScript"} />
                            </div>
                        </div>

                        <h5 className="mb-2 font-medium">Frontend and Frameworks:</h5>
                        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
                            {/* Add frontend items here */}
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"HTML"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"CSS"} />
                            </div>

                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <p className="text-neutral-900/80 transition hover:text-neutral-900 group-hover:translate-x-2 dark:text-white/70 dark:group-hover:text-white">
                                    NextJS
                                </p>
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"ReactJS"} />
                            </div>

                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Tailwind CSS"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"SaaS"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Bootstrap"} />
                            </div>

                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"React Native"} />
                            </div>

                        </div>

                        <h5 className="mb-2 font-medium">Backend:</h5>
                        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
                            {/* Add backend items here */}
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Firebase"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Node Js"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"MongoDB"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <p className="text-neutral-900/80 transition hover:text-neutral-900 group-hover:translate-x-2 dark:text-white/70 dark:group-hover:text-white">
                                    Express Js
                                </p>
                            </div>
                        </div>

                        <h5 className="mb-2 font-medium">Design Tools:</h5>
                        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
                            {/* Add backend items here */}
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Figma"} />
                            </div>
                            
                        </div>


                    </div>


                </div>
            </div>

        </section>




    );
};

export default Profile;
