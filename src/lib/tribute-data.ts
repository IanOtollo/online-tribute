const heroPortrait = "https://placehold.co/800x1200/1c1c1a/fdfcf9?text=Hero+Portrait";
const gallery1 = "https://placehold.co/600x800/1c1c1a/fdfcf9?text=Gallery+1";
const gallery2 = "https://placehold.co/600x800/1c1c1a/fdfcf9?text=Gallery+2";
const gallery3 = "https://placehold.co/600x800/1c1c1a/fdfcf9?text=Gallery+3";
const gallery4 = "https://placehold.co/600x800/1c1c1a/fdfcf9?text=Gallery+4";
const gallery5 = "https://placehold.co/600x800/1c1c1a/fdfcf9?text=Gallery+5";

const en = {
  tribute: {
    fullName: "Elias Ouma",
    shortName: "Elias",
    epithet: "Beloved father, quiet builder, keeper of the family hearth.",
    born: "October 14, 1942",
    passed: "January 22, 2024",
    location: "Busia, Kenya",
    heroPortrait,
    service: {
      date: "February 3, 2024",
      time: "11:00 AM",
      venue: "St. Peter's, Busia",
    },
  },
  biography: [
    "Elias was born during the hushed autumn of 1942 in a border town where the rhythm of trade defined the pace of life. His father, a carpenter, taught him the integrity of wood and the necessity of precision — early lessons that would form the bedrock of his life's work.",
    "He carried a sketchbook wherever he went, capturing the curve of a market roof or the way shadows pooled in the corners of a village church. To Elias, buildings were not merely stone and brick; they were vessels for human experience, containers for memory and light.",
    "He is survived by his wife of fifty-six years, Margaret; his three children, Eleanor, Thomas and Rose; and seven grandchildren whose laughter filled his final years.",
  ],
  timeline: [
    { year: "1942", title: "A Beginning in Busia", detail: "Born to Arthur and Cecily in the border town of Busia." },
    { year: "1960", title: "The Sketchbook Years", detail: "Left home to study architecture in Nairobi." },
    { year: "1968", title: "A Life Joined", detail: "Married Margaret at St. Peter's, the parish that would become their spiritual home." },
    { year: "1974", title: "Founding Ouma & Ward", detail: "Established the practice that would design churches, schools and quiet civic buildings across the county." },
    { year: "1989", title: "The Cathedral Restoration", detail: "Led the eight-year restoration of the regional cathedral." },
    { year: "2007", title: "A Return Home", detail: "Retired to the town of his birth, planting the garden that welcomed grandchildren every summer." },
    { year: "2024", title: "A Peaceful Passing", detail: "Departed at home, surrounded by his family, at eighty-one years." },
  ],
  speeches: [
    {
      speaker: "Eleanor Ouma",
      relation: "Eldest daughter",
      title: "A Daughter's Memory",
      body: "My father did not teach me how to live; he lived, and he let me watch him do it. Every morning at the kitchen table, he was the calm before any storm — a cup of tea in one hand, the newspaper folded to a precise quarter, and a patience for the world that I have spent my whole life trying to learn.",
    },
    {
      speaker: "Thomas Ouma",
      relation: "Son",
      title: "The Quiet Architect",
      body: "He taught me that a good building, like a good life, is measured not by what you add but by what you have the discipline to leave out. He carried that discipline in everything — his work, his prayers, his love for our mother.",
    },
    {
      speaker: "Rev. James Halloway",
      relation: "Parish priest, St. Peter's",
      title: "A Servant of Light",
      body: "For four decades Elias sat in the third pew from the front. He never spoke in the service, but he was the man who arrived early to unlock the doors, and the last to leave, checking the candles were extinguished. His faith was in the doing.",
    },
  ],
  family: [
    { name: "Margaret Ouma", relation: "Wife of fifty-six years" },
    { name: "Eleanor Ouma-Reed", relation: "Daughter" },
    { name: "Thomas Ouma", relation: "Son" },
    { name: "Rose Ouma-Ward", relation: "Daughter" },
    { name: "Seven Grandchildren", relation: "The joy of his final chapter" },
  ],
  gallery: [
    { src: gallery1, caption: "Nairobi, 1962", note: "The university years." },
    { src: gallery2, caption: "St. Peter's, 1968", note: "A day of vows." },
    { src: gallery3, caption: "Grandfather's pocket watch, undated", note: "Passed down three generations." },
    { src: gallery4, caption: "The Busia garden, 2018", note: "Sunday with the grandchildren." },
    { src: gallery5, caption: "The study, 2019", note: "Evening prayer." },
  ],
  hymn: {
    title: "Tribute Hymn",
    composer: "In Loving Memory",
    lyrics: [
      "Music offers a space for reflection when words fall short.",
    ],
    audioUrl: "/hymn.mp3",
  },
  sections: [
    { id: "hero", label: "In Memoriam", number: "I" },
    { id: "biography", label: "The Life", number: "II" },
    { id: "chronology", label: "Chronology", number: "III" },
    { id: "speeches", label: "Eulogies", number: "IV" },
    { id: "family", label: "The Family", number: "V" },
    { id: "gallery", label: "The Gallery", number: "VI" },
    { id: "hymn", label: "The Hymn", number: "VII" },
  ],
  ui: {
    inMemoriam: "— In Loving Memory —",
    scroll: "Scroll to remember",
    lifeSubtitle: "A life of quiet",
    lifeSubtitleSpan: "craftsmanship.",
    offline: "Available offline",
    toc: "Table of Contents",
    index: "Index",
    eulogiesLabel: "Eulogies & Reflections",
    familyLabel: "The Family Left Behind",
    galleryLabel: "The Visual Archive",
    gallerySubtitle: "Fragments of",
    gallerySubtitleSpan: "a life in frames.",
    galleryDesc: "A curated collection of moments. Swipe, drag, or use the arrows to shuffle through the deck as one might turn photographs on a mantelpiece.",
    hymnLabel: "VII — The Final Note",
    hymnInstruction: "Use the player to listen · Available offline once loaded",
    footerQuote: "\"To live in hearts we leave behind is not to die.\"",
    service: "Service",
  }
};

