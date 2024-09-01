import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Sam', lastName: 'Smith' };

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className='flex size-full flex-col'>
          <div className='root-layout'>
            <Image src='/icons/logo,svg' width={30} height={30} alt='Menu icon' />
            <div>
            </div>
          </div>
        </div>
        {children}
    </main>
  );
}
export default RootLayout;