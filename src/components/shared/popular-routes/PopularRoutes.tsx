"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Container } from "../container";
import {RouteT} from "@/types/route.t";
import {useTranslations} from "next-intl";

type RouteCode = { from: keyof Cities; to: keyof Cities; img: string };

type Cities = {
    almaty: string;
    astana: string;
    shymkent: string;
    aktau: string;
    atyrau: string;
    aktobe: string;
    turkestan: string;
};

const ROUTE_CODES: RouteCode[] = [
    { from: "almaty", to: "astana", img: "/destination/nur-sultan.png" },
    { from: "astana", to: "shymkent", img: "/destination/shymkent.png" },
    { from: "almaty", to: "shymkent", img: "/destination/shymkent-2.png" },
    { from: "aktau", to: "almaty", img: "/destination/almaty.png" },
    { from: "atyrau", to: "almaty", img: "/destination/almaty-2.png" },
    { from: "almaty", to: "aktobe", img: "/destination/aktobe.png" },
    { from: "astana", to: "aktobe", img: "/destination/aktobe-2.png" },
    { from: "atyrau", to: "astana", img: "/destination/nur-sultan.png" },
    { from: "atyrau", to: "aktau", img: "/destination/aktau.png" },
    { from: "astana", to: "turkestan", img: "/destination/turkestan.png" },
];

function RouteCard({ r }: { r: RouteT }) {
    // NBSP перед тире + перенос строки после тире
    const title = `${r.from}\u00A0–\n${r.to}`;

    return (
        <article className="group w-full overflow-hidden rounded-3xl bg-white ring-1 ring-gray-200 shadow-sm">
            <div className="relative h-[168px] overflow-hidden rounded-t-3xl">
                <Image
                    src={r.img}
                    alt={`${r.from} – ${r.to}`}
                    fill
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                />
            </div>

            <div className="p-4">
                <p className="whitespace-pre-line text-[18px] font-medium leading-6 text-gray-900">
                    {title}
                </p>
            </div>
        </article>
    );
}

export const PopularRoutes = () => {
    const t = useTranslations("PopularRoutes");
    const cities: Cities = {
        almaty: t("cities.almaty"),
        astana: t("cities.astana"),
        shymkent: t("cities.shymkent"),
        aktau: t("cities.aktau"),
        atyrau: t("cities.atyrau"),
        aktobe: t("cities.aktobe"),
        turkestan: t("cities.turkestan"),
    };

    const routes: RouteT[] = ROUTE_CODES.map(rc => ({
        from: cities[rc.from],
        to: cities[rc.to],
        img: rc.img
    }));

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 5,
    });

    const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section className="bg-[#f5f5f5] py-12">
            <Container>
                <h2 className="mb-8 text-center text-3xl md:text-5xl font-bold">{t("heading")}</h2>

                <div className="relative">
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex gap-4">
                            {routes.map((r, i) => (
                                <div
                                    key={i}
                                    className="
                    shrink-0
                    basis-[80%]                    /* mobile: 1 карточка почти во всю ширину */
                    sm:basis-[45%]                 /* tablet: примерно 2 карточки */
                    md:basis-[calc((100%-64px)/5)] /* desktop: ровно 5 карточек */
                  "
                                >
                                    <RouteCard r={r} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={prev}
                            className="absolute left-[-22px] top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                            aria-label={t("arrowPrev")}>
                        <svg width="22" height="22" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="black" strokeOpacity=".6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button onClick={next}
                            className="absolute right-[-22px] top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                            aria-label={t("arrowNext")}>
                        <svg width="22" height="22" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="black" strokeOpacity=".6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>
            </Container>
        </section>
    );
}