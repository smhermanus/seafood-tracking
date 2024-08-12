'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import Image from 'next/image'

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Image src="/logo.png" alt="Logo" className="h-8 mb-4" />
        </div>
        <nav className="mt-4">
          <Link href="/admin/skipper-submissions" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              Skipper Submissions
          </Link>
          <Link href="/admin/permits" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              Permit
          </Link>
          <Link href="/admin/company" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              Company
          </Link>
          <Link href="/admin/vessels" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              Vessels
          </Link>
          <Link href="/admin/factory" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              Factory
          </Link>
          <Link href="/admin/settings" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
              Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}