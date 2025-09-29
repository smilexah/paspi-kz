"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {useCallback, useMemo} from "react";
import {Container} from "@/components/container";

type Cat = { title: string; img: string; href?: string };

const CATEGORIES: Cat[] = [
    {title: "Телефоны,\nгаджеты", img: "/kaspi-shop/Phone.png"},
    {title: "Компьютеры", img: "/kaspi-shop/Computer.png"},
    {title: "Обувь", img: "/kaspi-shop/Shoes1.png"},
    {title: "Одежда", img: "/kaspi-shop/Clothes1.png"},
    {title: "Украшения", img: "/kaspi-shop/Jewelry.png"},
    {title: "Спорт,\nтуризм", img: "/kaspi-shop/Sport1.png"},
    {title: "Красота,\nздоровье", img: "/kaspi-shop/Beauty1.png"},
    {title: "Товары для\nживотных", img: "/kaspi-shop/Animals.png"},
    {title: "Подарки, товары\nдля праздников", img: "/kaspi-shop/Holidays.png"},
    {title: "ТВ, Аудио,\nВидео", img: "/kaspi-shop/TV.png"},

    {title: "Автотовары", img: "/kaspi-shop/Avto.png"},
    {title: "Мебель", img: "/kaspi-shop/Furniture1.png"},
    {title: "Супермаркеты", img: "/kaspi-shop/Grocery.png"},
    {title: "Строительство,\nремонт", img: "/kaspi-shop/Hard.png"},
    {title: "Аптеки", img: "/kaspi-shop/Pharmcy.png"},
    {title: "Досуг,\nкниги", img: "/kaspi-shop/Hobby.png"},
    {title: "Канцелярские\nтовары", img: "/kaspi-shop/Stat.png"},
    {title: "Дом и дача", img: "/kaspi-shop/Home.png"},
    {title: "Детские\nтовары", img: "/kaspi-shop/Kids.png"},
    {title: "Бытовая\nтехника", img: "/kaspi-shop/HomeApp.png"},

    {title: "Аксессуары", img: "/kaspi-shop/Accessories.png"},
    {title: "Акции", img: "/kaspi-shop/Gifts1.png"},
];

function chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

function CategoryCard({cat}: { cat: Cat }) {
    return (
        <a
            href={cat.href || "#"}
            className="flex h-[188px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-4 transition hover:shadow"
        >
      <span className="whitespace-pre-line text-center text-[15px] font-medium text-gray-900">
        {cat.title}
      </span>

            {/* фиксируем зону под картинку, чтобы сетка не прыгала */}
            <span className="mt-2 flex h-[112px] items-end justify-center">
        <Image
            src={cat.img}
            alt={cat.title}
            width={160}
            height={112}
            className="h-[112px] w-auto object-contain"
        />
      </span>
        </a>
    );
}

export const KaspiShop = () => {
    const slides = useMemo(() => chunk(CATEGORIES, 10), []);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        dragFree: false,
    });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section className="bg-[#f3f3f3] py-10 md:py-14">
            <Container>
                <h2 className="mb-8 text-center text-3xl font-semibold text-gray-900 md:text-5xl">
                    Интернет-магазин на Kaspi.kz
                </h2>

                <div className="relative">
                    {/* Вьюпорт Embla */}
                    <div ref={emblaRef} className="overflow-hidden">
                        {/* Трек */}
                        <div className="flex">
                            {slides.map((page, idx) => (
                                // КАЖДЫЙ СЛАЙД = целый экран (basis-full)
                                <div key={idx} className="flex shrink-0 grow-0 basis-full">
                                    {/* Сетка 5×2 для всех устройств */}
                                    {/* КАЖДЫЙ СЛАЙД = экран 5×2 (на мобиле 2×5) */}
                                    <div className="
  grid w-full gap-4
  grid-cols-2 grid-rows-5     /* mobile: 2x5 */
  md:grid-cols-5 md:grid-rows-2 md:grid-flow-col  /* desktop: 5x2, заполняем по колонкам */
">
                                        {page.map((cat, i) => (
                                            <CategoryCard key={`${idx}-${i}`} cat={cat}/>
                                        ))}
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Стрелки */}
                    <button
                        onClick={scrollPrev}
                        aria-label="Назад"
                        className="absolute left-[-22px] top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                    >
                        ←
                    </button>
                    <button
                        onClick={scrollNext}
                        aria-label="Вперёд"
                        className="absolute right-[-22px] top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                    >
                        →
                    </button>
                </div>
            </Container>
        </section>
    );
};