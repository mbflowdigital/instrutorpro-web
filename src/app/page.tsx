import Link from 'next/link';
import { Search, Shield, Calendar, Star, CheckCircle2, Car, Users } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white rounded-full" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-600/50 rounded-full px-4 py-1.5 text-sm mb-6">
                <Shield className="h-4 w-4 text-blue-300" />
                <span>Instrutores verificados pelo governo</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Encontre seu Instrutor de CNH
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Com a nova lei, você pode aprender a dirigir com instrutores autônomos
                credenciados pelo Detran — mais barato, mais flexível e sem burocracia.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Digite sua cidade..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <Link href="/buscar">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto">
                    Buscar instrutores
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-sm text-blue-200">
                Mais de 1.000 instrutores cadastrados em todo o Brasil
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { value: '1.000+', label: 'Instrutores ativos' },
                { value: '50+', label: 'Cidades cobertas' },
                { value: '5.000+', label: 'Alunos aprovados' },
                { value: '4.8', label: 'Nota média' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900">Como funciona</h2>
              <p className="mt-3 text-lg text-gray-500">
                Em 3 passos simples, você está pronto para aprender
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  icon: Search,
                  title: 'Busque',
                  description:
                    'Pesquise instrutores na sua cidade filtrando por categoria de habilitação, preço e avaliação.',
                },
                {
                  step: '02',
                  icon: Calendar,
                  title: 'Agende',
                  description:
                    'Escolha o instrutor ideal, veja a agenda disponível e agende suas aulas diretamente pela plataforma.',
                },
                {
                  step: '03',
                  icon: Car,
                  title: 'Aprenda',
                  description:
                    'Faça suas aulas práticas com o instrutor credenciado e esteja preparado para a prova no Detran.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="relative">
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-4xl font-black text-blue-100">
                          {item.step}
                        </span>
                        <div className="bg-blue-100 p-3 rounded-xl">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Por que InstrutorPro */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Por que escolher o InstrutorPro?
                </h2>
                <p className="text-lg text-gray-500 mb-8">
                  Nossa plataforma foi criada para tornar o processo de habilitação
                  mais acessível, seguro e transparente para todos.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: Shield,
                      title: 'Validação governamental',
                      desc: 'Todos os instrutores são verificados automaticamente via API do Detran — só instrutores credenciados ficam ativos.',
                    },
                    {
                      icon: Star,
                      title: 'Avaliações reais',
                      desc: 'Sistema de avaliação com notas, comentários e detalhes sobre pontualidade e didática.',
                    },
                    {
                      icon: Users,
                      title: 'Diversidade de opções',
                      desc: 'Centenas de instrutores para categorias A, B, AB, C, D e E em todo o Brasil.',
                    },
                    {
                      icon: CheckCircle2,
                      title: 'Sem burocracia',
                      desc: 'Agende, pague e acompanhe suas aulas tudo em um só lugar, sem sair de casa.',
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title} className="flex items-start gap-4">
                        <div className="bg-blue-50 p-2 rounded-lg flex-shrink-0">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 text-center">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  Economize até 80%
                </h3>
                <p className="text-blue-700 mb-6">
                  Comparado com autoescolas tradicionais, instrutores autônomos
                  credenciados oferecem aulas com preços muito mais acessíveis.
                </p>
                <Link href="/buscar">
                  <Button size="lg" className="w-full">
                    Encontrar instrutores
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Instrutores */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Você é instrutor credenciado?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Cadastre-se no InstrutorPro, apareça para milhares de alunos na sua
              cidade e gerencie seus agendamentos em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cadastro/instrutor">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 w-full sm:w-auto"
                >
                  Quero me cadastrar
                </Button>
              </Link>
              <Link href="/buscar">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-600 w-full sm:w-auto"
                >
                  Ver como funciona
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
