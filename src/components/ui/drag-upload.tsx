import { AlertCircle, Loader2, Upload, X } from 'lucide-react'
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
    acceptedFileTypes = [
        'audio/mpeg', // .mp3
        'audio/wav', // .wav
        'audio/ogg', // .ogg
        'audio/aac', // .aac
        'audio/webm', // .webm
        'audio/x-m4a' // .m4a
    ],
    className
}) => {
    const [file, setFile] = useState<File | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFile = async (selectedFile: File) => {
        setError(null)

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
        try {
            setFile(selectedFile)
            onChange?.([selectedFile])
        } catch (err) {
            setError('Error uploading file')
        } finally {
            setIsLoading(false)
        }
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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
        setFile(null)
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
        <div className={cn('w-full max-w-md mx-auto', className)}>
            <div
                {...getRootProps()}
                onClick={handleClick}
                className={cn(
                    'relative p-6 border-2 border-dashed rounded-lg transition-all duration-200 ease-in-out cursor-pointer',
                    isDragActive
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-300 dark:border-gray-700',
                    error ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : '',
                    'hover:border-blue-500'
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
                    <div className="text-center">
                        <Loader2 className="mx-auto h-12 w-12 text-blue-500 animate-spin" />
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            Processing...
                        </p>
                    </div>
                ) : file ? (
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                        <div className="flex justify-between items-center">
                            <div className="truncate max-w-[80%]">
                                <p className="font-medium text-gray-700 dark:text-gray-200">
                                    {file.name}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                                </p>
                            </div>
                            <button
                                onClick={handleCancel}
                                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                                aria-label="Remove file"
                            >
                                <X className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
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
                                        'mx-auto h-12 w-12 transition-colors',
                                        isDragActive
                                            ? 'text-blue-500'
                                            : 'text-gray-400'
                                    )}
                                />
                                <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    {isDragActive
                                        ? 'Drop your file here'
                                        : 'Upload a file'}
                                </p>
                            </>
                        )}
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            Drag and drop or click to upload audio files
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                            Supported formats: MP3, WAV, OGG, AAC, WebM, M4A
                            (Max {maxSize}MB)
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
