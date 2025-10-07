"use client";

import React from "react";
import Image from "next/image";
import {Container} from "@/components/shared/container";
import {BenefitsT} from "@/types/benefits.t";

type FeaturesProps = {
    title: React.ReactNode;
    items: BenefitsT[];
};

export function Benefits({title, items}: FeaturesProps) {
    return (
        <section className="py-10 md:py-14">
            <Container>
                <h2 className="mb-8 text-center text-3xl font-bold leading-tight md:text-5xl">
                    {title}
                </h2>

                <div className="grid gap-4 md:grid-cols-4">
                    {items.map(({title, icon}, i) => (
                        <div
                            key={i}
                            className="rounded-3xl bg-white px-6 py-7 shadow-sm ring-1 ring-gray-200"
                        >
                            <div
                                className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white">
                                <Image 
                                    src={icon} 
                                    alt={title}
                                    width={64}
                                    height={64}
                                    className="h-[64px] w-[64px]"
                                />
                            </div>

                            <p className="mt-4 text-center text-[18px] font-medium leading-6 text-gray-900">
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
