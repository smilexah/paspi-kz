"use client";

import { Container } from "../container";

type Step = {
    number: number;
    text: string;
};

type StepperProps = {
    title: string | React.ReactNode;
    steps: Step[];
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

                    <div className="relative flex items-start justify-center">
                        <div
                            className="absolute top-5 left-1/2 h-[2px] w-[180px] -translate-x-1/2"
                            style={{ backgroundColor: lineColor }}
                        />

                        <div className="flex gap-32">
                            {steps.map((s, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white"
                                        style={{ backgroundColor: lineColor }}
                                    >
                                        {s.number}
                                    </div>
                                    <p className="mt-3 max-w-[180px] text-sm font-medium text-gray-900">
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
