import Link from 'next/link';
import { Car, GraduationCap } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';

export default function CadastroPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Criar conta</h1>
            <p className="text-sm text-gray-500 mt-1">
              Como você quer se cadastrar no InstrutorPro?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/cadastro/aluno" className="block group">
              <Card className="text-center hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group-hover:bg-blue-50">
                <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h2 className="font-bold text-gray-900 text-lg">Sou Aluno</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Quero encontrar instrutores e agendar aulas de CNH
                </p>
              </Card>
            </Link>

            <Link href="/cadastro/instrutor" className="block group">
              <Card className="text-center hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group-hover:bg-blue-50">
                <Car className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h2 className="font-bold text-gray-900 text-lg">Sou Instrutor</h2>
                <p className="text-sm text-gray-500 mt-1">
                  Sou credenciado pelo Detran e quero oferecer aulas
                </p>
              </Card>
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Já tem conta?{' '}
            <Link href="/login" className="text-blue-600 hover:underline font-medium">
              Entrar
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
