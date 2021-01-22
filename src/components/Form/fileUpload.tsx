import React, { useState, useCallback, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
export enum fileTypes {
  'image/jpeg' = 'image/jpeg',
  'image/png' = 'image/png',
}

interface InputFileProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
  multiple?: boolean;
  /**This should indicate the maximum file size (in MB unit) that can be uploaded */
  maxFileSize: number;
  /**Takes an array of any of the defined @enum {fileTypes} */
  fileType?: Array<string>;
}

export const useFileUpload = (initialUrl?: string) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');
  const [url, setUrl] = useState<string | undefined>(initialUrl);
  useEffect(() => {
    if (initialUrl) setUrl(initialUrl);
  }, [initialUrl]);
  const FileUpload: React.FC<InputFileProps> = ({
    multiple,
    maxFileSize,
    fileType = ['all'],
    children,
    ...rest
  }): JSX.Element => {
    const handleFile = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        const file: File = event.currentTarget.files![0];
        console.log('Uploaded file', file);
        // if(fileType.includes)
        const fileTypeIsValid: boolean =
          fileType.includes(file.type) || fileType.includes('all');
        if (!fileTypeIsValid)
          return setError(`you can only upload ${fileType.concat(',')} file`);
        const sizeIsValid: boolean = file.size / 1024 ** 2 <= maxFileSize;
        if (!sizeIsValid) return setError(`File must not exceed ${maxFileSize}MB`);
        setFile(file);
        setUrl(URL.createObjectURL(file));
      },
      [],
    );
    return (
      <Box display="inline-flex" align="center" justify="center">
        <label>
          {children}
          <input
            type="file"
            onChange={handleFile}
            multiple={multiple}
            accept={fileType.join(',')}
            className="custom-file-input"
            {...rest}
          />
        </label>
        <span className="color-danger">{error}</span>
      </Box>
    );
  };
  return { file, FileUpload, url };
};
