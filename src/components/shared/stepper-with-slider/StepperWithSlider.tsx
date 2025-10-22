"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Container } from "@/components/shared/container";
import {useTranslations} from "next-intl";

type Step = {
    id: number;
    badge: string;
    title: string;
    subtitle: string;
    imageSrc: string; // StaticImageData тоже ок
    imageAlt: string;
};

export function StepperWithSlider() {
    const t = useTranslations("StepperWithSlider");

    const STEPS: Step[] = [
        { id: 1, badge: "1", title: t("steps.1.title"), subtitle: t("steps.1.subtitle"), imageSrc: "/steps/pos.png", imageAlt: "POS" },
        { id: 2, badge: "2", title: t("steps.2.title"), subtitle: t("steps.2.subtitle"), imageSrc: "/steps/kaspi-qr.png", imageAlt: "Kaspi QR" },
        { id: 3, badge: "3", title: t("steps.3.title"), subtitle: t("steps.3.subtitle"), imageSrc: "/steps/invoice.png", imageAlt: "Invoice" },
        { id: 4, badge: "4", title: t("steps.4.title"), subtitle: t("steps.4.subtitle"), imageSrc: "/steps/link.png", imageAlt: "Link" },
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: 3,
        dragFree: false,
    });
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);

    const updateArrows = useCallback(() => {
        if (!emblaApi) return;
        setCanPrev(emblaApi.canScrollPrev());
        setCanNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        updateArrows();
        emblaApi.on("select", updateArrows);
        emblaApi.on("reInit", updateArrows);
    }, [emblaApi, updateArrows]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section className="bg-[#F6F6F6] py-10 sm:py-14">
            <Container>
                <h2 className="text-center text-[40px] sm:text-[56px] font-bold leading-tight mb-8 sm:mb-12">
                    {t("heading")}
                </h2>

                <div className="relative">
                    {canPrev && <Arrow direction="left" onClick={scrollPrev} label={t("arrowPrev")} />}
                    {canNext && <Arrow direction="right" onClick={scrollNext} label={t("arrowNext")} />}

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6">
                            {STEPS.map((s) => (
                                <div
                                    key={s.id}
                                    className="shrink-0 basis-full md:basis-[calc((100%-48px)/3)]"
                                >
                                    <StepCard step={s} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function Arrow({
                   direction,
                   onClick,
                   label
               }: {
    direction: "left" | "right";
    onClick: () => void;
    label: string;
}) {
    const common =
        "absolute top-1/2 -translate-y-1/2 z-10 grid place-items-center h-12 w-12 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition";
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className={`${common} ${
                direction === "left" ? "-left-3 md:-left-6" : "-right-3 md:-right-6"
            }`}
        >
      <span className="text-2xl leading-none">
        {direction === "left" ? "‹" : "›"}
      </span>
        </button>
    );
}

function StepCard({ step }: { step: Step }) {
    return (
        <div className="h-full rounded-[24px] bg-white p-6 sm:p-8 border border-gray-200">
            <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FF5A4F] text-white font-semibold">
          {step.badge}
        </span>
                <h3 className="text-[22px] sm:text-[24px] font-semibold whitespace-pre-line">
                    {step.title}
                </h3>
            </div>

            <p className="text-gray-500 text-sm sm:text-base leading-6 mb-6">
                {step.subtitle}
            </p>

            <div className="relative mx-auto rounded-[18px] border border-gray-200 bg-gray-50 p-4 sm:p-6">
                <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    width={420}
                    height={320}
                    className="mx-auto h-auto w-full max-w-[360px] object-contain"
                />
            </div>
        </div>
    );
}
