'use client';

import { presentationData } from '@/data/presentation';
import { Heading } from '@futuremove/ui';
import { Card } from '@futuremove/ui';
import { Grid } from '@futuremove/ui';

export function TeseEstrategicaTab() {
  const data = presentationData.tese;

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <Heading as="h1" size="2xl" className="mb-4 text-balance text-white">
          {data.headline}
        </Heading>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {data.subheadline}
        </p>
      </section>

      {/* Synergy Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.synergy.title}</Heading>
          <p className="text-gray-400">{data.synergy.description}</p>
        </div>

        <div className="flex flex-col items-center space-y-12">
          <div className="relative w-full max-w-2xl aspect-video">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              <defs>
                <radialGradient id="grad-blue" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="grad-orange" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="grad-emerald" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Circles */}
              <circle cx="140" cy="130" r="100" fill="url(#grad-blue)" />
              <circle cx="260" cy="130" r="100" fill="url(#grad-orange)" />
              <circle cx="200" cy="200" r="100" fill="url(#grad-emerald)" />

              {/* Labels */}
              <text x="80" y="100" className="text-[14px] font-bold fill-blue-400">BANKING</text>
              <text x="280" y="100" className="text-[14px] font-bold fill-orange-400">TRIBUTÁRIA</text>
              <text x="170" y="260" className="text-[14px] font-bold fill-emerald-400">PATRIMÔNIO</text>
              
              <text x="165" y="160" className="text-[12px] font-black fill-white">INTERSEÇÃO</text>
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
            <Card variant="bordered" className="p-6">
              <Heading as="h4" size="sm" className="text-white mb-4">
                {data.synergy.intersection.label}
              </Heading>
              <p className="text-gray-300 text-sm leading-relaxed">
                {data.synergy.intersection.description}
              </p>
            </Card>
            <Card variant="bordered" className="p-6">
              <Heading as="h4" size="sm" className="text-blue-400 mb-4">
                Exemplo de Orquestração
              </Heading>
              <div className="space-y-3">
                {data.synergy.example.steps.map((step, idx) => (
                  <p key={idx} className="text-xs text-gray-400 leading-normal">
                    {idx + 1}. {step}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Repositioning Section */}
      <section className="space-y-12 py-12 border-y border-gray-900">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.repositioning.title}</Heading>
          <p className="text-gray-400">{data.repositioning.description}</p>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="space-y-2">
              <span className="text-xs text-gray-500 uppercase tracking-widest">DE</span>
              <Heading as="h3" size="md" className="text-gray-500 line-through">{data.repositioning.from}</Heading>
            </div>
            <div className="text-gray-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="space-y-2">
              <span className="text-xs text-gray-300 uppercase tracking-widest font-bold">PARA</span>
              <Heading as="h3" size="lg" className="text-white">{data.repositioning.to}</Heading>
            </div>
          </div>
          <p className="max-w-2xl text-center text-gray-400 italic">
            "{data.repositioning.valueProp}"
          </p>
        </div>
      </section>

      {/* Value Chain Section */}
      <section className="space-y-12 pb-12">
        <div className="text-center space-y-4">
          <Heading as="h2" size="xl" className="text-white">{data.valueChain.title}</Heading>
          <p className="text-gray-400">{data.valueChain.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {data.valueChain.stages.map((stage, idx) => (
            <div key={idx} className="relative">
              <Card variant="elevated" className="h-full flex flex-col">
                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-400 uppercase">Etapa {idx + 1}</span>
                  <Heading as="h4" size="sm" className="mt-1 text-white">{stage.label}</Heading>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="text-[10px] uppercase text-gray-500">Input</div>
                  <p className="text-sm text-gray-300">{stage.input}</p>
                  
                  <div className="pt-4 space-y-2 border-t border-gray-800">
                    <div className="flex justify-between text-[10px] text-gray-500">
                      <span>RECEITA 1</span>
                      <span className="text-white font-medium">{stage.revenue1}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-500">
                      <span>RECEITA 2</span>
                      <span className="text-white font-medium">{stage.revenue2}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-500">
                      <span>RECEITA 3</span>
                      <span className="text-white font-medium">{stage.revenue3}</span>
                    </div>
                  </div>
                </div>
              </Card>
              {idx < data.valueChain.stages.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
