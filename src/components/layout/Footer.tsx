import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.svg"
                alt="InstrutorPro"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold text-white">InstrutorPro</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              A plataforma que conecta alunos a instrutores de CNH verificados
              pelo governo. Aprenda a dirigir com segurança e praticidade.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Para Alunos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/buscar" className="hover:text-white transition-colors">
                  Buscar Instrutores
                </Link>
              </li>
              <li>
                <Link href="/cadastro/aluno" className="hover:text-white transition-colors">
                  Criar Conta
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Entrar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Para Instrutores</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cadastro/instrutor" className="hover:text-white transition-colors">
                  Cadastrar-se
                </Link>
              </li>
              <li>
                <Link href="/instrutor/dashboard" className="hover:text-white transition-colors">
                  Meu Painel
                </Link>
              </li>
              <li>
                <Link href="/instrutor/assinatura" className="hover:text-white transition-colors">
                  Planos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs">
          <p>© {new Date().getFullYear()} InstrutorPro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
