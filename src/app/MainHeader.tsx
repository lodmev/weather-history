import Image from 'next/image';
import Link from 'next/link';
import { MainMenu } from '../shared/ui/Components/mainMenu';
export const MainHeader = () => {
  return (
    <div className="flex items-center justify-between px-4">
      <Link href="/">
        <Image
          alt="logo"
          src="/images/logo.png"
          width={40}
          height={40}
          priority
        />
      </Link>
      <MainMenu />
    </div>
  );
};
