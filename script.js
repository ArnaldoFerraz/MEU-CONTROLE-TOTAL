const getEl = id => document.getElementById(id);

// Elementos do Novo Painel de Módulos
const modulesPanel = getEl('modules');
const modulesMainBtn = getEl('modules-main-btn');
const modulesMenu = getEl('modules-menu');
const modulesMenuClose = getEl('modules-menu-close');
const modulesContent = getEl('modules-content');

const transactionForm = getEl('transaction-form');
// Elementos do Modal (Adicionar estas IDs no seu HTML ou usar as existentes)
const invoiceForm = getEl('invoice-form');
const transactionList = getEl('transaction-list');
const invoiceList = getEl('invoice-list');
const cardSummaryList = getEl('card-summary-list');
const balanceEl = getEl('balance');
const incomeEl = getEl('total-income');
const expenseEl = getEl('total-expense');
const openInvoicesEl = getEl('open-invoices');
const monthExpenseEl = getEl('report-month-expense');
const monthIncomeEl = getEl('report-month-income');
const monthBalanceEl = getEl('report-month-balance');
const reportCategoryList = getEl('report-category-list');
const reportCardList = getEl('report-card-list');
const assistantForm = getEl('assistant-form');
const assistantMessages = getEl('assistant-messages');
const assistantInput = getEl('assistant-input');
const loginContainer = getEl('login-container');
const appContainer = getEl('app-container');
const loginForm = getEl('login-form');
const loginUsername = getEl('login-user');
const loginPassword = getEl('login-password');
const loginError = getEl('login-error');
const googleLoginButton = getEl('google-login');
const registerForm = getEl('register-form');
const authTitle = getEl('auth-title');
const authDescription = getEl('auth-description');
const switchRegister = getEl('switch-register');
const switchLogin = getEl('switch-login');
const authToggleText = getEl('auth-toggle-text');
const userNameDisplay = getEl('user-name');
const themeToggle = getEl('theme-toggle');
const monthlyGoalEl = getEl('monthly-goal');
const summaryGoalProgressBar = getEl('summary-goal-progress-bar');
const goalProgressBar = getEl('goal-progress-bar');
const goalProgressText = getEl('goal-progress-text');
const budgetGoalInput = getEl('budget-goal');
const saveBudgetGoalButton = getEl('save-budget-goal');
const filterForm = getEl('filter-form');
const filterStartDate = getEl('filter-start-date');
const filterEndDate = getEl('filter-end-date');
const filterCategory = getEl('filter-category');
const filterCard = getEl('filter-card');
const filterType = getEl('filter-type');
const clearFiltersButton = getEl('clear-filters');
const exportTransactionsButton = getEl('export-transactions');
const exportInvoicesButton = getEl('export-invoices');
const editIdInput = getEl('edit-id');
const invoiceEditIdInput = getEl('invoice-edit-id');
const cancelTransactionButton = getEl('cancel-transaction');
const cancelInvoiceButton = getEl('cancel-invoice');
const transactionFormCard = getEl('transaction-form-card');
const invoiceFormCard = getEl('invoice-form-card');
const logoutButton = getEl('logout-button');
const timelineMonthSelect = getEl('timeline-month');
const projectionCard = getEl('projection-card');
const projectionPendingEl = getEl('projection-pending-invoices');
const projectionBalanceEl = getEl('projection-balance');
const projectionExpectedIncomeEl = getEl('projection-expected-income');
const projectionMessageEl = getEl('projection-message');
const projectionMonthLabelEl = getEl('projection-month-label');
const projectionLegendEl = getEl('projection-legend');
const projectionIconEl = getEl('projection-icon');

const TAB_IDS = ['dashboard', 'board', 'invoices', 'reports', 'investments', 'modules', 'assistant'];
const installmentsSelect = getEl('installments');
const installmentsLabel = getEl('installments-label');
const transactionCardInput = getEl('transaction-card');
const transactionTypeSelect = getEl('type');
const paymentStatusGroup = getEl('payment-status-group');
const paymentStatusAvista = getEl('payment-status-avista');
const paymentStatusFatura = getEl('payment-status-fatura');
const invoiceDueDateTransactionLabel = getEl('invoice-due-date-transaction-label');
const invoiceDueDateTransaction = getEl('invoice-due-date-transaction');
const vehicleForm = getEl('vehicle-form');
const vehicleList = getEl('vehicle-list');
const vehicleCancelButton = getEl('vehicle-cancel');
const deliveryForm = getEl('delivery-form');
const deliveryList = getEl('delivery-list');
const deliveryCancelButton = getEl('delivery-cancel');
const fuelForm = getEl('fuel-form');
const fuelList = getEl('fuel-list');
const fuelCancelButton = getEl('fuel-cancel');
const maintenanceForm = getEl('maintenance-form');
const maintenanceList = getEl('maintenance-list');
const maintenanceCancelButton = getEl('maintenance-cancel');
const marketForm = getEl('market-form');
const marketList = getEl('market-list');
const marketCancelButton = getEl('market-cancel');
const housebillForm = getEl('housebill-form');
const housebillList = getEl('housebill-list');
const housebillCancelButton = getEl('housebill-cancel');
const goalForm = getEl('goal-form');
const goalList = getEl('goal-list');
const goalCancelButton = getEl('goal-cancel');
const deliveryVehicleSelect = getEl('delivery-vehicle');
const fuelVehicleSelect = getEl('fuel-vehicle');
const maintenanceVehicleSelect = getEl('maintenance-vehicle');
const dashboardRealProfitEl = getEl('real-profit');
const dashboardVehicleExpenseEl = getEl('vehicle-expense');
const dashboardTotalKmEl = getEl('total-km');
const dashboardCostPerKmEl = getEl('cost-per-km');
const dashboardPeriodLabelEl = getEl('dashboard-period-label');

// Elementos de Investimentos
const investmentForm = getEl('investment-form');
const investmentList = getEl('investments-list');
const investmentListMobile = getEl('investments-list-mobile');
const investmentModal = getEl('investment-modal');
const investmentModalTitle = getEl('investment-modal-title');
const addInvestmentBtn = getEl('add-investment-btn');
const investmentCancelBtn = getEl('investment-cancel');
const investmentTotalInvestedEl = getEl('investments-total-invested');
const investmentTotalCurrentEl = getEl('investments-total-current');
const investmentTotalProfitEl = getEl('investments-total-profit');
const investmentTotalProfitPercentEl = getEl('investments-total-profit-percent');
const investmentFilterBtns = document.querySelectorAll('.filter-btn');

const isLoginPage = Boolean(loginContainer && loginForm);
const isAppPage = Boolean(appContainer && transactionForm);

const DEFAULT_INVOICE_TIPO_LABEL = 'À Prazo';
const INVOICE_TIPO_APRAZO = 'aprazo';
const INVOICE_TIPO_AVISTA = 'avista';

function parseStoredArray(key) {
    try {
        const parsed = JSON.parse(localStorage.getItem(key) || '[]');
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.warn(`[parseStoredArray] Falha ao ler ${key}:`, error);
        return [];
    }
}

// =====================================================================
// SISTEMA DE DADOS POR MÊS (Monthly Data System)
// =====================================================================
// Este sistema permite organizar dados por mês enquanto mantém
// compatibilidade com dados antigos (não quebra nada)

/**
 * Retorna a data atual em formato YYYY-MM
 * @returns {string} Ex: "2026-06"
 */
function getCurrentMonthStr() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

/**
 * Obtém um objeto vazio com a estrutura padrão de um mês
 * @returns {object} Estrutura: { transactions, invoices, vehicles, deliveries, ... }
 */
function getEmptyMonthStructure() {
    return {
        transactions: [],
        invoices: [],
        vehicles: [],
        deliveries: [],
        fuelEntries: [],
        maintenanceRecords: [],
        marketExpenses: [],
        houseBills: [],
        goals: [],
        investments: []
    };
}

/**
 * Inicializa/obtém dados para um mês específico
 * Migra dados antigos se necessário (sem perder dados)
 * @param {string} monthStr - Formato: "2026-06"
 * @returns {object} Dados do mês
 */
function getOrInitializeMonthData(monthStr = getCurrentMonthStr()) {
    const storageKey = `monthlyData_${monthStr}`;
    const stored = localStorage.getItem(storageKey);
    
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (error) {
            console.warn(`[getOrInitializeMonthData] Erro ao ler dados de ${monthStr}:`, error);
            return getEmptyMonthStructure();
        }
    }
    
    // Primeira vez que acessa este mês
    // Se for o mês atual, tenta migrar dados antigos
    if (monthStr === getCurrentMonthStr()) {
        const migrated = migrateOldDataForCurrentMonth();
        if (Object.values(migrated).some(arr => arr.length > 0)) {
            return migrated;
        }
    }
    
    return getEmptyMonthStructure();
}

/**
 * Migra dados do formato antigo para o novo formato
 * Só executa uma vez para o mês atual
 * @returns {object} Dados migrados
 */
function migrateOldDataForCurrentMonth() {
    const migrationKey = 'monthly_migration_done';
    
    if (localStorage.getItem(migrationKey)) {
        // Já foi migrado
        return getEmptyMonthStructure();
    }
    
    // Verifica se há dados antigos
    const oldTransactions = parseStoredArray('transactions');
    const oldInvoices = parseStoredArray('invoices');
    const oldVehicles = parseStoredArray('vehicles');
    const oldDeliveries = parseStoredArray('deliveries');
    const oldFuelEntries = parseStoredArray('fuelEntries');
    const oldMaintenanceRecords = parseStoredArray('maintenanceRecords');
    const oldMarketExpenses = parseStoredArray('marketExpenses');
    const oldHouseBills = parseStoredArray('houseBills');
    const oldGoals = parseStoredArray('goals');
    const oldInvestments = parseStoredArray('investments');
    
    if (
        oldTransactions.length === 0 &&
        oldInvoices.length === 0 &&
        oldVehicles.length === 0 &&
        oldDeliveries.length === 0 &&
        oldFuelEntries.length === 0 &&
        oldMaintenanceRecords.length === 0 &&
        oldMarketExpenses.length === 0 &&
        oldHouseBills.length === 0 &&
        oldGoals.length === 0 &&
        oldInvestments.length === 0
    ) {
        // Nenhum dado antigo para migrar
        localStorage.setItem(migrationKey, 'true');
        return getEmptyMonthStructure();
    }
    
    // Há dados antigos! Copiar para novo mês
    console.log('[migrateOldDataForCurrentMonth] Migrando dados antigos para novo sistema...');
    
    const migratedData = {
        transactions: oldTransactions,
        invoices: oldInvoices,
        vehicles: oldVehicles,
        deliveries: oldDeliveries,
        fuelEntries: oldFuelEntries,
        maintenanceRecords: oldMaintenanceRecords,
        marketExpenses: oldMarketExpenses,
        houseBills: oldHouseBills,
        goals: oldGoals,
        investments: oldInvestments
    };
    
    // Salvar no novo formato
    const monthStr = getCurrentMonthStr();
    localStorage.setItem(`monthlyData_${monthStr}`, JSON.stringify(migratedData));
    
    // Manter dados antigos também (não quebra)
    localStorage.setItem('transactions', JSON.stringify(oldTransactions));
    localStorage.setItem('invoices', JSON.stringify(oldInvoices));
    localStorage.setItem('vehicles', JSON.stringify(oldVehicles));
    localStorage.setItem('deliveries', JSON.stringify(oldDeliveries));
    localStorage.setItem('fuelEntries', JSON.stringify(oldFuelEntries));
    localStorage.setItem('maintenanceRecords', JSON.stringify(oldMaintenanceRecords));
    localStorage.setItem('marketExpenses', JSON.stringify(oldMarketExpenses));
    localStorage.setItem('houseBills', JSON.stringify(oldHouseBills));
    localStorage.setItem('goals', JSON.stringify(oldGoals));
    localStorage.setItem('investments', JSON.stringify(oldInvestments));
    
    // Marcar que migração foi feita
    localStorage.setItem(migrationKey, 'true');
    
    console.log('[migrateOldDataForCurrentMonth] ✅ Migração concluída!');
    return migratedData;
}

/**
 * Salva dados de um mês específico
 * @param {string} monthStr - Formato: "2026-06"
 * @param {object} data - Objeto com estrutura { transactions, invoices, ... }
 */
function saveMonthData(monthStr = getCurrentMonthStr(), data) {
    try {
        const storageKey = `monthlyData_${monthStr}`;
        localStorage.setItem(storageKey, JSON.stringify(data));
        
        // Também atualiza dados antigos se for o mês atual (compatibilidade)
        if (monthStr === getCurrentMonthStr()) {
            localStorage.setItem('transactions', JSON.stringify(data.transactions || []));
            localStorage.setItem('invoices', JSON.stringify(data.invoices || []));
            localStorage.setItem('vehicles', JSON.stringify(data.vehicles || []));
            localStorage.setItem('deliveries', JSON.stringify(data.deliveries || []));
            localStorage.setItem('fuelEntries', JSON.stringify(data.fuelEntries || []));
            localStorage.setItem('maintenanceRecords', JSON.stringify(data.maintenanceRecords || []));
            localStorage.setItem('marketExpenses', JSON.stringify(data.marketExpenses || []));
            localStorage.setItem('houseBills', JSON.stringify(data.houseBills || []));
            localStorage.setItem('goals', JSON.stringify(data.goals || []));
        }
    } catch (error) {
        console.error('[saveMonthData] Erro ao salvar dados:', error);
    }
}

// =====================================================================

let transactions = parseStoredArray('transactions');
let invoices = parseStoredArray('invoices');
let vehicles = parseStoredArray('vehicles');
let deliveries = parseStoredArray('deliveries');
let fuelEntries = parseStoredArray('fuelEntries');
let maintenanceRecords = parseStoredArray('maintenanceRecords');
let marketExpenses = parseStoredArray('marketExpenses');
let houseBills = parseStoredArray('houseBills');
let goals = parseStoredArray('goals');
let investments = parseStoredArray('investments');

function mergeRecordsById(...lists) {
    const map = new Map();
    lists.flat().forEach(item => {
        if (!item || typeof item !== 'object') return;
        const key = item.id != null ? String(item.id) : `anon_${map.size}`;
        map.set(key, item);
    });
    return Array.from(map.values());
}

/**
 * Carrega todos os registros (legado + buckets mensais) em arrays únicos para filtro por data na UI.
 */
function loadAllFinancialData() {
    migrateOldDataForCurrentMonth();

    let allTransactions = parseStoredArray('transactions');
    let allInvoices = parseStoredArray('invoices');
    let allVehicles = parseStoredArray('vehicles');
    let allDeliveries = parseStoredArray('deliveries');
    let allFuelEntries = parseStoredArray('fuelEntries');
    let allMaintenanceRecords = parseStoredArray('maintenanceRecords');
    let allMarketExpenses = parseStoredArray('marketExpenses');
    let allHouseBills = parseStoredArray('houseBills');
    let allGoals = parseStoredArray('goals');
    let allInvestments = parseStoredArray('investments');

    for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        if (!key || !key.startsWith('monthlyData_')) continue;
        try {
            const monthData = JSON.parse(localStorage.getItem(key) || '{}');
            allTransactions = mergeRecordsById(allTransactions, monthData.transactions || []);
            allInvoices = mergeRecordsById(allInvoices, monthData.invoices || []);
            allVehicles = mergeRecordsById(allVehicles, monthData.vehicles || []);
            allDeliveries = mergeRecordsById(allDeliveries, monthData.deliveries || []);
            allFuelEntries = mergeRecordsById(allFuelEntries, monthData.fuelEntries || []);
            allMaintenanceRecords = mergeRecordsById(allMaintenanceRecords, monthData.maintenanceRecords || []);
            allMarketExpenses = mergeRecordsById(allMarketExpenses, monthData.marketExpenses || []);
            allHouseBills = mergeRecordsById(allHouseBills, monthData.houseBills || []);
            allGoals = mergeRecordsById(allGoals, monthData.goals || []);
            allInvestments = mergeRecordsById(allInvestments, monthData.investments || []);
        } catch (error) {
            console.warn(`[loadAllFinancialData] Ignorando ${key}:`, error);
        }
    }

    transactions = ensureArray(allTransactions, 'init_transactions');
    invoices = ensureArray(allInvoices, 'init_invoices');
    vehicles = ensureArray(allVehicles, 'init_vehicles');
    deliveries = ensureArray(allDeliveries, 'init_deliveries');
    fuelEntries = ensureArray(allFuelEntries, 'init_fuelEntries');
    maintenanceRecords = ensureArray(allMaintenanceRecords, 'init_maintenanceRecords');
    marketExpenses = ensureArray(allMarketExpenses, 'init_marketExpenses');
    houseBills = ensureArray(allHouseBills, 'init_houseBills');
    goals = ensureArray(allGoals, 'init_goals');
    investments = ensureArray(allInvestments, 'init_investments');
}

loadAllFinancialData();

migrateAllInvoices();

let flowChart = null;
let expenseChart = null;
let invoiceChart = null;
let earningsAppChart = null;
let vehicleExpenseChart = null;
let realProfitChart = null;

// =====================================================================
// FUNÇÕES DO PAINEL INTERATIVO DE MÓDULOS
// =====================================================================

/**
 * Abre/fecha o menu do painel de módulos
 */
