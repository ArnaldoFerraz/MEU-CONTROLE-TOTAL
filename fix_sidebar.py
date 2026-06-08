from pathlib import Path

path = Path('app.html')
text = path.read_text(encoding='utf-8')
index = text.find('MEU CONTROLE TOTAL')
print('index', index)
start = text.rfind('<div class="sidebar-brand">', 0, index)
print('start', start)
end = text.find('</aside>', index)
print('end', end)
print('text around start:', repr(text[start:start+400]))
print('text around end:', repr(text[end-40:end+20]))
print('first aside snippet:', repr(text[text.find('<aside'):text.find('<aside')+500]))
