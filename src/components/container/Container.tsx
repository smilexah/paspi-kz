import React from "react";

interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
    pxClass?: string;
}

export const Container = ({
                              className = "",
                              children,
                              pxClass = "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16",
                          }: ContainerProps) => {
    return (
        <div className={`w-full max-w-6xl mx-auto ${pxClass} ${className}`}>
            {children}
        </div>
    );
}
