import {ServiceT} from "@/types/service.t";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Card = ({item}: { item: ServiceT }) => {
    const Action = (
        <span
            className="block w-full text-center rounded-lg bg-[#0089D0] py-2 text-sm font-medium leading-4 text-white">
          {item.cta}
        </span>
    );

    return (
        <div className="h-[268px] w-[215px] shrink-0">
            <div className="group/card flex h-full w-full flex-col gap-4 rounded-2xl bg-white p-5 md:p-6">
                <div className="text-[13px]">{item.name}</div>

                <div className="whitespace-pre-line text-[17px]">{item.description}</div>

                {/* Flex контейнер для медиа-зоны */}
                <div className="flex-1 flex flex-col justify-end relative">
                    <Image
                        src={item.img}
                        alt={item.name}
                        width={214}
                        height={114}
                        className="
                            absolute -bottom-4.5 left-1/2 -translate-x-1/2
                            h-[114px] w-[214px]
                            opacity-100 transition-all duration-200 ease-out
                            group-hover/card:translate-y-1 group-hover/card:opacity-0
                            group-focus-within/card:translate-y-1 group-focus-within/card:opacity-0
                            z-0 object-cover
                        "
                    />

                    {/* Кнопка - флекс позиционирование */}
                    <div className="
                        w-full
                        opacity-0 transition-opacity duration-200 ease-out
                        group-hover/card:pointer-events-auto group-hover/card:opacity-100
                        group-focus-within/card:pointer-events-auto group-focus-within/card:opacity-100
                        z-10
                    ">
                        {item.href ? (
                            <Link href={item.href} aria-label={item.cta} className="block w-full">
                                {Action}
                            </Link>
                        ) : (
                            <button type="button" className="w-full">
                                {Action}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}