import Link from 'next/link'
import { Component } from './Component'

 const Page = () => {
    return <div>
        <Component />
        <Link href={'/test4'} >test4</Link>
    </div>
 }

 export default Page