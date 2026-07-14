"""Repair mojibake and lost Turkish letters in the site's public text files.

Run without --write to preview inferred replacements.  The one-off dependency
folder is intentionally kept under the system temp directory, outside the site.
"""

from __future__ import annotations

import argparse
import itertools
import os
from pathlib import Path
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="backslashreplace")


DEPS = Path(os.environ.get("TEMP", ".")) / "codex-wordfreq"
sys.path.insert(0, str(DEPS))

import regex  # type: ignore  # noqa: E402
from ftfy import fix_text  # type: ignore  # noqa: E402
from wordfreq import iter_wordlist, zipf_frequency  # type: ignore  # noqa: E402


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_SUFFIXES = {".html", ".js", ".json", ".xml", ".webmanifest", ".css"}
UNKNOWN = {"\ufffd", "\u2014"}
LOWER_CHOICES = "çğıöşü"
UPPER_CHOICES = "ÇĞİÖŞÜ"


# Damage introduced by an earlier over-broad replacement script.  These are
# deliberately exact fragments so legitimate uses of “güçlü” remain untouched.
DIRECT_REPLACEMENTS = {
    "accent-güçlüow": "accent-glow",
    "hero-güçlüyph": "hero-glyph",
    "var(--güçlüass-border)": "var(--glass-border)",
    "sagüçlüamak": "sağlamak",
    "sagüçlüar": "sağlar",
    "sagüçlüik": "sağlık",
    "Sagüçlüik": "Sağlık",
    "bagüçlüantili": "bağlantılı",
    "bagüçlüantilidir": "bağlantılıdır",
    "Bagüçlüantisi": "Bağlantısı",
    "bagüçlüar": "bağlar",
    "dagüçlüar": "dağlar",
    "Ogüçlüak": "Oğlak",
    "ogüçlüak": "oğlak",
    "egüçlüenceli": "eğlenceli",
    "gözellik": "güzellik",
    "gözellikleri": "güzellikleri",
    "gözelligi": "güzelliği",
    "gözellige": "güzelliğe",
    "gözellestiren": "güzelleştiren",
    "yüsek": "yüksek",
    "Yüsek": "Yüksek",
    # Low-frequency words, proper names, apostrophes and contextual forms.
    "Aga—kakan": "Ağaçkakan",
    "Al—akgünüll—l—g�": "Alçakgönüllülüğü",
    "al—akgünüll—l—g�": "alçakgönüllülüğü",
    "Beyonc�": "Beyoncé",
    "Bilin—disini": "Bilinçdışını",
    "bilin—disi": "bilinçdışı",
    "B—rokratlik": "Bürokratlık",
    "C—mertligi": "Cömertliği",
    "c—mertlige": "cömertliğe",
    "c—mertligi": "cömertliği",
    "c—mertligiyle": "cömertliğiyle",
    "c—merttirler": "cömerttirler",
    "Denet—ilik": "Denetçilik",
    "D—rt—sel": "Dürtüsel",
    "d—rt—sel": "dürtüsel",
    "d—rt—sellik": "dürtüsellik",
    "d—rt—s—n�": "dürtüsünü",
    "d—rt—s�": "dürtüsü",
    "Europa—yi": "Europa’yı",
    "Fl—rt—zl—k": "Flörtözlük",
    "fl—rt—zl—k": "flörtözlük",
    "Günes—ten": "Güneş’ten",
    "G—kbilimci": "Gökbilimci",
    "Herakles—in": "Herakles’in",
    "I—sel": "İçsel",
    "I�": "İş",
    "J—piter—den": "Jüpiter’den",
    "K—bizm": "Kübizm",
    "K—klenirim": "Köklenirim",
    "K—t—phanecilik": "Kütüphanecilik",
    "Maat—in": "Maat’ın",
    "Mars—tan": "Mars’tan",
    "Merk—r—den": "Merkür’den",
    "M—r": "Mür",
    "Olimpos—a": "Olimpos’a",
    "Orion—u": "Orion’u",
    "Pa—uli": "Paçuli",
    "Pl—ton—un": "Plüton’un",
    "Sat—rn—den": "Satürn’den",
    "S—rrealizm": "Sürrealizm",
    "Ven—s—ten": "Venüs’ten",
    "Ven—s��n": "Venüs’ün",
    "Y—netirim": "Yönetirim",
    "Zeus—un": "Zeus’un",
    "Ay—dan": "Ay’dan",
    "Dal�": "Dalí",
    "döneme—ler": "dönemeçler",
    "a—ilimlara": "açılımlara",
    "baslangi—lara": "başlangıçlara",
    "bur—larindan": "burçlarından",
    "bur—larindandir": "burçlarındandır",
    "bur—larinin": "burçlarının",
    "bütünl—kle": "bütünlükle",
    "b—lgenize": "bölgenize",
    "b—l—nm—st—r": "bölünmüştür",
    "b—r—nmesine": "bürünmesine",
    "b—t—eleme": "bütçeleme",
    "b—t—eler": "bütçeler",
    "d—k—lmeyen": "dökülmeyen",
    "d—n—st—Günde": "dönüştüğünde",
    "d—n—st—rmekte": "dönüştürmekte",
    "d—n—st—rmesi": "dönüştürmesi",
    "d—n—st—r—lebilecek": "dönüştürülebilecek",
    "d—n—s—r—m": "dönüşürüm",
    "d—sk—nd—rler": "düşkündürler",
    "d—sk—nl—kleri": "düşkünlükleri",
    "d—sk—nl—k": "düşkünlük",
    "d—s—nebilme": "düşünebilme",
    "esitlik—ilikle": "eşitlikçilikle",
    "gen—lesir": "gençleşir",
    "ger—ek—iligini": "gerçekçiliğini",
    "ge—memek": "geçmemek",
    "güçl—ydış": "güçlüydü",
    "g—klerdeki": "göklerdeki",
    "g—m—si": "gümüşü",
    "g—rebildigi": "görebildiği",
    "g—r—nmekten": "görünmekten",
    "g—venceler": "güvenceler",
    "g—vendiginde": "güvendiğinde",
    "g—zellestiren": "güzelleştiren",
    "h—k—mdarligi": "hükümdarlığı",
    "ill—zyonlari": "illüzyonları",
    "inat—iligi": "inatçılığı",
    "inat—ilik": "inatçılık",
    "içg—d—s—d—r": "içgüdüsüdür",
    "içg—d—s—n�": "içgüdüsünü",
    "ka—inir": "kaçınır",
    "ka—irmasina": "kaçırmasına",
    "ka—irmayan": "kaçırmayan",
    "ka—mamak": "kaçmamak",
    "kiska—lariyla": "kıskaçlarıyla",
    "kontrolc—l—k": "kontrolcülük",
    "kontrolc�": "kontrolcü",
    "köl�": "köklü",
    "k—lt—rlerle": "kültürlerle",
    "k—rs—lerde": "kürsülerde",
    "k—s—p": "küsüp",
    "manip—latif": "manipülatif",
    "mesguld—r": "meşguldür",
    "m—kemmeliyet—i": "mükemmeliyetçi",
    "m—kemmeliyet—iligiyle": "mükemmeliyetçiliğiyle",
    "m—kemmeliyet—ilik": "mükemmeliyetçilik",
    "m—kemmellestirmeye": "mükemmelleştirmeye",
    "n—ktedan": "nüktedan",
    "parf—mler": "parfümler",
    "r—yalarinizi": "rüyalarınızı",
    "si—ramalar": "sıçramalar",
    "söz—len": "süzülen",
    "s—pheciligi": "şüpheciliği",
    "s—phecilik": "şüphecilik",
    "s—rd—r—c�": "sürdürücü",
    "s—zgecinden": "süzgecinden",
    "s—zl—l—k": "sözlülük",
    "t—ketmeli": "tüketmeli",
    "u—mustur": "uçmuştur",
    "yenilik—iligiyle": "yenilikçiliğiyle",
    "yozlastik—a": "yozlaştıkça",
    "y—klenmeyi": "yüklenmeyi",
    "y—neldiginde": "yöneldiğinde",
    "y—nelmek": "yönelmek",
    "y—nelmeyi": "yönelmeyi",
    "y—netecegi": "yöneteceği",
    "y—netmekte": "yönetmekte",
    "y—netmelidir": "yönetmelidir",
    "y—nl—l—k": "yönlülük",
    "y—r—tebilme": "yürütebilme",
    "y—zebilecek": "yüzebilecek",
    "y—zeysellik": "yüzeysellik",
    "öncü—s�": "öncüsü",
    "üzGünl—g�": "özgünlüğü",
    "üzg—rce": "özgürce",
    "üzg—rlesmek": "özgürleşmek",
    "üzg—rlesmeyi": "özgürleşmeyi",
    "üzg—rlestirme": "özgürleştirme",
    "üzg—rl—Güne": "özgürlüğüne",
    "üzg—rl—Gün": "özgürlüğün",
    "üzg—rl—g—yle": "özgürlüğüyle",
    "üzg—rl—g�": "özgürlüğü",
    "üzg—rl—k��": "özgürlükçü",
    "üzg—rl—k": "özgürlük",
    "üzg—r": "özgür",
    "üzg—vensizlik": "özgüvensizlik",
    "üzg—venin": "özgüvenin",
    "üzg—veni": "özgüveni",
    "üzg—ven": "özgüven",
    "�Baslatirim": "“Başlatırım",
    "�Ben": "“Ben",
    "�Dengelerim": "“Dengelerim",
    "�D—n—s—r—m": "“Dönüşürüm",
    "�D—s—n—r—m": "“Düşünürüm",
    "�Incelerim": "“İncelerim",
    "�Insa": "“İnşa",
    "�Kesfederim": "“Keşfederim",
    "�Sahip": "“Sahip",
    "�Yaratirim": "“Yaratırım",
    "�Yenilerim": "“Yenilerim",
    "�arpintilari": "çarpıntıları",
    "�izememekten": "çizememekten",
    "�izememek": "çizememek",
    "�izemeyen": "çizemeyen",
    "�ld—rebilecegini": "öldürebileceğini",
    "�l—ml—l—g�": "ölümlülüğü",
    "�l—ms—zl—günü": "ölümsüzlüğünü",
    "�ölçülü": "ölçülü",
    "��zmede": "çözmede",
    "��zmekte": "çözmekte",
    "��z—l—r—m": "çözülürüm",
    # Correct a few frequency-list ambiguities.
    "mizah—i": "mizahçı",
    "tefekk—r�": "tefekkürü",
    "fl—rtt—r": "flörttür",
    "�l—ml�": "ölümlü",
    "ömür—n�": "ömrünü",
    # Residue from the same earlier script and punctuation/symbol losses.
    "Psikologüçlüuk": "Psikologluk",
    "güçlüobal": "Global",
    "Sagüçlüarim": "Sağlarım",
    "sagüçlüamligi": "sağlamlığı",
    "sagüçlüamasi": "sağlaması",
    "sagüçlüayarak": "sağlayarak",
    "sagüçlüayan": "sağlayan",
    "sagüçlüama": "sağlama",
    "sagüçlüam": "sağlam",
    "Sagüçlüigi": "Sağlığı",
    "sagüçlüigina": "sağlığına",
    "sagüçlüigini": "sağlığını",
    "sagüçlüigi": "sağlığı",
    "egüçlüencenin": "eğlencenin",
    "egüçlüence": "eğlence",
    "egüçlüenirler": "eğlenirler",
    "bagüçlüandiginda": "bağlandığında",
    "bagüçlüamislardir": "bağlamışlardır",
    "bagüçlüanma": "bağlanma",
    "bagüçlüanir": "bağlanır",
    "bagüçlüa bağlanır": "bağla bağlanır",
    "ogüçlüu": "oğlu",
    "çağüçlüardan": "çağlardan",
    "dagüçlüara": "dağlara",
    "kölenmeyi": "köklenmeyi",
    "Venüs'ön": "Venüs'ün",
    "Uranüs'ön": "Uranüs'ün",
    "İş Mimarlik": "İç Mimarlık",
    "ünlemek": "önlemek",
    "gümüşü leylak": "gümüş leylak",
    "empati güçlü yüksek": "empati gücü yüksek",
    "hayal güçlü": "hayal gücü",
    "<h4>güçlü Yönler": "<h4>Güçlü Yönler",
    "Stresli, üzGün": "Stresli, üzgün",
    "içsel güçlülüğü": "içsel gücünü",
    "uyum sağlama güçlü": "uyum sağlama gücü",
    "bireysel parlama güçlü": "bireysel parlama gücü",
    "toplumu gözlemleme güçlü": "toplumu gözlemleme gücü",
    "organize etme güçlü": "organize etme gücü",
    "etkileme güçlü": "etkileme gücü",
    "Parayi güçlü,": "Parayı gücü,",
    "ham güçlü": "ham gücü",
    "yasam güçlü": "yaşam gücü",
    "duygusal güçlü": "duygusal gücü",
    "(simya) güçlü": "(simya) gücü",
    "odaklanma güçlü": "odaklanma gücü",
    "kalabilme güçlü": "kalabilme gücü",
    "elde etme güçlü": "elde etme gücü",
    "yenilenme güçlü": "yenilenme gücü",
    "güçlü manipülatif": "gücünü manipülatif",
    "gözlem güçlü": "gözlem gücü",
    "çalışma güçlü": "çalışma gücü",
    "düşünebilme güçlü": "düşünebilme gücü",
    "yönetme güçlü": "yönetme gücü",
    "inisiyatif güçlü": "inisiyatif gücü",
    "risk alma güçlü": "risk alma gücü",
    "kriz yönetim güçlü": "kriz yönetimi gücü",
    "karar verme güçlü": "karar verme gücü",
    "Fiziksel güçlü": "Fiziksel gücü",
    "sevgi güçlü": "sevgi gücü",
    "iletisim güçlü": "iletişim gücü",
    "�?anlıurfa": "Şanlıurfa",
    "�?ırnak": "Şırnak",
    "�?ans": "Şans",
    "�?ifacı": "Şifacı",
    "�?efkat": "Şefkat",
    "\"ubat": "Şubat",
    "��": "üç",
    " � <b>": " — <b>",
    "ÄŸ": "ğ",
    "ÅŸ": "ş",
    "Ä±": "ı",
    "Ä°": "İ",
    "Åž": "Ş",
    "Satürn'ön": "Satürn'ün",
    "Türkan ?\"ray": "Türkan Şoray",
    # High-visibility Turkish names, titles, dates and mottos.
    "Detayli Analizi": "Detaylı Analizi",
    "Zodyak Atlasi": "Zodyak Atlası",
    "Zodyakin": "Zodyak'ın",
    "Boga": "Boğa",
    "Basak": "Başak",
    "Balik": "Balık",
    "Ikizler": "İkizler",
    "Günes": "Güneş",
    "Mayis": "Mayıs",
    "Kasim": "Kasım",
    "Aralik": "Aralık",
    "Agustos": "Ağustos",
    "Gümüs": "Gümüş",
    "Sali": "Salı",
    "Persembe": "Perşembe",
    "Parlarim": "Parlarım",
    "Iyilestiririm": "İyileştiririm",
    "Iletisim Kurarim": "İletişim Kurarım",
    "Uyum Yaratirim": "Uyum Yaratırım",
    "Derinlesirim": "Derinleşirim",
    "ve çözülürüm": "ve Çözülürüm",
    "Katki Sağlarım": "Katkı Sağlarım",
    "Anlam Arayisina çıkarim": "Anlam Arayışına Çıkarım",
    "Ugurlu": "Uğurlu",
    "şansli": "Şanslı",
    "Canlilik": "Canlılık",
    "Kozmik Arketip ve Kisilik": "Kozmik Arketip ve Kişilik",
    "Ask & Iliskiler": "Aşk & İlişkiler",
    "Iliski Dinamikleri": "İlişki Dinamikleri",
    "Sağlık & Yasam": "Sağlık & Yaşam",
    "Şans Elementleri & Dogal Taslar": "Şans Elementleri & Doğal Taşlar",
    "Uğurlu Sayilar": "Uğurlu Sayılar",
    "Uğurlu Renkler": "Uğurlu Renkler",
    "Uyumlu Dogal Taslar": "Uyumlu Doğal Taşlar",
    "Öz Kimlik, Irade": "Öz Kimlik, İrade",
    "Degisken Nitelik": "Değişken Nitelik",
    "Ates Elementi": "Ateş Elementi",
    "öncü Nitelik": "Öncü Nitelik",
}


