from pathlib import Path
path = Path('app.html')
text = path.read_text(encoding='utf-8')
old = '<aside class="sidebar" id="sidebar" aria-label="Menu lateral">'
start = text.find(old)
if start < 0:
    raise SystemExit('START NOT FOUND')
end = text.find('<div id="app-container" class="container main-panel">', start)
if end < 0:
    raise SystemExit('END NOT FOUND')
end += len('<div id="app-container" class="container main-panel">')
replacement = '''
        <header class="topbar">
            <div class="topbar-left">
                <a href="#dashboard" class="brand topbar-brand" aria-label="MEU CONTROLE TOTAL">
                    <span class="brand-mark">
                        <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
                            <defs>
                                <linearGradient id="appLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#2563eb" />
                                    <stop offset="100%" stop-color="#22c55e" />
                                </linearGradient>
                            </defs>
                            <rect x="10" y="18" width="12" height="28" rx="6" fill="url(#appLogoGradient)" />
                            <rect x="28" y="14" width="12" height="32" rx="6" fill="url(#appLogoGradient)" opacity="0.85" />
                            <rect x="46" y="10" width="12" height="36" rx="6" fill="url(#appLogoGradient)" opacity="0.65" />
                        </svg>
                    </span>
                    <span class="brand-copy">
                        <strong>MEU CONTROLE TOTAL</strong>
                        <span>ERP pessoal completo</span>
                    </span>
                </a>
                <nav class="topnav" aria-label="Navegação principal">
                    <button class="topnav-item active" data-tab="dashboard" type="button">🏠 Dashboard</button>
                    <button class="topnav-item" data-tab="board" type="button">💰 Finanças</button>
                    <button class="topnav-item" data-tab="vehicles" type="button">🚗 Veículos</button>
                    <button class="topnav-item" data-tab="deliveries" type="button">💼 Trabalho</button>
                    <button class="topnav-item" data-tab="fuel" type="button">⛽ Combustível</button>
                    <button class="topnav-item" data-tab="maintenance" type="button">🔧 Manutenção</button>
                    <button class="topnav-item" data-tab="compras" type="button">🛒 Compras</button>
                    <button class="topnav-item" data-tab="contas" type="button">🏠 Contas</button>
                    <button class="topnav-item" data-tab="metas" type="button">🎯 Metas</button>
                    <button class="topnav-item" data-tab="settings" type="button">⚙️ Configurações</button>
                </nav>
            </div>
            <div class="topbar-right">
                <div class="month-filter">
                    <label for="timeline-month">Mês</label>
                    <select id="timeline-month"></select>
                </div>
                <button id="theme-toggle" class="topbar-action icon-button" type="button" title="Alternar tema">🌙</button>
                <button id="logout-button" class="topbar-action secondary" type="button">Sair</button>
            </div>
        </header>
        <main id="app-container" class="container main-panel">'''
new_text = text[:start] + replacement + text[end:]
path.write_text(new_text, encoding='utf-8')
print('REPLACED')
