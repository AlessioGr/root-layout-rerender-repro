'use client'


export const TriggerServerAction: React.FC<{
    serverAction: () => void
}> = (args) => {

    return <button onClick={() => {
        args.serverAction()
    }}>Click</button>
}