WORD_PATTERN = regex.compile(r"(?V1)[\p{L}\ufffd\u2014]+")
TURKISH_SPECIALS = set("çğıöşü")


def fold_turkish(word: str) -> str:
    return word.lower().translate(str.maketrans("çğıöşü", "cgiosu"))


WORDS_BY_LENGTH: dict[int, list[str]] = {}
for dictionary_word in itertools.islice(iter_wordlist("tr"), 500_000):
    if dictionary_word.isalpha() and 2 <= len(dictionary_word) <= 32:
        WORDS_BY_LENGTH.setdefault(len(dictionary_word), []).append(dictionary_word)


def is_upper_slot(word: str, index: int) -> bool:
    """Choose uppercase candidates only where the damaged slot was uppercase."""
    if index == 0 and len(word) > 1 and word[1].isupper():
        return True
    if word.isupper():
        return True
    return False


def candidate_score(word: str) -> float:
    score = zipf_frequency(word, "tr")
    lower = word.lower()
    score = max(score, zipf_frequency(lower, "tr"))
    # Proper names and inflected words are often absent as a whole.  Reward a
    # plausible frequent stem after removing common Turkish suffixes.
    suffixes = (
        "larının", "lerinin", "lardan", "lerden", "ları", "leri", "ların",
        "lerin", "dır", "dir", "dur", "dür", "tır", "tir", "tur", "tür",
        "dan", "den", "nda", "nde", "nın", "nin", "nun", "nün", "ını",
        "ini", "unu", "ünü", "yla", "yle", "ya", "ye", "a", "e", "ı",
        "i", "u", "ü",
    )
    for suffix in suffixes:
        if lower.endswith(suffix) and len(lower) - len(suffix) >= 3:
            stem = lower[: -len(suffix)]
            score = max(score, zipf_frequency(stem, "tr") - 0.35)
    return score


