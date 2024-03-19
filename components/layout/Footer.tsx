import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-500 px-6 py-2 mt-8">
      <div className="flex max-w-[1280px] items-center justify-center">
        <p className="text-white">
          <Link href={'https://github.com/hosseinAmini2028'}>© hosseinamini2028.com® 2024</Link>
        </p>
      </div>
    </footer>
  );
}
