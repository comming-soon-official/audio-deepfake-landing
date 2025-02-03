import {
    AlertCircle,
    CheckCircle2,
    Loader2,
    Upload,
    XCircle
} from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { cn } from '@/lib/utils'

const isAudioFile = (file: File): boolean => {
    const audioTypes = [
        'audio/mpeg',
        'audio/wav',
        'audio/ogg',
        'audio/aac',
        'audio/webm',
        'audio/x-m4a'
    ]
    return audioTypes.includes(file.type)
}

interface FileUploadProps {
    onChange?: (files: File[]) => void
    maxSize?: number
    acceptedFileTypes?: string[]
    className?: string
}

export const FileUpload: React.FC<FileUploadProps> = ({
    onChange,
    maxSize = 10,
    // acceptedFileTypes = [
    //     'audio/mpeg', // .mp3
    //     'audio/wav', // .wav
    //     'audio/ogg', // .ogg
    //     'audio/aac', // .aac
    //     'audio/webm', // .webm
    //     'audio/x-m4a' // .m4a
    // ],
    className
}) => {
    // const [file, setFile] = useState<File | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState<{
        isReal: boolean
        accuracy: number
    } | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFile = async (selectedFile: File) => {
        setError(null)
        setResult(null)

        if (!isAudioFile(selectedFile)) {
            setError(
                'Please upload only audio files (MP3, WAV, OGG, AAC, WebM, M4A)'
            )
            return
        }

        if (selectedFile.size > maxSize * 1024 * 1024) {
            setError(`File size should be less than ${maxSize}MB`)
            return
        }

        setIsLoading(true)
        // setFile(selectedFile)
        onChange?.([selectedFile])

        // Simulate processing with timeout
        setTimeout(() => {
            setIsLoading(false)
            // Mock result - in real application, this would come from your API
            setResult({
                isReal: Math.random() > 0.5, // Random result for demonstration
                accuracy: Math.floor(Math.random() * 20 + 80) // Random accuracy between 80-99%
            })
        }, 3000)
    }

    const onDrop = async (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            await handleFile(acceptedFiles[0])
        }
    }

    const handleManualUpload = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            await handleFile(selectedFile)
        }
    }

    const { getRootProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            'audio/mpeg': ['.mp3'],
            'audio/wav': ['.wav'],
            'audio/ogg': ['.ogg'],
            'audio/aac': ['.aac'],
            'audio/webm': ['.webm'],
            'audio/x-m4a': ['.m4a']
        },
        maxSize: maxSize * 1024 * 1024,
        noClick: true,
        validator: (file) => {
            if (!isAudioFile(file)) {
                return {
                    code: 'file-invalid-type',
                    message: 'Please upload only audio files'
                }
            }
            return null
        }
    })

    const handleCancel = (e: React.MouseEvent) => {
        e.stopPropagation()
        // setFile(null)
        setError(null)
        onChange?.([])
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className={cn('w-[1000px] max-w-md mx-auto', className)}>
            <div
                {...getRootProps()}
                onClick={handleClick}
                className={cn(
                    'relative p-8 border-2 border-dashed rounded-xl transition-all duration-300',
                    'backdrop-blur-sm bg-background/30',
                    isDragActive
                        ? 'border-blue-500 bg-blue-50/10'
                        : 'border-gray-300/50',
                    error ? 'border-red-500 bg-red-50/10' : '',
                    'hover:border-blue-500 group',
                    'shadow-lg hover:shadow-2xl hover:scale-[1.02]'
                )}
            >
                <input
                    type="file"
                    accept="audio/*,.mp3,.wav,.ogg,.aac,.webm,.m4a"
                    onChange={handleManualUpload}
                    ref={fileInputRef}
                    className="hidden"
                />

                {isLoading ? (
                    <div className="text-center py-8">
                        <Loader2 className="mx-auto h-16 w-16 text-blue-500 animate-spin" />
                        <p className="mt-4 text-lg font-medium text-gray-100">
                            Analyzing Audio...
                        </p>
                    </div>
                ) : result ? (
                    <div className="text-center py-8 space-y-4">
                        {result.isReal ? (
                            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
                        ) : (
                            <XCircle className="mx-auto h-16 w-16 text-red-500" />
                        )}
                        <h3 className="text-2xl font-bold">
                            {result.isReal ? 'Real Audio' : 'Fake Audio'}
                        </h3>
                        <div className="text-lg text-muted-foreground">
                            Confidence:{' '}
                            <span className="font-bold">
                                {result.accuracy}%
                            </span>
                        </div>
                        <button
                            onClick={handleCancel}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Analyze Another File
                        </button>
                    </div>
                ) : (
                    <div className="text-center space-y-4">
                        {error ? (
                            <div className="text-red-500 mb-4">
                                <AlertCircle className="mx-auto h-12 w-12" />
                                <p className="mt-2 text-sm font-medium">
                                    {error}
                                </p>
                            </div>
                        ) : (
                            <>
                                <Upload
                                    className={cn(
                                        'mx-auto h-16 w-16 transition-all duration-300',
                                        'group-hover:scale-110 group-hover:-translate-y-1',
                                        isDragActive
                                            ? 'text-blue-500'
                                            : 'text-gray-400'
                                    )}
                                />
                                <p className="text-xl font-medium text-gray-100">
                                    {isDragActive
                                        ? 'Drop your file here'
                                        : 'Upload an audio file'}
                                </p>
                            </>
                        )}
                        <p className="text-sm text-muted-foreground">
                            Drag and drop or click to upload
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Supported formats: MP3, WAV, OGG, AAC, WebM, M4A
                            (Max {maxSize}MB)
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