function toggleModulesMenu() {
    if (typeof closeMobileNav === 'function') closeMobileNav();
    if (modulesMenu.classList.contains('hidden')) {
        modulesMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Previne scroll
    } else {
        closeModulesMenu();
    }
}

/**
 * Fecha o menu do painel de módulos
 */
function closeModulesMenu() {
    modulesMenu.classList.add('hidden');
    document.body.style.overflow = ''; // Restaura scroll
    
    // Limpar categorias abertas
    document.querySelectorAll('.modules-category.active').forEach(cat => {
        cat.classList.remove('active');
        const actions = cat.querySelector('.category-actions');
        if (actions) actions.classList.add('hidden');
    });
}

/**
 * Alterna expansão/fechamento de uma categoria
 */
function toggleCategory(categoryName) {
    const category = document.querySelector(`.category-header[data-category="${categoryName}"]`).closest('.modules-category');
    const actions = category.querySelector('.category-actions');
    
    const isActive = category.classList.contains('active');
    
    // Fechar todas as outras categorias
    document.querySelectorAll('.modules-category.active').forEach(cat => {
        if (cat !== category) {
            cat.classList.remove('active');
            const act = cat.querySelector('.category-actions');
            if (act) act.classList.add('hidden');
        }
    });
    
    // Alternar a categoria clicada
    if (isActive) {
        category.classList.remove('active');
        actions.classList.add('hidden');
    } else {
        category.classList.add('active');
        actions.classList.remove('hidden');
    }
}

/**
 * Executa uma ação do painel de módulos
 */
