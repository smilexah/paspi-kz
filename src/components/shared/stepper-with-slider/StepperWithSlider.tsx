"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Container } from "@/components/shared/container";

type Step = {
    id: number;
    badge: string;
    title: string;
    subtitle: string;
    imageSrc: string | any; // StaticImageData тоже ок
    imageAlt: string;
};

const STEPS: Step[] = [
    { id: 1, badge: "1", title: "Мобильный\nPOS-терминал", subtitle: "Кассир указывает сумму и генерирует QR-код для каждой покупки.", imageSrc: "/steps/pos.png", imageAlt: "POS" },
    { id: 2, badge: "2", title: "QR-код на кассе", subtitle: "Вы распечатываете QR-код и размещаете его на кассе.", imageSrc: "/steps/kaspi-qr.png", imageAlt: "Kaspi QR" },
    { id: 3, badge: "3", title: "Удаленная оплата", subtitle: "Вы можете отправить клиенту счёт для удаленной оплаты через Kaspi.kz.", imageSrc: "/steps/invoice.png", imageAlt: "Invoice" },
    { id: 4, badge: "4", title: "Оплата по ссылке", subtitle: "Делитесь ссылкой и принимайте оплату в мессенджерах, соцсетях или на сайте.", imageSrc: "/steps/link.png", imageAlt: "Link" },
];

export function StepperWithSlider() {
    const options: EmblaOptionsType = {
        loop: false,
        align: "start",
        containScroll: "trimSnaps",
        slidesToScroll: 3,     // листаем по 3
        dragFree: false,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(options);
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
                    Как принимать оплату?
                </h2>

                <div className="relative">
                    {/* стрелки — показываем только если можно листать */}
                    {canPrev && <Arrow direction="left" onClick={scrollPrev} />}
                    {canNext && <Arrow direction="right" onClick={scrollNext} />}

                    <div className="overflow-hidden" ref={emblaRef}>
                        {/* gap = 24px => 2 промежутка между 3 карточками = 48px
                ширина карточки = calc((100% - 48px) / 3) */}
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
               }: {
    direction: "left" | "right";
    onClick: () => void;
}) {
    const common =
        "absolute top-1/2 -translate-y-1/2 z-10 grid place-items-center h-12 w-12 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition";
    return (
        <button
            type="button"
            aria-label={direction === "left" ? "Назад" : "Вперед"}
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
