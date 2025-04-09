import { Spinner } from "@material-tailwind/react";

export function SpinnerColors() {
    return (
        <div className="flex items-center ml-2">
            <Spinner
                color="pink" className="w-4 h-4"
                onPointerEnterCapture
               onPointerLeaveCapture
            />
        </div>

    );
}