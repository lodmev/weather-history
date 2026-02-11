import Link from 'next/link';

export const MainMenu = () => {
  return (
    <nav className="flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contacts">Contacts</Link>
    </nav>
  );
};
