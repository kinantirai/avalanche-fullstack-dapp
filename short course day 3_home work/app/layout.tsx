'use client';

import { WagmiProvider } from 'wagmi';
import { wagmiAdapter } from '../library/wallet';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <WagmiProvider config={wagmiAdapter.wagmiConfig}>
          {children}
        </WagmiProvider>
      </body>
    </html>
  );
}
