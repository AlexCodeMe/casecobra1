import React from 'react'
import DesignPreview from './design-preview'
import { notFound } from 'next/navigation'
import { db } from '@/lib/db'

type Props = {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

export default async function ConfigurePreviewPage({ searchParams }: Props) {
    const { id } = searchParams

    if (!id || typeof id !== 'string') return notFound()

    const configuration = await db.configuration.findUnique({
        where: { id },
    })
    if (!configuration) return notFound()

    return <DesignPreview configuration={configuration} />
}
