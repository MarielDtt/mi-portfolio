
type ButtonProps = {
    text: string; // Texto que se mostrará en el botón
    className?: string; // Clases adicionales opcionales
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    id: string
};

export function ButtonRounded({ text, className, onClick, id }: ButtonProps) {

    return (
        <div className="flex items-center justify-center">
            <button
                className={`h-12 w-36 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] text-[#5d3a64] px-4 font-semibold hover:brightness-105 transition duration-300 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#d1f7ff] ${className}`}


                onClick={(event) => {
                    if (onClick) {
                        onClick(event)
                    }
                }}
                id={id}

            >
                {text}
            </button>

        </div>
    );
}