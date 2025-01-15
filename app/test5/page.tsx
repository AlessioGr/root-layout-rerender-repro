import Link from 'next/link';
import { TriggerServerAction } from './TriggerServerAction';

export default function Home() {
  return (
<div>
<h1>Page</h1>
<TriggerServerAction />
<Link href={'/test5/sub'} >Sub</Link>

</div>
  );
}
