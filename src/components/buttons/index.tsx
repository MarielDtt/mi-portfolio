import { SpinnerColors } from "../spinner";

type ButtonProps = {
    text: string; // Texto que se mostrará en el botón
    className?: string; // Clases adicionales opcionales
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    id?: string
    href?: string
    download?: boolean
    disabled?: boolean
    loading?: boolean
};

export function ButtonRounded({ text, className, onClick, id, href, download, loading }: ButtonProps) {

    return (

        <div className="flex items-center justify-center">
            {href ? (
                <a href={href} download={download} className={`h-12 w-36 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] text-[#5d3a64] px-4 font-semibold hover:brightness-105 transition duration-300 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#d1f7ff] ${className}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    {text}
                </a>
            ) : (
                <button
                    className={`h-12 w-36 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#d1f7ff] to-[#ffe3f3] text-[#5d3a64] px-4 font-semibold hover:brightness-105 transition duration-300 cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#d1f7ff] ${className}`}


                    onClick={(event) => {
                        if (onClick) {
                            onClick(event)
                        }
                    }}
                    id={id}

                >
                    <span className="flex items-center">
                        {text}
                        {loading && <SpinnerColors/>}
                    </span>
                </button>
            )}
        </div>
    );
}