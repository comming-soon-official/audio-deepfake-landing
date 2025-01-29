export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse space-y-4">
                <div className="h-12 w-48 bg-muted rounded"></div>
                <div className="h-4 w-96 bg-muted rounded"></div>
            </div>
        </div>
    )
}
