'use client'

import { useServerAction } from './ServerActionProvider'


export const TriggerServerAction: React.FC = (args) => {

    const {serverAction} = useServerAction()
    

    return <button onClick={() => {
        serverAction()
    }}>Click</button>
}