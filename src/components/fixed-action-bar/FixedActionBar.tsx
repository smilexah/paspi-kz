"use client";

interface FixedActionBarProps {
    isVisible: boolean;
    label: string;
    onClick?: () => void;
    className?: string;
}

export function FixedActionBar({
                                   isVisible,
                                   label,
                                   onClick,
                                   className = "",
                               }: FixedActionBarProps) {
    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 transition-transform duration-300 ease-in-out">
            <div className="max-w-[345px] mx-auto">
                <button
                    type="button"
                    onClick={onClick}
                    className={`w-full h-[50px] rounded-[10px] bg-[#0089D0] text-white font-medium text-sm leading-[19px] hover:bg-[#0077b8] transition-colors duration-200 ${className}`}
                >
                    {label}
                </button>
            </div>
        </div>
    );
}
