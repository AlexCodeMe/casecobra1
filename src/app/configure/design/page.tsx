import { db } from '@/lib/db'
import { notFound } from 'next/navigation'
import DesignConfigurator from './design-configurator'

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

export default async function ConfigureDesignPage({ searchParams }: Props) {
  const { id } = searchParams
  if (!id || typeof id !== 'string') {
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  })
  if (!configuration) return notFound()

  const { imageUrl, width, height } = configuration

  return <DesignConfigurator
    configId={configuration.id}
    imageDimensions={{ width, height }}
    imageUrl={imageUrl}
  />
}