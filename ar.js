const target = document.querySelector('#m1');
const status = document.querySelector('#status');
const help = document.querySelector('#help');

target.addEventListener('targetFound', () => {
  status.textContent = '✓ M1 — Γοργώ αναγνωρίστηκε';
  help.textContent = 'Μετακίνησε αργά το κινητό και παρατήρησε το ψηφιακό επίπεδο.';
});

target.addEventListener('targetLost', () => {
  status.textContent = 'Αναζήτηση marker…';
  help.textContent = 'Στρέψε την κάμερα ξανά προς το marker της Γοργούς.';
});
