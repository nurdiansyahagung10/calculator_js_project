window.library = (function () {
    // mengconvert symbol : dan X menjadi / dan ** 
    function ConvertSymbolTiduX(grow) {
        if (grow.includes(':') || grow.includes('X')) {
            grow = grow.replace(/:/g, '/');
            grow = grow.replace(/X/g, '*');

        }
        return (grow);

    }

    function CekSymbolarimatik(grow) {
        if (grow.includes('+') || grow.includes('-') || grow.includes(':') || grow.includes('X')) {
            return true;
        }
    }

    function CekSymbolTiduX(grow) {
        if (grow.includes(':') || grow.includes('X')) {
            return true;
        }
    }

    // mengconver symbol bilangan berpangkat menjadi rumus js berpangkat
    function ConvertPangkat(data) {
        let array = data.split(' ');
        let hasil = '';

        array.forEach(grow => {

            while (grow.includes('⁰') || grow.includes('¹') || grow.includes('²') || grow.includes('³') || grow.includes('⁴') || grow.includes('⁵') || grow.includes('⁶') || grow.includes('⁷') || grow.includes('⁸') || grow.includes('⁹')) {

                grow = grow.replace(/(\d+)\⁰/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '0';
                    };

                    if (grow.includes('**')) {
                        return p1 + sf;
                    } else {
                        return p1 + '**' + sf;
                    }
                });

                grow = grow.replace(/(\d+)\¹/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '1';
                    };

                    if (grow.includes('**')) {
                        return p1 + sf;
                    } else {
                        return p1 + '**' + sf;

                    }
                });

                grow = grow.replace(/(\d+)\²/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '2';
                    };

                    if (grow.includes('**')) {

                        return p1 + sf;
                    } else {

                        return p1 + '**' + sf;

                    }

                });

                grow = grow.replace(/(\d+)\³/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '3';
                    };

                    if (grow.includes('**')) {
                        return p1 + sf;
                    } else {
                        return p1 + '**' + sf;

                    }
                });

                grow = grow.replace(/(\d+)\⁴/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '4';
                    };

                    if (grow.includes('**')) {
                        return p1 + sf;
                    } else {
                        return p1 + '**' + sf;

                    }
                });


                grow = grow.replace(/(\d+)\⁵/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '5';
                    };

                    if (grow.includes('**')) {
                        return p1 + sf;
                    } else {
                        return p1 + '**' + sf;

                    }
                });


                grow = grow.replace(/(\d+)\⁶/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '6';
                    };

                    if (grow.includes('**')) {
                        return p1 + sf;
                    } else {
                        return p1 + '**' + sf;

                    }
                });


                grow = grow.replace(/(\d+)\⁷/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '7';
                    };

                    if (grow.includes('**')) {
                        return p1 + sf;
                    } else {
                        return p1 + '**' + sf;

                    }
                });


                grow = grow.replace(/(\d+)\⁸/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '8';
                    };

                    if (grow.includes('**')) {
                        return p1 + sf;
                    } else {
                        return p1 + '**' + sf;

                    }
                });


                grow = grow.replace(/(\d+)\⁹/g, function (match, p1) {
                    let sf = '';
                    for (let i = 0; i < match.slice(p1.length).length; i++) {
                        sf += '9';
                    };

                    if (grow.includes('**')) {
                        return p1 + sf;
                    } else {
                        return p1 + '**' + sf;

                    }
                });
            }

            hasil += grow.concat(' ');

            console.log(hasil)


        });
        return (hasil);


    }

    function CekPangkat(grow) {
        if (grow.includes('⁰') || grow.includes('¹') || grow.includes('²') || grow.includes('³') || grow.includes('⁴') || grow.includes('⁵') || grow.includes('⁶') || grow.includes('⁷') || grow.includes('⁸') || grow.includes('⁹')) {
            return true;
        }
    }

    function TambahZeroDbol(grow) {
        grow = grow.trim();
        if (grow.slice(-1) == '+' || grow.slice(-1) == '-' || grow.slice(-1) == ':' || grow.slice(-1) == 'X' || grow.slice(-1) == '/' || grow.slice(-1) == '*') {
            grow = grow += ' 0';
        }
        return (grow);


    }

    function CekDbol(grow) {
        if (grow.slice(-1) == '+' || grow.slice(-1) == '-' || grow.slice(-1) == ':' || grow.slice(-1) == '*' || grow.slice(-1) == '/' || grow.slice(-1) == '*') {
            return true;
        }
    }

    function Akumulasi(grow) {
        return eval(grow);
    }

    function TombolPlus(grow) {
        grow = grow.textContent;
        let growt = grow.length;

        if (grow.slice(-3) == '- -') {
            return grow.slice(0, -3) + '+';
        }
        else if (grow.slice(-1) == '+') {
            return grow;
        }
        else if (grow.slice(-1) == ' ' && /[1-9]/.test(grow.slice(-2))) {
            return grow + '+';
        }
        else if (grow.slice(-1) == '-' || grow.slice(-1) == ':' || grow.slice(-1) == 'X') {
            return grow.slice(0, -1) + '+';
        }
        else if (grow.slice(-2) == '+ ' || grow.slice(-2) == '- ' || grow.slice(-2) == ': ' || grow.slice(-2) == 'X ') {
            return grow.slice(0, -2) + '+';
        }
        else if (grow.slice(-1) == ',' || grow.slice(-1) == '.') {
            return grow + ' 0' + ' +';
        }
        else if (growt == 0) {
            return '0' + ' +';
        }
        else {
            return grow + ' +';
        }
    }


    function TombolKali(grow) {
        grow = grow.textContent;
        let growt = grow.length;

        if (grow.slice(-3) == '- -') {
            return grow.slice(0, -3) + 'X';
        }
        else if (grow.slice(-1) == 'X') {
            return grow;
        }
        else if (grow.slice(-1) == ' ' && /[1-9]/.test(grow.slice(-2))) {
            return grow + 'X';
        }
        else if (grow.slice(-1) == '-' || grow.slice(-1) == ':' || grow.slice(-1) == '+') {
            return grow.slice(0, -1) + 'X';
        }
        else if (grow.slice(-2) == '+ ' || grow.slice(-2) == '- ' || grow.slice(-2) == ': ' || grow.slice(-2) == 'X ') {
            return grow.slice(0, -2) + 'X';
        }
        else if (grow.slice(-1) == ',' || grow.slice(-1) == '.') {
            return grow + ' 0' + ' X';
        }
        else if (growt == 0) {
            return '0' + ' X';
        }
        else {
            return grow + ' X';
        }

    }

    function TombolBagi(grow) {
        grow = grow.textContent;
        let growt = grow.length;

        if (grow.slice(-3) == '- -') {
            return grow.slice(0, -3) + ':';
        }
        else if (grow.slice(-1) == ':') {
            return grow;
        }
        else if (grow.slice(-1) == ' ' && /[1-9]/.test(grow.slice(-2))) {
            return grow + ':';
        }
        else if (grow.slice(-1) == '-' || grow.slice(-1) == 'X' || grow.slice(-1) == '+') {
            return grow.slice(0, -1) + ':';
        }
        else if (grow.slice(-2) == '+ ' || grow.slice(-2) == '- ' || grow.slice(-2) == ': ' || grow.slice(-2) == 'X ') {
            return grow.slice(0, -2) + ':';
        }
        else if (grow.slice(-1) == ',' || grow.slice(-1) == '.') {
            return grow + ' 0' + ' :';
        }
        else if (growt == 0) {
            return '0' + ' :';
        }
        else {
            return grow + ' :';
        }
    }

    function TombolKoma(grow) {
        grow = grow.textContent;
        let growt = grow.length;
         
        if (grow.slice(-3) == '- -') {
            return grow.slice(0, -3) + ',';
        }
        else if (grow.slice(-1) == ',') {
            return grow;
        }
        else if (grow.slice(-1) == ' ' && /[1-9]/.test(grow.slice(-2))) {
            return grow + ',';
        }
        else if (grow.slice(-1) == '-' || grow.slice(-1) == 'X' || grow.slice(-1) == '+' || grow.slice(-1) == ':') {
            return grow.slice(0, -1) + ',';
        }
        else if (grow.slice(-2) == '+ ' || grow.slice(-2) == '- ' || grow.slice(-2) == ': ' || grow.slice(-2) == 'X ') {
            return grow.slice(0, -2) + ',';
        }
        else if (grow.slice(-1) == ',' || grow.slice(-1) == '.') {
            return grow + ' 0' + ' ,';
        }
        else if (growt == 0) {
            return '0' + ' ,';
        }
        else {
            return grow + ' ,';
        }
    }

    function TombolMin(grow) {
        grow = grow.textContent;
        let argrow = grow.split(' ')
        if (grow.length == 0) {
            return '0' + ' -';
        } else if (grow.slice(-1) == ' ' && /[1-9]/.test(grow.slice(-2))) {
            return grow + '-';
        }
        else if ((argrow[argrow.length - 1].includes('-') && argrow[argrow.length - 2].includes('-')) || (argrow[argrow.length - 1] == '-' && argrow[argrow.length - 3] == '-' && argrow[argrow.length - 2] == '' && grow.slice(-1) == '-')) {
            return grow;
        } else if (grow.slice(-1) == '+' || grow.slice(-1) == ':' || grow.slice(-1) == 'X') {
            return grow.slice(0, -1) + '-';
        } else if (grow.slice(-2) == '- ' || grow.slice(-2) == ': ' || grow.slice(-2) == 'X ') {
            return grow.slice(0, -2) + '-';
        }
        else if (grow.slice(-1) == ',' || grow.slice(-1) == '.') {
            return grow + ' 0' + ' -';
        }
        else {
            return grow + ' -';
        }
    }

    function TombolBackSpace(grow) {
        grow = grow.textContent;
        return grow.slice(0, -1);
    }

    function TombolAngka(element, grow) {
        grow = grow.textContent;
        const value_button = element.textContent;
        if (grow.length >= 50) {
            return grow;
        } else {

            if (value_button == '⁰' || value_button == '¹' || value_button == '²' || value_button == '³' || value_button == '⁴' || value_button == '⁵' || value_button == '⁶' || value_button == '⁷' || value_button == '⁸' || value_button == '⁹') {
                if (grow.slice(-1) == '+' || grow.slice(-1) == ',' || grow.slice(-1) == '-' || grow.slice(-1) == ':' || grow.slice(-1) == 'X' || grow == '') {
                    return grow += ' 0' + value_button;
                } else if (grow.slice(-1) == ' ' && /[1-9]/.test(grow.slice(-2))) {
                    return grow + '+ 0' + value_button;
                }
                else {
                    return grow += value_button;
                }
            } else if (grow.slice(-1) == '+' || grow.slice(-1) == '-' || grow.slice(-1) == ':' || grow.slice(-1) == 'X' || grow.slice(-1) == ',') {
                return grow += ' ' + value_button;
            }
            else if (grow.slice(-1) == ' ' && /[1-9]/.test(grow.slice(-2))) {
                return grow + '+ ' + value_button;
            } else if (grow.slice(-1) == '⁰' || grow.slice(-1) == '¹' || grow.slice(-1) == '²' || grow.slice(-1) == '³' || grow.slice(-1) == '⁴' || grow.slice(-1) == '⁵' || grow.slice(-1) == '⁶' || grow.slice(-1) == '⁷' || grow.slice(-1) == '⁸' || grow.slice(-1) == '⁹') {
                return grow += ' X ' + value_button;

            }
            else {
                return grow += value_button;
            }
        }
    }



    return {
        TombolPlus: TombolPlus,
        TombolKoma: TombolKoma,
        TombolAngka: TombolAngka,
        TombolBackSpace: TombolBackSpace,
        TombolBagi: TombolBagi,
        TombolKali: TombolKali,
        TombolMin: TombolMin,
        Akumulasi: Akumulasi,
        TambahZeroDbol: TambahZeroDbol,
        CekDbol: CekDbol,
        CekSymbolarimatik: CekSymbolarimatik,
        ConvertSymbolTiduX: ConvertSymbolTiduX,
        CekSymbolTiduX: CekSymbolTiduX,
        ConvertPangkat: ConvertPangkat,
        CekPangkat: CekPangkat
    }
})();

