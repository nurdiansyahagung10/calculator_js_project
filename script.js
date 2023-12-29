bhasil.addEventListener('click', function () {
    let value = type_num.textContent;

    if (bhasil.classList.contains('bhasilmean')) {
        let sigfixi = document.querySelector('.sigfixi');
        let n = document.querySelector('.n');

        if (sigfixi.textContent == 'Σ (xi or xt).fi') {

            value = library.ConvertPangkat(value);
            value = library.TambahZeroDbol(value);
            let willfinish = library.ConvertSymbolTiduX(value);
            let hasil = library.Akumulasi(willfinish);

            type_num.textContent = '';
            type_alert.innerHTML = "masukan nilai untuk n";
            sigfixi.textContent = hasil;
        }

        else if (n.textContent == 'n') {
            value = library.ConvertPangkat(value);
            value = library.TambahZeroDbol(value);
            let willfinish = library.ConvertSymbolTiduX(value);
            let hasil = library.Akumulasi(willfinish);

            n.textContent = hasil;
            hasil = eval(sigfixi.textContent / hasil);
            type_num.textContent = hasil;
            type_alert.innerHTML = "nilai mean nya adalah";


        }

    }
    else if (bhasil.classList.contains('bhasilMedianT')) {

        if (value.slice(-1) == ',') {
            value = value.slice(0, -1);
        }
        let valplit = value.split(' , ');
        let cek = '';
        valplit.forEach(data => {
            data = library.ConvertPangkat(data);
            data = library.TambahZeroDbol(data);
            data = library.ConvertSymbolTiduX(data);
            let cekwhile = false;
            let whileno = 0;

            if (data.includes('*')) {
                let cekbintang = data.split(' ');
                while (cekwhile == false) {
                    data = cekbintang[0];
                    data = `${data}`;
                    cek += data.concat(',');
                    whileno++;
                    if (whileno == cekbintang[2]) {
                        cekwhile = true;
                    }
                }
                cekwhile = 1;
            }
            else {
                data = library.Akumulasi(data);
                data = `${data}`;
                cek += data.concat(',');

            }
        });
        cek = cek.slice(0, -1);
        let cekme = cek.split(',');
        cekme.sort(function (a, b) {
            return a - b;
        });
        let ceklength = cekme.length;
        cek = cekme.join(' , ');

        if (ceklength % 2 == 0) {
            type_math.innerHTML = ` <span> Me = <span class="x">X</span></span><br>
                <div class="d-flex align-items-center gap-2">
                    Bilangan Ke
                    <div class='d-flex flex-column align-items-center gap-1'>
                        <div class=" d-flex align-items-center gap-2 border-bottom border-2">
                            X<div class='d-flex flex-column align-items-center'>
                                <span class='border-bottom border-2'><span class="n">n</span></span><span>2</span>
                            </div>
                            +<span class="fs1">(</span>
                            X<div class='d-flex flex-column align-items-center'>
                                <span class='border-bottom border-2'><span class="n">n</span></span><span>2</span>
                            </div>
                            + 1
                            <span class="fs1">)</span>
                        </div>
                        <div>
                            2
                        </div>
                    </div>
                    <span class='hasilmedian d-flex flex-nowrap align-items-center gap-2'> </span>
                </div>`;
            let x = document.querySelector('.x');
            let n = document.querySelectorAll('.n');
            let hasil = document.querySelector('.hasilmedian');
            x.innerHTML = cek;
            let meone = cekme[ceklength / 2 - 1];
            let metwo = cekme[ceklength / 2];

            n[0].innerHTML = ceklength;
            n[1].innerHTML = ceklength;
            hasil.innerHTML = `  = <div class='d-flex flex-column align-items-center gap-1'>
                        <div class=" d-flex align-items-center gap-2 border-bottom border-2">
                            <span class = 'nxone'>X</span>
                            +
                            <span class = "nxtwo">X</span>
                        </div>
                            2
                    </div>`;
            nxone = document.querySelector('.nxone');
            nxtwo = document.querySelector('.nxtwo');
            nxone.innerHTML = meone;
            nxtwo.innerHTML = metwo;
            let med = meone / metwo;
            type_alert.innerHTML = "nilai mediannya adalah ";
            type_num.innerHTML = med;

        }
        else {
            type_math.innerHTML = `<span> Me = <span class="x">X</span></span><br> <div class="d-flex align-items-center gap-2">
                        Bilangan Ke
                        <div class='d-flex flex-column align-items-center'><span
                                class='border-bottom border-2'>(<span class="n">n</span> + 1)</span><span>2</span></div>
                    </div>
                    <span class='hasilmedian d-flex flex-nowrap'>  =  </span>
                </div>`;

            let x = document.querySelector('.x');
            let n = document.querySelector('.n');
            let hasil = document.querySelector('.hasilmedian');
            x.innerHTML = cek;
            n.innerHTML = ceklength;
            let me = (ceklength + 1) / 2;
            hasil.innerHTML += me;
            type_alert.innerHTML = "nilai mediannya adalah ";
            type_num.innerHTML = cekme[me - 1];
        }


    }
    else {
        value = library.ConvertPangkat(value);
        value = library.TambahZeroDbol(value);
        let willfinish = library.ConvertSymbolTiduX(value);
        let hasil = library.Akumulasi(willfinish);


        type_math.textContent = type_num.textContent;
        type_num.textContent = hasil;

    }
});



