import Image from 'next/image';
import Link from 'next/link';
import FavsLink from './FavsLink';

export default function Header() {
  return (
    <header className="mb-5 flex items-center justify-between border-b border-gray-400 px-7 py-2">
      <div className="relative h-8 w-[75px]">
        <Link href={'/'}>
          <Image src={'/logo.png'} fill alt="" />
        </Link>
      </div>

      <FavsLink />
    </header>
  );
}
