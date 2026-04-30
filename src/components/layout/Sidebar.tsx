'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Calendar,
  History,
  User,
  Star,
  CreditCard,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const alunoNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Agendamentos', href: '/agendamentos', icon: Calendar },
  { label: 'Histórico', href: '/historico', icon: History },
];

const instrutorNav: NavItem[] = [
  { label: 'Dashboard', href: '/instrutor/dashboard', icon: LayoutDashboard },
  { label: 'Meu Perfil', href: '/instrutor/perfil', icon: User },
  { label: 'Agendamentos', href: '/instrutor/agendamentos', icon: Calendar },
  { label: 'Avaliações', href: '/instrutor/avaliacoes', icon: Star },
  { label: 'Assinatura', href: '/instrutor/assinatura', icon: CreditCard },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navItems = user?.role === 'instrutor' ? instrutorNav : alunoNav;

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="flex-1 py-6 px-4">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Sair
        </button>
      </div>
    </aside>
  );
}
