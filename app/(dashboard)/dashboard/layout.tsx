import Link from 'next/link';

import DashboardNav from '@/components/dashboard/nav';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* header */}
      <header className="bg-background sticky top-0 z-40 border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/">
            <h1 className="text-lg font-bold">AI Image Generator</h1>
          </Link>
        </div>
      </header>

      <div className="md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4.1rem)] border-r md:sticky md:block">
          <div className="px-2 py-6 lg:py-8">
            <DashboardNav />
          </div>
        </aside>

        {/* main contents */}
        <main className="flex w-full flex-col overflow-hidden p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
