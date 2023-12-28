export type FieldElement =
  | "food, cooking"
  | "medicine"
  | "baseball"
  | "martial arts"
  | "sumo"
  | "botany"
  | "Christianity"
  | "computing"
  | "art, aesthetics"
  | "golf"
  | "sports"
  | "philosophy"
  | "music"
  | "trademark"
  | "mathematics"
  | "chemistry"
  | "astronomy"
  | "linguistics"
  | "psychoanalysis"
  | "finance"
  | "electronics"
  | "biochemistry"
  | "photography"
  | "economics"
  | "geology"
  | "physics"
  | "Roman mythology"
  | "skiing"
  | "Greek mythology"
  | "horse racing"
  | "video games"
  | "business"
  | "printing"
  | "card games"
  | "grammar"
  | "military"
  | "electricity, elec. eng."
  | "genetics"
  | "fishing"
  | "archeology"
  | "logic"
  | "biology"
  | "anatomy"
  | "architecture"
  | "telecommunications"
  | "law"
  | "aviation"
  | "railway"
  | "gardening, horticulture"
  | "Buddhism"
  | "Shinto"
  | "zoology"
  | "geometry"
  | "shogi"
  | "hanafuda"
  | "noh"
  | "pharmacology"
  | "geography"
  | "psychology"
  | "dentistry"
  | "physiology"
  | "meteorology"
  | "engineering"
  | "mahjong"
  | "entomology"
  | "go (game)"
  | "surgery"
  | "crystallography"
  | "politics"
  | "psychiatry"
  | "agriculture"
  | "kabuki"
  | "clothing"
  | "statistics"
  | "stock market"
  | "ornithology"
  | "Internet"
  | "ecology"
  | "mining"
  | "audiovisual"
  | "mechanical engineering"
  | "film"
  | "television"
  | "manga"
  | "pathology"
  | "embryology"
  | "paleontology";

export type MiscElement =
  | "colloquial"
  | "word usually written using kana alone"
  | "euphemistic"
  | "honorific or respectful (sonkeigo) language"
  | "familiar language"
  | "male term or language"
  | "slang"
  | "vulgar expression or word"
  | "derogatory"
  | "polite (teineigo) language"
  | "abbreviation"
  | "onomatopoeic or mimetic word"
  | "archaic"
  | "dated term"
  | "idiomatic expression"
  | "children's language"
  | "jocular, humorous term"
  | "obsolete term"
  | "sensitive"
  | "historical term"
  | "rare term"
  | "Internet slang"
  | "humble (kenjougo) language"
  | "yojijukugo"
  | "formal or literary term"
  | "female term or language"
  | "poetical term"
  | "proverb"
  | "manga slang"
  | "family or surname"
  | "work of art, literature, music, etc. name"
  | "character"
  | "full name of a particular person"
  | "place name"
  | "given name or forename, gender not specified"
  | "company name"
  | "organization name"
  | "product name"
  | "deity"
  | "unclassified name"
  | "object"
  | "ship name"
  | "service"
  | "mythology"
  | "event"
  | "legend"
  | "fiction"
  | "creature"
  | "quotation"
  | "group"
  | "document";

export type PosElement =
  | "Godan verb with 'u' ending"
  | "transitive verb"
  | "adverb (fukushi)"
  | "adverb taking the 'to' particle"
  | "noun or participle which takes the aux. verb suru"
  | "Ichidan verb"
  | "intransitive verb"
  | "interjection (kandoushi)"
  | "nouns which may take the genitive case particle 'no'"
  | "expressions (phrases, clauses, etc.)"
  | "adjective (keiyoushi)"
  | "Godan verb - -aru special class"
  | "auxiliary verb"
  | "noun (common) (futsuumeishi)"
  | "Godan verb with 'ru' ending"
  | "adjectival nouns or quasi-adjectives (keiyodoshi)"
  | "Godan verb with 'ku' ending"
  | "Godan verb with 'ru' ending (irregular verb)"
  | "Godan verb with 'su' ending"
  | "conjunction"
  | "suffix"
  | "particle"
  | "suru verb - included"
  | "Kuru verb - special class"
  | "auxiliary adjective"
  | "noun, used as a suffix"
  | "noun or verb acting prenominally"
  | "adjective (keiyoushi) - yoi/ii class"
  | "prefix"
  | "noun, used as a prefix"
  | "'taru' adjective"
  | "counter"
  | "Godan verb with 'mu' ending"
  | "numeric"
  | "Godan verb with 'tsu' ending"
  | "Godan verb with 'bu' ending"
  | "Godan verb with 'gu' ending"
  | "Ichidan verb - zuru verb (alternative form of -jiru verbs)"
  | "suru verb - special class"
  | "pronoun"
  | "Nidan verb (lower class) with 'mu' ending (archaic)"
  | "Ichidan verb - kureru special class"
  | "Godan verb with 'nu' ending"
  | "irregular nu verb"
  | "su verb - precursor to the modern suru"
  | "verb unspecified"
  | "Godan verb with 'u' ending (special class)"
  | "irregular ru verb, plain form ends with -ri"
  | "Godan verb - Iku/Yuku special class"
  | "archaic/formal form of na-adjective"
  | "auxiliary"
  | "pre-noun adjectival (rentaishi)"
  | "Yodan verb with 'ru' ending (archaic)"
  | "Nidan verb (lower class) with 'gu' ending (archaic)"
  | "Yodan verb with 'hu/fu' ending (archaic)"
  | "Yodan verb with 'su' ending (archaic)"
  | "Nidan verb with 'u' ending (archaic)"
  | "Yodan verb with 'mu' ending (archaic)"
  | "Nidan verb (lower class) with 'ru' ending (archaic)"
  | "Yodan verb with 'ku' ending (archaic)"
  | "Yodan verb with 'tsu' ending (archaic)"
  | "Nidan verb (lower class) with 'dzu' ending (archaic)"
  | "Nidan verb (lower class) with 'hu/fu' ending (archaic)"
  | "Nidan verb (upper class) with 'ku' ending (archaic)"
  | "Nidan verb (lower class) with 'ku' ending (archaic)"
  | "Nidan verb (upper class) with 'gu' ending (archaic)"
  | "Nidan verb (upper class) with 'yu' ending (archaic)"
  | "Nidan verb (lower class) with 'su' ending (archaic)"
  | "Nidan verb (lower class) with 'tsu' ending (archaic)"
  | "Nidan verb (lower class) with 'nu' ending (archaic)"
  | "Nidan verb (lower class) with 'yu' ending (archaic)"
  | "unclassified"
  | "'ku' adjective (archaic)"
  | "copula"
  | "'shiku' adjective (archaic)"
  | "Nidan verb (upper class) with 'hu/fu' ending (archaic)"
  | "Nidan verb (upper class) with 'bu' ending (archaic)";

