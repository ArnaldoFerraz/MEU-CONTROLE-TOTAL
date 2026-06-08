# 💳 GUIA DE PARCELAMENTO - FinanceHub Pro

## 📖 Como Usar o Sistema de Parcelamento

### O Que é Parcelamento?

Parcelamento é quando você divide uma compra grande em várias parcelas mensais. 

**Exemplo:**
- 💰 Comprou TV por **R$ 1500**
- 📅 Quer pagar em **10 vezes**
- 💵 Cada mês: **R$ 150**

---

## 🎯 Passo a Passo

### PASSO 1: Abrir Nova Transação

1. Clique em **"Nova Transação"**
2. Preencha os dados:
   - **Descrição:** Ex: "TV 50 polegadas"
   - **Valor Total:** Ex: "1500" (valor completo!)
   - **Tipo:** Selecione "Despesa"
   - **Cartão:** Ex: "Nubank" ou "Bradesco"

### PASSO 2: Aparecer o Campo de Parcelas

⚠️ **Importante:** O campo de parcelas **SÓ APARECE** se:
- ✅ Tipo é "Despesa"
- ✅ Você selecionou um Cartão
- ✅ O cartão tem um nome preenchido

✅ **Quando preenchido corretamente:**
```
┌────────────────────────────┐
│ Nova Transação             │
├────────────────────────────┤
│ Descrição: TV 50"          │
│ Valor: 1500                │
│ Tipo: Despesa              │
│ Cartão: Nubank        ← Agora aparece ↓
│ Parcelas: [À vista (1x)] ✓ │
│ Categoria: Eletrônicos     │
│ Data: 20/05/2026           │
└────────────────────────────┘
```

### PASSO 3: Selecionar Número de Parcelas

Clique no seletor **"Parcelas"** e escolha uma opção:

```
À vista (1x)    → Pagamento único
2x              → 2 parcelas
3x              → 3 parcelas
4x              → 4 parcelas
5x              → 5 parcelas
6x              → 6 parcelas
10x             → 10 parcelas ⭐ Popular
12x             → 12 parcelas (1 ano)
```

### PASSO 4: Confirmar a Transação

Clique em **"Adicionar Transação"**

---

## 🎨 O Que Acontece Nos Bastidores?

### ✅ Transação
```
ID: tx_1234567890
Descrição: TV 50"
Valor: R$ 1500 ← Valor COMPLETO registrado
Tipo: Despesa
Cartão: Nubank
Data: 20/05/2026
Status: Registrada
```

### ✅ Faturas (criadas automaticamente)
```
Fatura 1: R$ 150 (Vence: Jun/2026)
Fatura 2: R$ 150 (Vence: Jul/2026)
Fatura 3: R$ 150 (Vence: Ago/2026)
... (7 mais faturas)
Fatura 10: R$ 150 (Vence: Mar/2027)
```

---

## 📊 Visualizando o Parcelamento

### Na Tela de TRANSAÇÕES
- Aparece 1 transação de R$ 1500
- Status: "Registrada"
- Categoria: "Eletrônicos"
- Data: "20/05/2026"

### Na Tela de FATURAS
- Aparece "Nubank" com R$ 150 (fatura atual)
- Faturas futuras aparecem conforme os meses

### No DASHBOARD
- **Total Despesas:** Conta R$ 1500 (valor completo)
- **Fatura Aberta:** Mostra R$ 150 (parcela do mês)

---

## 💡 Exemplos Práticos

### Exemplo 1: Compra Simples (À vista)

```
Você comprou: Notebook R$ 3000
Parcelas: À vista (1x)

Resultado:
→ 1 Transação de R$ 3000
→ 1 Fatura de R$ 3000 (vence mês próximo)
```

### Exemplo 2: Compra em 3x

```
Você comprou: Mochila R$ 300
Parcelas: 3x

Resultado:
→ 1 Transação de R$ 300
→ 3 Faturas de R$ 100 cada
  - Fatura 1: R$ 100 (Jun/2026)
  - Fatura 2: R$ 100 (Jul/2026)
  - Fatura 3: R$ 100 (Ago/2026)
```

### Exemplo 3: Compra em 12x (financiamento longo)

```
Você comprou: Sofá R$ 4800
Parcelas: 12x

Resultado:
→ 1 Transação de R$ 4800
→ 12 Faturas de R$ 400 cada (12 meses)
```

---

## 🔍 Vendo as Faturas Parceladas

### Tela de FATURAS

```
┌─────────────────────────────────────────┐
│ Faturas Abertas - Nubank               │
├─────────────────────────────────────────┤
│ Data de Vencimento | Valor | Status    │
├─────────────────────────────────────────┤
│ 10/Jun/2026       | R$ 150 | Aberta   │
│ 10/Jul/2026       | R$ 150 | Aberta   │
│ 10/Ago/2026       | R$ 150 | Aberta   │
│ 10/Set/2026       | R$ 150 | Aberta   │
│ 10/Out/2026       | R$ 150 | Aberta   │
│ 10/Nov/2026       | R$ 150 | Aberta   │
│ 10/Dez/2026       | R$ 150 | Aberta   │
│ 10/Jan/2027       | R$ 150 | Aberta   │
│ 10/Fev/2027       | R$ 150 | Aberta   │
│ 10/Mar/2027       | R$ 150 | Aberta   │
└─────────────────────────────────────────┘
```

