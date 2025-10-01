"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { Container } from "@/components/container";

type Route = { from: string; to: string; img: string; href?: string };

const ROUTES: Route[] = [
    { from: "Алматы", to: "Астана", img: "/destination/nur-sultan.png" },
    { from: "Астана", to: "Шымкент", img: "/destination/shymkent.png" },
    { from: "Алматы", to: "Шымкент", img: "/destination/shymkent-2.png" },
    { from: "Актау", to: "Алматы", img: "/destination/almaty.png" },
    { from: "Атырау", to: "Алматы", img: "/destination/almaty-2.png" },
    { from: "Алматы", to: "Актобе", img: "/destination/aktobe.png" },
    { from: "Астана", to: "Актобе", img: "/destination/aktobe-2.png" },
    { from: "Атырау", to: "Астана", img: "/destination/nur-sultan.png" },
    { from: "Атырау", to: "Актау", img: "/destination/aktau.png" },
    { from: "Астана", to: "Туркестан", img: "/destination/turkestan.png" },
];

function RouteCard({ r }: { r: Route }) {
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
                {/* важное: whitespace-pre-line, чтобы сработал \n */}
                <p className="whitespace-pre-line text-[18px] font-medium leading-6 text-gray-900">
                    {title}
                </p>
            </div>
        </article>
    );
}

export const PopularRoutes = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 5, // ← листаем по 5 карточек
    });

    const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section className="bg-[#f5f5f5] py-12">
            <Container>
                <h2 className="mb-8 text-center text-3xl md:text-5xl font-bold">Популярные направления</h2>

                <div className="relative">
                    <div ref={emblaRef} className="overflow-hidden">
                        {/* gap-4 = 16px → 4 промежутка = 64px; 5 карточек = (100% - 64px) / 5 */}
                        <div className="flex gap-4">
                            {ROUTES.map((r, i) => (
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

                    {/* стрелки */}
                    <button onClick={prev}
                            className="absolute left-[-22px] top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                            aria-label="Назад">
                        <svg width="22" height="22" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="black" strokeOpacity=".6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                    <button onClick={next}
                            className="absolute right-[-22px] top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                            aria-label="Вперёд">
                        <svg width="22" height="22" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="black" strokeOpacity=".6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                </div>
            </Container>
        </section>
    );
}