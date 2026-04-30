'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { CategoriaHabilitacao } from '@/types/instrutor';

const CATEGORIAS: CategoriaHabilitacao[] = ['A', 'B', 'AB', 'C', 'D', 'E'];

export default function InstrutorPerfilPage() {
  const [categorias, setCategorias] = useState<CategoriaHabilitacao[]>(['B']);
  const [saving, setSaving] = useState(false);

  function toggleCategoria(cat: CategoriaHabilitacao) {
    setCategorias((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Meu Perfil</h1>

      <Card>
        <div className="flex items-center gap-4 mb-6">
          <Avatar name="Instrutor" size="xl" />
          <div>
            <Button variant="outline" size="sm">
              Alterar foto
            </Button>
            <p className="text-xs text-gray-500 mt-1">JPG ou PNG, máx. 2MB</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Nome completo" defaultValue="" placeholder="Seu nome" required />
            <Input label="Email" type="email" defaultValue="" placeholder="seu@email.com" required />
            <Input label="Telefone" type="tel" defaultValue="" placeholder="(11) 99999-9999" />
            <Input
              label="Valor por hora (R$)"
              type="number"
              defaultValue=""
              placeholder="80"
              min="0"
              required
            />
            <Input label="Cidade" defaultValue="" placeholder="Sua cidade" required />
            <Input label="Estado" defaultValue="" placeholder="SP" maxLength={2} required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Conte um pouco sobre sua experiência como instrutor..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categorias que leciona
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategoria(cat)}
                  className="focus:outline-none"
                >
                  <Badge
                    variant={categorias.includes(cat) ? 'primary' : 'outline'}
                    className="cursor-pointer text-sm px-3 py-1"
                  >
                    Categoria {cat}
                  </Badge>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" loading={saving}>
              Salvar alterações
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
