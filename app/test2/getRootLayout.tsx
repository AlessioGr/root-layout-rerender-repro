import { TriggerServerAction } from './TriggerServerAction';

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
            {children}
            <TriggerServerAction serverAction={passedServerAction} />
          </body>
        </html>
      );
    }
  
    return RootLayout
    
  }
  