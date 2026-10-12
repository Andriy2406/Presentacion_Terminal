const S = [...document.querySelectorAll('.s')]; let i = 0;
function show() {
    S.forEach((s, k) => s.classList.toggle('on', k == i));
    p.style.width = ((i + 1) / S.length * 100) + '%'; n.textContent = (i + 1) + ' / ' + S.length
}
function go(d) { i = Math.max(0, Math.min(S.length - 1, i + d)); show() }
document.addEventListener('keydown', e => { if (['ArrowRight', 'PageDown', ' '].includes(e.key)) go(1); if (['ArrowLeft', 'PageUp'].includes(e.key)) go(-1) });
show();
