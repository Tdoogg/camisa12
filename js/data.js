// Dados DEMONSTRATIVOS: ficam fixos neste arquivo
const pilares = [ // os 5 pilares do ITF
  { nome: 'Receitas', nota: 85, icone: '💰' }, // nome, nota de 0 a 100 e emoji
  { nome: 'Despesas', nota: 68, icone: '🧾' },
  { nome: 'Dívida', nota: 60, icone: '⚠️' },
  { nome: 'Salários', nota: 78, icone: '👥' },
  { nome: 'Governança', nota: 80, icone: '🛡️' }
];

const alertas = [ // tipo = usado pelo filtro; cor = cor do ícone
  { tipo: 'financeiro', cor: 'vermelho', texto: 'Aumento de 23% nas despesas com pessoal no último trimestre.', quando: '2 dias atrás' },
  { tipo: 'financeiro', cor: 'amarelo', texto: 'Endividamento total subiu para 67% da receita.', quando: '5 dias atrás' },
  { tipo: 'financeiro', cor: 'verde', texto: 'Receita de bilheteria acima do esperado no último jogo.', quando: '6 dias atrás' },
  { tipo: 'outros', cor: 'azul', texto: 'Novo relatório financeiro disponível para o clube.', quando: '1 semana atrás' },
  { tipo: 'governanca', cor: 'amarelo', texto: 'Mudança na diretoria financeira do clube.', quando: '1 semana atrás' }
];

const evolucao = { // gráfico de linha da tela do clube
  labels: ['Jan', 'Mar', 'Mai', 'Jul', 'Set', 'Nov'], // meses
  valores: [40, 48, 50, 55, 62, 72] // notas (a última é trocada pela nota real do clube)
};

const anos = ['2021', '2022', '2023', '2024']; // anos do gráfico de barras
const financeiro = { // dados das abas da tela Detalhes financeiros
  receitas: { titulo: 'Receitas totais (último ano)', total: 'R$ 320 mi', variacao: '▲ 12% vs. 2023', valores: [190, 220, 270, 320] },
  despesas: { titulo: 'Despesas totais (último ano)', total: 'R$ 295 mi', variacao: '▲ 9% vs. 2023', valores: [180, 205, 255, 295] },
  divida: { titulo: 'Dívida total (último ano)', total: 'R$ 214 mi', variacao: '▲ 4% vs. 2023', valores: [170, 185, 205, 214] },
  salarios: { titulo: 'Folha salarial (último ano)', total: 'R$ 140 mi', variacao: '▲ 6% vs. 2023', valores: [105, 118, 132, 140] }
};

const fontesReceita = { // rosca (só aparece na aba Receitas)
  labels: ['Bilheteria', 'TV e direitos', 'Patrocínios', 'Outras'],
  valores: [45, 30, 15, 10]
};