export type KeInfElement =
  | "ateji (phonetic) reading"
  | "rarely used kanji form"
  | "irregular okurigana usage"
  | "word containing out-dated kanji or kanji usage"
  | "word containing irregular kanji usage"
  | "search-only kanji form"
  | "word containing irregular kana usage";

export type KePriElement =
  | "news1"
  | "nf23"
  | "ichi1"
  | "nf04"
  | "news2"
  | "nf36"
  | "nf22"
  | "spec1"
  | "nf39"
  | "nf26"
  | "nf33"
  | "nf40"
  | "nf21"
  | "nf32"
  | "nf29"
  | "nf06"
  | "nf07"
  | "nf18"
  | "nf05"
  | "nf13"
  | "nf30"
  | "nf37"
  | "nf34"
  | "nf48"
  | "nf46"
  | "nf41"
  | "nf42"
  | "nf47"
  | "nf19"
  | "nf14"
  | "nf12"
  | "nf03"
  | "nf45"
  | "nf17"
  | "nf43"
  | "nf09"
  | "nf28"
  | "spec2"
  | "nf38"
  | "nf02"
  | "nf44"
  | "nf01"
  | "nf24"
  | "nf31"
  | "nf20"
  | "nf11"
  | "nf15"
  | "nf16"
  | "nf25"
  | "nf27"
  | "nf10"
  | "nf08"
  | "nf35"
  | "ichi2"
  | "gai1"
  | "gai2";

export type DialElement =
  | "Hokkaido-ben"
  | "Touhoku-ben"
  | "Kantou-ben"
  | "Kansai-ben"
  | "Kyuushuu-ben"
  | "Osaka-ben"
  | "Brazilian"
  | "Ryuukyuu-ben"
  | "Kyoto-ben"
  | "Tsugaru-ben"
  | "Tosa-ben"
  | "Nagano-ben";

export type ExampleElement = {
  ex_srce: number;
  ex_text: string;
  ex_sent: [string, string];
};

export type PurpleExample = {
  ex_srce: number;
  ex_text: number | string;
  ex_sent: [string, string];
};

export type PurpleSense = {
  pos: string[] | PosElement;
  xref?: string[] | string;
  gloss: Array<string> | string;
  example?: ExampleElement[] | PurpleExample;
  misc?: MiscElement[] | MiscElement;
  s_inf?: string;
  dial?: DialElement[] | DialElement;
  field?: FieldElement[] | FieldElement;
  lsource?: string[] | string;
  ant?: string[] | string;
};

export type ReInfElement =
  | "out-dated or obsolete kana usage"
  | "search-only kana form"
  | "word containing irregular kana usage"
  | "rarely used kana form"
  | "gikun (meaning as reading) or jukujikun (special kanji reading)";

export type PurpleREle = {
  reb: string;
  re_pri?: KePriElement[] | KePriElement;
  re_inf?: ReInfElement;
};

export type REleElement = {
  reb: string;
  re_nokanji?: string;
  re_restr?: string[] | string;
  re_pri?: KePriElement[] | KePriElement;
  re_inf?: ReInfElement[] | ReInfElement;
};

export type KEleElement = {
  keb: string;
  ke_pri?: KePriElement[] | KePriElement;
  ke_inf?: KeInfElement[] | KeInfElement;
};

export type SenseElement = {
  pos: PosElement[] | PosElement;
  xref?: string[] | string;
  s_inf?: string;
  gloss: Array<string> | string;
  misc?: MiscElement[] | MiscElement;
  dial?: DialElement[] | DialElement;
  example?: ExampleElement[] | ExampleElement;
  stagk?: string[] | string;
  stagr?: string[] | string;
  field?: FieldElement[] | FieldElement;
  lsource?: string[] | string;
  ant?: string[] | string;
};

export type JMdict = {
  JMdict: {
    entry: {
      ent_seq: number;
      r_ele: REleElement[] | PurpleREle;
      sense: SenseElement[] | PurpleSense;
      k_ele?: KEleElement[] | KEleElement;
    }[];
  };
};
