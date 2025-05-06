const k = "katakana"
const h = "hiragana"
const b = "both hiragana/katakana"

const Alphabets = {
    サ: ["sa", k],
    シ: ["shi", k],
    ス: ["su", k],
    セ: ["se", k],
    ソ: ["so", k],

    タ: ["ta", k],
    チ: ["chi", k],
    ツ: ["tsu", k],
    テ: ["te", k],
    ト: ["to", k],

    た: ["ta", h],
    ち: ["chi", h],
    つ: ["tsu", h],
    て: ["te", h],
    と: ["to", h],

    ナ: ["na", k],
    ニ: ["ni", k],
    ヌ: ["nu", k],
    ネ: ["ne", k],
    ノ: ["no", k],

    な: ["na", h],
    に: ["ni", h],
    ぬ: ["nu", h],
    ね: ["ne", h],
    の: ["no", h],

    ハ: ["ha", k],
    ヒ: ["hi", k],
    フ: ["fu", k],
    ヘ: ["he", b],
    ホ: ["ho", k],

    は: ["ha", h],
    ひ: ["hi", h],
    ふ: ["fu", h],
    へ: ["he", b],
    ほ: ["ho", h],

    ま: ["ma", h],
    み: ["mi", h],
    む: ["mu", h],
    め: ["me", h],
    も: ["mo", h],

    マ: ["ma", k],
    ミ: ["mi", k],
    ム: ["mu", k],
    メ: ["me", k],
    モ: ["mo", k],

    ら: ["ra", h],
    り: ["ri", h],
    る: ["ru", h],
    れ: ["re", h],
    ろ: ["ro", h],

    ラ: ["ra", k],
    リ: ["ri", k],
    ル: ["ru", k],
    レ: ["re", k],
    ロ: ["ro", k]
}

let Rdm = () => {
    let keys = Object.keys(Alphabets)
    return keys[Math.floor(Math.random() * keys.length)]
}

export {Rdm, Alphabets}; 