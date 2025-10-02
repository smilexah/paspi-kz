"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import React from "react";

type HeroProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string | React.ReactNode;
    buttonText: string;
    onButtonClick?: () => void;
};

export const Hero = ({
                                imageSrc,
                                imageAlt,
                                title,
                                description,
                                buttonText,
                                onButtonClick,
                            }: HeroProps) => {
    return (
        <section className="h-[600px]">
            <Container className="flex flex-col items-center justify-evenly h-full text-center">
                <Image src={imageSrc} alt={imageAlt} width={400} height={201} />

                <h1 className="text-[63px] font-bold leading-[65px]">{title}</h1>

                <p className="text-2xl leading-[26px]">{description}</p>

                <button
                    id={"hero-button"}
                    type="button"
                    onClick={onButtonClick}
                    className="block w-full max-w-[250px] h-[50px] rounded-[10px] font-medium bg-[#0089D0] py-2 text-sm leading-[19px] text-white"
                >
                    <span>{buttonText}</span>
                </button>
            </Container>
        </section>
    );
};
