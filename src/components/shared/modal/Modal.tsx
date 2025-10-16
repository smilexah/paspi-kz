"use client";

import React from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    imageSize?: number;
};

export const Modal = ({
                          open,
                          onClose,
                          title,
                          subtitle,
                          imageSrc,
                          imageAlt = "Modal image",
                          imageSize = 220,
                      }: ModalProps) => {
    return (
        <Dialog.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[100]"/>
                <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-4 w-full max-w-[560px] rounded-2xl bg-white p-6 sm:p-8 shadow-xl z-[101]">
                    <Dialog.Close asChild>
                        <button
                            aria-label="Закрыть"
                            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                        >
                            ×
                        </button>
                    </Dialog.Close>

                    {(title || subtitle) && (
                        <div className="mb-6 text-center">
                            {title && (
                                <Dialog.Title className="text-[28px] leading-8 font-semibold text-gray-900">
                                    {title}
                                </Dialog.Title>
                            )}
                            {subtitle && (
                                <Dialog.Description className="mt-3 text-[17px] leading-6 text-gray-500">
                                    {subtitle}
                                </Dialog.Description>
                            )}
                        </div>
                    )}

                    {imageSrc && (
                        <div className="flex justify-center">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={imageSize}
                                height={imageSize}
                                className="rounded-lg"
                            />
                        </div>
                    )}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
