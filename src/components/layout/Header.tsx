import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-brand-500)] border-b border-[var(--color-brand-600)] shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="InstrutorPro"
              width={32}
              height={32}
            />
            <span className="text-lg font-bold text-white">
              InstrutorPro
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/buscar"
              className="text-sm text-[var(--color-brand-100)] hover:text-white transition-colors"
            >
              Buscar Instrutores
            </Link>
            <Link
              href="/cadastro/instrutor"
              className="text-sm text-[var(--color-brand-100)] hover:text-white transition-colors"
            >
              Seja um Instrutor
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button size="sm">Cadastre-se</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
