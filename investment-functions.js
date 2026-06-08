// =====================================================================
// FUNÇÕES DE INVESTIMENTOS (AÇÕES, CRIPTOS, FIIs)
// =====================================================================

/**
 * Renderiza a tabela de investimentos e atualiza cards de resumo
 */
function renderInvestmentsTable(filter = 'all') {
    if (!investmentList) return;
    investmentList.innerHTML = '';
    investmentListMobile.innerHTML = '';

    try {
        const allInvestments = getInvestmentsSafe();
        const filtered = filter === 'all' 
            ? allInvestments 
            : allInvestments.filter(inv => inv.type === filter);

        if (filtered.length === 0) {
            investmentList.innerHTML = '<tr><td colspan="9" style="color: var(--muted);">Nenhum ativo encontrado.</td></tr>';
            return;
        }

        filtered.forEach((investment, index) => {
            try {
                const invested = safeNumber(investment.quantity) * safeNumber(investment.avgPrice);
                const current = safeNumber(investment.quantity) * safeNumber(investment.currentPrice);
                const profit = current - invested;
                const profitPercent = invested > 0 ? (profit / invested) * 100 : 0;

                // Tabela Desktop
                const typeIcon = investment.type === 'acao' ? '📈' : investment.type === 'cripto' ? '₿' : '🏢';
                const typeLabel = investment.type === 'acao' ? 'Ação' : investment.type === 'cripto' ? 'Cripto' : 'FII';
                const profitClass = profit >= 0 ? 'positive' : 'negative';
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><strong>${investment.name}</strong></td>
                    <td><span class="tag">${typeLabel}</span></td>
                    <td>${safeNumber(investment.quantity).toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 8})}</td>
                    <td>${formatMoney(investment.avgPrice)}</td>
                    <td>${formatMoney(invested)}</td>
                    <td>${formatMoney(current)}</td>
                    <td class="${profitClass}">${formatMoney(profit)}</td>
                    <td class="${profitClass}">${profitPercent > 0 ? '+' : ''}${profitPercent.toFixed(2)}%</td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editInvestment('${investment.id}')" title="Editar">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteInvestment('${investment.id}')" title="Excluir">🗑️</button>
                    </td>
                `;
                investmentList.appendChild(row);

                // Cards Mobile
                const mobileCard = document.createElement('div');
                mobileCard.className = 'investment-mobile-card';
                mobileCard.innerHTML = `
                    <div class="investment-card-header">
                        <div class="investment-card-title">
                            <span class="investment-icon">${typeIcon}</span>
                            <div>
                                <h3>${investment.name}</h3>
                                <p>${typeLabel}</p>
                            </div>
                        </div>
                        <div class="investment-card-actions">
                            <button type="button" class="btn-icon" onclick="editInvestment('${investment.id}')">✏️</button>
                            <button type="button" class="btn-icon danger" onclick="deleteInvestment('${investment.id}')">🗑️</button>
                        </div>
                    </div>
                    <div class="investment-card-metrics">
                        <div class="metric">
                            <span>Qtd</span>
                            <strong>${safeNumber(investment.quantity).toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: 8})}</strong>
                        </div>
                        <div class="metric">
                            <span>Preço Médio</span>
                            <strong>${formatMoney(investment.avgPrice)}</strong>
                        </div>
                        <div class="metric">
                            <span>Valor Atual</span>
                            <strong>${formatMoney(investment.currentPrice)}</strong>
                        </div>
                    </div>
                    <div class="investment-card-footer">
                        <div class="investment-value">
                            <span>Total Investido</span>
                            <strong>${formatMoney(invested)}</strong>
                        </div>
                        <div class="investment-value">
                            <span>Valor Atual</span>
                            <strong>${formatMoney(current)}</strong>
                        </div>
                        <div class="investment-value ${profitClass}">
                            <span>Ganho/Perda</span>
                            <strong>${formatMoney(profit)}</strong>
                            <small>${profitPercent > 0 ? '+' : ''}${profitPercent.toFixed(2)}%</small>
                        </div>
                    </div>
                `;
                investmentListMobile.appendChild(mobileCard);
            } catch (error) {
                console.warn(`[renderInvestmentsTable] erro no item #${index}:`, error);
            }
        });

        updateInvestmentsSummary();
    } catch (error) {
        console.error('[renderInvestmentsTable] Erro:', error);
        investmentList.innerHTML = '<tr><td colspan="9" style="color: var(--muted);">Erro ao carregar ativos.</td></tr>';
    }
}

/**
 * Atualiza cards de resumo com totais de investimentos
 */
