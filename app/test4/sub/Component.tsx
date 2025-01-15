'use client'

import React, { useEffect } from 'react'
import { useServerAction } from '../ServerActionProvider'

export const Component: React.FC = (args) => {
    const {serverAction} = useServerAction()


    useEffect(() => {
        serverAction()
        console.log('triggered')
    },[])

    return <p>HI</p>
}