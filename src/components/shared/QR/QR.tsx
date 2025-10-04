"use client";

import { Container } from "../container";
import Image from "next/image";

type QrProps = {
    qrSrc: string;
    alt?: string;
};

export function QR({ qrSrc, alt = "QR Code" }: QrProps) {
    return (
        <section className="bg-[#f5f5f5] py-12">
            <Container className="flex flex-col items-center justify-center">
                <h2 className="mb-6 text-center text-2xl font-medium md:text-3xl">
                    Сканируйте, чтобы перейти <br /> в приложение Kaspi.kz
                </h2>

                <div className="rounded-2xl bg-white p-4 shadow">
                    <Image
                        src={qrSrc}
                        alt={alt}
                        width={240}
                        height={240}
                        className="h-[240px] w-[240px] object-contain"
                    />
                </div>
            </Container>
        </section>
    );
}