def infer_word(word: str) -> tuple[str, float]:
    slots = [i for i, char in enumerate(word) if char in UNKNOWN]
    if not slots:
        return word, 99.0
    # Match against the Turkish frequency list first.  Comparing folded forms
    # lets us also restore ASCII-written ı/ş/ğ characters around a damaged slot.
    folded_source = fold_turkish(word)
    for dictionary_word in WORDS_BY_LENGTH.get(len(word), []):
        folded_candidate = fold_turkish(dictionary_word)
        if all(
            (
                dictionary_word[index].lower() in TURKISH_SPECIALS
                if source_char in UNKNOWN
                else folded_source[index] == folded_candidate[index]
            )
            for index, source_char in enumerate(word)
        ):
            if word[0].isupper():
                dictionary_word = dictionary_word[0].upper() + dictionary_word[1:]
            return dictionary_word, zipf_frequency(dictionary_word, "tr")

    choices = [UPPER_CHOICES if is_upper_slot(word, i) else LOWER_CHOICES for i in slots]
    best_word = word
    best_score = -99.0
    for replacement in itertools.product(*choices):
        chars = list(word)
        for index, value in zip(slots, replacement):
            chars[index] = value
        candidate = "".join(chars)
        score = candidate_score(candidate)
        if score > best_score:
            best_word, best_score = candidate, score
    return best_word, best_score


