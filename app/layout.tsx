'use client'
import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";

const inter = Inter({subsets: ['latin']})


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,
        }
    },
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
        </body>
        </html>
    )
}
