"use client";

import Image from "next/image";
import React from "react";
import { Container } from "@/components/container";

type Partner = { name: string; logo: string; };

const PARTNERS: Partner[] = [
    { name: "Air Astana", logo: "/partners/air-astana.svg" },
    { name: "FlyArystan", logo: "/partners/fly-arystan.svg" },
    { name: "Scat", logo: "/partners/scat.svg" },
    { name: "Turkish Airlines", logo: "/partners/turkish_airlines.svg" },
    { name: "Qazaq Air", logo: "/partners/qazaq-air.svg" },
    { name: "Qatar Airways", logo: "/partners/qatar-airways.svg" },
    { name: "FlyDubai", logo: "/partners/FlyDubai.png" },
    { name: "Pegasus Airlines", logo: "/partners/Pegasus.svg" },
    { name: "Uzbekistan Airways", logo: "/partners/Uzbekistan-Airways.svg" },
    { name: "Lufthansa", logo: "/partners/Lufthansa.png" },
];

function PartnerCard({ p }: { p: Partner }) {
    return (
        <div className="flex h-[200px] w-full flex-col items-center justify-between rounded-3xl bg-white p-6 ring-1 ring-gray-200 shadow-sm">
            <div className="flex h-[112px] w-full items-center justify-center">
                <Image
                    src={p.logo}
                    alt={p.name}
                    width={112}
                    height={112}
                    className="h-[112px] w-[112px] object-contain"
                />
            </div>
            <div className="mt-2 text-center text-[16px] font-medium leading-6 text-gray-900">
                {p.name}
            </div>
        </div>
    );
}

export const Partners = () => {
    return (
        <section className="bg-[#f5f5f5] py-10 md:py-14">
            <Container>
                <h2 className="text-center text-3xl font-bold md:text-5xl">Партнеры</h2>
                <p className="mt-2 text-center text-lg text-gray-700 md:text-2xl">
                    более 1&nbsp;500 авиакомпаний всего мира
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {PARTNERS.map((p, i) => (
                        <PartnerCard key={i} p={p} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
