import Image from 'next/image';
import Link from 'next/link';
export const MainHeader = () => {
  return (
    <div className="flex items-center justify-between px-4">
      <Link href="/">
        <Image
          alt="logo"
          src="/images/logo1.png"
          width={40}
          height={40}
          priority
        />
      </Link>
      MainHeader
    </div>
  );
};
