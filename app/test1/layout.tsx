
import { TriggerServerAction } from './TriggerServerAction';


const serverAction = async () => {
  'use server'
  console.log('Server action triggered')
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log('Rendering rootlayout')
  return (
    <html lang="en">
      <body
      >
        {children}
        <TriggerServerAction serverAction={serverAction} />
      </body>
    </html>
  );
}
