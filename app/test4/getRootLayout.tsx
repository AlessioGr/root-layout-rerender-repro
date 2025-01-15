import { ServerActionProvider } from './ServerActionProvider';

export const getRootLayout = (passedServerAction) => {
    const RootLayout = ({
      children,
    }: {
      children: React.ReactNode;
    }) => {
      console.log('Rendering rootlayout')
      return (
        <html lang="en">
          <body
          >
       <ServerActionProvider serverAction={passedServerAction}>
          {children}
          </ServerActionProvider>
          </body>
        </html>
      );
    }
  
    return RootLayout
    
  }
  