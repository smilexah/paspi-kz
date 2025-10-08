"use client";

import { Container } from "../container";
import React from "react";
import { StepT } from "@/types/step.t";

type StepperProps = {
    title: string | React.ReactNode;
    steps: StepT[];
    lineColor?: string;
};

export const Stepper = ({ title, steps, lineColor = "#E4573D" }: StepperProps) => {
    return (
        <section className="bg-[#f5f5f5] py-12">
            <Container>
                <div className="rounded-3xl bg-white px-6 py-12">
                    <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
                        {title}
                    </h2>

                    <div className="mx-auto max-w-4xl">
                        <div className="flex justify-between">
                            {steps.map((s, i) => (
                                <div
                                    key={i}
                                    className="relative flex-1 flex flex-col items-center text-center"
                                >
                                    <div
                                        className="z-10 flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold text-white"
                                        style={{ backgroundColor: lineColor }}
                                    >
                                        {i + 1}
                                    </div>

                                    {i < steps.length - 1 && (
                                        <div
                                            className="pointer-events-none absolute top-5 left-[60%] h-[2px] z-0"
                                            style={{
                                                backgroundColor: lineColor,
                                                width: "80%",
                                                borderRadius: "2px",
                                            }}
                                        />
                                    )}

                                    <p className="mt-3 max-w-[220px] text-sm font-medium text-gray-900">
                                        {s.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
