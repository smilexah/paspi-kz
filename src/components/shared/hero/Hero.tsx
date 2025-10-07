"use client";

import Image from "next/image";
import { Container } from "@/components/shared/container";
import React from "react";

type HeroProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string | React.ReactNode;
    primaryButtonText: string;
    secondaryButtonText?: string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
};

export const Hero = ({
                         imageSrc,
                         imageAlt,
                         title,
                         description,
                         primaryButtonText,
                         secondaryButtonText,
                         onPrimaryClick,
                         onSecondaryClick,
                     }: HeroProps) => {
    return (
        <section className="h-[600px]">
            <Container className="flex flex-col items-center justify-evenly h-full text-center">
                <Image src={imageSrc} alt={imageAlt} width={400} height={201} />

                <h1 className="text-[63px] font-bold leading-[65px]">{title}</h1>

                <div className="text-2xl leading-[26px]">{description}</div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <button
                        id="hero-button"
                        type="button"
                        onClick={onPrimaryClick}
                        className="w-[250px] h-[50px] bg-[#0089D0] text-white font-medium text-sm rounded-[10px] hover:bg-[#0077b8] transition-colors"
                    >
                        {primaryButtonText}
                    </button>

                    {secondaryButtonText && (
                        <button
                            type="button"
                            onClick={onSecondaryClick}
                            className="w-[250px] h-[50px] border border-[#0089D0] text-[#0089D0] font-medium text-sm rounded-[10px] hover:bg-[#0089D0]/10 transition-colors"
                        >
                            {secondaryButtonText}
                        </button>
                    )}
                </div>
            </Container>
        </section>
    );
};
