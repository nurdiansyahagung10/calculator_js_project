

setInterval(function () {
    let data = document.getElementById('data').value;
    let show = '' + data;
    show = library.ConvertSymbolTiduX(show);
    show = library.TambahZeroDbol(show);
    show = library.ConvertPangkat(show);
    show = library.Akumulasi(show);
    document.getElementById('show').textContent = show;
}, 500);