def repair_content(content: str, inferred: dict[str, tuple[str, float]]) -> str:
    content = fix_text(content)
    for damaged, clean in DIRECT_REPLACEMENTS.items():
        content = content.replace(damaged, clean)

    content = regex.sub(
        r'<div class="tarot-symbol">.*?</div>',
        '<div class="tarot-symbol">✦</div>',
        content,
    )
    content = regex.sub(
        r'(<p class="hero-motto">)"([^"]+)"(</p>)',
        r'\1“\2”\3',
        content,
    )

    def replace_word(match: regex.Match[str]) -> str:
        word = match.group(0)
        if not any(char in UNKNOWN for char in word):
            return word
        if not any(char.isalpha() for char in word):
            return word
        clean, score = infer_word(word)
        inferred.setdefault(word, (clean, score))
        # Low-confidence items remain visible in the report for explicit maps.
        return clean if score >= 1.65 else word

    return WORD_PATTERN.sub(replace_word, content)


def public_files() -> list[Path]:
    return sorted(
        path
        for path in ROOT.rglob("*")
        if path.is_file()
        and "scratch" not in path.parts
        and path.suffix.lower() in PUBLIC_SUFFIXES
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true")
    args = parser.parse_args()

    inferred: dict[str, tuple[str, float]] = {}
    changed: list[Path] = []
    outputs: dict[Path, str] = {}
    for path in public_files():
        original = path.read_text(encoding="utf-8-sig")
        repaired = repair_content(original, inferred)
        outputs[path] = repaired
        if repaired != original.lstrip("\ufeff"):
            changed.append(path)

    for damaged, (clean, score) in sorted(inferred.items(), key=lambda item: (item[1][1], item[0])):
        marker = "OK" if score >= 1.65 else "REVIEW"
        print(f"{marker:6} {score:5.2f}  {damaged} -> {clean}")

    print(f"\n{len(changed)} file(s) would change")
    if args.write:
        for path in changed:
            path.write_text(outputs[path], encoding="utf-8", newline="\n")
        print("Changes written as UTF-8")


if __name__ == "__main__":
    main()