bsim.addEventListener('click', function () {
    button_angka.forEach(element => {
        element.classList.toggle('d-none');
    });
});

symbol.addEventListener('click', function () {
    document.querySelectorAll('.s-switch').forEach(element => {
        element.classList.toggle('d-none');
    });
});

bbiasa.addEventListener('click', function () {
    type_math.innerHTML = "";
    type_alert.innerHTML = "";
    type_num.innerHTML = "";
    bhasil.classList.remove('bhasilMedianT');
    bhasil.classList.remove('bhasilmean');
    button_titik.classList.remove('d-none');
    button_koma.classList.add('d-none');
});


bmean.addEventListener('click', function () {
    type_math.innerHTML = "<span > x̅ = </span><div class='d-flex flex-column align-items-center'><span class='border-bottom border-2 sigfixi'>Σ (xi or xt).fi</span><span class='n'>n</span></div> <span class='rumusmean d-flex flex-nowrap'></span>";
    type_alert.innerHTML = "masukan nilai untuk Σ (xi or xt).fi";
    type_num.innerHTML = "";
    bhasil.classList.remove('bhasilMedianT');
    bhasil.classList.add('bhasilmean');
    button_titik.classList.remove('d-none');
    button_koma.classList.add('d-none');
});

bmedianT.addEventListener('click', function () {
    type_math.innerHTML = ` <span> Me = <span class="x">X</span></span><br>`;
    type_alert.innerHTML = "masukan nilai dengan pemisah ' , ' ";
    type_num.innerHTML = "";
    type_alerttwo.innerHTML = "rumus akan muncul ketika nilai sudah di inputkan tergantung ganjil genapnya, symbol X di sini akan menandakan frekuensi contoh tabel nilai :  15 orang memiliki nilai 6  maka anda tidak usah mengetikan 15,15,15 anda bisa mengetikan 15 X 6  ";
    toastLiveExample.classList.add('show');
    bhasil.classList.add('bhasilMedianT');
    bhasil.classList.remove('bhasilmean');
    button_titik.classList.add('d-none');
    button_koma.classList.remove('d-none');

});

bplus.addEventListener('click', function () {
    type_num.textContent = library.TombolPlus(type_num);
});

bmin.addEventListener('click', function () {
    let data = library.TombolMin(type_num);
    type_num.textContent = data;

});


bli.addEventListener('click', function () {
    type_num.textContent = library.TombolKali(type_num);

});


bgi.addEventListener('click', function () {
    type_num.textContent = library.TombolBagi(type_num);
});
button_koma.addEventListener('click', function () {
    type_num.textContent = library.TombolKoma(type_num);
});

button_titik.addEventListener('click', function () {
    let grow = type_num.textContent;
    let growt = grow.length;
    let argrow = grow.split(' ');
    if (/[1-9]/.test(argrow[argrow.length - 2]) && argrow[argrow.length - 1] == '') {
        type_num.textContent = grow + '+ 0' + '.';
    }
    else if (argrow[argrow.length - 1].includes('.')) {
    }
    else if (growt == 0) {
        type_num.textContent = grow + '0' + '.';
    }
    else if (grow.slice(-1) == '+' || grow.slice(-1) == '-' || grow.slice(-1) == ':' || grow.slice(-1) == 'X' || grow.slice(-1) == ' ') {
        type_num.textContent = grow + ' 0' + '.';
    }
    else {

        type_num.textContent = grow + '.';
    }
});

button_delete.addEventListener('click', function () {
    if (bhasil.classList.contains('bhasilmean')) {
        type_math.innerHTML = "<span > x̅ = </span><div class='d-flex flex-column align-items-center'><span class='border-bottom border-2 sigfixi'>Σ (xi or xt).fi</span><span class='n'>n</span></div> <span class='rumusmean d-flex flex-nowrap'></span>";
        type_alert.innerHTML = "masukan nilai untuk Σ (xi or xt).fi";
        type_num.innerHTML = "";
    } else if (bhasil.classList.contains('bhasilMedianT')) {
        type_math.innerHTML = ` <span> Me = <span class="x">X</span></span><br>`;
        type_alert.innerHTML = "masukan nilai dengan pemisah ' , ' ";
        type_num.innerHTML = "";
    } else {
        type_num.textContent = '';
        type_alert.textContent = '';
        type_math.textContent = '';
    }
});

button_bs.addEventListener('click', function () {
    type_num.textContent = library.TombolBackSpace(type_num);
});

button_angka.forEach(element => {
    element.addEventListener('click', function () {
        type_num.textContent = library.TombolAngka(element, type_num);
    });
});

setInterval(function () {
    blink.classList.toggle('blinked');
}, 500);