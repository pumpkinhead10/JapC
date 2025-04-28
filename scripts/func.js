const k = "katakana"
const h = "hiragana"

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
    ヒ: ["he", k],
    フ: ["fu", k],
    ヘ: ["he", k],
    ホ: ["ho", k],

    は: ["ha", h],
    ひ: ["he", h],
    ふ: ["fu", h],
    へ: ["he", h],
    ほ: ["ho", h]

}

let Rdm = () => {
    let keys = Object.keys(Alphabets)
    return keys[Math.floor(Math.random() * keys.length)]
}

export {Rdm, Alphabets}; 