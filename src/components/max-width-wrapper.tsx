import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

export default function MaxWidthWrapper({ children, className }: {
    children: ReactNode,
    className?: string,
}) {
    return (
        <div
            className={cn(className,
                'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
            )}>
            {children}
        </div>
    )
}
