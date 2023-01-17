console.clear();
/*
IF (loginis palyginimas)

Palyginimo operatoriai:
- visi: >, <, ==, !=, >=, <=, ===, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, !=

Loginiai operatoriai:
- && (AND)
- || (OR)

Sablonai:
if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} else {}
if () {} else if {} ... else if () {}
if () {} else if {} ... else if () {} else {}

*/

if (4 < 22) {
    console.log('tiesa');
} else {
    console.log('melas');
}

if (7 == 7) {
    console.log('lygu');
} else {
    console.log('nelygu');
}

if (7 != 7) {
    console.log('nelygu');
} else {
    console.log('lygu');
}

if (88 >= 88) {
    console.log('daugiau arba lygu');
} else {
    console.log('maziau');
}

if (88 <= 7) {
    console.log('maziau arba lygu');
} else {
    console.log('daugiau');
}

console.log('---------');

if ('z' > 'A') {
    console.log('daugiau');
} else {
    console.log('maziau arba lygu');
}

if (7 === '7') {
    console.log('grieztai lygu');
} else {
    console.log('nelygu');
}

console.log('----------------');

const diena = 8;

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) {
    console.log('antradienis');
} else if (diena === 3) {
    console.log('treciadienis');
} else if (diena === 4) {
    console.log('ketvirtadienis');
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('nezinau tokios dienos...');
}

// CODE NESTING - nestinimas

const day = 8;

if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis');
    } else {
        if (day === 3) {
            console.log('treciadienis');
        } else {
            if (day === 4) {
                console.log('ketvirtadienis');
            } else {
                if (day === 5) {
                    console.log('penktadienis');
                } else {
                    if (day === 6) {
                        console.log('sestadienis');
                    } else {
                        if (day === 7) {
                            console.log('sekmadienis');
                        } else {
                            console.log('tokios dienos savaiteje nera...');
                        }
                    }
                }
            }
        }
    }
}

console.log('--------------');

const nuoKadaSilta = 15;
const temperatura = 30;
const arLyja = true;

if (temperatura < nuoKadaSilta) {
    if (arLyja) {
        console.log('Nera silta ir lyja: reikia striukes ir skecio');
    } else {
        console.log('Nera silta ir nelyja: reikia striukes');
    }
} else {
    if (arLyja) {
        console.log('Silta ir lyja: varom be maike');
    } else {
        console.log('Silta ir nelyja: varom su maike');
    }
}

if (temperatura >= nuoKadaSilta && !arLyja) {
    console.log('Silta ir nelyja: varom su maike');
} else if (temperatura >= nuoKadaSilta && arLyja) {
    console.log('Silta ir lyja: varom be maike');
} else if (temperatura < nuoKadaSilta && arLyja) {
    console.log('Nera silta ir lyja: reikia striukes ir skecio');
} else {
    console.log('Nera silta ir nelyja: reikia striukes');
}