function executeModuleAction(action) {
    console.log(`[Modules] Executando ação: ${action}`);
    
    // Fechar o menu
    closeModulesMenu();
    
    // Scroll para o conteúdo
    setTimeout(() => {
        modulesContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
    
    // Executar ação
    switch(action) {
        case 'add-vehicle':
            if (vehicleForm) {
                getEl('vehicle-edit-id').value = '';
                resetForm(vehicleForm);
                setTimeout(() => vehicleForm.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'list-vehicles':
            renderVehiclesTable();
            if (getEl('vehicle-list')?.parentElement?.parentElement) {
                setTimeout(() => getEl('vehicle-list').parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'add-fuel':
            if (fuelForm) {
                getEl('fuel-edit-id').value = '';
                resetForm(fuelForm);
                setTimeout(() => fuelForm.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'list-fuel':
            renderFuelEntriesTable();
            if (getEl('fuel-list')?.parentElement?.parentElement) {
                setTimeout(() => getEl('fuel-list').parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'add-maintenance':
            if (maintenanceForm) {
                getEl('maintenance-edit-id').value = '';
                resetForm(maintenanceForm);
                setTimeout(() => maintenanceForm.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'list-maintenance':
            renderMaintenanceTable();
            if (getEl('maintenance-list')?.parentElement?.parentElement) {
                setTimeout(() => getEl('maintenance-list').parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'add-delivery':
            if (deliveryForm) {
                getEl('delivery-edit-id').value = '';
                resetForm(deliveryForm);
                setTimeout(() => deliveryForm.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'list-deliveries':
            renderDeliveriesTable();
            if (getEl('delivery-list')?.parentElement?.parentElement) {
                setTimeout(() => getEl('delivery-list').parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'add-market':
            if (marketForm) {
                getEl('market-edit-id').value = '';
                resetForm(marketForm);
                setTimeout(() => marketForm.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'list-market':
            renderMarketTable();
            if (getEl('market-list')?.parentElement?.parentElement) {
                setTimeout(() => getEl('market-list').parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'add-housebill':
            if (housebillForm) {
                getEl('housebill-edit-id').value = '';
                resetForm(housebillForm);
                setTimeout(() => housebillForm.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'list-housebills':
            renderHouseBillsTable();
            if (getEl('housebill-list')?.parentElement?.parentElement) {
                setTimeout(() => getEl('housebill-list').parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'add-goal':
            if (goalForm) {
                getEl('goal-edit-id').value = '';
                resetForm(goalForm);
                setTimeout(() => goalForm.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        case 'list-goals':
            renderGoalsTable();
            if (getEl('goal-list')?.parentElement?.parentElement) {
                setTimeout(() => getEl('goal-list').parentElement.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
            }
            break;
        default:
            console.warn(`[Modules] Ação desconhecida: ${action}`);
    }
}

/**
 * Mostra conteúdo em modules-content (opcional, para futuro)
 */
function showModuleContent(type) {
    // Placeholder para mostrar conteúdo específico em modules-content
    // Isso pode ser usado para mostrar uma tabela ou resumo
    console.log(`[Modules] Mostrando conteúdo: ${type}`);
}

function formatMoney(value) {
    const amount = safeNumber(value, 0);
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
}

function ensureArray(data, label = 'dados') {
    if (!Array.isArray(data)) {
        console.warn(`[ensureArray] ${label} inválido (não é array). Retornando [].`, data);
        return [];
    }
    return data;
}

function getTransactionsSafe() {
    transactions = ensureArray(transactions, 'transactions');
    return transactions;
}

function getInvoicesSafe() {
    invoices = ensureArray(invoices, 'invoices');
    return invoices;
}

function getVehiclesSafe() {
    vehicles = ensureArray(vehicles, 'vehicles');
    return vehicles;
}

function getDeliveriesSafe() {
    deliveries = ensureArray(deliveries, 'deliveries');
    return deliveries;
}

function getFuelEntriesSafe() {
    fuelEntries = ensureArray(fuelEntries, 'fuelEntries');
    return fuelEntries;
}

function getMaintenanceSafe() {
    maintenanceRecords = ensureArray(maintenanceRecords, 'maintenanceRecords');
    return maintenanceRecords;
}

function getMarketExpensesSafe() {
    marketExpenses = ensureArray(marketExpenses, 'marketExpenses');
    return marketExpenses;
}

function getHouseBillsSafe() {
    houseBills = ensureArray(houseBills, 'houseBills');
    return houseBills;
}

function getGoalsSafe() {
    goals = ensureArray(goals, 'goals');
    return goals;
}

function getInvestmentsSafe() {
    investments = ensureArray(investments, 'investments');
    return investments;
}

function safeNumber(value, fallback = 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function normalizeInvoiceTipo(tipo) {
    const raw = tipo || DEFAULT_INVOICE_TIPO_LABEL;
    const normalized = String(raw).toLowerCase().trim();
    if (normalized === INVOICE_TIPO_AVISTA || normalized.includes('vista')) return INVOICE_TIPO_AVISTA;
    return INVOICE_TIPO_APRAZO;
}

function getInvoiceTipoSafe(item) {
    if (!item || typeof item !== 'object') return INVOICE_TIPO_APRAZO;
    return normalizeInvoiceTipo(item.tipo || DEFAULT_INVOICE_TIPO_LABEL);
}

function logCalcItem(context, item, index) {
    console.log(`[${context}] processando item #${index}:`, item);
}

function safeForEach(data, context, callback) {
    const list = ensureArray(data, context);
    list.forEach((item, index) => {
        try {
            if (!item || typeof item !== 'object') {
                console.warn(`[${context}] item #${index} inválido, pulando.`, item);
                return;
            }
            logCalcItem(context, item, index);
            callback(item, index);
        } catch (error) {
            console.warn(`[${context}] erro no item #${index}, pulando:`, error, item);
        }
    });
}

/**
 * Converte string de data (YYYY-MM-DD) para Date local sem bug de fuso.
 * @param {string} dateStr
 * @returns {Date|null}
 */
function parseLocalDate(dateStr) {
    if (!dateStr) return null;
    const normalized = String(dateStr).trim().slice(0, 10);
    const date = new Date(`${normalized}T12:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
}

/**
 * Verifica se uma data pertence ao mês/ano de referência (dia 1 até o último dia).
 * @param {string} dateStr
 * @param {Date} [referenceDate=new Date()]
 */
function isDateInCurrentMonth(dateStr, referenceDate = new Date()) {
    return isDateInSelectedMonth(dateStr, referenceDate);
}

function getMonthBounds(referenceDate = getTimelineAnchorDate()) {
    const start = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1, 0, 0, 0, 0);
    const end = new Date(referenceDate.getFullYear(), referenceDate.getMonth() + 1, 0, 23, 59, 59, 999);
    return { start, end };
}

function getSelectedMonthKey(referenceDate = getTimelineAnchorDate()) {
    return getMonthKey(referenceDate);
}

function isDateInSelectedMonth(dateStr, referenceDate = getTimelineAnchorDate()) {
    const date = parseLocalDate(dateStr);
    if (!date) return false;
    const { start, end } = getMonthBounds(referenceDate);
    return date >= start && date <= end;
}

/**
 * Filtra item por intervalo inclusivo (startDate/endDate em YYYY-MM-DD).
 */
function isDateWithinRange(dateStr, startDateStr, endDateStr) {
    const date = parseLocalDate(dateStr);
    if (!date) return false;
    if (startDateStr) {
        const start = parseLocalDate(startDateStr);
        if (start && date < new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0, 0)) {
            return false;
        }
    }
    if (endDateStr) {
        const end = parseLocalDate(endDateStr);
        if (end) {
            const endInclusive = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59, 999);
            if (date > endInclusive) return false;
        }
    }
    return true;
}

/**
 * Agrega todos os indicadores dos cards do dashboard para o mês selecionado no topo.
 * Dados vêm do localStorage/Firebase (carregados em memória); o filtro é no cliente.
 * @param {Date} [referenceDate]
 * @returns {{
 *   periodLabel: string,
 *   startDate: string,
 *   endDate: string,
 *   balance: number,
 *   totalIncome: number,
 *   totalExpense: number,
 *   openInvoicesCount: number,
 *   realProfit: number,
 *   vehicleExpense: number,
 *   totalKm: number,
 *   costPerKm: number
 * }}
 */
function computeMonthDashboardStats(referenceDate = getTimelineAnchorDate()) {
    const { start, end } = getMonthBounds(referenceDate);
    const startDate = toInputDate(start);
    const endDate = toInputDate(end);
    const periodLabel = getSelectedMonthLabel(referenceDate);

    const txData = getTransactionsSafe().filter(
        transaction => transaction?.date && isDateInSelectedMonth(transaction.date, referenceDate)
    );

    let totalIncome = 0;
    let totalExpense = 0;
    txData.forEach(transaction => {
        const amount = safeNumber(transaction.amount);
        if (transaction.type === 'receita') totalIncome += amount;
        else if (transaction.type === 'despesa') totalExpense += amount;
    });

    const balance = totalIncome - totalExpense;

    let openInvoicesCount = 0;
    getInvoicesSafe().forEach(invoice => {
        if (!isInvoiceInSelectedMonth(invoice, referenceDate)) return;
        if (isInvoiceOpen(invoice) && isInvoiceAprazo(invoice)) openInvoicesCount += 1;
    });

    const deliveryProfit = getTotalDeliveryProfit(referenceDate);
    const vehicleExpense = getTotalVehicleExpenses(referenceDate);
    const totalKm = getTotalKm(referenceDate);
    const costPerKm = totalKm > 0 ? vehicleExpense / totalKm : 0;

    return {
        periodLabel,
        startDate,
        endDate,
        balance,
        totalIncome,
        totalExpense,
        openInvoicesCount,
        realProfit: deliveryProfit + balance,
        vehicleExpense,
        totalKm,
        costPerKm,
    };
}

function renderDashboardCards(stats = computeMonthDashboardStats()) {
    if (dashboardPeriodLabelEl) {
        dashboardPeriodLabelEl.textContent =
            `Período: ${stats.periodLabel} (${stats.startDate} a ${stats.endDate})`;
    }
    if (balanceEl) balanceEl.textContent = formatMoney(stats.balance);
    if (incomeEl) incomeEl.textContent = formatMoney(stats.totalIncome);
    if (expenseEl) expenseEl.textContent = formatMoney(stats.totalExpense);
    if (openInvoicesEl) openInvoicesEl.textContent = String(stats.openInvoicesCount);
    if (dashboardRealProfitEl) dashboardRealProfitEl.textContent = formatMoney(stats.realProfit);
    if (dashboardVehicleExpenseEl) dashboardVehicleExpenseEl.textContent = formatMoney(stats.vehicleExpense);
    if (dashboardTotalKmEl) dashboardTotalKmEl.textContent = formatKm(stats.totalKm);
    if (dashboardCostPerKmEl) dashboardCostPerKmEl.textContent = formatMoney(stats.costPerKm);
}

function toInputDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function getSelectedMonthLabel(referenceDate = getTimelineAnchorDate()) {
    return referenceDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
}

function isInvoiceInSelectedMonth(invoice, referenceDate = getTimelineAnchorDate()) {
    if (!invoice || typeof invoice !== 'object') return false;
    const dateStr = invoice.dueDate || invoice.date || invoice.createdAt;
    return isDateInSelectedMonth(dateStr, referenceDate);
}

function getTransactionsForSelectedMonth(referenceDate = getTimelineAnchorDate()) {
    return getTransactionsSafe().filter(
        transaction => transaction?.date && isDateInSelectedMonth(transaction.date, referenceDate)
    );
}

function applySelectedMonthBoardFilters() {
    if (!filterStartDate || !filterEndDate) return;
    const { start, end } = getMonthBounds();
    filterStartDate.value = toInputDate(start);
    filterEndDate.value = toInputDate(end);
}

function refreshDashboardForSelectedMonth() {
    renderSummary();
    updateCharts();
    updateGoalUI();
    renderTransactions();
    renderInvoices();
}

/**
 * Monitora mudanças de mês e atualiza o dashboard automaticamente.
 * Esta função verifica se o mês mudou desde a última execução.
 * Se detectar mudança de mês, atualiza todos os métricas do dashboard.
 */
function initMonthlyRefresh() {
    const lastMonthKey = 'financeLastMonth';
    const getCurrentMonthStr = () => {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    };

    const checkAndRefreshOnMonthChange = () => {
        const currentMonth = getCurrentMonthStr();
        const lastMonth = localStorage.getItem(lastMonthKey);

        if (lastMonth !== currentMonth) {
            console.log(`[Monthly Refresh] Mês mudou de ${lastMonth || 'inicial'} para ${currentMonth}. Atualizando dashboard...`);
            localStorage.setItem(lastMonthKey, currentMonth);

            if (timelineMonthSelect && timelineMonthSelect.value !== currentMonth) {
                timelineMonthSelect.value = currentMonth;
            }
            applySelectedMonthBoardFilters();
            refreshDashboardForSelectedMonth();
        }
    };

    // Verificar ao inicializar
    checkAndRefreshOnMonthChange();

    // Verificar a cada 1 hora (3600000 ms)
    setInterval(checkAndRefreshOnMonthChange, 3600000);
}

/**
 * Calcula entradas previstas/recorrentes para o mês corrente sem duplicar
 * receitas já refletidas no saldo atual.
 * @param {Date} [referenceDate=new Date()]
 * @returns {number}
 */
function calculateExpectedIncomeForCurrentMonth(referenceDate = new Date()) {
    const data = getTransactionsSafe();
    if (!Array.isArray(data)) return 0;

    const todayStr = referenceDate.toISOString().slice(0, 10);
    let total = 0;
    const processedRecurring = new Set();

    safeForEach(data, 'calculateExpectedIncomeForCurrentMonth', transaction => {
        if (transaction.type !== 'receita') return;

        const inCurrentMonth = isDateInCurrentMonth(transaction.date, referenceDate);
        const recurrence = transaction.recurrence || 'none';
        const amount = safeNumber(transaction.amount);

        if (recurrence !== 'none') {
            const recurringKey = `${transaction.description || ''}|${transaction.category || ''}|${recurrence}`;
            if (processedRecurring.has(recurringKey)) return;

            const alreadyReceivedThisMonth = data.some(item =>
                item?.type === 'receita'
                && item.description === transaction.description
                && item.category === transaction.category
                && isDateInCurrentMonth(item.date, referenceDate)
            );

            if (!alreadyReceivedThisMonth) {
                processedRecurring.add(recurringKey);
                if (recurrence === 'mensal') total += amount;
                else if (recurrence === 'semanal') total += amount * 4;
            }
            return;
        }

        if (inCurrentMonth && transaction.date >= todayStr) {
            total += amount;
        }
    });

    return total;
}

/**
 * Verifica se o vencimento está na janela de projeção: hoje até os próximos 30 dias
 * (inclui faturas em atraso ainda pendentes).
 * @param {string} dueDateStr - Data de vencimento (YYYY-MM-DD).
 * @param {Date} [referenceDate=new Date()]
 * @returns {boolean}
 */
function isInvoiceDueInProjectionWindow(dueDateStr, referenceDate = new Date()) {
    if (!dueDateStr) return false;
    const due = new Date(`${dueDateStr}T12:00:00`);
    if (Number.isNaN(due.getTime())) return false;

    const monthStart = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1);
    const windowEnd = new Date(monthStart);
    windowEnd.setDate(windowEnd.getDate() + 30);
    windowEnd.setHours(23, 59, 59, 999);

    return due >= monthStart && due <= windowEnd;
}

/**
 * Despesa à prazo (fatura). Transações "Pago à Vista" retornam false.
 * @param {object} transaction
 * @returns {boolean}
 */
function isTransactionCreditExpense(transaction) {
    if (!transaction || typeof transaction !== 'object') return false;
    if (transaction.type !== 'despesa' || transaction.isInvoicePayment) return false;
    const paymentStatus = transaction.paymentStatus || 'avista';
    if (paymentStatus === 'avista') return false;
    if (paymentStatus === 'fatura') return true;
    return Boolean(transaction.invoiceId);
}

/**
 * Transação paga à vista (não entra na projeção de dívidas).
 * @param {object} transaction
 * @returns {boolean}
 */
function isTransactionAvista(transaction) {
    if (!transaction || typeof transaction !== 'object') return false;
    if (transaction.type !== 'despesa' || transaction.isInvoicePayment) return false;
    const paymentStatus = transaction.paymentStatus || 'avista';
    if (paymentStatus === 'avista') return true;
    if (paymentStatus === 'fatura') return false;
    return !transaction.invoiceId;
}

/**
 * Total de despesas lançadas no mês corrente.
 * @param {Date} [referenceDate=new Date()]
 * @returns {number}
 */
function getMonthlyExpenses(referenceDate = new Date()) {
    const data = getTransactionsSafe();
    if (!Array.isArray(data)) return 0;

    let total = 0;
    safeForEach(data, 'getMonthlyExpenses', transaction => {
        if (transaction.type === 'despesa' && isDateInCurrentMonth(transaction.date, referenceDate)) {
            total += safeNumber(transaction.amount);
        }
    });
    return total;
}

/**
 * Calcula a projeção financeira do mês.
 * Fórmula: Saldo Atual + Entradas Previstas − Faturas à Prazo (Pendente/Parcial, próx. 30 dias).
 * Ignora totalmente transações e faturas "À Vista".
 *
 * @param {Date} [referenceDate=new Date()] - Data de referência para a projeção.
 * @returns {{
 *   saldoAtual: number,
 *   gastosPagosMes: number,
 *   saldoBase: number,
 *   entradasPrevistas: number,
 *   faturasPendentes: number,
 *   faturasBruto: number,
 *   faturasJaContabilizadas: number,
 *   gastosDoMes: number,
 *   saldoProjetado: number,
 *   alertaNegativo: boolean,
 *   mesReferencia: string
 * }}
 */
function calculateFinancialProjection(referenceDate = new Date()) {
    try {
        const txData = getTransactionsSafe();
        if (!Array.isArray(txData)) {
            console.warn('[calculateFinancialProjection] transactions inválido.');
            return getEmptyProjection(referenceDate);
        }

        let saldoAtual = 0;
        safeForEach(txData, 'calculateFinancialProjection.saldo', transaction => {
            if (!isDateInSelectedMonth(transaction.date, referenceDate)) return;
            const amount = safeNumber(transaction.amount);
            if (transaction.type === 'receita') saldoAtual += amount;
            else if (transaction.type === 'despesa') saldoAtual -= amount;
        });

        const gastosPagosMes = getMonthlyExpenses(referenceDate);
        const saldoBase = saldoAtual - gastosPagosMes;
        const entradasPrevistas = calculateExpectedIncomeForCurrentMonth(referenceDate);
        const { bruto, liquido, jaContabilizado } = sumInvoicesForProjection(referenceDate);
        const saldoProjetado = saldoAtual + entradasPrevistas - liquido;
        const alertaNegativo = liquido > 0 && saldoProjetado < 0;

        return {
            saldoAtual,
            gastosPagosMes,
            saldoBase,
            entradasPrevistas,
            faturasPendentes: liquido,
            faturasBruto: bruto,
            faturasJaContabilizadas: jaContabilizado,
            gastosDoMes: gastosPagosMes,
            saldoProjetado,
            alertaNegativo,
            mesReferencia: referenceDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }),
        };
    } catch (error) {
        console.error('[calculateFinancialProjection] Erro geral:', error);
        return getEmptyProjection(referenceDate);
    }
}

function getEmptyProjection(referenceDate = new Date()) {
    return {
        saldoAtual: 0,
        gastosPagosMes: 0,
        saldoBase: 0,
        entradasPrevistas: 0,
        faturasPendentes: 0,
        faturasBruto: 0,
        faturasJaContabilizadas: 0,
        gastosDoMes: 0,
        saldoProjetado: 0,
        alertaNegativo: false,
        mesReferencia: referenceDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }),
    };
}

/**
 * Abre o modal de transação pré-configurado para cadastrar receita (ex.: salário).
 */
function openIncomeTransactionModal() {
    cancelTransactionEdit();
    if (transactionForm) transactionForm.reset();

    const typeEl = getEl('type');
    const categoryEl = getEl('category');
    const descriptionEl = getEl('description');
    const amountEl = getEl('amount');
    const dateEl = getEl('date');
    const recurrenceEl = getEl('recurrence');

    if (typeEl) typeEl.value = 'receita';
    if (categoryEl) categoryEl.value = 'Salário';
    if (descriptionEl) {
        descriptionEl.value = '';
        descriptionEl.placeholder = 'Ex: Salário mensal';
    }
    if (amountEl) amountEl.value = '';
    if (dateEl) dateEl.value = new Date().toISOString().slice(0, 10);
    if (recurrenceEl) recurrenceEl.value = 'mensal';
    setSelectedPaymentStatus('avista');
    updateTransactionFormUI();

    openModal('transaction-modal');
}

/**
 * Atualiza o card de projeção financeira no dashboard.
 */
function renderFinancialProjection(referenceDate = getTimelineAnchorDate()) {
    if (!projectionCard) return;

    let projection;
    try {
        projection = calculateFinancialProjection(referenceDate);
    } catch (error) {
        console.error('[renderFinancialProjection] Erro:', error);
        projection = getEmptyProjection();
    }
    const iconOk = projectionIconEl?.querySelector('.projection-icon-ok');
    const iconAlert = projectionIconEl?.querySelector('.projection-icon-alert');

    if (projectionPendingEl) projectionPendingEl.textContent = formatMoney(projection.faturasPendentes);
    if (projectionExpectedIncomeEl) projectionExpectedIncomeEl.textContent = formatMoney(projection.entradasPrevistas);
    if (projectionBalanceEl) {
        projectionBalanceEl.textContent = formatMoney(projection.saldoProjetado);
        projectionBalanceEl.classList.toggle('negative', projection.alertaNegativo);
    }
    if (projectionMonthLabelEl) {
        projectionMonthLabelEl.textContent = `Referência: ${projection.mesReferencia} · faturas com vencimento nos próximos 30 dias`;
    }

    const hasPendingInvoices = projection.faturasPendentes > 0;
    projectionCard.classList.toggle('alert-danger', projection.alertaNegativo);
    iconOk?.classList.toggle('hidden', projection.alertaNegativo);
    iconAlert?.classList.toggle('hidden', !projection.alertaNegativo);

    if (projectionMessageEl) {
        if (!hasPendingInvoices) {
            projectionMessageEl.textContent =
                `Tudo pago! Seu saldo atual é de ${formatMoney(projection.saldoAtual)}.`;
        } else if (projection.alertaNegativo) {
            projectionMessageEl.textContent =
                `Cuidado: você tem ${formatMoney(projection.faturasPendentes)} em faturas para pagar nos próximos 30 dias, mas apenas ${formatMoney(projection.saldoProjetado)} de saldo projetado.`;
        } else {
            projectionMessageEl.textContent =
                `Você tem ${formatMoney(projection.faturasPendentes)} em faturas nos próximos 30 dias. Saldo projetado: ${formatMoney(projection.saldoProjetado)}.`;
        }
    }

    if (projectionLegendEl) {
        const faturasInfo = projection.faturasJaContabilizadas > 0
            ? ` (${formatMoney(projection.faturasJaContabilizadas)} já estão nas transações e não foram descontadas de novo)`
            : '';
        projectionLegendEl.textContent =
            `${formatMoney(projection.saldoAtual)} (saldo atual) + ${formatMoney(projection.entradasPrevistas)} (entradas) `
            + `− ${formatMoney(projection.faturasPendentes)} (faturas${faturasInfo}) = ${formatMoney(projection.saldoProjetado)}. `
            + `Referência: saldo atual − gastos do mês (${formatMoney(projection.saldoBase)}). `
            + `Gastos pagos neste mês: ${formatMoney(projection.gastosPagosMes)}.`;
        projectionLegendEl.title =
            `Faturas brutas à prazo (30 dias): ${formatMoney(projection.faturasBruto)}. `
            + `Compras "Pago à Vista" ficam só no histórico de transações e não entram aqui.`;
    }
}

window.openIncomeTransactionModal = openIncomeTransactionModal;

const INVOICE_STATUS_LABELS = {
    pendente: 'Pendente',
    parcial: 'Parcial',
    pago: 'Pago',
};

/**
 * Define o tipo da fatura (à prazo ou à vista) com base no cadastro ou vínculos.
 * @param {object} invoice
 * @returns {'aprazo'|'avista'}
 */
function resolveInvoiceTipo(invoice) {
    if (!invoice || typeof invoice !== 'object') return INVOICE_TIPO_APRAZO;

    const tipoExplicito = normalizeInvoiceTipo(invoice.tipo || DEFAULT_INVOICE_TIPO_LABEL);
    if (invoice.tipo) return tipoExplicito;

    const txData = getTransactionsSafe();
    const linked = Array.isArray(txData) ? txData.filter(t => t?.invoiceId === invoice.id) : [];
    if (linked.some(t => t.paymentStatus === 'avista')) return INVOICE_TIPO_AVISTA;
    if (linked.some(t => t.paymentStatus === 'fatura')) return INVOICE_TIPO_APRAZO;

    const cardKey = (invoice.card || '').trim().toLowerCase();
    if (cardKey) {
        const hasAprazoOnCard = txData.some(t =>
            isTransactionCreditExpense(t) && (t.card || '').trim().toLowerCase() === cardKey
        );
        if (!hasAprazoOnCard) {
            const n = normalizeInvoice(invoice);
            const avistaSum = txData
                .filter(t => isTransactionAvista(t) && (t.card || '').trim().toLowerCase() === cardKey)
                .reduce((sum, t) => sum + safeNumber(t.amount), 0);
            if (avistaSum >= n.valorTotal * 0.99) return INVOICE_TIPO_AVISTA;
        }
    }

    return INVOICE_TIPO_APRAZO;
}

function isInvoiceAprazo(invoice) {
    return getInvoiceTipoSafe(invoice) === INVOICE_TIPO_APRAZO;
}

/**
 * Fatura elegível para "Faturas a pagar" na projeção.
 * Regra: tipo à prazo E (status pendente OU parcial) E vencimento na janela de 30 dias.
 * @param {object} invoice
 * @param {Date} [referenceDate]
 * @returns {boolean}
 */
function isInvoiceEligibleForProjection(invoice, referenceDate = new Date()) {
    if (!isInvoiceAprazo(invoice)) return false;
    const normalized = normalizeInvoice(invoice);
    if (normalized.status !== 'pendente' && normalized.status !== 'parcial') return false;
    if (!isInvoiceDueInProjectionWindow(invoice.dueDate, referenceDate)) return false;
    return normalized.restante > 0;
}

/**
 * Soma apenas faturas à prazo pendentes/parciais (ignora à vista e transações à vista).
 * @param {Date} [referenceDate=new Date()]
 * @returns {{ bruto: number, liquido: number, jaContabilizado: number }}
 */
function sumInvoicesForProjection(referenceDate = new Date()) {
    const data = getInvoicesSafe();
    if (!Array.isArray(data)) return { bruto: 0, liquido: 0, jaContabilizado: 0 };

    let bruto = 0;
    let liquido = 0;

    safeForEach(data, 'sumInvoicesForProjection', invoice => {
        const tipo = getInvoiceTipoSafe(invoice);
        if (tipo !== INVOICE_TIPO_APRAZO) return;
        if (!isInvoiceEligibleForProjection(invoice, referenceDate)) return;
        const normalized = normalizeInvoice(invoice);
        bruto += safeNumber(normalized.restante);
        liquido += safeNumber(normalized.restante);
    });

    return { bruto, liquido, jaContabilizado: 0 };
}

function deriveInvoiceStatus(valorPago, valorTotal) {
    const pago = Number(valorPago) || 0;
    const total = Number(valorTotal) || 0;
    if (pago <= 0) return 'pendente';
    if (pago >= total) return 'pago';
    return 'parcial';
}

function syncInvoiceDerivedFields(invoice) {
    if (!invoice || typeof invoice !== 'object') {
        return {
            valorTotal: 0,
            valorPago: 0,
            restante: 0,
            status: 'pendente',
            tipo: INVOICE_TIPO_APRAZO,
            amount: 0,
        };
    }

    invoice.tipo = getInvoiceTipoSafe(invoice);
    let valorTotal = safeNumber(invoice.valorTotal ?? invoice.amount ?? 0);
    let valorPago = safeNumber(invoice.valorPago ?? 0);

    if (invoice.valorPago === undefined && invoice.valorTotal === undefined) {
        const legacyStatus = invoice.status;
        if (legacyStatus === 'pago') valorPago = valorTotal;
        else if (legacyStatus === 'aberto') valorPago = 0;
    }

    if (valorPago > valorTotal) valorPago = valorTotal;
    if (valorPago < 0) valorPago = 0;

    invoice.valorTotal = valorTotal;
    invoice.valorPago = valorPago;
    invoice.restante = Math.max(0, valorTotal - valorPago);
    invoice.status = deriveInvoiceStatus(valorPago, valorTotal);
    invoice.amount = valorTotal;
    return invoice;
}

function normalizeInvoice(invoice) {
    if (!invoice || typeof invoice !== 'object') {
        return syncInvoiceDerivedFields({});
    }
    return syncInvoiceDerivedFields({ ...invoice });
}

function migrateAllInvoices() {
    const data = getInvoicesSafe();
    if (!Array.isArray(data)) {
        invoices = [];
        return;
    }

    invoices = data.map((inv, index) => {
        try {
            logCalcItem('migrateAllInvoices', inv, index);
            const synced = syncInvoiceDerivedFields(inv);
            synced.tipo = resolveInvoiceTipo(synced);
            return synced;
        } catch (error) {
            console.warn(`[migrateAllInvoices] erro no item #${index}, pulando:`, error, inv);
            return syncInvoiceDerivedFields({ ...(inv || {}), tipo: DEFAULT_INVOICE_TIPO_LABEL });
        }
    });
}

function getInvoiceStatusLabel(status) {
    return INVOICE_STATUS_LABELS[status] || status;
}

function isInvoiceOpen(invoice) {
    const n = normalizeInvoice(invoice);
    return n.valorPago < n.valorTotal;
}

function findOpenInvoiceByCard(card) {
    return findOpenAprazoInvoiceByCard(card);
}

function findOpenAprazoInvoiceByCard(card) {
    const cardKey = card.trim().toLowerCase();
    return invoices.find(i =>
        i.card?.trim().toLowerCase() === cardKey
        && isInvoiceOpen(i)
        && isInvoiceAprazo(i)
    );
}

function createInvoice({ card, valorTotal, dueDate, recurrence = 'none', tipo = INVOICE_TIPO_APRAZO }) {
    const invoice = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        card,
        valorTotal,
        valorPago: 0,
        dueDate,
        recurrence,
        tipo,
    };
    return syncInvoiceDerivedFields(invoice);
}

function getDefaultInvoiceDueDate(referenceDate) {
    const dateObj = new Date(referenceDate);
    return new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 10).toISOString().slice(0, 10);
}

function getSelectedPaymentStatus() {
    return paymentStatusFatura?.checked ? 'fatura' : 'avista';
}

function setSelectedPaymentStatus(status) {
    if (status === 'fatura') {
        if (paymentStatusFatura) paymentStatusFatura.checked = true;
    } else if (paymentStatusAvista) {
        paymentStatusAvista.checked = true;
    }
}

/**
 * Cria ou atualiza fatura pendente para lançamento à prazo.
 * @returns {object} Fatura sincronizada
 */
function createOrAddToInvoiceForTransaction(card, amount, dueDate) {
    const cardName = card.trim();
    let invoice = findOpenAprazoInvoiceByCard(cardName);

    if (invoice) {
        const n = normalizeInvoice(invoice);
        invoice.valorTotal = n.valorTotal + amount;
        invoice.tipo = INVOICE_TIPO_APRAZO;
        if (dueDate) invoice.dueDate = dueDate;
        syncInvoiceDerivedFields(invoice);
        return invoice;
    }

    invoice = createInvoice({
        card: cardName,
        valorTotal: amount,
        dueDate: dueDate || getDefaultInvoiceDueDate(new Date()),
        tipo: INVOICE_TIPO_APRAZO,
    });
    invoices.push(invoice);
    return invoice;
}

function revertTransactionFromInvoice(transaction) {
    if (!transaction?.invoiceId) return;
    const invoice = invoices.find(i => i.id === transaction.invoiceId);
    if (!invoice) return;
    const n = normalizeInvoice(invoice);
    invoice.valorTotal = Math.max(n.valorPago, n.valorTotal - transaction.amount);
    syncInvoiceDerivedFields(invoice);
}

/**
 * Vincula transação à prazo à fatura (cria, atualiza ou reaproveita vínculo na edição).
 */
function syncTransactionWithInvoice(card, amount, dueDate, previousTransaction = null) {
    const cardName = card.trim();
    const sameCreditor = previousTransaction?.card?.trim().toLowerCase() === cardName.toLowerCase();

    if (previousTransaction?.invoiceId && sameCreditor) {
        const existing = invoices.find(i => i.id === previousTransaction.invoiceId);
        if (existing) {
            const n = normalizeInvoice(existing);
            existing.valorTotal = Math.max(n.valorPago, n.valorTotal - previousTransaction.amount + amount);
            existing.card = cardName;
            existing.dueDate = dueDate;
            syncInvoiceDerivedFields(existing);
            return existing;
        }
    }

    if (previousTransaction && isTransactionCreditExpense(previousTransaction)) {
        revertTransactionFromInvoice(previousTransaction);
    }

    return createOrAddToInvoiceForTransaction(cardName, amount, dueDate);
}

function updateTransactionFormUI() {
    const isDespesa = transactionTypeSelect?.value === 'despesa';
    const isFatura = isDespesa && getSelectedPaymentStatus() === 'fatura';
    const hasCard = Boolean(getEl('transaction-card')?.value?.trim());

    if (paymentStatusGroup) paymentStatusGroup.classList.toggle('hidden', !isDespesa);
    if (invoiceDueDateTransactionLabel) invoiceDueDateTransactionLabel.classList.toggle('hidden', !isFatura);
    if (invoiceDueDateTransaction) {
        invoiceDueDateTransaction.required = isFatura;
        if (isFatura && !invoiceDueDateTransaction.value) {
            const refDate = getEl('date')?.value || new Date().toISOString().slice(0, 10);
            invoiceDueDateTransaction.value = getDefaultInvoiceDueDate(refDate);
        }
    }
    if (installmentsLabel) installmentsLabel.classList.toggle('hidden', !isDespesa || !hasCard);
}

function registerInvoicePayment(invoice, paymentAmount) {
    const n = normalizeInvoice(invoice);
    const valor = Number(paymentAmount);

    if (!valor || valor <= 0) {
        return { ok: false, message: 'Informe um valor válido para registrar o pagamento.' };
    }
    if (valor > n.restante + 0.001) {
        return {
            ok: false,
            message: `O valor informado (${formatMoney(valor)}) é maior que o restante (${formatMoney(n.restante)}). Ajuste o valor e tente novamente.`,
        };
    }

    invoice.valorPago = n.valorPago + valor;
    syncInvoiceDerivedFields(invoice);

    const today = new Date().toISOString().slice(0, 10);
    transactions.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        description: `Pagamento fatura - ${invoice.card}`,
        amount: valor,
        type: 'despesa',
        card: invoice.card,
        category: 'Pagamento de Fatura',
        date: today,
        recurrence: 'none',
        installments: 1,
        invoiceId: invoice.id,
        isInvoicePayment: true,
        paymentStatus: 'avista',
    });

    return { ok: true };
}

function updateInvoicePaymentUI(invoice) {
    const n = normalizeInvoice(invoice);
    const section = getEl('invoice-payment-section');
    if (section) section.classList.remove('hidden');

    const paidDisplay = getEl('invoice-paid-display');
    const remainingDisplay = getEl('invoice-remaining-display');
    const statusDisplay = getEl('invoice-status-display');

    if (paidDisplay) paidDisplay.textContent = formatMoney(n.valorPago);
    if (remainingDisplay) remainingDisplay.textContent = formatMoney(n.restante);
    if (statusDisplay) {
        statusDisplay.textContent = getInvoiceStatusLabel(n.status);
        statusDisplay.className = `tag ${n.status}`;
    }
}

function hideInvoicePaymentUI() {
    const section = getEl('invoice-payment-section');
    if (section) section.classList.add('hidden');
    const paymentInput = getEl('invoice-payment-amount');
    if (paymentInput) paymentInput.value = '';
}

function nameFromEmail(email) {
    if (!email || !email.includes('@')) return email || 'Usuário';
    return email.split('@')[0];
}

async function resolveUserDisplayName(storedUser) {
    if (useFirebase() && firebaseAuth?.currentUser) {
        const user = firebaseAuth.currentUser;
        if (user.displayName?.trim()) return user.displayName.trim();
        try {
            const doc = await getUserDocRef(user.uid).get();
            const username = doc.exists ? doc.data().username : '';
            if (username?.trim()) return username.trim();
        } catch (_) { /* ignora falha de perfil */ }
        if (user.email) return nameFromEmail(user.email);
    }
    return nameFromEmail(storedUser) || storedUser || 'Usuário';
}

function switchTab(tabId) {
    if (!TAB_IDS.includes(tabId)) return;

    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
    });

    const target = getEl(tabId);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('.topnav .topnav-item, .bottomnav .bottomnav-item, .main-nav .nav-tab, .sidebar-item').forEach(link => {
        const linkTab = link.dataset.tab || link.getAttribute('href')?.replace('#', '');
        link.classList.toggle('active', linkTab === tabId);
    });
}

function isMobileNavViewport() {
    return window.matchMedia('(max-width: 900px)').matches;
}

function setMobileNavOpen() {
    const nav = getEl('main-topnav');
    const overlay = getEl('mobile-nav-overlay');
    const toggle = getEl('mobile-menu-toggle');

    if (!nav) return;

    document.body.classList.remove('mobile-nav-open');
    nav.classList.remove('topnav--open');
    toggle?.setAttribute('aria-expanded', 'false');

    if (overlay) {
        overlay.classList.remove('is-visible');
        overlay.hidden = true;
        overlay.setAttribute('aria-hidden', 'true');
    }

    if (isMobileNavViewport()) {
        nav.setAttribute('inert', '');
        nav.setAttribute('aria-hidden', 'true');
        return;
    }

    nav.removeAttribute('inert');
    nav.setAttribute('aria-hidden', 'false');
}

function openMobileNav() {
    /* Drawer desativado: celular usa bottomnav; desktop usa topnav fixo */
}

function closeMobileNav() {
    setMobileNavOpen();
}

window.closeMobileNav = closeMobileNav;

function initMobileNav() {
    const nav = getEl('main-topnav');
    if (!nav) return;

    setMobileNavOpen(false);

    window.addEventListener('resize', () => {
        setMobileNavOpen(false);
        if (isMobileNavViewport()) {
            nav.setAttribute('inert', '');
            nav.setAttribute('aria-hidden', 'true');
        } else {
            nav.removeAttribute('inert');
            nav.setAttribute('aria-hidden', 'false');
        }
    });

    if (isMobileNavViewport()) {
        nav.setAttribute('inert', '');
        nav.setAttribute('aria-hidden', 'true');
    } else {
        nav.removeAttribute('inert');
        nav.setAttribute('aria-hidden', 'false');
    }
}

function initTabNavigation() {
    const navLinks = document.querySelectorAll('.topnav .topnav-item, .bottomnav .bottomnav-item, .main-nav .nav-tab, .sidebar-item');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const tabId = link.dataset.tab || link.getAttribute('href')?.replace('#', '');
            if (tabId) {
                switchTab(tabId);
            }
        });
    });

    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            document.getElementById('sidebar')?.classList.toggle('collapsed');
        });
    }

    switchTab('dashboard');
}

function setFormEditMode(formCard, isEditing) {
    if (formCard) formCard.classList.toggle('editing', isEditing);
}

function getTheme() {
    return localStorage.getItem('financeTheme') || 'light';
}

function getBudgetGoal() {
    return Number(localStorage.getItem('financeBudgetGoal') || 0);
}

function setTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
    localStorage.setItem('financeTheme', theme);
}

function openModal(modalId) {
    const modal = getEl(modalId);
    if (modal) {
        if (modalId === 'invoice-modal' && !invoiceEditIdInput?.value) {
            hideInvoicePaymentUI();
        }
        if (modalId === 'transaction-modal' && !editIdInput?.value) {
            setSelectedPaymentStatus('avista');
            updateTransactionFormUI();
        }
        modal.classList.add('active');
        const firstInput = modal.querySelector('input:not([type="hidden"])');
        if (firstInput) setTimeout(() => firstInput.focus(), 300);
    }
}

function closeModal(modalId) {
    const modal = getEl(modalId);
    if (modal) {
        modal.classList.remove('active');
        if (modalId === 'transaction-modal') cancelTransactionEdit();
        if (modalId === 'invoice-modal') cancelInvoiceEdit();
    }
}

function updateGoalUI() {
    const goal = getBudgetGoal();
    const monthReport = buildMonthReport();
    
    // Atualizar displays principais
    const goalValueDisplay = getEl('goal-value-display');
    const goalSpentDisplay = getEl('goal-spent-display');
    const goalRemainingDisplay = getEl('goal-remaining-display');
    const goalProgressPercent = getEl('goal-progress-percent');
    const statusIndicator = getEl('goal-status-indicator');
    
    if (goal > 0) {
        if (goalValueDisplay) goalValueDisplay.textContent = formatMoney(goal);
        if (budgetGoalInput) budgetGoalInput.value = goal > 0 ? goal : '';
        
        const spent = monthReport.expense;
        const remaining = Math.max(0, goal - spent);
        const percent = Math.min(100, Math.floor((spent / goal) * 100));
        
        // Atualizar displays
        if (goalSpentDisplay) goalSpentDisplay.textContent = formatMoney(spent);
        if (goalRemainingDisplay) goalRemainingDisplay.textContent = formatMoney(remaining);
        if (goalProgressPercent) goalProgressPercent.textContent = `${percent}%`;
        
        // Atualizar barra de progresso
        if (goalProgressBar) goalProgressBar.style.width = `${percent}%`;
        if (summaryGoalProgressBar) summaryGoalProgressBar.style.width = `${percent}%`;
        
        // Atualizar indicador de status com cores
        if (statusIndicator) {
            statusIndicator.textContent = '';
            statusIndicator.classList.remove('status-ok', 'status-warning', 'status-danger');
            
            if (percent <= 50) {
                statusIndicator.innerHTML = '● Dentro do orçamento';
                statusIndicator.classList.add('status-ok');
            } else if (percent <= 90) {
                statusIndicator.innerHTML = '● Atenção - Próximo do limite';
                statusIndicator.classList.add('status-warning');
            } else if (percent < 100) {
                statusIndicator.innerHTML = '● Quase no limite!';
                statusIndicator.classList.add('status-warning');
            } else {
                statusIndicator.innerHTML = '● ⚠️ Meta ultrapassada!';
                statusIndicator.classList.add('status-danger');
            }
        }
        
        if (monthlyGoalEl) monthlyGoalEl.textContent = formatMoney(goal);
    } else {
        if (goalValueDisplay) goalValueDisplay.textContent = '—';
        if (goalSpentDisplay) goalSpentDisplay.textContent = '—';
        if (goalRemainingDisplay) goalRemainingDisplay.textContent = '—';
        if (goalProgressPercent) goalProgressPercent.textContent = '0%';
        if (goalProgressBar) goalProgressBar.style.width = '0%';
        if (summaryGoalProgressBar) summaryGoalProgressBar.style.width = '0%';
        if (statusIndicator) {
            statusIndicator.textContent = '● Nenhuma meta';
            statusIndicator.classList.remove('status-ok', 'status-warning', 'status-danger');
        }
        if (budgetGoalInput) budgetGoalInput.value = '';
        if (monthlyGoalEl) monthlyGoalEl.textContent = 'R$ 0,00';
    }
}

const API_URL = 'http://localhost:4000/api';
const LOCAL_AUTH_TOKEN = 'finance_local_token';
const LOCAL_USERS_KEY = 'financeUsers';

const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyD5G6IraGGJBz4_8cIFwzQLHiZAaLcgLL8',
    authDomain: 'fluxify-cfe23.firebaseapp.com',
    projectId: 'fluxify-cfe23',
    storageBucket: 'fluxify-cfe23.firebasestorage.app',
    messagingSenderId: '330539659847',
    appId: '1:330539659847:web:3d3db556aa2a06f5933762',
};

let firebaseApp = null;
let firebaseAuth = null;
let firebaseDb = null;

function initFirebase() {
    if (!window.firebase || !FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
        return;
    }

    try {
        if (!firebase.apps?.length) {
            firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
        } else {
            firebaseApp = firebase.app();
        }
        firebaseAuth = firebase.auth();
        firebaseDb = firebase.firestore();
        firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .catch(error => console.warn('Falha ao configurar persistência do Firebase:', error.message));
    } catch (error) {
        console.warn('Falha ao inicializar o Firebase:', error);
    }
}

function useFirebase() {
    return Boolean(window.firebase && firebaseApp && firebaseAuth && firebaseDb);
}

function isLocalFileProtocol() {
    return window.location.protocol === 'file:';
}

function getFirebaseErrorMessage(error) {
    const code = error?.code || '';
    switch (code) {
        case 'auth/email-already-in-use':
            return 'Este email já está em uso.';
        case 'auth/weak-password':
            return 'A senha deve ter pelo menos 6 caracteres.';
        case 'auth/invalid-email':
            return 'Email inválido.';
        case 'auth/user-not-found':
            return 'Usuário ou email não encontrado.';
        case 'auth/wrong-password':
            return 'Senha incorreta.';
        case 'auth/popup-closed-by-user':
            return 'O popup do Google foi fechado antes de concluir o login.';
        case 'auth/cancelled-popup-request':
            return 'O pedido de login foi cancelado.';
        case 'auth/popup-blocked':
            return 'O popup do Google foi bloqueado pelo navegador.';
        case 'auth/operation-not-allowed':
            return 'Login com Google não está habilitado no Firebase.';
        case 'auth/permission-denied':
        case 'permission-denied':
            return 'Permissões ausentes ou insuficientes no Firestore. Verifique as regras do Firebase.';
        default:
            if (error?.message?.includes('permission-denied')) {
                return 'Permissões ausentes ou insuficientes no Firestore. Verifique as regras do Firebase.';
            }
            return error?.message || 'Erro no Firebase. Verifique as configurações.';
    }
}

function getUserDocRef(uid) {
    return firebaseDb.collection('users').doc(uid);
}

function getLocalUsers() {
    return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || '[]');
}

function saveLocalUsers(users) {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
}

function apiFetch(path, options = {}) {
    const token = localStorage.getItem('financeAuthToken');
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };
    if (token && token !== LOCAL_AUTH_TOKEN) {
        headers.Authorization = `Bearer ${token}`;
    }
    return fetch(`${API_URL}${path}`, {
        ...options,
        headers,
    }).then(async response => {
        const body = await response.json().catch(() => ({}));
        if (!response.ok) {
            throw new Error(body.message || 'Erro na requisição');
        }
        return body;
    }).catch(error => {
        const message = error.message || '';
        if (message.includes('Failed to fetch') || message.includes('NetworkError') || message.includes('Falha ao conectar')) {
            throw new Error('Falha de rede ao conectar ao servidor');
        }
        throw error;
    });
}

function getAuthToken() {
    return localStorage.getItem('financeAuthToken');
}

function isLocalAuth() {
    return getAuthToken() === LOCAL_AUTH_TOKEN;
}

function firebaseReady() {
    return new Promise(resolve => {
        if (!useFirebase()) {
            return resolve(false);
        }
        if (firebaseAuth.currentUser !== null) {
            return resolve(true);
        }
        const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(Boolean(user));
        });
    });
}

async function validateToken() {
    if (useFirebase()) {
        await firebaseReady();
        const user = firebaseAuth.currentUser;
        if (user) {
            localStorage.setItem('financeAuthToken', await user.getIdToken());
            return user.email || getLoggedUser();
        }
    }

    const token = getAuthToken();
    if (!token) return null;
    if (isLocalAuth()) {
        return getLoggedUser();
    }
    try {
        const data = await apiFetch('/user');
        return data.username;
    } catch (error) {
        localStorage.removeItem('financeAuthToken');
        return null;
    }
}

async function resolveLoginEmail(loginOrEmail) {
    if (!useFirebase()) return loginOrEmail;
    if (loginOrEmail.includes('@')) return loginOrEmail;
    const querySnapshot = await firebaseDb.collection('users').where('username', '==', loginOrEmail).limit(1).get();
    if (querySnapshot.empty) {
        throw new Error('Usuário não encontrado.');
    }
    return querySnapshot.docs[0].data().email;
}

async function registerUser(username, email, password) {
    if (useFirebase()) {
        try {
            const usernameQuery = await firebaseDb.collection('users').where('username', '==', username).limit(1).get();
            if (!usernameQuery.empty) {
                throw new Error('Usuário já existe.');
            }
            const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
            const uid = userCredential.user.uid;
            await getUserDocRef(uid).set({
                username,
                email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            const token = await userCredential.user.getIdToken();
            return { token, uid };
        } catch (error) {
            throw new Error(getFirebaseErrorMessage(error));
        }
    }

    try {
        return await apiFetch('/register', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
        });
    } catch (error) {
        if (!error.message.includes('Falha de rede')) {
            throw error;
        }
        const users = getLocalUsers();
        if (users.some(user => user.username === username || user.email === email)) {
            throw new Error('Usuário ou email já registrado.');
        }
        users.push({ username, email, password });
        saveLocalUsers(users);
        return { token: LOCAL_AUTH_TOKEN };
    }
}

async function loginUser(username, password) {
    if (useFirebase()) {
        try {
            const email = await resolveLoginEmail(username);
            const userCredential = await firebaseAuth.signInWithEmailAndPassword(email, password);
            const token = await userCredential.user.getIdToken();
            return { token, uid: userCredential.user.uid };
        } catch (error) {
            throw new Error(getFirebaseErrorMessage(error));
        }
    }

    try {
        return await apiFetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });
    } catch (error) {
        if (!error.message.includes('Falha de rede')) {
            throw error;
        }
        const users = getLocalUsers();
        const user = users.find(user => user.username === username && user.password === password);
        if (!user) {
            throw new Error('Usuário ou senha incorretos.');
        }
        return { token: LOCAL_AUTH_TOKEN };
    }
}

async function loginWithGoogle() {
    if (!useFirebase()) {
        throw new Error('Firebase não está disponível.');
    }

    if (isLocalFileProtocol()) {
        throw new Error('Login com Google não funciona via arquivo local. Abra o app por http://localhost e autorize esse domínio no Firebase.');
    }

    try {
        firebaseAuth.useDeviceLanguage();
        const provider = new firebase.auth.GoogleAuthProvider();
        const userCredential = await firebaseAuth.signInWithPopup(provider);
        const user = userCredential.user;
        const token = await user.getIdToken();
        const uid = user.uid;

        const docRef = getUserDocRef(uid);
        const doc = await docRef.get();
        if (!doc.exists) {
            await docRef.set({
                username: user.displayName || user.email.split('@')[0],
                email: user.email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
        return { token, uid };
    } catch (error) {
        if (error?.code === 'auth/popup-blocked' || error?.code === 'auth/cancelled-popup-request') {
            throw new Error('O popup do Google foi bloqueado. Libere popups ou acesse pelo domínio autorizado em seu navegador.');
        }
        throw new Error(getFirebaseErrorMessage(error));
    }
}

async function loadCloudData() {
    if (useFirebase()) {
        const user = firebaseAuth.currentUser;
        if (!user) {
            return;
        }
        try {
            const doc = await getUserDocRef(user.uid).get();
            if (!doc.exists) return;
            const data = doc.data();
            transactions = ensureArray(data.transactions, 'cloud.transactions');
            invoices = ensureArray(data.invoices, 'cloud.invoices');
            vehicles = ensureArray(data.vehicles, 'cloud.vehicles');
            deliveries = ensureArray(data.deliveries, 'cloud.deliveries');
            fuelEntries = ensureArray(data.fuelEntries, 'cloud.fuelEntries');
            maintenanceRecords = ensureArray(data.maintenanceRecords, 'cloud.maintenanceRecords');
            marketExpenses = ensureArray(data.marketExpenses, 'cloud.marketExpenses');
            houseBills = ensureArray(data.houseBills, 'cloud.houseBills');
            goals = ensureArray(data.goals, 'cloud.goals');
            migrateAllInvoices();
            if (data.budgetGoal !== undefined) {
                localStorage.setItem('financeBudgetGoal', String(data.budgetGoal));
            }
        } catch (error) {
            console.warn('Falha ao carregar dados do Firestore:', error.message);
        }
        if (isAppPage) refreshDashboardForSelectedMonth();
        return;
    }

    if (isLocalAuth()) {
        return;
    }
    try {
        const data = await apiFetch('/data');
        transactions = ensureArray(data.transactions, 'api.transactions');
        invoices = ensureArray(data.invoices, 'api.invoices');
        vehicles = ensureArray(data.vehicles, 'api.vehicles');
        deliveries = ensureArray(data.deliveries, 'api.deliveries');
        fuelEntries = ensureArray(data.fuelEntries, 'api.fuelEntries');
        maintenanceRecords = ensureArray(data.maintenanceRecords, 'api.maintenanceRecords');
        marketExpenses = ensureArray(data.marketExpenses, 'api.marketExpenses');
        houseBills = ensureArray(data.houseBills, 'api.houseBills');
        goals = ensureArray(data.goals, 'api.goals');
        migrateAllInvoices();
        if (data.budgetGoal !== undefined) {
            localStorage.setItem('financeBudgetGoal', String(data.budgetGoal));
        }
    } catch (error) {
        console.warn('Falha ao carregar dados da nuvem:', error.message);
    }
    if (isAppPage) refreshDashboardForSelectedMonth();
}

async function saveData() {
    transactions = ensureArray(transactions, 'saveData.transactions');
    invoices = ensureArray(invoices, 'saveData.invoices');
    vehicles = ensureArray(vehicles, 'saveData.vehicles');
    deliveries = ensureArray(deliveries, 'saveData.deliveries');
    fuelEntries = ensureArray(fuelEntries, 'saveData.fuelEntries');
    maintenanceRecords = ensureArray(maintenanceRecords, 'saveData.maintenanceRecords');
    marketExpenses = ensureArray(marketExpenses, 'saveData.marketExpenses');
    houseBills = ensureArray(houseBills, 'saveData.houseBills');
    goals = ensureArray(goals, 'saveData.goals');
    migrateAllInvoices();
    
    // Salvar no formato antigo (compatibilidade)
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('invoices', JSON.stringify(invoices));
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
    localStorage.setItem('deliveries', JSON.stringify(deliveries));
    localStorage.setItem('fuelEntries', JSON.stringify(fuelEntries));
    localStorage.setItem('maintenanceRecords', JSON.stringify(maintenanceRecords));
    localStorage.setItem('marketExpenses', JSON.stringify(marketExpenses));
    localStorage.setItem('houseBills', JSON.stringify(houseBills));
    localStorage.setItem('goals', JSON.stringify(goals));
    
    if (useFirebase() && firebaseAuth.currentUser) {
        try {
            await getUserDocRef(firebaseAuth.currentUser.uid).set({
                transactions,
                invoices,
                vehicles,
                deliveries,
                fuelEntries,
                maintenanceRecords,
                marketExpenses,
                houseBills,
                goals,
                budgetGoal: getBudgetGoal(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            }, { merge: true });
        } catch (error) {
            console.warn('Falha ao salvar dados no Firestore:', error.message);
        }
        return;
    }
    if (!getAuthToken() || isLocalAuth()) {
        return;
    }
    try {
        await apiFetch('/data', {
            method: 'POST',
            body: JSON.stringify({ transactions, invoices, budgetGoal: getBudgetGoal() }),
        });
    } catch (error) {
        console.warn('Falha ao salvar dados na nuvem:', error.message);
    }
}

function setLoggedUser(username) {
    localStorage.setItem('financeLoggedUser', username);
}

function getLoggedUser() {
    return localStorage.getItem('financeLoggedUser');
}

function showLoginError(message) {
    if (loginError) {
        loginError.textContent = message;
        setTimeout(() => {
            if (loginError.textContent === message) {
                loginError.textContent = '';
            }
        }, 3000);
    }
}

async function showApp(username) {
    if (!appContainer) {
        localStorage.setItem('financeLoggedUser', username);
        window.location.href = 'app.html';
        return;
    }
    loginContainer?.classList?.add('hidden');
    appContainer.classList.remove('hidden');
    const displayName = await resolveUserDisplayName(username);
    if (userNameDisplay) userNameDisplay.textContent = displayName;
    populateTimelineMonthOptions();
    syncTimelineToCurrentMonth();
    applySelectedMonthBoardFilters();
    refreshDashboardForSelectedMonth();
    renderModules();
    createCharts();
    initAssistant();
}

/** Garante que o seletor de mês aponte para o mês calendário atual ao abrir o app. */
function syncTimelineToCurrentMonth() {
    if (!timelineMonthSelect) return;
    const currentKey = getCurrentMonthKey();
    const hasOption = Array.from(timelineMonthSelect.options).some(opt => opt.value === currentKey);
    if (hasOption) timelineMonthSelect.value = currentKey;
}

function showLogin() {
    if (!loginContainer) {
        window.location.href = 'login.html';
        return;
    }
    switchToLoginMode();
    loginContainer.classList.remove('hidden');
    appContainer?.classList?.add('hidden');
}

function logout() {
    localStorage.removeItem('financeLoggedUser');
    localStorage.removeItem('financeAuthToken');
    if (isAppPage) {
        window.location.href = 'login.html';
    } else {
        showLogin();
    }
}

function switchToRegisterMode() {
    if (loginForm && registerForm) {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        switchRegister.classList.add('hidden');
        switchLogin.classList.remove('hidden');
        authToggleText.textContent = 'Já tem conta?';
        authTitle.textContent = 'Crie sua conta';
        authDescription.textContent = 'Cadastre-se no FinanceFlow e controle seu orçamento.';
    }
}

function switchToLoginMode() {
    if (loginForm && registerForm) {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        switchRegister.classList.remove('hidden');
        switchLogin.classList.add('hidden');
        authToggleText.textContent = 'Ainda não tem conta?';
        authTitle.textContent = 'FinanceFlow';
        authDescription.textContent = 'Controle total de seu fluxo financeiro com parcelamento inteligente e metas automáticas.';
    }
}

async function checkAuth() {
    const user = await validateToken();
    if (user) {
        setLoggedUser(user);
        await loadCloudData();
        await showApp(user);
        
        if (isAppPage) {
            setTimeout(() => {
                sincronizarDadosAntigosComFaturas();
            }, 1000);
        }
    } else {
        if (isAppPage) {
            window.location.href = 'login.html';
        } else {
            showLogin();
        }
    }
}

function getCurrentMonthKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

function getMonthKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

function getMonthLabel(date) {
    return date.toLocaleString('pt-BR', { month: 'short', year: 'numeric' });
}

function getTimelineAnchorDate() {
    if (!timelineMonthSelect || !timelineMonthSelect.value) {
        return new Date();
    }

    const [year, month] = timelineMonthSelect.value.split('-').map(Number);
    return Number.isFinite(year) && Number.isFinite(month)
        ? new Date(year, month - 1, 1)
        : new Date();
}

function populateTimelineMonthOptions(months = 24) {
    if (!timelineMonthSelect) return;

    const now = new Date();
    let options = '';
    for (let i = 0; i < months; i += 1) {
        const optionDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
        options += `<option value="${getMonthKey(optionDate)}">${optionDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}</option>`;
    }
    timelineMonthSelect.innerHTML = options;
    timelineMonthSelect.value = getMonthKey(now);
}

function buildMonthlyFlow(referenceDate = getTimelineAnchorDate()) {
    const txData = getTransactionsSafe();
    if (!Array.isArray(txData)) {
        return { labels: [], income: [], expense: [] };
    }

    const now = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1);
    const months = [];

    for (let i = 5; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        months.push({
            key: getMonthKey(date),
            label: getMonthLabel(date),
            income: 0,
            expense: 0,
        });
    }

    const monthIndex = Object.fromEntries(months.map((month, index) => [month.key, index]));

    safeForEach(txData, 'buildMonthlyFlow', transaction => {
        if (!transaction.date) return;
        const date = new Date(transaction.date);
        if (Number.isNaN(date.getTime())) return;
        const key = getMonthKey(date);
        if (monthIndex[key] === undefined) return;
        const amount = safeNumber(transaction.amount);
        if (transaction.type === 'receita') {
            months[monthIndex[key]].income += amount;
        } else {
            months[monthIndex[key]].expense += amount;
        }
    });

    return {
        labels: months.map(item => item.label),
        income: months.map(item => item.income),
        expense: months.map(item => item.expense),
    };
}

function buildExpenseCategories(referenceDate = getTimelineAnchorDate()) {
    const txData = getTransactionsSafe();
    if (!Array.isArray(txData)) {
        return { labels: ['Sem despesas'], values: [1] };
    }

    const categories = {};
    safeForEach(txData, 'buildExpenseCategories', transaction => {
        if (transaction.type !== 'despesa') return;
        if (!isDateInSelectedMonth(transaction.date, referenceDate)) return;
        const category = transaction.category || 'Outros';
        categories[category] = (categories[category] || 0) + safeNumber(transaction.amount);
    });

    const labels = Object.keys(categories);
    const values = Object.values(categories);

    if (labels.length === 0) {
        return { labels: ['Sem despesas'], values: [1] };
    }

    return { labels, values };
}

function buildInvoiceStatus() {
    const invData = getInvoicesSafe();
    if (!Array.isArray(invData)) return { pago: 0, aberto: 0 };

    const status = { pago: 0, aberto: 0 };
    safeForEach(invData, 'buildInvoiceStatus', invoice => {
        const n = normalizeInvoice(invoice);
        if (n.status === 'pago') status.pago += 1;
        else status.aberto += 1;
    });
    return status;
}

function getFilteredTransactions() {
    const data = getTransactionsSafe();
    if (!Array.isArray(data)) return [];

    return data.filter((transaction, index) => {
        try {
            if (!transaction || typeof transaction !== 'object') return false;
            logCalcItem('getFilteredTransactions', transaction, index);

            const startDate = filterStartDate?.value || '';
            const endDate = filterEndDate?.value || '';
            if (!transaction.date) return false;
            if (startDate || endDate) {
                if (!isDateWithinRange(transaction.date, startDate, endDate)) return false;
            }
            if (filterCategory && filterCategory.value && !(transaction.category || '').toLowerCase().includes(filterCategory.value.toLowerCase())) return false;
            if (filterCard && filterCard.value && !(transaction.card || '').toLowerCase().includes(filterCard.value.toLowerCase())) return false;
            if (filterType && filterType.value && transaction.type !== filterType.value) return false;
            return true;
        } catch (error) {
            console.warn(`[getFilteredTransactions] erro no item #${index}, pulando:`, error, transaction);
            return false;
        }
    });
}

function getFilteredInvoices() {
    const data = getInvoicesSafe();
    if (!Array.isArray(data)) return [];

    return data.filter((invoice, index) => {
        try {
            if (!invoice || typeof invoice !== 'object') return false;
            logCalcItem('getFilteredInvoices', invoice, index);

            const startDate = filterStartDate?.value || '';
            const endDate = filterEndDate?.value || '';
            if (!invoice.dueDate) return false;
            if (startDate || endDate) {
                if (!isDateWithinRange(invoice.dueDate, startDate, endDate)) return false;
            }
            if (filterCard && filterCard.value && invoice.card && !invoice.card.toLowerCase().includes(filterCard.value.toLowerCase())) return false;
            return true;
        } catch (error) {
            console.warn(`[getFilteredInvoices] erro no item #${index}, pulando:`, error, invoice);
            return false;
        }
    });
}

function exportToCSV(items, columns, filename) {
    const header = columns.map(col => col.label).join(',');
    const rows = items.map(item => columns.map(col => `"${String(item[col.key]).replace(/"/g, '""')}"`).join(','));
    const csv = [header, ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function applyFilters(event) {
    if (event) event.preventDefault();
    renderTransactions();
    renderInvoices();
}

function clearFilters() {
    if (filterForm) filterForm.reset();
    renderTransactions();
    renderInvoices();
}

function renderSummary() {
    try {
        const anchorDate = getTimelineAnchorDate();
        const stats = computeMonthDashboardStats(anchorDate);
        renderDashboardCards(stats);
        renderCardSummary();
        renderReports();
        renderFinancialProjection(anchorDate);
        renderModules();
    } catch (error) {
        console.error('[renderSummary] Erro:', error);
    }
}

function deleteItem(id, type) {
    if (!confirm('Tem certeza que deseja excluir este item?')) return;

    if (type === 'transaction') {
        const transaction = transactions.find(t => t.id === id);
        if (transaction?.isInvoicePayment && transaction.invoiceId) {
            const invoice = invoices.find(i => i.id === transaction.invoiceId);
            if (invoice) {
                const n = normalizeInvoice(invoice);
                invoice.valorPago = Math.max(0, n.valorPago - transaction.amount);
                syncInvoiceDerivedFields(invoice);
            }
        } else if (transaction && isTransactionCreditExpense(transaction)) {
            revertTransactionFromInvoice(transaction);
            if (!transaction.invoiceId && transaction.card && isTransactionCreditExpense(transaction)) {
                const invoice = findOpenAprazoInvoiceByCard(transaction.card);
                if (invoice) {
                    const n = normalizeInvoice(invoice);
                    invoice.valorTotal = Math.max(n.valorPago, n.valorTotal - transaction.amount);
                    syncInvoiceDerivedFields(invoice);
                }
            }
        }
        transactions = transactions.filter(t => t.id !== id);
        saveData();
        renderTransactions();
        renderInvoices();
        renderSummary();
        updateCharts();
        return;
    }

    if (type === 'invoice') {
        invoices = invoices.filter(i => i.id !== id);
        saveData();
        renderInvoices();
        renderSummary();
        updateCharts();
    }
}

function deleteTransaction(id) {
    deleteItem(id, 'transaction');
}

function deleteInvoice(id) {
    deleteItem(id, 'invoice');
}

function renderTransactions() {
    if (!transactionList) return;
    transactionList.innerHTML = '';

    try {
        const visibleTransactions = getFilteredTransactions();
        if (!Array.isArray(visibleTransactions) || visibleTransactions.length === 0) {
            transactionList.innerHTML = '<tr><td colspan="6" style="color: var(--muted);">Nenhuma transação encontrada para esses filtros.</td></tr>';
            return;
        }

        visibleTransactions.slice().reverse().forEach((transaction, index) => {
            try {
                if (!transaction || typeof transaction !== 'object') return;
                logCalcItem('renderTransactions', transaction, index);

                const recurrenceTag = transaction.recurrence && transaction.recurrence !== 'none'
                    ? `<span class="tag">${String(transaction.recurrence).charAt(0).toUpperCase() + String(transaction.recurrence).slice(1)}</span>`
                    : '';
                const installmentTag = transaction.installments && transaction.installments > 1
                    ? `<span class="tag" style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.25), rgba(251, 146, 60, 0.15)); color: #fed7aa; border: 2px solid rgba(249, 115, 22, 0.4);">${transaction.installments}x</span>`
                    : '';
                const paymentStatus = transaction.paymentStatus || 'avista';
                const paymentTag = transaction.type === 'despesa'
                    ? `<span class="tag ${paymentStatus === 'fatura' ? 'parcial' : 'pendente'}">${paymentStatus === 'fatura' ? 'À prazo' : 'À vista'}</span>`
                    : '';
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${transaction.description || '-'}</td>
                    <td>${transaction.card || '-'}</td>
                    <td>${transaction.category || '-'} ${paymentTag} ${recurrenceTag} ${installmentTag}</td>
                    <td><span class="tag ${transaction.type || 'despesa'}">${transaction.type === 'receita' ? 'Receita' : 'Despesa'}</span> ${formatMoney(transaction.amount)}</td>
                    <td>${transaction.date || '-'}</td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editTransaction('${transaction.id}')" title="Editar" aria-label="Editar">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteItem('${transaction.id}', 'transaction')" title="Excluir" aria-label="Excluir">🗑️</button>
                    </td>
                `;
                transactionList.appendChild(row);
            } catch (error) {
                console.warn(`[renderTransactions] erro no item #${index}, pulando:`, error, transaction);
            }
        });
    } catch (error) {
        console.error('[renderTransactions] Erro:', error);
        transactionList.innerHTML = '<tr><td colspan="6" style="color: var(--muted);">Erro ao carregar transações.</td></tr>';
    }
}

function renderInvoices() {
    if (!invoiceList) return;
    invoiceList.innerHTML = '';

    try {
        const visibleInvoices = getFilteredInvoices();
        if (!Array.isArray(visibleInvoices) || visibleInvoices.length === 0) {
            invoiceList.innerHTML = '<tr><td colspan="5" style="color: var(--muted);">Nenhuma fatura encontrada para esses filtros.</td></tr>';
            return;
        }

        visibleInvoices.slice().reverse().forEach((invoice, index) => {
            try {
                if (!invoice || typeof invoice !== 'object') return;
                logCalcItem('renderInvoices', invoice, index);

                const n = normalizeInvoice(invoice);
                const tipoLabel = getInvoiceTipoSafe(invoice) === INVOICE_TIPO_APRAZO ? 'À Prazo' : 'À Vista';
                const percent = n.valorTotal > 0 ? Math.min(100, (n.valorPago / n.valorTotal) * 100) : 0;
                const recurrenceTag = invoice.recurrence && invoice.recurrence !== 'none'
                    ? `<span class="tag">Recorrente</span>`
                    : '';
                const installmentTag = invoice.installmentNumber
                    ? `<span class="tag" style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.25), rgba(251, 146, 60, 0.15)); color: #fed7aa; border: 2px solid rgba(249, 115, 22, 0.4);">Parcela ${invoice.installmentNumber}</span>`
                    : '';
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${invoice.card || '-'} <span class="tag parcial">${tipoLabel}</span> ${recurrenceTag} ${installmentTag}</td>
                    <td class="invoice-payment-cell">
                        <div class="invoice-value-total">${formatMoney(n.valorTotal)}</div>
                        <div class="invoice-progress" role="progressbar" aria-valuenow="${percent.toFixed(0)}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso do pagamento">
                            <div class="invoice-progress-fill" style="width: ${percent}%"></div>
                        </div>
                        <div class="invoice-progress-meta">
                            <span>${formatMoney(n.valorPago)} pago</span>
                            <span class="invoice-remaining">${formatMoney(n.restante)} restantes</span>
                        </div>
                    </td>
                    <td>${invoice.dueDate || '-'}</td>
                    <td><span class="tag ${n.status || 'pendente'}">${getInvoiceStatusLabel(n.status)}</span></td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editInvoice('${invoice.id}')" title="Editar / pagar" aria-label="Editar">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteItem('${invoice.id}', 'invoice')" title="Excluir" aria-label="Excluir">🗑️</button>
                    </td>
                `;
                invoiceList.appendChild(row);
            } catch (error) {
                console.warn(`[renderInvoices] erro no item #${index}, pulando:`, error, invoice);
            }
        });
    } catch (error) {
        console.error('[renderInvoices] Erro:', error);
        invoiceList.innerHTML = '<tr><td colspan="5" style="color: var(--muted);">Erro ao carregar faturas.</td></tr>';
    }
}

function editTransaction(id) {
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) return;
    document.getElementById('description').value = transaction.description;
    document.getElementById('amount').value = transaction.amount;
    document.getElementById('type').value = transaction.type;
    
    if (document.getElementById('transaction-card')) {
        document.getElementById('transaction-card').value = transaction.card || '';
    }
    
    document.getElementById('category').value = transaction.category;
    document.getElementById('date').value = transaction.date;
    
    if (document.getElementById('recurrence')) {
        document.getElementById('recurrence').value = transaction.recurrence || 'none';
    }
    if (document.getElementById('installments')) {
        document.getElementById('installments').value = transaction.installments || '1';
    }

    if (transaction.type === 'despesa') {
        setSelectedPaymentStatus(transaction.paymentStatus === 'fatura' ? 'fatura' : 'avista');
        if (transaction.invoiceId) {
            const linkedInvoice = invoices.find(i => i.id === transaction.invoiceId);
            if (linkedInvoice && invoiceDueDateTransaction) {
                invoiceDueDateTransaction.value = linkedInvoice.dueDate;
            }
        }
    } else {
        setSelectedPaymentStatus('avista');
    }
    updateTransactionFormUI();
    
    if (editIdInput) editIdInput.value = transaction.id;
    const submitBtn = getEl('transaction-submit-btn');
    if (submitBtn) submitBtn.textContent = 'Salvar alteração';
    if (cancelTransactionButton) cancelTransactionButton.classList.remove('hidden');
    setFormEditMode(transactionFormCard, true);

    openModal('transaction-modal');
}

function cancelTransactionEdit() {
    if (editIdInput) editIdInput.value = '';
    const submitBtn = getEl('transaction-submit-btn');
    if (submitBtn) submitBtn.textContent = 'Adicionar transação';
    if (cancelTransactionButton) cancelTransactionButton.classList.add('hidden');
    setFormEditMode(transactionFormCard, false);
    if (transactionForm) {
        transactionForm.reset();
        setSelectedPaymentStatus('avista');
        if (document.getElementById('date')) {
            document.getElementById('date').value = new Date().toISOString().slice(0, 10);
        }
        if (invoiceDueDateTransaction) {
            invoiceDueDateTransaction.value = getDefaultInvoiceDueDate(new Date());
        }
        updateTransactionFormUI();
    }
}

function editInvoice(id) {
    const invoice = invoices.find(i => i.id === id);
    if (!invoice) return;
    const n = normalizeInvoice(invoice);
    document.getElementById('card-name').value = invoice.card;
    document.getElementById('invoice-amount').value = n.valorTotal;
    document.getElementById('invoice-due-date').value = invoice.dueDate;

    if (document.getElementById('invoice-recurrence')) {
        document.getElementById('invoice-recurrence').value = invoice.recurrence || 'none';
    }

    updateInvoicePaymentUI(invoice);

    if (invoiceEditIdInput) invoiceEditIdInput.value = invoice.id;
    const submitBtn = getEl('invoice-submit-btn');
    if (submitBtn) submitBtn.textContent = 'Salvar alteração';
    if (cancelInvoiceButton) cancelInvoiceButton.classList.remove('hidden');
    setFormEditMode(invoiceFormCard, true);

    openModal('invoice-modal');
}

function cancelInvoiceEdit() {
    if (invoiceEditIdInput) invoiceEditIdInput.value = '';
    const submitBtn = getEl('invoice-submit-btn');
    if (submitBtn) submitBtn.textContent = 'Adicionar fatura';
    if (cancelInvoiceButton) cancelInvoiceButton.classList.add('hidden');
    setFormEditMode(invoiceFormCard, false);
    hideInvoicePaymentUI();
    if (invoiceForm) {
        invoiceForm.reset();
        if (document.getElementById('invoice-due-date')) {
            document.getElementById('invoice-due-date').value = new Date().toISOString().slice(0, 10);
        }
    }
}

function buildMonthReport(referenceDate = getTimelineAnchorDate()) {
    const txData = getTransactionsForSelectedMonth(referenceDate);
    if (!Array.isArray(txData)) return { income: 0, expense: 0, balance: 0 };

    let income = 0;
    let expense = 0;

    safeForEach(txData, 'buildMonthReport', transaction => {
        const amount = safeNumber(transaction.amount);
        if (transaction.type === 'receita') income += amount;
        else expense += amount;
    });

    return { income, expense, balance: income - expense };
}

function renderReports() {
    if (!monthIncomeEl || !monthExpenseEl || !monthBalanceEl) return;
    
    const report = buildMonthReport();
    monthIncomeEl.textContent = formatMoney(report.income);
    monthExpenseEl.textContent = formatMoney(report.expense);
    monthBalanceEl.textContent = formatMoney(report.balance);
    
    if (reportCategoryList) {
        const cats = buildExpenseCategories();
        reportCategoryList.innerHTML = '';
        
        if (cats.labels.length === 1 && cats.labels[0] === 'Sem despesas') {
            reportCategoryList.innerHTML = '<li style="color: var(--muted);">Sem despesas no período.</li>';
        } else {
            cats.labels.forEach((label, i) => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${label}</span> <span>${formatMoney(cats.values[i])}</span>`;
                reportCategoryList.appendChild(li);
            });
        }
    }
}

function renderCardSummary() {
    if (!cardSummaryList) return;

    try {
        const invData = getInvoicesSafe();
        if (!Array.isArray(invData)) {
            cardSummaryList.innerHTML = '<li style="color: var(--muted);">Nenhuma fatura em aberto.</li>';
            return;
        }

        const cards = {};
        const anchorDate = getTimelineAnchorDate();
        safeForEach(invData, 'renderCardSummary', invoice => {
            if (!isInvoiceInSelectedMonth(invoice, anchorDate)) return;
            if (!isInvoiceOpen(invoice) || !isInvoiceAprazo(invoice)) return;
            const n = normalizeInvoice(invoice);
            const cardName = invoice.card || 'Sem cartão';
            cards[cardName] = (cards[cardName] || 0) + safeNumber(n.restante);
        });

        cardSummaryList.innerHTML = '';
        const entries = Object.entries(cards);

        if (entries.length === 0) {
            cardSummaryList.innerHTML = '<li style="color: var(--muted);">Nenhuma fatura em aberto.</li>';
            return;
        }

        entries.forEach(([card, total]) => {
            const li = document.createElement('li');
            li.innerHTML = `<span><i class="fas fa-credit-card"></i> ${card}</span> <strong>${formatMoney(total)}</strong>`;
            cardSummaryList.appendChild(li);
        });
    } catch (error) {
        console.error('[renderCardSummary] Erro:', error);
        cardSummaryList.innerHTML = '<li style="color: var(--muted);">Erro ao carregar resumo.</li>';
    }
}

function createCharts() {
    if (!window.Chart) return;
    
    // Setup Chart.js defaults if needed
    Chart.defaults.color = getTheme() === 'dark' ? '#94a3b8' : '#64748b';
    
    const flowCtx = getEl('flow-chart');
    const expenseCtx = getEl('expense-chart');
    
    if (flowCtx) {
        const flowData = buildMonthlyFlow(getTimelineAnchorDate());
        flowChart = new Chart(flowCtx, {
            type: 'bar',
            data: {
                labels: flowData.labels,
                datasets: [
                    { label: 'Receitas', data: flowData.income, backgroundColor: '#10b981' },
                    { label: 'Despesas', data: flowData.expense, backgroundColor: '#ef4444' }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
    
    if (expenseCtx) {
        const expData = buildExpenseCategories();
        expenseChart = new Chart(expenseCtx, {
            type: 'doughnut',
            data: {
                labels: expData.labels,
                datasets: [{
                    data: expData.values,
                    backgroundColor: ['#3b82f6', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#ec4899']
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const earningsAppCtx = getEl('earnings-app-chart');
    if (earningsAppCtx) {
        const appData = buildEarningsByApp();
        earningsAppChart = new Chart(earningsAppCtx, {
            type: 'bar',
            data: {
                labels: appData.labels,
                datasets: [{
                    label: 'Lucro líquido',
                    data: appData.values,
                    backgroundColor: '#f59e0b'
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const vehicleExpenseCtx = getEl('vehicle-expense-chart');
    if (vehicleExpenseCtx) {
        const vehicleData = buildVehicleExpenseSeries();
        vehicleExpenseChart = new Chart(vehicleExpenseCtx, {
            type: 'doughnut',
            data: {
                labels: vehicleData.labels,
                datasets: [{
                    data: vehicleData.values,
                    backgroundColor: ['#3b82f6', '#10b981', '#ef4444', '#8b5cf6', '#f97316']
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    const realProfitCtx = getEl('real-profit-chart');
    if (realProfitCtx) {
        const profitData = buildMonthlyRealProfit(getTimelineAnchorDate());
        realProfitChart = new Chart(realProfitCtx, {
            type: 'line',
            data: {
                labels: profitData.labels,
                datasets: [{
                    label: 'Lucro real',
                    data: profitData.values,
                    backgroundColor: 'rgba(20,184,166,0.25)',
                    borderColor: '#14b8a6',
                    fill: true,
                    tension: 0.35
                }]
            },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }
}

function updateCharts() {
    if (!window.Chart) return;
    
    if (flowChart) {
        const flowData = buildMonthlyFlow(getTimelineAnchorDate());
        flowChart.data.labels = flowData.labels;
        flowChart.data.datasets[0].data = flowData.income;
        flowChart.data.datasets[1].data = flowData.expense;
        flowChart.update();
    }
    
    if (expenseChart) {
        const expData = buildExpenseCategories();
        expenseChart.data.labels = expData.labels;
        expenseChart.data.datasets[0].data = expData.values;
        expenseChart.update();
    }

    if (earningsAppChart) {
        const appData = buildEarningsByApp();
        earningsAppChart.data.labels = appData.labels;
        earningsAppChart.data.datasets[0].data = appData.values;
        earningsAppChart.update();
    }

    if (vehicleExpenseChart) {
        const vehicleData = buildVehicleExpenseSeries();
        vehicleExpenseChart.data.labels = vehicleData.labels;
        vehicleExpenseChart.data.datasets[0].data = vehicleData.values;
        vehicleExpenseChart.update();
    }

    if (realProfitChart) {
        const profitData = buildMonthlyRealProfit(getTimelineAnchorDate());
        realProfitChart.data.labels = profitData.labels;
        realProfitChart.data.datasets[0].data = profitData.values;
        realProfitChart.update();
    }
}

function formatKm(value) {
    return `${safeNumber(value, 0).toLocaleString('pt-BR')} km`;
}

function findVehicleById(id) {
    if (!id) return null;
    return getVehiclesSafe().find(vehicle => vehicle.id === id) || null;
}

function getTotalDeliveryProfit(referenceDate = getTimelineAnchorDate()) {
    return getDeliveriesSafe().reduce((sum, entry) => {
        if (!entry.date || !isDateInSelectedMonth(entry.date, referenceDate)) return sum;
        const profit = safeNumber(entry.earning) - safeNumber(entry.fuelCost);
        return sum + profit;
    }, 0);
}

function getTotalVehicleExpenses(referenceDate = getTimelineAnchorDate()) {
    const fuelTotal = getFuelEntriesSafe().reduce((sum, entry) => {
        if (!entry.date || !isDateInSelectedMonth(entry.date, referenceDate)) return sum;
        return sum + safeNumber(entry.value);
    }, 0);
    const maintenanceTotal = getMaintenanceSafe().reduce((sum, record) => {
        const dateStr = record.date || record.serviceDate;
        if (!dateStr || !isDateInSelectedMonth(dateStr, referenceDate)) return sum;
        return sum + safeNumber(record.value);
    }, 0);
    return fuelTotal + maintenanceTotal;
}

function getTotalKm(referenceDate = getTimelineAnchorDate()) {
    return getDeliveriesSafe().reduce((sum, entry) => {
        if (!entry.date || !isDateInSelectedMonth(entry.date, referenceDate)) return sum;
        return sum + safeNumber(entry.km);
    }, 0);
}

function getCostPerKm(referenceDate = getTimelineAnchorDate()) {
    const km = getTotalKm(referenceDate);
    return km > 0 ? getTotalVehicleExpenses(referenceDate) / km : 0;
}

function buildEarningsByApp(referenceDate = getTimelineAnchorDate()) {
    const groups = {};
    getDeliveriesSafe().forEach(entry => {
        if (!entry.date || !isDateInSelectedMonth(entry.date, referenceDate)) return;
        const platform = entry.platform || 'Outros';
        const net = safeNumber(entry.earning) - safeNumber(entry.fuelCost);
        groups[platform] = (groups[platform] || 0) + net;
    });
    return {
        labels: Object.keys(groups),
        values: Object.values(groups).map(value => Number(value.toFixed(2)))
    };
}

function buildVehicleExpenseSeries(referenceDate = getTimelineAnchorDate()) {
    const groups = {};
    getFuelEntriesSafe().forEach(entry => {
        if (!entry.date || !isDateInSelectedMonth(entry.date, referenceDate)) return;
        const vehicle = findVehicleById(entry.vehicleId);
        const label = vehicle ? `${vehicle.brand || 'Veículo'} ${vehicle.model || ''}`.trim() : 'Sem veículo';
        groups[label] = (groups[label] || 0) + safeNumber(entry.value);
    });
    getMaintenanceSafe().forEach(record => {
        const dateStr = record.date || record.serviceDate;
        if (!dateStr || !isDateInSelectedMonth(dateStr, referenceDate)) return;
        const vehicle = findVehicleById(record.vehicleId);
        const label = vehicle ? `${vehicle.brand || 'Veículo'} ${vehicle.model || ''}`.trim() : 'Sem veículo';
        groups[label] = (groups[label] || 0) + safeNumber(record.value);
    });
    return {
        labels: Object.keys(groups),
        values: Object.values(groups).map(value => Number(value.toFixed(2)))
    };
}

function buildMonthlyRealProfit(referenceDate = getTimelineAnchorDate()) {
    const months = [];
    const now = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 1);
    for (let i = 5; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        months.push({ key: getMonthKey(date), label: getMonthLabel(date), value: 0 });
    }
    const index = Object.fromEntries(months.map((m, idx) => [m.key, idx]));
    getTransactionsSafe().forEach(item => {
        if (!item.date) return;
        const key = getMonthKey(new Date(item.date));
        if (index[key] === undefined) return;
        const amount = safeNumber(item.amount) * (item.type === 'receita' ? 1 : -1);
        months[index[key]].value += amount;
    });
    getDeliveriesSafe().forEach(entry => {
        if (!entry.date) return;
        const key = getMonthKey(new Date(entry.date));
        if (index[key] === undefined) return;
        months[index[key]].value += safeNumber(entry.earning) - safeNumber(entry.fuelCost);
    });
    return {
        labels: months.map(m => m.label),
        values: months.map(m => Number(m.value.toFixed(2)))
    };
}

function updateDashboardMetrics() {
    renderDashboardCards(computeMonthDashboardStats(getTimelineAnchorDate()));
}

function renderVehicleSelectOptions() {
    const options = getVehiclesSafe();
    const markup = options.length
        ? options.map(vehicle => `<option value="${vehicle.id}">${vehicle.brand} ${vehicle.model} (${vehicle.plate})</option>`).join('')
        : '<option value="">-- cadastre um veículo --</option>';
    if (deliveryVehicleSelect) deliveryVehicleSelect.innerHTML = markup;
    if (fuelVehicleSelect) fuelVehicleSelect.innerHTML = markup;
    if (maintenanceVehicleSelect) maintenanceVehicleSelect.innerHTML = markup;
}

function renderVehiclesTable() {
    if (!vehicleList) return;
    const rows = getVehiclesSafe();
    vehicleList.innerHTML = rows.length === 0
        ? '<tr><td colspan="6" style="color: var(--muted);">Nenhum veículo cadastrado.</td></tr>'
        : rows.slice().reverse().map(vehicle => {
            const maintenanceAlert = vehicle.nextMaintenanceKm && safeNumber(vehicle.kmCurrent) >= safeNumber(vehicle.nextMaintenanceKm);
            return `
                <tr>
                    <td>${vehicle.type} • ${vehicle.brand} ${vehicle.model} (${vehicle.plate})</td>
                    <td>${formatKm(vehicle.kmCurrent)}</td>
                    <td>${vehicle.nextMaintenanceKm ? formatKm(vehicle.nextMaintenanceKm) : '—'}</td>
                    <td>${vehicle.taxes || '—'}</td>
                    <td>${formatMoney(vehicle.fineAmount || 0)} ${vehicle.finePaid === 'true' ? '<span class="tag pago">Pago</span>' : '<span class="tag pendente">Pendente</span>'}</td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editVehicle('${vehicle.id}')">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteVehicle('${vehicle.id}')">🗑️</button>
                    </td>
                </tr>`;
        }).join('');
}

function renderDeliveriesTable() {
    if (!deliveryList) return;
    const rows = getDeliveriesSafe();
    deliveryList.innerHTML = rows.length === 0
        ? '<tr><td colspan="6" style="color: var(--muted);">Nenhuma entrega registrada.</td></tr>'
        : rows.slice().reverse().map(entry => {
            const profit = safeNumber(entry.earning) - safeNumber(entry.fuelCost);
            return `
                <tr>
                    <td>${entry.platform}</td>
                    <td>${formatMoney(entry.earning)}</td>
                    <td>${formatKm(entry.km)}</td>
                    <td>${formatMoney(entry.fuelCost)}</td>
                    <td>${formatMoney(profit)}</td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editDelivery('${entry.id}')">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteDelivery('${entry.id}')">🗑️</button>
                    </td>
                </tr>`;
        }).join('');
}

function renderFuelEntriesTable() {
    if (!fuelList) return;
    const rows = getFuelEntriesSafe();
    fuelList.innerHTML = rows.length === 0
        ? '<tr><td colspan="6" style="color: var(--muted);">Nenhum abastecimento registrado.</td></tr>'
        : rows.slice().reverse().map(entry => {
            const average = entry.liters && entry.km ? (safeNumber(entry.km) / safeNumber(entry.liters)) : 0;
            return `
                <tr>
                    <td>${entry.date}</td>
                    <td>${safeNumber(entry.liters)} L</td>
                    <td>${formatMoney(entry.value)}</td>
                    <td>${formatKm(entry.km)}</td>
                    <td>${average > 0 ? average.toFixed(1) + ' km/l' : '—'}</td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editFuel('${entry.id}')">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteFuel('${entry.id}')">🗑️</button>
                    </td>
                </tr>`;
        }).join('');
}

function renderMaintenanceTable() {
    if (!maintenanceList) return;
    const rows = getMaintenanceSafe();
    maintenanceList.innerHTML = rows.length === 0
        ? '<tr><td colspan="6" style="color: var(--muted);">Nenhuma manutenção registrada.</td></tr>'
        : rows.slice().reverse().map(record => `
                <tr>
                    <td>${record.type}</td>
                    <td>${record.date}</td>
                    <td>${formatKm(record.km)}</td>
                    <td>${formatMoney(record.value)}</td>
                    <td>${record.shop}</td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editMaintenance('${record.id}')">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteMaintenance('${record.id}')">🗑️</button>
                    </td>
                </tr>`).join('');
}

function renderMarketTable() {
    if (!marketList) return;
    const rows = getMarketExpensesSafe();
    marketList.innerHTML = rows.length === 0
        ? '<tr><td colspan="6" style="color: var(--muted);">Nenhuma compra registrada.</td></tr>'
        : rows.slice().reverse().map(item => `
                <tr>
                    <td>${item.item}</td>
                    <td>${item.store}</td>
                    <td>${item.category}</td>
                    <td>${formatMoney(item.value)}</td>
                    <td>${safeNumber(item.quantity)}</td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editMarket('${item.id}')">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteMarket('${item.id}')">🗑️</button>
                    </td>
                </tr>`).join('');
}

function renderHouseBillsTable() {
    if (!housebillList) return;
    const rows = getHouseBillsSafe();
    housebillList.innerHTML = rows.length === 0
        ? '<tr><td colspan="5" style="color: var(--muted);">Nenhuma conta registrada.</td></tr>'
        : rows.slice().reverse().map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${formatMoney(item.amount)}</td>
                    <td>${item.dueDate}</td>
                    <td><span class="tag ${item.status || 'pendente'}">${item.status || 'pendente'}</span></td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editHouseBill('${item.id}')">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteHouseBill('${item.id}')">🗑️</button>
                    </td>
                </tr>`).join('');
}

function renderGoalsTable() {
    if (!goalList) return;
    const rows = getGoalsSafe();
    goalList.innerHTML = rows.length === 0
        ? '<tr><td colspan="6" style="color: var(--muted);">Nenhuma meta cadastrada.</td></tr>'
        : rows.slice().reverse().map(goal => {
            const progress = goal.targetValue > 0 ? Math.min(100, Math.floor((safeNumber(goal.currentValue) / safeNumber(goal.targetValue)) * 100)) : 0;
            return `
                <tr>
                    <td>${goal.type}</td>
                    <td>${progress}%</td>
                    <td>${formatMoney(goal.currentValue)}</td>
                    <td>${formatMoney(goal.targetValue)}</td>
                    <td>${goal.targetDate}</td>
                    <td class="actions">
                        <button type="button" class="btn-icon" onclick="editGoal('${goal.id}')">✏️</button>
                        <button type="button" class="btn-icon danger" onclick="deleteGoal('${goal.id}')">🗑️</button>
                    </td>
                </tr>`;
        }).join('');
}

function renderModules() {
    renderVehicleSelectOptions();
    renderVehiclesTable();
    renderDeliveriesTable();
    renderFuelEntriesTable();
    renderMaintenanceTable();
    renderMarketTable();
    renderHouseBillsTable();
    renderGoalsTable();
    updateDashboardMetrics();
}

function resetForm(form) {
    if (form) {
        form.reset();
    }
}

function editVehicle(id) {
    const item = getVehiclesSafe().find(vehicle => vehicle.id === id);
    if (!item || !vehicleForm) return;
    getEl('vehicle-edit-id').value = item.id;
    getEl('vehicle-type').value = item.type || 'Carro';
    getEl('vehicle-brand').value = item.brand || '';
    getEl('vehicle-model').value = item.model || '';
    getEl('vehicle-year').value = item.year || '';
    getEl('vehicle-plate').value = item.plate || '';
    getEl('vehicle-km-initial').value = item.kmInitial || '';
    getEl('vehicle-km-current').value = item.kmCurrent || '';
    getEl('vehicle-next-maintenance-km').value = item.nextMaintenanceKm || '';
    getEl('vehicle-taxes').value = item.taxes || '';
    getEl('vehicle-fine').value = item.fineAmount || '';
    getEl('vehicle-fine-paid').value = item.finePaid || 'false';
    getEl('vehicle-financing').value = item.financing || '';
    getEl('vehicle-market-value').value = item.marketValue || '';
    getEl('vehicle-sale-value').value = item.saleValue || '';
}

function deleteVehicle(id) {
    if (!confirm('Excluir este veículo?')) return;
    vehicles = getVehiclesSafe().filter(vehicle => vehicle.id !== id);
    saveData();
    renderModules();
    renderSummary();
    updateCharts();
}

function editDelivery(id) {
    const item = getDeliveriesSafe().find(entry => entry.id === id);
    if (!item || !deliveryForm) return;
    getEl('delivery-edit-id').value = item.id;
    getEl('delivery-platform').value = item.platform || 'Uber';
    getEl('delivery-date').value = item.date || '';
    getEl('delivery-earning').value = item.earning || '';
    getEl('delivery-km').value = item.km || '';
    getEl('delivery-fuel-cost').value = item.fuelCost || '';
    getEl('delivery-vehicle').value = item.vehicleId || '';
}

function deleteDelivery(id) {
    if (!confirm('Excluir esta entrega?')) return;
    deliveries = getDeliveriesSafe().filter(entry => entry.id !== id);
    saveData();
    renderModules();
    renderSummary();
    updateCharts();
}

function editFuel(id) {
    const item = getFuelEntriesSafe().find(entry => entry.id === id);
    if (!item || !fuelForm) return;
    getEl('fuel-edit-id').value = item.id;
    getEl('fuel-date').value = item.date || '';
    getEl('fuel-liters').value = item.liters || '';
    getEl('fuel-value').value = item.value || '';
    getEl('fuel-km').value = item.km || '';
    getEl('fuel-vehicle').value = item.vehicleId || '';
}

function deleteFuel(id) {
    if (!confirm('Excluir este abastecimento?')) return;
    fuelEntries = getFuelEntriesSafe().filter(entry => entry.id !== id);
    saveData();
    renderModules();
    renderSummary();
    updateCharts();
}

function editMaintenance(id) {
    const item = getMaintenanceSafe().find(record => record.id === id);
    if (!item || !maintenanceForm) return;
    getEl('maintenance-edit-id').value = item.id;
    getEl('maintenance-type').value = item.type || 'Troca de óleo';
    getEl('maintenance-date').value = item.date || '';
    getEl('maintenance-km').value = item.km || '';
    getEl('maintenance-value').value = item.value || '';
    getEl('maintenance-shop').value = item.shop || '';
    getEl('maintenance-vehicle').value = item.vehicleId || '';
}

function deleteMaintenance(id) {
    if (!confirm('Excluir esta manutenção?')) return;
    maintenanceRecords = getMaintenanceSafe().filter(record => record.id !== id);
    saveData();
    renderModules();
    renderSummary();
    updateCharts();
}

function editMarket(id) {
    const item = getMarketExpensesSafe().find(expense => expense.id === id);
    if (!item || !marketForm) return;
    getEl('market-edit-id').value = item.id;
    getEl('market-item').value = item.item || '';
    getEl('market-store').value = item.store || '';
    getEl('market-category').value = item.category || '';
    getEl('market-date').value = item.date || '';
    getEl('market-value').value = item.value || '';
    getEl('market-quantity').value = item.quantity || '';
}

function deleteMarket(id) {
    if (!confirm('Excluir esta compra?')) return;
    marketExpenses = getMarketExpensesSafe().filter(expense => expense.id !== id);
    saveData();
    renderModules();
    renderSummary();
}

function editHouseBill(id) {
    const item = getHouseBillsSafe().find(bill => bill.id === id);
    if (!item || !housebillForm) return;
    getEl('housebill-edit-id').value = item.id;
    getEl('housebill-name').value = item.name || '';
    getEl('housebill-value').value = item.amount || '';
    getEl('housebill-due-date').value = item.dueDate || '';
    getEl('housebill-status').value = item.status || 'pendente';
}

function deleteHouseBill(id) {
    if (!confirm('Excluir esta conta?')) return;
    houseBills = getHouseBillsSafe().filter(bill => bill.id !== id);
    saveData();
    renderModules();
    renderSummary();
}

function editGoal(id) {
    const item = getGoalsSafe().find(goal => goal.id === id);
    if (!item || !goalForm) return;
    getEl('goal-edit-id').value = item.id;
    getEl('goal-type').value = item.type || 'Casa';
    getEl('goal-current-value').value = item.currentValue || '';
    getEl('goal-target-value').value = item.targetValue || '';
    getEl('goal-target-date').value = item.targetDate || '';
}

function deleteGoal(id) {
    if (!confirm('Excluir esta meta?')) return;
    goals = getGoalsSafe().filter(goal => goal.id !== id);
    saveData();
    renderModules();
    renderSummary();
}

function cancelVehicleEdit() {
    resetForm(vehicleForm);
    if (getEl('vehicle-edit-id')) getEl('vehicle-edit-id').value = '';
}

function cancelDeliveryEdit() {
    resetForm(deliveryForm);
    if (getEl('delivery-edit-id')) getEl('delivery-edit-id').value = '';
}

function cancelFuelEdit() {
    resetForm(fuelForm);
    if (getEl('fuel-edit-id')) getEl('fuel-edit-id').value = '';
}

function cancelMaintenanceEdit() {
    resetForm(maintenanceForm);
    if (getEl('maintenance-edit-id')) getEl('maintenance-edit-id').value = '';
}

function cancelMarketEdit() {
    resetForm(marketForm);
    if (getEl('market-edit-id')) getEl('market-edit-id').value = '';
}

function cancelHouseBillEdit() {
    resetForm(housebillForm);
    if (getEl('housebill-edit-id')) getEl('housebill-edit-id').value = '';
}

function cancelGoalEdit() {
    resetForm(goalForm);
    if (getEl('goal-edit-id')) getEl('goal-edit-id').value = '';
}

window.editVehicle = editVehicle;
window.deleteVehicle = deleteVehicle;
window.editDelivery = editDelivery;
window.deleteDelivery = deleteDelivery;
window.editFuel = editFuel;
window.deleteFuel = deleteFuel;
window.editMaintenance = editMaintenance;
window.deleteMaintenance = deleteMaintenance;
window.editMarket = editMarket;
window.deleteMarket = deleteMarket;
window.editHouseBill = editHouseBill;
window.deleteHouseBill = deleteHouseBill;
window.editGoal = editGoal;
window.deleteGoal = deleteGoal;

function sincronizarDadosAntigosComFaturas() {
    // Verifica despesas no cartão que não possuem fatura correspondente e cria se necessário
    let altered = false;
    transactions.forEach(t => {
        if (!isTransactionCreditExpense(t) || !t.card?.trim()) return;
        const hasInvoice = findOpenAprazoInvoiceByCard(t.card);
        if (!hasInvoice) {
            const now = new Date();
            invoices.push(createInvoice({
                card: t.card,
                valorTotal: t.amount,
                dueDate: new Date(now.getFullYear(), now.getMonth() + 1, 10).toISOString().slice(0, 10),
                tipo: INVOICE_TIPO_APRAZO,
            }));
            altered = true;
        }
    });
    
    if (altered) {
        saveData();
        renderInvoices();
        renderSummary();
    }
}

function initAssistant() {
    if (!assistantForm || !assistantInput || !assistantMessages) return;
    
    assistantForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = assistantInput.value.trim();
        if (!query) return;
        
        // Adicionar mensagem do usuário
        assistantMessages.innerHTML += `<div class="message user-message">${query}</div>`;
        assistantInput.value = '';
        
        // Simular resposta do assistente (Aqui você integraria com uma API real)
        setTimeout(() => {
            assistantMessages.innerHTML += `<div class="message bot-message">Entendi! Registrei sua solicitação para análise do fluxo de caixa.</div>`;
            assistantMessages.scrollTop = assistantMessages.scrollHeight;
        }, 1000);
    });
}

// Inicialização Principal
document.addEventListener('DOMContentLoaded', async () => {
    setTheme(getTheme());
    initFirebase();
    
    if (isLoginPage) {
        if (loginForm) {
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                try {
                    const res = await loginUser(loginUsername.value, loginPassword.value);
                    localStorage.setItem('financeAuthToken', res.token);
                    checkAuth();
                } catch (err) {
                    showLoginError(err.message);
                }
            });
        }
        
        if (registerForm) {
            registerForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const userReg = getEl('register-user').value;
                const emailReg = getEl('register-email').value;
                const passReg = getEl('register-password').value;
                try {
                    const res = await registerUser(userReg, emailReg, passReg);
                    localStorage.setItem('financeAuthToken', res.token);
                    checkAuth();
                } catch (err) {
                    showLoginError(err.message);
                }
            });
        }
        
        if (googleLoginButton) {
            googleLoginButton.addEventListener('click', async () => {
                try {
                    const res = await loginWithGoogle();
                    localStorage.setItem('financeAuthToken', res.token);
                    checkAuth();
                } catch (err) {
                    showLoginError(err.message);
                }
            });
        }
    }

    if (isAppPage) {
        window.switchTab = switchTab;
        window.editTransaction = editTransaction;
        window.editInvoice = editInvoice;
        window.deleteItem = deleteItem;
        window.closeModal = closeModal;
        window.openModal = openModal;

        const today = new Date().toISOString().slice(0, 10);
        if (getEl('date')) getEl('date').value = today;
        if (getEl('invoice-due-date')) getEl('invoice-due-date').value = today;

        if (logoutButton) {
            logoutButton.addEventListener('click', () => {
                if (useFirebase() && firebaseAuth) {
                    firebaseAuth.signOut().catch(() => {});
                }
                logout();
            });
        }

        const projectionAddIncomeBtn = getEl('projection-add-income');
        if (projectionAddIncomeBtn) {
            projectionAddIncomeBtn.addEventListener('click', openIncomeTransactionModal);
        }

        // ===== INICIALIZAÇÃO DO PAINEL INTERATIVO DE MÓDULOS =====
        if (modulesMainBtn) {
            modulesMainBtn.addEventListener('click', toggleModulesMenu);
        }

        if (modulesMenuClose) {
            modulesMenuClose.addEventListener('click', closeModulesMenu);
        }

        // Fechar menu ao clicar fora
        if (modulesMenu) {
            modulesMenu.addEventListener('click', (e) => {
                if (e.target === modulesMenu) {
                    closeModulesMenu();
                }
            });
        }

        // Event listeners para as categorias
        document.querySelectorAll('.category-header').forEach(header => {
            header.addEventListener('click', () => {
                const categoryName = header.getAttribute('data-category');
                toggleCategory(categoryName);
            });
        });

        // Event listeners para as ações
        document.querySelectorAll('.category-action').forEach(action => {
            action.addEventListener('click', () => {
                const actionName = action.getAttribute('data-action');
                executeModuleAction(actionName);
            });
        });

        initMobileNav();
        initTabNavigation();

        if (transactionTypeSelect) {
            transactionTypeSelect.addEventListener('change', updateTransactionFormUI);
        }
        if (paymentStatusAvista) paymentStatusAvista.addEventListener('change', updateTransactionFormUI);
        if (paymentStatusFatura) paymentStatusFatura.addEventListener('change', updateTransactionFormUI);
        if (getEl('transaction-card')) {
            getEl('transaction-card').addEventListener('input', updateTransactionFormUI);
        }
        updateTransactionFormUI();
        
        // Eventos de Filtro
        if (filterForm) filterForm.addEventListener('submit', applyFilters);
        if (clearFiltersButton) clearFiltersButton.addEventListener('click', clearFilters);
        
        // Alternador de Tema
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                setTheme(getTheme() === 'dark' ? 'light' : 'dark');
                updateCharts();
            });
        }

        if (timelineMonthSelect) {
            populateTimelineMonthOptions();
            applySelectedMonthBoardFilters();
            timelineMonthSelect.addEventListener('change', () => {
                applySelectedMonthBoardFilters();
                refreshDashboardForSelectedMonth();
            });
        }

        // Meta de Orçamento
        if (saveBudgetGoalButton) {
            saveBudgetGoalButton.addEventListener('click', () => {
                const goal = Number(budgetGoalInput.value);
                localStorage.setItem('financeBudgetGoal', goal);
                updateGoalUI();
                saveData();
                closeModal('goal-modal');
            });
        }

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js?v=4')
                .then(registration => {
                    registration.update();
                    console.log('Service Worker registrado.');
                })
                .catch(error => console.warn('Falha ao registrar Service Worker:', error));
        }

        if (vehicleForm) {
            vehicleForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = getEl('vehicle-edit-id').value.trim();
                const vehicleData = {
                    type: getEl('vehicle-type').value,
                    brand: getEl('vehicle-brand').value.trim(),
                    model: getEl('vehicle-model').value.trim(),
                    year: getEl('vehicle-year').value,
                    plate: getEl('vehicle-plate').value.trim(),
                    kmInitial: parseFloat(getEl('vehicle-km-initial').value) || 0,
                    kmCurrent: parseFloat(getEl('vehicle-km-current').value) || 0,
                    nextMaintenanceKm: parseFloat(getEl('vehicle-next-maintenance-km').value) || '',
                    taxes: getEl('vehicle-taxes').value.trim(),
                    fineAmount: parseFloat(getEl('vehicle-fine').value) || 0,
                    finePaid: getEl('vehicle-fine-paid').value,
                    financing: getEl('vehicle-financing').value.trim(),
                    marketValue: parseFloat(getEl('vehicle-market-value').value) || 0,
                    saleValue: parseFloat(getEl('vehicle-sale-value').value) || 0,
                };
                if (id) {
                    const index = vehicles.findIndex(item => item.id === id);
                    if (index > -1) {
                        vehicles[index] = { id, ...vehicleData };
                    }
                } else {
                    vehicles.push({ id: Date.now().toString() + Math.random().toString(36).slice(2, 8), ...vehicleData });
                }
                saveData();
                renderModules();
                renderSummary();
                updateCharts();
                cancelVehicleEdit();
            });
        }

        if (vehicleCancelButton) {
            vehicleCancelButton.addEventListener('click', cancelVehicleEdit);
        }

        if (deliveryForm) {
            deliveryForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = getEl('delivery-edit-id').value.trim();
                const data = {
                    platform: getEl('delivery-platform').value,
                    date: getEl('delivery-date').value,
                    earning: parseFloat(getEl('delivery-earning').value) || 0,
                    km: parseFloat(getEl('delivery-km').value) || 0,
                    fuelCost: parseFloat(getEl('delivery-fuel-cost').value) || 0,
                    vehicleId: getEl('delivery-vehicle').value || ''
                };
                if (id) {
                    const index = deliveries.findIndex(item => item.id === id);
                    if (index > -1) deliveries[index] = { id, ...data };
                } else {
                    deliveries.push({ id: Date.now().toString() + Math.random().toString(36).slice(2, 8), ...data });
                }
                saveData();
                renderModules();
                renderSummary();
                updateCharts();
                cancelDeliveryEdit();
            });
        }

        if (deliveryCancelButton) {
            deliveryCancelButton.addEventListener('click', cancelDeliveryEdit);
        }

        if (fuelForm) {
            fuelForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = getEl('fuel-edit-id').value.trim();
                const data = {
                    date: getEl('fuel-date').value,
                    liters: parseFloat(getEl('fuel-liters').value) || 0,
                    value: parseFloat(getEl('fuel-value').value) || 0,
                    km: parseFloat(getEl('fuel-km').value) || 0,
                    vehicleId: getEl('fuel-vehicle').value || ''
                };
                if (id) {
                    const index = fuelEntries.findIndex(item => item.id === id);
                    if (index > -1) fuelEntries[index] = { id, ...data };
                } else {
                    fuelEntries.push({ id: Date.now().toString() + Math.random().toString(36).slice(2, 8), ...data });
                }
                saveData();
                renderModules();
                renderSummary();
                updateCharts();
                cancelFuelEdit();
            });
        }

        if (fuelCancelButton) {
            fuelCancelButton.addEventListener('click', cancelFuelEdit);
        }

        if (maintenanceForm) {
            maintenanceForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = getEl('maintenance-edit-id').value.trim();
                const data = {
                    type: getEl('maintenance-type').value,
                    date: getEl('maintenance-date').value,
                    km: parseFloat(getEl('maintenance-km').value) || 0,
                    value: parseFloat(getEl('maintenance-value').value) || 0,
                    shop: getEl('maintenance-shop').value.trim(),
                    vehicleId: getEl('maintenance-vehicle').value || ''
                };
                if (id) {
                    const index = maintenanceRecords.findIndex(item => item.id === id);
                    if (index > -1) maintenanceRecords[index] = { id, ...data };
                } else {
                    maintenanceRecords.push({ id: Date.now().toString() + Math.random().toString(36).slice(2, 8), ...data });
                }
                saveData();
                renderModules();
                renderSummary();
                updateCharts();
                cancelMaintenanceEdit();
            });
        }

        if (maintenanceCancelButton) {
            maintenanceCancelButton.addEventListener('click', cancelMaintenanceEdit);
        }

        if (marketForm) {
            marketForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = getEl('market-edit-id').value.trim();
                const data = {
                    item: getEl('market-item').value.trim(),
                    store: getEl('market-store').value.trim(),
                    category: getEl('market-category').value.trim(),
                    date: getEl('market-date').value,
                    value: parseFloat(getEl('market-value').value) || 0,
                    quantity: parseInt(getEl('market-quantity').value, 10) || 1
                };
                if (id) {
                    const index = marketExpenses.findIndex(item => item.id === id);
                    if (index > -1) marketExpenses[index] = { id, ...data };
                } else {
                    marketExpenses.push({ id: Date.now().toString() + Math.random().toString(36).slice(2, 8), ...data });
                }
                saveData();
                renderModules();
                renderSummary();
                cancelMarketEdit();
            });
        }

        if (marketCancelButton) {
            marketCancelButton.addEventListener('click', cancelMarketEdit);
        }

        if (housebillForm) {
            housebillForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = getEl('housebill-edit-id').value.trim();
                const data = {
                    name: getEl('housebill-name').value.trim(),
                    amount: parseFloat(getEl('housebill-value').value) || 0,
                    dueDate: getEl('housebill-due-date').value,
                    status: getEl('housebill-status').value || 'pendente'
                };
                if (id) {
                    const index = houseBills.findIndex(item => item.id === id);
                    if (index > -1) houseBills[index] = { id, ...data };
                } else {
                    houseBills.push({ id: Date.now().toString() + Math.random().toString(36).slice(2, 8), ...data });
                }
                saveData();
                renderModules();
                renderSummary();
                cancelHouseBillEdit();
            });
        }

        if (housebillCancelButton) {
            housebillCancelButton.addEventListener('click', cancelHouseBillEdit);
        }

        if (goalForm) {
            goalForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const id = getEl('goal-edit-id').value.trim();
                const data = {
                    type: getEl('goal-type').value,
                    currentValue: parseFloat(getEl('goal-current-value').value) || 0,
                    targetValue: parseFloat(getEl('goal-target-value').value) || 0,
                    targetDate: getEl('goal-target-date').value
                };
                if (id) {
                    const index = goals.findIndex(item => item.id === id);
                    if (index > -1) goals[index] = { id, ...data };
                } else {
                    goals.push({ id: Date.now().toString() + Math.random().toString(36).slice(2, 8), ...data });
                }
                saveData();
                renderModules();
                renderSummary();
                cancelGoalEdit();
            });
        }

        if (goalCancelButton) {
            goalCancelButton.addEventListener('click', cancelGoalEdit);
        }

        // --- CORREÇÃO IMPORTANTE ADICIONADA: Salvar Transações ---
        if (transactionForm) {
            transactionForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const id = editIdInput ? editIdInput.value.trim() : '';
                const description = getEl('description').value;
                const amount = parseFloat(getEl('amount').value);
                const type = getEl('type').value;
                const card = getEl('transaction-card') ? getEl('transaction-card').value : '';
                const category = getEl('category').value;
                const date = getEl('date').value;
                const recurrence = getEl('recurrence') ? getEl('recurrence').value : 'none';
                const installments = getEl('installments') ? parseInt(getEl('installments').value) : 1;
                const paymentStatus = type === 'despesa' ? getSelectedPaymentStatus() : null;

                if (type === 'despesa' && paymentStatus === 'fatura') {
                    const creditor = card.trim();
                    if (!creditor) {
                        alert('Para lançamento à prazo, informe o cartão ou credor.');
                        return;
                    }
                    if (!invoiceDueDateTransaction?.value) {
                        alert('Informe a data de vencimento da fatura.');
                        return;
                    }
                }

                if (id) {
                    const index = transactions.findIndex(t => t.id === id);
                    if (index > -1) {
                        const previous = transactions[index];
                        const updated = {
                            ...previous,
                            description,
                            amount,
                            type,
                            card,
                            category,
                            date,
                            recurrence,
                            installments,
                        };

                        if (type === 'despesa' && paymentStatus === 'fatura') {
                            const invoice = syncTransactionWithInvoice(
                                card,
                                amount,
                                invoiceDueDateTransaction.value,
                                isTransactionCreditExpense(previous) ? previous : null
                            );
                            updated.paymentStatus = 'fatura';
                            updated.invoiceId = invoice.id;
                        } else {
                            if (isTransactionCreditExpense(previous)) {
                                revertTransactionFromInvoice(previous);
                            }
                            updated.paymentStatus = type === 'despesa' ? 'avista' : undefined;
                            delete updated.invoiceId;
                        }

                        transactions[index] = updated;
                    }
                } else {
                    const newTransaction = {
                        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
                        description,
                        amount,
                        type,
                        card,
                        category,
                        date,
                        recurrence,
                        installments,
                    };

                    if (type === 'despesa') {
                        if (paymentStatus === 'fatura') {
                            const invoice = createOrAddToInvoiceForTransaction(
                                card,
                                amount,
                                invoiceDueDateTransaction.value
                            );
                            newTransaction.paymentStatus = 'fatura';
                            newTransaction.invoiceId = invoice.id;
                        } else {
                            newTransaction.paymentStatus = 'avista';
                            delete newTransaction.invoiceId;
                        }
                    }

                    transactions.push(newTransaction);
                }

                saveData();
                renderTransactions();
                renderInvoices();
                renderSummary();
                updateCharts();
                updateGoalUI();
                closeModal('transaction-modal');
            });
        }

        // --- CORREÇÃO IMPORTANTE ADICIONADA: Salvar Faturas ---
        if (invoiceForm) {
            invoiceForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const id = invoiceEditIdInput ? invoiceEditIdInput.value.trim() : '';
                const card = getEl('card-name').value.trim();
                const valorTotal = parseFloat(getEl('invoice-amount').value);
                const dueDate = getEl('invoice-due-date').value;
                const recurrence = getEl('invoice-recurrence') ? getEl('invoice-recurrence').value : 'none';
                const paymentAmount = parseFloat(getEl('invoice-payment-amount')?.value || 0);

                if (!card || !valorTotal || valorTotal <= 0) {
                    alert('Informe o cartão e um valor total válido para a fatura.');
                    return;
                }

                if (id) {
                    const index = invoices.findIndex(i => i.id === id);
                    if (index === -1) return;

                    const invoice = invoices[index];

                    if (paymentAmount > 0) {
                        const paymentResult = registerInvoicePayment(invoice, paymentAmount);
                        if (!paymentResult.ok) {
                            alert(paymentResult.message);
                            return;
                        }
                        if (getEl('invoice-payment-amount')) getEl('invoice-payment-amount').value = '';
                    }

                    const n = normalizeInvoice(invoice);
                    invoice.card = card;
                    invoice.valorTotal = Math.max(valorTotal, n.valorPago);
                    invoice.dueDate = dueDate;
                    invoice.recurrence = recurrence;
                    invoice.tipo = INVOICE_TIPO_APRAZO;
                    syncInvoiceDerivedFields(invoice);
                } else {
                    const newInvoice = createInvoice({ card, valorTotal, dueDate, recurrence, tipo: INVOICE_TIPO_APRAZO });
                    invoices.push(newInvoice);
                }

                saveData();
                renderTransactions();
                renderInvoices();
                renderSummary();
                updateCharts();
                updateGoalUI();
                closeModal('invoice-modal');
            });
        }

        // Botões de Cancelar (para limpar os IDs do form ao desistir da edição)
        if (cancelTransactionButton) {
            cancelTransactionButton.addEventListener('click', cancelTransactionEdit);
        }
        if (cancelInvoiceButton) {
            cancelInvoiceButton.addEventListener('click', cancelInvoiceEdit);
        }
    }
    
    await checkAuth();
    
    // Inicializar o monitor de atualização mensal do dashboard
    initMonthlyRefresh();
});

window.switchTab = switchTab;
window.editTransaction = editTransaction;
window.editInvoice = editInvoice;
window.deleteItem = deleteItem;
window.closeModal = closeModal;
window.openModal = openModal;