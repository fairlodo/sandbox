"use strict"
let nikon50mm14ais = {
    name: 'Nikon 50mm f/1.4 AI-S',
    photoUrl: 'https://www.kenrockwell.com/nikon/images1/50mm-f14-s/D3S_8318-0600.jpg',
    focus: 50,
    aperture: {
        max: 1.4,
        min: 32,
    },
    vendor: 'Nikon',
    manufactureDate: 1972,
    sayClick() {
        console.log(`I am ${this.name} and i CLICK!`);
        },
}

let tamron50mm14m = _.cloneDeep(nikon50mm14ais);
tamron50mm14m.name = 'Tamron 50mm 1.4 Manual Focus';
tamron50mm14m.photoUrl = 'https://www.bhphotovideo.com/images/images500x500/canon_normal_50mm_f_1_8_sc_259999.jpg';
tamron50mm14m.aperture.min = 16;
tamron50mm14m.vendor = 'Tamron';
tamron50mm14m.manufactureDate = 2016;

printLensParams(nikon50mm14ais);
printLensParams(tamron50mm14m);
tamron50mm14m.sayClick();
console.log(this);

/// functions live here
function printLensParams(lens) {
    for (let key in lens) {
        if(typeof lens[key] === 'function') {
            continue;
        }

        if (typeof lens[key] === 'object') {
            for (let subKey in lens[key]) {
                console.log(`${key} ${subKey} : ${lens[key][subKey]}`);
            }
            continue;
        }
        console.log(`${key} : ${lens[key]}`);
    }
    console.log('***');
}
