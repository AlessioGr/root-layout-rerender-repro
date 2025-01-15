
import { ServerActionProvider } from './ServerActionProvider';


const serverAction = async () => {
  'use server'
  console.log('Server action 3 triggered')
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
        <ServerActionProvider serverAction={serverAction}>
        {children}
        </ServerActionProvider>
      </body>
    </html>
  );
}
