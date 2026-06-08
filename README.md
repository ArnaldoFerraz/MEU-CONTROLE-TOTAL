# 💰 FinanceHub Pro

**Inteligência Financeira Total** - Plataforma completa de controle financeiro com parcelamento automático, análise inteligente e metas orçamentárias.

![Version](https://img.shields.io/badge/version-2.0.0-brightgreen)
![Status](https://img.shields.io/badge/status-Active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Recursos Principais

### 📊 Análise Inteligente
- **Gráficos de Fluxo:** Visualize receitas e despesas dos últimos 6 meses
- **Análise por Categoria:** Veja onde seu dinheiro está indo
- **Status de Faturas:** Monitore faturas pagas vs abertas
- **Dashboard Inteligente:** Todos os dados em um único painel

### 💳 Controle de Cartões
- Registre múltiplos cartões
- Acompanhe despesas por cartão
- Sistema de faturas automático
- Totalizações e resumos

### 🎯 Parcelamento Inteligente
Compre agora, pague depois com parcelamento automático:
- Selecione quantidade de parcelas (1x a 12x)
- Valor total registrado em uma transação
- Faturas divididas automaticamente
- Exemplo: R$ 1500 em 10x = R$ 150/mês

### 💰 Metas Orçamentárias
- Defina meta mensal de gastos
- Acompanhe progresso em tempo real
- Indicadores visuais (verde/amarelo/vermelho)
- Feedback inteligente de orçamento

### 🤖 Assistente IA
- Peça ajuda em linguagem natural
- "Gastei 1200 no nubank em 3x"
- Dicas de economia
- Análise de gastos

## 🎨 Design Moderno

### Paleta de Cores Vibrantes
- **Cyan Neon:** #00d4ff (Primária)
- **Verde Neon:** #00ff00 (Sucesso)
- **Vermelho Vibrante:** #ff3333 (Alerta)
- **Amarelo Ouro:** #ffdd00 (Atenção)
- **Roxo Elétrico:** #dd00ff (Acento)

### Temas
- ☀️ Modo Claro
- 🌙 Modo Escuro

## 🚀 Quick Start

### Pré-requisitos
- Node.js 14+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
cd controlefinanceiro

# Instale dependências
npm install

# Inicie o servidor
npm start
```

O servidor iniciará em `http://localhost:4000`

Acesse o aplicativo:
- App: `http://localhost:4000/app.html`
- Login: `http://localhost:4000/login.html`

## 📁 Estrutura do Projeto

```
controlefinanceiro/
├── app.html              # Aplicação principal
├── login.html            # Tela de login/registro
├── index.html            # Redirecionador
├── style.css             # Estilos (novo design vibrante)
├── script.js             # Lógica da aplicação
├── server.js             # Servidor Node.js
├── database.json         # Base de dados local
├── package.json          # Dependências
└── CHANGELOG.md          # Histórico de mudanças
```

## 💾 Dados

Os dados são armazenados em:
- **LocalStorage:** Para sessão atual
- **database.json:** Para persistência no servidor

## 🔑 Funcionalidades por Seção

### Dashboard
- Saldo total
- Total de receitas e despesas
- Faturas abertas
- Meta mensal com progresso

### Transações
- Adicionar/Editar/Deletar
- Suporta receitas e despesas
- Categorização automática
- Filtros avançados
- Exportação de dados

### Faturas
- Visualização de faturas
- Status (pago/aberto)
- Parcelas automáticas
- Edição manual se necessário

### Relatórios
- Top categorias
- Top cartões
- Análise mensal
- Gráficos interativos

### Filtros
- Por data (início/fim)
- Por categoria
- Por cartão
- Por tipo (receita/despesa)

## 🎯 Casos de Uso

### Caso 1: Compra Parcelada
```
1. Comprou TV por R$ 1500
2. Vai parcelar em 10 vezes
3. Registra despesa de R$ 1500 na categoria "Eletrônicos"
4. Seleciona "10x" em parcelas
5. Sistema cria 10 faturas de R$ 150 para os próximos meses
6. Acompanha cada parcela na tela de faturas
```

### Caso 2: Controle de Orçamento
```
1. Define meta mensal de R$ 5000
2. Conforme gasta, a barra de progresso atualiza
3. Ao atingir 80% da meta = alerta amarelo
4. Ao atingir 100% da meta = alerta vermelho
5. Recebe dicas do assistente IA
```

### Caso 3: Análise de Gastos
```
1. Vai para Relatórios
2. Vê gráfico de despesas por categoria
3. Identifica que gasta muito em "Alimentação"
4. Filtra transações por essa categoria
5. Exporta dados para análise detalhada
```

## 🔐 Autenticação

O app suporta:
- Login local (usuário/email + senha)
- Registro de novo usuário
- Google Sign-In (com Firebase)
- Tokens JWT para segurança

## 📱 Responsividade

Otimizado para:
- 📱 Mobile (320px+)
- 📲 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🛠️ Tecnologias

- **Frontend:**
  - HTML5, CSS3, JavaScript Vanilla
  - Chart.js para gráficos
  - LocalStorage para dados

- **Backend:**
  - Node.js
  - Express.js
  - CORS para requisições cross-origin

- **Autenticação (Opcional):**
  - Firebase Auth
  - JWT Tokens

## 📊 Melhorias v2.0.0

Veja [CHANGELOG.md](./CHANGELOG.md) para detalhes completos das melhorias.

### Destaques
✅ Novo design com paleta vibrante
✅ Gráficos corrigidos e melhorados  
✅ Parcelamento totalmente funcional
✅ Interface mais moderna e profissional
✅ Melhor performance e responsividade

## 🐛 Troubleshooting

### "Chart is not defined"
- Verifique se Chart.js está carregado no app.html
- O CDN pode estar indisponível

### "Falha de conexão com servidor"
- Certifique-se que o servidor está rodando
- Verifique a porta (padrão: 4000)
- Verifique CORS no server.js

### "Dados não salvam"
- Verifique se localStorage está habilitado
- Verifique permissões de arquivo do database.json

## 📞 Suporte

Para dúvidas ou sugestões:
- 📧 Email: support@financehub.pro
- 🐛 Issues: GitHub Issues
- 💬 Discussões: GitHub Discussions

## 📄 Licença

MIT License - Veja LICENSE.md para detalhes

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ e muita dedicação.

**FinanceHub Pro v2.0.0**
*Inteligência Financeira Total*

---

**Última atualização:** Maio 2026
