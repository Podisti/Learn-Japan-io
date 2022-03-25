let count = 0;
let success = 0;

function getRandomInt(min, max): number { //generátor náhodného čísla
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Katakana
function displayKata() { // zobrazí znak
    let letters: string[] = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "キャ", "キュ", "キョ", "サ",
        "シ", "ス", "セ", "ソ", "シャ", "シュ", "ショ", "タ", "チ", "ツ", "テ", "ト", "チャ", "チュ",
        "チョ", "ナ", "ニ", "ヌ", "ネ", "ノ", "ニャ", "ニュ", "ニョ", "ハ", "ヒ", "フ", "ヘ", "ホ",
        "ヒャ", "ヒュ", "ヒョ", "マ", "ミ", "ム", "メ", "モ", "ミャ", "ミュ", "ミョ", "ヤ", "ユ", "ヨ",
        "ラ", "リ", "ル", "レ", "ロ", "リャ", "リュ", "リョ", "ワ", "ン", "ガ", "ギ", "グ", "ゲ", "ゴ",
        "ギャ", "ギュ", "ギョ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ジャ", "ジュ", "ジョ", "ダ", "ヂ", "バ",
        "ビ", "ブ", "ベ", "ボ", "ビャ", "ビュ", "ビョ", "パ", "ピ", "プ", "ペ", "ポ", "ピャ", "ピュ",
        "ピョ", "ファ", "フィ", "フェ", "フォ", "ツァ", "ティ", "トゥ", "ウェ", "ウォ"];

    var chosen = letters[getRandomInt(0, letters.length - 1)]

    document.getElementById("display").innerText = chosen;
    document.getElementById("display").style.background = "#A2BDC6";
    (<HTMLInputElement>document.getElementById("answer")).value = "";

    (<HTMLInputElement>document.getElementById("button")).setAttribute("onClick", "javascript: checkKata();");
    (<HTMLInputElement>document.getElementById("button")).innerText = "check";

    (<HTMLInputElement>document.getElementById("answer")).focus();
}


function checkKata() {

    let table: { [key: string]: string } = {
        "ア": "a", "イ": "i", "ウ": "u", "エ": "e", "オ": "o",
        "カ": "ka", "キ": "ki", "ク": "ku", "ケ": "ke", "コ": "ko", "キャ": "kya", "キュ": "kyu", "キョ": "kyo",
        "サ": "sa", "シ": "shi", "ス": "su", "セ": "se", "ソ": "so", "シャ": "sha", "シュ": "shu", "ショ": "sho",
        "タ": "ta", "チ": "chi", "ツ": "tsu", "テ": "te", "ト": "to", "チャ": "cha", "チュ": "chu", "チョ": "cho",
        "ナ": "na", "ニ": "ni", "ヌ": "nu", "ネ": "ne", "ノ": "no", "ニャ": "nya", "ニュ": "nyu", "ニョ": "nyo",
        "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho", "ヒャ": "hya", "ヒュ": "hyu", "ヒョ": "hyo",
        "マ": "ma", "ミ": "mi", "ム": "mu", "メ": "me", "モ": "mo", "ミャ": "mya", "ミュ": "myu", "ミョ": "myo",
        "ヤ": "ya", "ユ": "yu", "ヨ": "yo",
        "ラ": "ra", "リ": "ri", "ル": "ru", "レ": "re", "ロ": "ro", "リャ": "rya", "リュ": "ryu", "リョ": "ryo",
        "ワ": "wa",
        "ン": "n",
        "ガ": "ga", "ギ": "gi", "グ": "gu", "ゲ": "ge", "ゴ": "go", "ギャ": "gya", "ギュ": "gyu", "ギョ": "gyo",
        "ザ": "za", "ジ": "ji", "ズ": "zu", "ゼ": "ze", "ゾ": "zo", "ジャ": "ja", "ジュ": "ju", "ジョ": "jo",
        "ダ": "da", "ヂ": "ji", "ヅ": "zu", "デ": "de", "ド": "do",
        "バ": "ba", "ビ": "bi", "ブ": "bu", "ベ": "be", "ボ": "bo", "ビャ": "bya", "ビュ": "byu", "ビョ": "byo",
        "パ": "pa", "ピ": "pi", "プ": "pu", "ペ": "pe", "ポ": "po", "ピャ": "pya", "ピュ": "pyu", "ピョ": "pyo",
        "ファ": "fa", "フィ": "fi", "フェ": "fe", "フォ": "fo",
        "ツァ": "tsa", "ティ": "ti", "トゥ": "tu", "ウェ": "we", "ウォ": "wo"
    }

    if (((<HTMLInputElement>document.getElementById("answer")).value) == table[document.getElementById("display").innerText]) {
        (<HTMLInputElement>document.getElementById("answer")).value = "yes";
        document.getElementById("display").style.background = "#d7f3de";
        score(true);
    }
    else {
        (<HTMLInputElement>document.getElementById("answer")).value = table[document.getElementById("display").innerText];
        document.getElementById("display").style.background = "#f7dce0";
        score(false);
    }
    (<HTMLInputElement>document.getElementById("button")).setAttribute("onClick", "javascript: displayKata();");
    (<HTMLInputElement>document.getElementById("button")).innerText = "next";

}


