"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Upload, X, Loader2, ImageIcon, AlertCircle } from "lucide-react";

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  folder?: string;
  label?: string;
  accept?: string;
  maxSize?: number; // in MB
  aspectRatio?: "square" | "video" | "banner" | "auto";
  className?: string;
}

export default function ImageUpload({
  value,
  onChange,
  folder = "uploads",
  label = "Upload Image",
  accept = "image/*",
  maxSize = 10,
  aspectRatio = "auto",
  className = "",
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    banner: "aspect-[3/1]",
    auto: "min-h-[150px]",
  };

  const handleUpload = useCallback(
    async (file: File) => {
      setError(null);
      setIsUploading(true);

      // Validate file size
      if (file.size > maxSize * 1024 * 1024) {
        setError(`File too large. Maximum size is ${maxSize}MB.`);
        setIsUploading(false);
        return;
      }

      // Validate file type
      if (!file.type.startsWith("image/") && !file.type.includes("pdf")) {
        setError("Please upload an image file.");
        setIsUploading(false);
        return;
      }

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", folder);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Upload failed");
        }

        onChange(result.url);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setIsUploading(false);
      }
    },
    [folder, maxSize, onChange]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files?.[0];
      if (file) {
        handleUpload(file);
      }
    },
    [handleUpload]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleRemove = async () => {
    if (value) {
      try {
        await fetch("/api/upload", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: value }),
        });
      } catch (err) {
        console.error("Failed to delete image:", err);
      }
    }
    onChange("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative border-2 border-dashed rounded-lg transition-all cursor-pointer
          ${aspectRatioClasses[aspectRatio]}
          ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"}
          ${value ? "border-solid" : ""}
          ${error ? "border-red-300 bg-red-50" : ""}
        `}
        onClick={() => !value && inputRef.current?.click()}
      >
        {isUploading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 rounded-lg">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            <span className="mt-2 text-sm text-gray-600">Uploading...</span>
          </div>
        ) : value ? (
          <div className="relative w-full h-full min-h-[150px]">
            <Image
              src={value}
              alt="Uploaded image"
              fill
              className="object-contain rounded-lg p-2"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {error ? (
              <>
                <AlertCircle className="w-10 h-10 text-red-400 mb-2" />
                <p className="text-sm text-red-600">{error}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setError(null);
                  }}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  Try again
                </button>
              </>
            ) : (
              <>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  {isDragging ? (
                    <Upload className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ImageIcon className="w-6 h-6 text-gray-400" />
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  {isDragging ? "Drop your file here" : "Click or drag to upload"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Max {maxSize}MB - Images or PDF
                </p>
              </>
            )}
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* URL Input for manual entry */}
      <div className="flex gap-2">
        <input
          type="url"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Or paste image URL..."
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