---

## ⚙️ Configurações Importantes

### Vencimento das Parcelas

O sistema calcula automaticamente:
- **Primeira parcela:** Mês próximo, dia 10
- **Parcelas seguintes:** Mesma data, próximos meses

### Editar/Deletar Parcelamento

**Para deletar a compra inteira:**
1. Vá para "Histórico de Transações"
2. Clique em "Deletar" na transação
3. Todas as faturas são removidas automaticamente

**Para pagar uma fatura:**
1. Na tela de Faturas
2. Selecione a fatura
3. Clique em "Marcar como Paga"

---

## 🎯 Casos de Uso Comuns

### 1️⃣ Compra em Loja Física
- Compre na loja (cartão aceita parcelamento)
- Registre a compra completa no app
- Divida em 3, 6 ou 12x
- Acompanhe cada fatura no app

### 2️⃣ Compra Online com Parcelamento
- Confirme parcelamento no site
- Registre a compra no app com as parcelas
- Sincronize com sua fatura de cartão

### 3️⃣ Financiamento
- TV: R$ 2000 em 10x = R$ 200/mês
- Sofá: R$ 3000 em 12x = R$ 250/mês
- Eletrônicos: R$ 5000 em 12x = R$ 417/mês

### 4️⃣ Promoção "Sem Juros"
- Muitas lojas oferecem 3x, 6x sem juros
- Registre no app para acompanhar
- Planeje melhor seus próximos meses

---

## 📱 Dicas Úteis

### ✅ FAÇA:
- ✅ Registre o valor TOTAL, não a parcela
- ✅ Use a mesma data para todas as compras parceladas
- ✅ Acompanhe as faturas todo mês
- ✅ Configure metas considerando parcelas
- ✅ Exporte dados para análise

### ❌ NÃO FAÇA:
- ❌ Não registre valor parcial (tipo R$ 150 em vez de R$ 1500)
- ❌ Não crie múltiplas transações para uma compra
- ❌ Não ignore as faturas (riscar de perder o controle)

---

## 🔗 Relacionamento: Transação ↔ Fatura

```
1 Transação (R$ 1500)
        ↓
        ├─→ Fatura 1 (R$ 150)
        ├─→ Fatura 2 (R$ 150)
        ├─→ Fatura 3 (R$ 150)
        ├─→ Fatura 4 (R$ 150)
        ├─→ Fatura 5 (R$ 150)
        ├─→ Fatura 6 (R$ 150)
        ├─→ Fatura 7 (R$ 150)
        ├─→ Fatura 8 (R$ 150)
        ├─→ Fatura 9 (R$ 150)
        └─→ Fatura 10 (R$ 150)
```

---

## 📞 Troubleshooting

### Problema: Campo de Parcelas Não Aparece

**Solução:**
- ✅ Verifique se selecionou "Despesa" como tipo
- ✅ Verifique se preencheu o nome do Cartão
- ✅ Tente selecionar e desselecionar o cartão

### Problema: Fatura não apareceu

**Solução:**
- ✅ Verifique a aba "Faturas" (não "Transações")
- ✅ Procure pelo nome do cartão
- ✅ Recarregue a página

### Problema: Valor incorreto

**Solução:**
- ✅ Deletar e criar novamente
- ✅ Verificar se não registrou parcela em vez do total

---

## 🎓 Exemplo Passo a Passo Completo

### Cenário: Comprar TV em 10x

**PASSO 1:**
```
Descrição: TV Samsung 50"
Valor Total: 1500
Tipo: Despesa
Cartão: Nubank
```

**PASSO 2:**
```
Parcelas: 10x
Categoria: Eletrônicos
Data: 20/05/2026
```

**PASSO 3:** Clique em "Adicionar Transação"

**PASSO 4:** Vá para "Faturas" e veja:
- Nubank, 10 faturas de R$ 150
- Vencendo nos próximos 10 meses
- Começando em Junho/2026

**RESULTADO:**
✅ Transação registrada: R$ 1500
✅ Faturas criadas: 10 × R$ 150
✅ Cada fatura vence em um mês diferente
✅ Seu orçamento mensal já considera as parcelas

---

## 📚 Recursos Adicionais

- **README.md** - Guia geral do app
- **CHANGELOG.md** - Histórico de mudanças
- **Dashboard** - Visualize metas com parcelas

---

**Parabéns!** 🎉 Você agora domina o sistema de parcelamento do FinanceHub Pro!

**Próximas versões:** Notificações automáticas de vencimento
