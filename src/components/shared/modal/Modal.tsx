"use client";

import React from "react";
import Image from "next/image";
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from "@headlessui/react";

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
        <Dialog open={open} onClose={onClose} className="relative z-[100]">
            <DialogBackdrop className="fixed inset-0 bg-black/50"/>
            <div className="fixed inset-0 flex items-center justify-center">
                <DialogPanel className="relative mx-4 w-full max-w-[560px] rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
                    <button
                        aria-label="Закрыть"
                        onClick={onClose}
                        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    >
                        ×
                    </button>

                    {(title || subtitle) && (
                        <div className="mb-6 text-center">
                            {title && (
                                <DialogTitle className="text-[28px] leading-8 font-semibold text-gray-900">
                                    {title}
                                </DialogTitle>
                            )}
                            {subtitle && (
                                <p className="mt-3 text-[17px] leading-6 text-gray-500">
                                    {subtitle}
                                </p>
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
                </DialogPanel>
            </div>
        </Dialog>
    );
}
