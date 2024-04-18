import { ChangeEvent } from "react";

type InputFileProps = {
  name: string;
  id: string;
  accept: string;
  onChange: (e: File | undefined) => void;
  message: string | undefined;
}

const FileInput = ({id, onChange, accept, message, ...props} :InputFileProps) => {
    
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const files: FileList | null = (e.target as HTMLInputElement).files ?? null;
      if(typeof onChange === 'function') {
        onChange(files?.[0])
      }
    };
  
    return (
        <form>
            <label htmlFor={id} className="sr-only">Choose file</label>
            <input 
              accept={accept}
              {...props} 
              type="file" 
              id={id} 
              className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4
            dark:file:bg-neutral-700 dark:file:text-neutral-400"
            onChange={handleFileChange}
            />
            {message && <span className="text-xs text-red-700">{message}</span>}
        </form>
    )
  };
  
  export default FileInput;