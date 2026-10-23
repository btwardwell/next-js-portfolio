'use client'

import SectionHeading from './sub/SectionHeading'
import Image from 'next/image'
import { valuesImage } from '../assets'

const Values = () => {
    return(
        <div id="values" className="min-h-screen flex flex-col items-center justify-start">
            <div className="grid w-full grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:items-start">
                <SectionHeading text={'My Values and Mission'} />
            </div>
            <div className="grid w-full grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:items-start">
                <section className="background mb-14">
                    <div className="flex justify-center mt-5">
                        <Image
                            src={valuesImage}
                            alt="Mission and Values"
                            width={624}
                            height={416}
                            className="h-auto w-full max-w-[624px]"
                        />
                    </div>
                    <div className="flex items-left justify-between md:justify-center">
                        <div className="flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6 mt-5">
                            <p>I noticed many developer sites don't clearly communicate their core values and mission. With all the changes happening in the tech industry, I believe it's even more important to clearly define and communicate these principles, both for companies as well as individuals.</p>
                        </div>
                    </div>
                </section>
                <section className="background">
                {/* <SectionHeading text={'My Values'} /> */}
                <div className="flex justify-between md:justify-center mt-5">
                    <div className="flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                        <ul className="space-y-4 text-body list-inside">
                            <li className="font-bold text-lg text-gray-700 dark:text-white">
                                Respect and Integrity
                                <ul className="font-normal ps-5 mt-2 space-y-1 list-inside border-l-[5px] border-l-gray-500 border-solid p-4">
                                    <li>Inclusion, empathy, treating others as you would like to be treated.</li>
                                </ul>
                            </li>
                            <li className="font-bold text-lg text-gray-700 dark:text-white">
                                Trust and Transparency
                                <ul className="font-normal ps-5 mt-2 space-y-1 list-inside border-l-[5px] border-l-gray-500 border-solid p-4">
                                    <li>Open communication, honesty, support for continual growth and loyalty.</li>
                                </ul>
                            </li>
                            <li className="font-bold text-lg text-gray-700 dark:text-white">
                                Dilligence and Accountability
                                <ul className="font-normal ps-5 mt-2 space-y-1 list-inside border-l-[5px] border-l-gray-500 border-solid p-4">
                                    <li>Autonomy and ownership, reaching out for help because it is the right thing and demanding excellence and quality.</li>
                                </ul>
                            </li>
                            <li className="font-bold text-lg text-gray-700 dark:text-white">
                                Innovation and Creativity
                                <ul className="font-normal ps-5 mt-2 space-y-1 list-inside border-l-[5px] border-l-gray-500 border-solid p-4">
                                    <li>Encouraging new ideas and approaches as technology continues to evolve.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
}

export default Values