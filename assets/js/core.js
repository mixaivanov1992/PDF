const nodes = {
    container: document.querySelector('.container'),
    print: document.querySelector('.print'),
};

nodes.print.addEventListener('click', () => {
    getPDF(nodes.container);
});

function getPDF(node) {
    html2canvas(node).then(canvas => {
        doPDF(canvas);
    });
}
function doPDF(canvas) {
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF({
        format: 'a4',
        orientation: 'landscape'
    });
    doc.addImage(canvas.toDataURL(), 'PNG', 0, 0);
    doc.save('test.pdf');
}