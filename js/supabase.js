// ===== Conexão com o Supabase =====
const SUPABASE_URL = 'https://volopvzyazplcshzdttf.supabase.co'; // endereço do seu projeto (Project Settings > API)
const SUPABASE_KEY = 'sb_publishable_uxAOmHtpSrwHmF2eo6RBZg_VPpRt812'; // chave pública do projeto (mesma tela)
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY); // cria a conexão, chamada db

// ===== Confere se há alguém logado =====
async function exigirLogin() { // async permite usar await dentro da função
  const { data } = await db.auth.getSession(); // pergunta ao Supabase se existe sessão ativa
  if (!data.session) { // se ninguém está logado...
    window.location.href = 'login.html'; // ...manda para a tela de login
    return null; // devolve vazio para a página parar
  }
  return data.session; // senão devolve a sessão (traz e-mail e nome do usuário)
}

// ===== Nota -> etiqueta (Excelente, Boa, Moderada, Baixa) =====
function selo(itf) {
  if (itf >= 85) return { texto: 'Excelente', classe: 'verde' }; // 85 ou mais
  if (itf >= 70) return { texto: 'Boa', classe: 'verde' }; // de 70 a 84
  if (itf >= 60) return { texto: 'Moderada', classe: 'amarelo' }; // de 60 a 69
  return { texto: 'Baixa', classe: 'vermelho' }; // abaixo de 60
}

// ===== Nota -> cor da barra =====
function corNota(itf) {
  if (itf >= 70) return '#22A55A'; // verde
  if (itf >= 60) return '#F5B82E'; // amarelo
  if (itf >= 50) return '#F08A3C'; // laranja
  return '#E5575A'; // vermelho
}

// ===== Inicial do clube, usada dentro do escudo =====
function inicial(nome) {
  return nome.replace('Time ', '').charAt(0).toUpperCase(); // Time A vira A; Meu clube vira M
}

// ===== Monta o menu; ativa diz qual item fica verde =====
function menuInferior(ativa) {
  const itens = [ // cada item: arquivo, ícone, texto, nome
    ['home.html', '🏠', 'Início', 'home'],
    ['clubes.html', '⚽', 'Clubes', 'clubes'],
    ['alertas.html', '🔔', 'Alertas', 'alertas'],
    ['perfil.html', '👤', 'Perfil', 'perfil']
  ];
  const nav = document.getElementById('menu'); // acha o <nav id='menu'> da página
  nav.className = 'nav'; // aplica o estilo da barra (embaixo no celular, em cima no PC)
  nav.innerHTML = itens.map(i => `<a href='${i[0]}' class='${i[3] === ativa ? 'ativo' : ''}'><span class='ico'>${i[1]}</span>${i[2]}</a>`).join(''); // cria um link por item
}

// ===== Sair da conta =====
async function sair() {
  await db.auth.signOut(); // encerra a sessão no Supabase
  window.location.href = 'login.html'; // volta para o login
}
