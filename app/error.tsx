"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
            <h2 className="text-2xl font-bold">Something went wrong</h2>
            <p className="max-w-md text-gray-600 dark:text-gray-400">
                An unexpected error occurred while rendering this section. You can
                try again.
            </p>
            <Button onClick={reset} variant="outline">
                Try again
            </Button>
        </div>
    );
}
