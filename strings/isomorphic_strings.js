// Dva stringa su isomorfna ako svaki karakter iz prvog stringa može biti preslikan u tačno jedan karakter iz drugog stringa,
// pri čemu se redosled karaktera mora očuvati.

// Ulaz:
// s = "egg" t = "add"

// Dva stringa s i t, iste dužine.
// Izlaz: true (jer "e" → "a", "g" → "d")

// Vrati true ako su stringovi isomorfni, inače false.

function IsomorphicStrings(s, t) {
    if (s.length !== t.length) return false;

    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        if (sMap.has(charS) && sMap.get(charS) !== charT) return false;
        if (tMap.has(charT) && tMap.get(charT) !== charS) return false;

        sMap.set(charS, charT);
        tMap.set(charT, charS);
    }

    return true;
}

let s = "egg";
let t = "add";
console.log(IsomorphicStrings(s, t));
