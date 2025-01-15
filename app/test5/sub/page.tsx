import Link from 'next/link'
import { Component } from './Component'

 const Page = () => {
    return <div>
        <Component />
        <Link href={'/test5'} >test5</Link>
    </div>
 }

 export default Page