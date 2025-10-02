"use client";

import Image from "next/image";
import React from "react";
import { Container } from "@/components/container";

export type Partner = { name: string; logo: string; };

type PartnerCardProps = {
    partner: Partner;
    className?: string;
};

export function PartnerCard({ partner, className }: PartnerCardProps) {
    return (
        <div
            className={`flex h-[200px] w-full flex-col items-center justify-between rounded-3xl bg-white p-6 ring-1 ring-gray-200 shadow-sm ${className}`}
        >
            <div className="flex h-[112px] w-full items-center justify-center">
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={112}
                    height={112}
                    className="h-[112px] w-[112px] object-contain"
                />
            </div>
            <div className="mt-2 text-center text-[16px] font-medium leading-6 text-gray-900">
                {partner.name}
            </div>
        </div>
    );
}

type PartnersGridProps = {
    partners: Partner[];
    className?: string;
};

export function PartnersGrid({ partners, className }: PartnersGridProps) {
    return (
        <div
            className={`mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${className}`}
        >
            {partners.map((p, i) => (
                <PartnerCard key={i} partner={p} />
            ))}
        </div>
    );
}

type PartnersSectionProps = {
    title?: string;
    subtitle?: string;
    partners: Partner[];
};

export const PartnersShowCase = ({
                                    title = "Партнеры",
                                    subtitle,
                                    partners,
                                }: PartnersSectionProps) => {
    return (
        <section className="bg-[#f5f5f5] py-10 md:py-14">
            <Container>
                <h2 className="text-center text-3xl font-bold md:text-5xl">{title}</h2>
                {subtitle && (
                    <p className="mt-2 text-center text-lg text-gray-700 md:text-2xl">
                        {subtitle}
                    </p>
                )}
                <PartnersGrid partners={partners} />
            </Container>
        </section>
    );
};
