"use client";

import { useState } from "react";
import { FixedActionBar } from "@/components/shared/fixed-action-bar";
import { Modal } from "@/components/shared/modal";

type Props = {
    label: string;
    imageSrc: string;
    imageAlt?: string;
};

export function KaspiPayQRBar({
                                  label,
                                  imageSrc,
                                  imageAlt = "Kaspi Pay QR",
                              }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <FixedActionBar
                label={label}
                onClick={() => setOpen(true)}
            />

            <Modal
                open={open}
                onClose={() => setOpen(false)}
                title={
                    <>
                        Принимать оплату <br /> вы можете в мобильном приложении Kaspi Pay
                    </>
                }
                subtitle={
                    <>Сканируйте, чтобы перейти <br /> в приложение Kaspi Pay</>
                }
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                imageSize={220}
            />
        </>
    );
}