function updateInvestmentsSummary() {
    const allInvestments = getInvestmentsSafe();
    
    let totalInvested = 0;
    let totalCurrent = 0;

    allInvestments.forEach(investment => {
        const invested = safeNumber(investment.quantity) * safeNumber(investment.avgPrice);
        const current = safeNumber(investment.quantity) * safeNumber(investment.currentPrice);
        totalInvested += invested;
        totalCurrent += current;
    });

    const totalProfit = totalCurrent - totalInvested;
    const totalProfitPercent = totalInvested > 0 ? (totalProfit / totalInvested) * 100 : 0;

    if (investmentTotalInvestedEl) {
        investmentTotalInvestedEl.textContent = formatMoney(totalInvested);
    }
    if (investmentTotalCurrentEl) {
        investmentTotalCurrentEl.textContent = formatMoney(totalCurrent);
    }
    if (investmentTotalProfitEl) {
        investmentTotalProfitEl.className = totalProfit >= 0 ? 'investment-metric-value positive' : 'investment-metric-value negative';
        investmentTotalProfitEl.textContent = formatMoney(totalProfit);
    }
    if (investmentTotalProfitPercentEl) {
        investmentTotalProfitPercentEl.className = totalProfit >= 0 ? 'investment-metric-percent positive' : 'investment-metric-percent negative';
        investmentTotalProfitPercentEl.textContent = `${totalProfitPercent > 0 ? '+' : ''}${totalProfitPercent.toFixed(2)}%`;
    }
}

/**
 * Abre o modal para adicionar novo investimento
 */
function openAddInvestmentModal() {
    if (investmentForm) investmentForm.reset();
    if (getEl('investment-edit-id')) getEl('investment-edit-id').value = '';
    if (investmentModalTitle) investmentModalTitle.textContent = 'Adicionar Ativo';
    openModal('investment-modal');
}

/**
 * Edita um investimento existente
 */
function editInvestment(id) {
    const investment = getInvestmentsSafe().find(inv => inv.id === id);
    if (!investment) return;

    getEl('investment-edit-id').value = investment.id;
    getEl('investment-name').value = investment.name;
    getEl('investment-type').value = investment.type;
    getEl('investment-quantity').value = investment.quantity;
    getEl('investment-avg-price').value = investment.avgPrice;
    getEl('investment-current-price').value = investment.currentPrice;
    getEl('investment-date').value = investment.date || '';
    
    if (investmentModalTitle) investmentModalTitle.textContent = 'Editar Ativo';
    openModal('investment-modal');
}

/**
 * Deleta um investimento
 */
function deleteInvestment(id) {
    if (!confirm('Tem certeza que deseja excluir este ativo?')) return;
    
    investments = getInvestmentsSafe().filter(inv => inv.id !== id);
    saveData();
    renderInvestmentsTable();
    updateInvestmentsSummary();
}

/**
 * Salva um novo investimento ou atualiza um existente
 */
function saveInvestment(event) {
    event.preventDefault();
    
    const id = getEl('investment-edit-id').value.trim();
    const name = getEl('investment-name').value.trim();
    const type = getEl('investment-type').value;
    const quantity = parseFloat(getEl('investment-quantity').value);
    const avgPrice = parseFloat(getEl('investment-avg-price').value);
    const currentPrice = parseFloat(getEl('investment-current-price').value);
    const date = getEl('investment-date').value;

    if (!name || !type || !quantity || !avgPrice || !currentPrice) {
        alert('Preencha todos os campos obrigatórios (*).') ;
        return;
    }

    if (quantity <= 0 || avgPrice <= 0 || currentPrice <= 0) {
        alert('Quantidade e preços devem ser maiores que zero.');
        return;
    }

    const investmentData = {
        name,
        type,
        quantity,
        avgPrice,
        currentPrice,
        date: date || new Date().toISOString().split('T')[0]
    };

    if (id) {
        const index = investments.findIndex(inv => inv.id === id);
        if (index > -1) {
            investments[index] = { id, ...investmentData };
        }
    } else {
        investments.push({
            id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
            ...investmentData
        });
    }

    saveData();
    renderInvestmentsTable();
    closeModal('investment-modal');
}

/**
 * Filtra investimentos por tipo
 */
function filterInvestmentsByType(filter) {
    investmentFilterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
    });
    renderInvestmentsTable(filter);
}

// Exportar funções para o escopo global
window.editInvestment = editInvestment;
window.deleteInvestment = deleteInvestment;
window.filterInvestmentsByType = filterInvestmentsByType;
