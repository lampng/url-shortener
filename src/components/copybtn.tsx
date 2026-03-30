'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Copybtn({ textToCopy, children }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset "Copied!" state after 2 seconds
            toast.success('Copies', {
                position: 'top-right',
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: 'colored',
            });
        } catch (err) {
            console.error('Failed to copy: ', err);
            toast.error('Failed to copy', {
                position: 'top-right',
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: 'colored',
            });
        }
    };
    return <Button onClick={handleCopy}>{isCopied ? <Copy /> : children || <Copy />}</Button>;
}
