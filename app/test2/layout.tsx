
import { getRootLayout } from './getRootLayout';


const serverAction = async () => {
  'use server'
  console.log('Server action 2 triggered')
}



export default getRootLayout(serverAction)
  