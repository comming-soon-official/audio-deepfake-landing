'use client'

import { Card } from '../ui/card';
import { FileUpload } from '../ui/drag-upload';

export function HeroContent() {
    return (
        <Card className="flex justify-center  border-none">
            <FileUpload
                onChange={(files) => console.log(files)}
                maxSize={5}
                className="my-4"
            />{' '}
        </Card>
    )
}
