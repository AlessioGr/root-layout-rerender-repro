'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ComponentSub } from './ComponentSub'

export const Component: React.FC = () => {
    const router = useRouter()

    useEffect(() => {
      router.replace(`?limit=10`)
    }, [])
    

    return <ComponentSub />
}