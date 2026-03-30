'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Copybtn from './copybtn';

export default function Tablelink() {
    const data = [
        {
            id: '1',
            shortLink: 'lnk.to/abc123',
            originalLink: 'https://example.com/products/summer-sale',
            qrCode: '/window.svg',
            clicks: 1240,
            status: 'active',
            date: '2026-03-29',
        },
        {
            id: '2',
            shortLink: 'lnk.to/xyz789',
            originalLink: 'https://example.com/blog/how-to-build-nextjs-app',
            qrCode: '/window.svg',
            clicks: 342,
            status: 'inactive',
            date: '2026-03-27',
        },
        {
            id: '3',
            shortLink: 'lnk.to/hello22',
            originalLink: 'https://example.com/pricing/enterprise-plan',
            qrCode: '/window.svg',
            clicks: 87,
            status: 'expired',
            date: '2026-03-21',
        },
    ];
    return (
        <div className="w-full overflow-x-auto rounded-xl border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Short Link</TableHead>
                        <TableHead>Original Link</TableHead>
                        <TableHead>QR Code</TableHead>
                        <TableHead className="text-right">Clicks</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium whitespace-nowrap">
                                    <Link href={``} target="_blank" className="hover:underline">
                                        {item.shortLink}
                                    </Link>
                                    <Copybtn textToCopy={item.shortLink}/>
                                </TableCell>

                                <TableCell className="">
                                    <p className="truncate text-sm text-muted-foreground">{item.originalLink}</p>
                                </TableCell>

                                <TableCell>
                                    <div className="flex items-center">
                                        <Image
                                            src={item.qrCode}
                                            alt={`QR code for ${item.shortLink}`}
                                            width={48}
                                            height={48}
                                            className="rounded-md border object-cover"
                                        />
                                    </div>
                                </TableCell>

                                <TableCell className="text-right">{item.clicks}</TableCell>
                                <TableCell>{item.status}</TableCell>

                                <TableCell className="whitespace-nowrap text-muted-foreground">{item.date}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                                No links found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