const sw = {
  tribute: {
    fullName: "Elias Ouma",
    shortName: "Elias",
    epithet: "Baba mpendwa, mjenzi mtulivu, mlinzi wa makaa ya familia.",
    born: "Oktoba 14, 1942",
    passed: "Januari 22, 2024",
    location: "Busia, Kenya",
    heroPortrait,
    service: {
      date: "Februari 3, 2024",
      time: "11:00 Asubuhi",
      venue: "St. Peter's, Busia",
    },
  },
  biography: [
    "Elias alizaliwa wakati wa vuli tulivu wa 1942 katika mji wa mpakani ambapo mdundo wa biashara ulifafanua kasi ya maisha. Babake, ambaye alikuwa seremala, alimfundisha uadilifu wa mbao na umuhimu wa usahihi — masomo ya mapema ambayo yangeunda msingi wa kazi ya maisha yake.",
    "Alibeba kitabu cha michoro popote alipoenda, akinasa umbo la paa la soko au jinsi vivuli vilivyojikusanya kwenye pembe za kanisa la kijijini. Kwa Elias, majengo hayakuwa tu mawe na matofali; yalikuwa vyombo vya uzoefu wa kibinadamu, vyombo vya kumbukumbu na nuru.",
    "Ameacha mke wake wa miaka hamsini na sita, Margaret; watoto wake watatu, Eleanor, Thomas na Rose; na wajukuu saba ambao vicheko vyao vilijaza miaka yake ya mwisho.",
  ],
  timeline: [
    { year: "1942", title: "Mwanzo huko Busia", detail: "Alizaliwa kwa Arthur na Cecily katika mji wa mpakani wa Busia." },
    { year: "1960", title: "Miaka ya Kitabu cha Michoro", detail: "Aliondoka nyumbani kwenda kusomea usanifu majengo Nairobi." },
    { year: "1968", title: "Maisha Yaliyounganishwa", detail: "Alimuoa Margaret katika kanisa la Mt. Peter's, parokia ambayo ingekuwa nyumba yao ya kiroho." },
    { year: "1974", title: "Kuanzishwa kwa Ouma & Ward", detail: "Alianzisha kampuni ambayo ingebuni makanisa, shule na majengo ya kiraia kote kaunti." },
    { year: "1989", title: "Ukarabati wa Kanisa Kuu", detail: "Aliongoza ukarabati wa miaka minane wa kanisa kuu la mkoa." },
    { year: "2007", title: "Kurudi Nyumbani", detail: "Alistaafu katika mji aliozaliwa, akipanda bustani iliyokaribisha wajukuu kila msimu wa joto." },
    { year: "2024", title: "Kifo cha Amani", detail: "Alifariki nyumbani, akiwa amezungukwa na familia yake, akiwa na miaka themanini na moja." },
  ],
  speeches: [
    {
      speaker: "Eleanor Ouma",
      relation: "Binti mkubwa",
      title: "Kumbukumbu ya Binti",
      body: "Babangu hakunifundisha jinsi ya kuishi; aliishi, na kuniruhusu nimtazame akifanya hivyo. Kila asubuhi kwenye meza ya jikoni, alikuwa mtulivu kabla ya dhoruba yoyote — kikombe cha chai mkono mmoja, gazeti lililokunjwa kwa usahihi, na subira kwa ulimwengu ambayo nimetumia maisha yangu yote kujaribu kujifunza.",
    },
    {
      speaker: "Thomas Ouma",
      relation: "Mwana",
      title: "Msanifu Mtulivu",
      body: "Alinifundisha kwamba jengo zuri, kama maisha mazuri, hupimwa sio kwa kile unachoongeza bali kwa kile unachoacha. Alibeba nidhamu hiyo katika kila kitu — kazi yake, sala zake, upendo wake kwa mama yetu.",
    },
    {
      speaker: "Mch. James Halloway",
      relation: "Kasisi wa Parokia, St. Peter's",
      title: "Mtumishi wa Nuru",
      body: "Kwa miongo minne Elias alikaa kwenye benchi la tatu kutoka mbele. Hakuzungumza kamwe kwenye ibada, lakini alikuwa mtu ambaye aliwahi kufika kufungua milango, na wa mwisho kuondoka, akihakikisha mishumaa imezimwa. Imani yake ilikuwa katika vitendo.",
    },
  ],
  family: [
    { name: "Margaret Ouma", relation: "Mke wa miaka hamsini na sita" },
    { name: "Eleanor Ouma-Reed", relation: "Binti" },
    { name: "Thomas Ouma", relation: "Mwana" },
    { name: "Rose Ouma-Ward", relation: "Binti" },
    { name: "Wajukuu Saba", relation: "Furaha ya sura yake ya mwisho" },
  ],
  gallery: [
    { src: gallery1, caption: "Nairobi, 1962", note: "Miaka ya chuo kikuu." },
    { src: gallery2, caption: "St. Peter's, 1968", note: "Siku ya viapo." },
    { src: gallery3, caption: "Saa ya mfukoni ya babu, haijapangiwa tarehe", note: "Imepitishwa vizazi vitatu." },
    { src: gallery4, caption: "Bustani ya Busia, 2018", note: "Jumapili na wajukuu." },
    { src: gallery5, caption: "Chumba cha kusomea, 2019", note: "Sala ya jioni." },
  ],
  hymn: {
    title: "Wimbo wa Dini",
    composer: "Kwa Kumbukumbu ya Upendo",
    lyrics: [
      "Muziki unatoa nafasi ya kutafakari wakati maneno yanapopungua.",
    ],
    audioUrl: "/hymn.mp3",
  },
  sections: [
    { id: "hero", label: "Kwa Kumbukumbu", number: "I" },
    { id: "biography", label: "Maisha", number: "II" },
    { id: "chronology", label: "Mfuatano wa Matukio", number: "III" },
    { id: "speeches", label: "Tawasifu", number: "IV" },
    { id: "family", label: "Familia", number: "V" },
    { id: "gallery", label: "Nyaraka za Picha", number: "VI" },
    { id: "hymn", label: "Wimbo", number: "VII" },
  ],
  ui: {
    inMemoriam: "— Kwa Kumbukumbu ya Upendo —",
    scroll: "Tembeza chini ili kukumbuka",
    lifeSubtitle: "Maisha ya usanii",
    lifeSubtitleSpan: "mtulivu.",
    offline: "Inapatikana bila mtandao",
    toc: "Yaliyomo",
    index: "Kielezo",
    eulogiesLabel: "Tawasifu na Tafakari",
    familyLabel: "Familia Aliyoiacha",
    galleryLabel: "Nyaraka za Picha",
    gallerySubtitle: "Vipande vya",
    gallerySubtitleSpan: "maisha katika fremu.",
    galleryDesc: "Mkusanyiko wa nyakati. Sogeza au tumia mishale kupitia picha kama ambavyo ungetazama picha ukutani.",
    hymnLabel: "VII — Ujumbe wa Mwisho",
    hymnInstruction: "Tumia kichezaji kusikiliza · Inapatikana bila mtandao ikishapakuliwa",
    footerQuote: "\"Kuishi katika mioyo tunayoacha sio kufa.\"",
    service: "Ibada",
  }
};

export const translations = {
  en,
  sw
};