// Hiragana
function displayHira() { // zobrazí znak
    let letters: string[] = ["あ", "い", "う", "え", "お",
        "か", "き", "く", "け", "こ", "きゃ", "きゅ", "きょ",
        "さ", "し", "す", "せ", "そ", "しゃ", "しゅ", "しょ",
        "た", "ち", "つ", "て", "と", "ちゃ", "ちゅ", "ちょ",
        "な", "に", "ぬ", "ね", "の", "にゃ", "にゅ", "にょ",
        "は", "ひ", "ふ", "へ", "ほ", "ひゃ", "ひゅ", "ひょ",
        "ま", "み", "む", "め", "も", "みゃ", "みょ", "や",
        "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "りゃ", "りゅ", "りょ",
        "わ", "を", "ん", "が", "ぎ", "ぐ", "げ",
        "ご", "ぎゃ", "ぎゅ", "ぎょ", "ざ",
        "じ", "ず", "ぜ", "ぞ", "じゃ", "じゅ", "じょ",
        "だ", "ぢ", "づ", "で", "ど",
        "ば", "び", "ぶ", "べ", "ぼ", "びゃ", "びゅ", "びょ",
        "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "ぴゃ", "ぴゅ", "ぴょ"];

    var chosen = letters[getRandomInt(0, letters.length - 1)]

    document.getElementById("display").innerText = chosen;
    document.getElementById("display").style.background = "#A2BDC6";
    (<HTMLInputElement>document.getElementById("answer")).value = "";

    (<HTMLInputElement>document.getElementById("button")).setAttribute("onClick", "javascript: checkHira();");
    (<HTMLInputElement>document.getElementById("button")).innerText = "check";

    (<HTMLInputElement>document.getElementById("answer")).focus();
}


function checkHira() {

    let table: { [key: string]: string } = {
        "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
        "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko", "きゃ": "kya", "きゅ": "kyu", "きょ": "kyo",
        "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so", "しゃ": "sha", "しゅ": "shu", "しょ": "sho",
        "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to", "ちゃ": "cha", "ちゅ": "chu", "ちょ": "cho",
        "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no", "にゃ": "nya", "にゅ": "nyu", "にょ": "nyo",
        "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho", "ひゃ": "hya", "ひゅ": "hyu", "ひょ": "hyo",
        "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo", "みゃ": "mya", "みょ": "myo", "や": "ya",
        "ゆ": "yu", "よ": "yo", "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro", "りゃ": "rya", "りゅ": "ryu", "りょ": "ryo",
        "わ": "wa", "を": "wo", "ん": "n", "が": "ga", "ぎ": "gi", "ぐ": "gu", "げ": "ge",
        "ご": "go", "ぎゃ": "gya", "ぎゅ": "gyu", "ぎょ": "gyo", "ざ": "za",
        "じ": "ji", "ず": "zu", "ぜ": "ze", "ぞ": "zo", "じゃ": "ja", "じゅ": "ju", "じょ": "jo",
        "だ": "da", "ぢ": "ji", "づ": "zu", "で": "de", "ど": "do",
        "ば": "ba", "び": "bi", "ぶ": "bu", "べ": "be", "ぼ": "bo", "びゃ": "bya", "びゅ": "byu", "びょ": "byo",
        "ぱ": "pa", "ぴ": "pi", "ぷ": "pu", "ぺ": "pe", "ぽ": "po", "ぴゃ": "pya", "ぴゅ": "pyu", "ぴょ": "pyo"
    }

    if (((<HTMLInputElement>document.getElementById("answer")).value) == table[document.getElementById("display").innerText]) {
        (<HTMLInputElement>document.getElementById("answer")).value = "yes";
        document.getElementById("display").style.background = "#d7f3de";
        score(true);
    }
    else {
        (<HTMLInputElement>document.getElementById("answer")).value = table[document.getElementById("display").innerText];
        document.getElementById("display").style.background = "#f7dce0";
        score(false);
    }
    (<HTMLInputElement>document.getElementById("button")).setAttribute("onClick", "javascript: displayHira();");
    (<HTMLInputElement>document.getElementById("button")).innerText = "next";

}


function score(correct: boolean) {
    count++;
    if (correct == true) {
        success++;
    }

    document.getElementById("score").innerText = Math.floor(success / count * 100).toString() + "%";
    document.getElementById("counter").innerText = count.toString();
}