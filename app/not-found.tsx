import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
            <h2 className="text-2xl font-bold">Page not found</h2>
            <p className="max-w-md text-gray-600 dark:text-gray-400">
                The page you are looking for doesn&apos;t exist or has moved.
            </p>
            <Button asChild variant="outline">
                <Link href="/">Back to home</Link>
            </Button>
        </div>
    );
}
