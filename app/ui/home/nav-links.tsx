'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import homeIcon from '@/public/home.svg';
import materiaisIcon from '@/public/materiais.svg';
import submissaoIcon from '@/public/submissao.svg';
import faqIcon from '@/public/faq.svg';
import revisaoIcon from '@/public/revisao.svg';
import Image from 'next/image';
import { useAuth } from '@/app/context/AuthContext';
import { Professor } from '@/app/models/Professor';
import { link } from 'fs';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const allLinks = [
  { name: 'Home', href: '/home', icon: homeIcon },
  {
    name: 'Materiais',
    href: '/home/materiais',
    icon: materiaisIcon,
  },
  { name: 'Submissões', href: '/home/submissao', icon: submissaoIcon },
  { name: 'FAQ', href: '/home/faq', icon: faqIcon },
  { name: 'Revisão', href: '/home/revisao', icon: revisaoIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  const { usuario } = useAuth();

  const isProfessor = usuario instanceof Professor;

  const links = allLinks.filter((link) => 
    link.name !== 'Revisão' || isProfessor
  );

  return (
    <div className="flex h-full w-full flex-col p-2 px-3 items-center gap-4 justify-start">
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href="/home"
            className={clsx(
              'flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-black text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
            >
            <Image
              src={LinkIcon}
              alt='Icon'
              width={24}
              height={24}
              />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}