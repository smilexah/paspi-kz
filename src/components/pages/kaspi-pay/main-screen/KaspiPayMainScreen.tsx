"use client";

import {Hero} from "../../../shared/hero";
import Image from "next/image";
import {Modal} from "@/components/shared/modal";
import {useState} from "react";

export const KaspiPayMainScreen = () => {
    const [qrOpen, setQrOpen] = useState(false);

    return (
        <>
            <Hero
                imageSrc="/hero/kaspipay-m.svg"
                imageAlt="Kaspi Pay"
                title="Kaspi Pay. Мобильное приложение для бизнеса"
                description={
                    <>
                        <div className="flex items-center justify-center gap-3">
                            Принимайте оплату с
                            <div className="flex gap-5">
                                <Image
                                    src="/hero/gold.svg"
                                    alt="Kaspi Logo"
                                    width={72}
                                    height={56}
                                    className="inline-block"
                                />

                                <Image
                                    src="/hero/red.svg"
                                    alt="Kaspi Logo"
                                    width={72}
                                    height={56}
                                    className="inline-block"
                                />

                                <Image
                                    src="/hero/kredit.svg"
                                    alt="Kaspi Logo"
                                    width={72}
                                    height={56}
                                    className="inline-block"
                                />
                            </div>
                        </div>
                    </>
                }
                primaryButtonText="Подключиться"
                secondaryButtonText="Войти в личный кабинет"
                onPrimaryClick={() => setQrOpen(true)}
                onSecondaryClick={() => console.log("Войти click")}
            />

            <Modal
                open={qrOpen}
                onClose={() => setQrOpen(false)}
                title={
                    <>
                        Принимать оплату <br/> вы можете в мобильном приложении Kaspi Pay
                    </>
                }
                subtitle="Сканируйте, чтобы перейти в приложение Kaspi Pay"
                imageSrc="/qr/kaspipay-qr.png"
                imageAlt="Kaspi Pay QR"
                imageSize={220}
            />
        </>
    )
}