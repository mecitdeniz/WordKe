const words = [
  "ABA",
  "ABE",
  "ABI",
  "ABU",
  "ACE",
  "ACI",
  "ADA",
  "ADI",
  "AFI",
  "AFT",
  "AGU",
  "AHA",
  "AHI",
  "AHU",
  "AIT",
  "AKA",
  "AKS",
  "AKÜ",
  "AKI",
  "ALA",
  "ALG",
  "ALI",
  "ALO",
  "ALP",
  "ALT",
  "AMA",
  "ANA",
  "ANI",
  "ANT",
  "ANI",
  "ARA",
  "ARI",
  "ARK",
  "ARP",
  "ART",
  "ARZ",
  "ARI",
  "ARŞ",
  "ASA",
  "ASI",
  "ASK",
  "AST",
  "ASI",
  "ATA",
  "ATE",
  "ATI",
  "AUT",
  "AYA",
  "AYN",
  "AYI",
  "AZA",
  "AZI",
  "AÇI",
  "AĞA",
  "AĞI",
  "AŞK",
  "AŞI",
  "BAD",
  "BAL",
  "BAN",
  "BAP",
  "BAR",
  "BAS",
  "BAS",
  "BAT",
  "BAV",
  "BAY",
  "BAZ",
  "BAÇ",
  "BAĞ",
  "BAŞ",
  "BED",
  "BEJ",
  "BEK",
  "BEL",
  "BEN",
  "BET",
  "BEY",
  "BEZ",
  "BEŞ",
  "BIN",
  "BIR",
  "BIS",
  "BIT",
  "BIZ",
  "BOA",
  "BOK",
  "BOL",
  "BOM",
  "BOP",
  "BOR",
  "BOT",
  "BOY",
  "BOZ",
  "BOŞ",
  "BRE",
  "BUL",
  "BUN",
  "BUT",
  "BUZ",
  "BÖN",
  "BÖĞ",
  "BÜK",
  "BÜZ",
  "CAM",
  "CAN",
  "CAR",
  "CAZ",
  "CAĞ",
  "CEM",
  "CEP",
  "CER",
  "CET",
  "CIM",
  "CIN",
  "CIP",
  "COP",
  "CUK",
  "CUP",
  "CÜZ",
  "CIK",
  "CIS",
  "CIZ",
  "DAH",
  "DAL",
  "DAM",
  "DAR",
  "DAV",
  "DAZ",
  "DAĞ",
  "DEF",
  "DEH",
  "DEK",
  "DEM",
  "DEV",
  "DIK",
  "DIL",
  "DIN",
  "DIP",
  "DIZ",
  "DIŞ",
  "DOK",
  "DON",
  "DOZ",
  "DUA",
  "DUL",
  "DUN",
  "DUT",
  "DUY",
  "DUŞ",
  "DVD",
  "DÖL",
  "DÖŞ",
  "DÜK",
  "DÜN",
  "DÜZ",
  "DÜŞ",
  "DIŞ",
  "EBE",
  "ECE",
  "EDA",
  "EDE",
  "EDI",
  "EFE",
  "EGE",
  "EGO",
  "EKE",
  "EKO",
  "EKÜ",
  "ELA",
  "ELK",
  "EPE",
  "ERG",
  "ERK",
  "EVÇ",
  "EZA",
  "EĞE",
  "FAK",
  "FAL",
  "FAN",
  "FAR",
  "FAY",
  "FAZ",
  "FAŞ",
  "FEK",
  "FEL",
  "FEN",
  "FER",
  "FES",
  "FIL",
  "FIN",
  "FIT",
  "FIĞ",
  "FIŞ",
  "FLU",
  "FOK",
  "FOL",
  "FON",
  "FOS",
  "FOŞ",
  "FUL",
  "FUT",
  "FÖN",
  "FÖY",
  "FÜG",
  "FIR",
  "GAF",
  "GAG",
  "GAH",
  "GAK",
  "GAM",
  "GAR",
  "GAZ",
  "GEM",
  "GEN",
  "GEY",
  "GEZ",
  "GEÇ",
  "GIZ",
  "GOL",
  "GRI",
  "GUT",
  "GÖK",
  "GÖL",
  "GÖN",
  "GÖT",
  "GÖZ",
  "GÖÇ",
  "GÜL",
  "GÜM",
  "GÜN",
  "GÜR",
  "GÜZ",
  "GÜÇ",
  "GIK",
  "GIR",
  "HAB",
  "HAC",
  "HAD",
  "HAF",
  "HAH",
  "HAK",
  "HAL",
  "HAM",
  "HAN",
  "HAP",
  "HAR",
  "HAS",
  "HAT",
  "HAV",
  "HAY",
  "HAZ",
  "HAÇ",
  "HEM",
  "HEP",
  "HER",
  "HEY",
  "HIN",
  "HIS",
  "HIT",
  "HIÇ",
  "HIŞ",
  "HOL",
  "HOP",
  "HOR",
  "HOŞ",
  "HUN",
  "HUY",
  "HUĞ",
  "HUŞ",
  "HÖT",
  "HÜR",
  "HIK",
  "HIR",
  "HIZ",
  "IRA",
  "IRK",
  "IRZ",
  "ISI",
  "JEL",
  "JET",
  "JIG",
  "JUL",
  "JÖN",
  "JÜT",
  "KAH",
  "KAK",
  "KAL",
  "KAM",
  "KAN",
  "KAP",
  "KAR",
  "KAS",
  "KAT",
  "KAV",
  "KAY",
  "KAZ",
  "KAÇ",
  "KAŞ",
  "KEF",
  "KEK",
  "KEL",
  "KEM",
  "KEP",
  "KER",
  "KES",
  "KET",
  "KEZ",
  "KEŞ",
  "KIK",
  "KIL",
  "KIM",
  "KIN",
  "KIP",
  "KIR",
  "KIT",
  "KOD",
  "KOF",
  "KOK",
  "KOL",
  "KOM",
  "KOR",
  "KOT",
  "KOV",
  "KOY",
  "KOZ",
  "KOÇ",
  "KUL",
  "KUM",
  "KUP",
  "KUR",
  "KUT",
  "KUZ",
  "KUŞ",
  "KÖK",
  "KÖR",
  "KÖS",
  "KÖY",
  "KÖZ",
  "KÜF",
  "KÜL",
  "KÜP",
  "KÜR",
  "KÜS",
  "KÜT",
  "KIL",
  "KIN",
  "KIR",
  "KIT",
  "KIZ",
  "KIÇ",
  "KIĞ",
  "KIŞ",
  "LAF",
  "LAK",
  "LAL",
  "LAM",
  "LAN",
  "LAP",
  "LAV",
  "LAZ",
  "LEB",
  "LEF",
  "LEH",
  "LEP",
  "LEY",
  "LEŞ",
  "LIF",
  "LIG",
  "LIM",
  "LIR",
  "LOK",
  "LOP",
  "LOR",
  "LOT",
  "LOĞ",
  "LOŞ",
  "LUP",
  "LÖK",
  "LÖP",
  "LÖS",
  "LÜK",
  "LÜP",
  "LIĞ",
  "MAH",
  "MAI",
  "MAL",
  "MAS",
  "MAT",
  "MAÇ",
  "MAŞ",
  "MEH",
  "MEN",
  "MET",
  "MEY",
  "MEÇ",
  "MIL",
  "MIM",
  "MIR",
  "MIS",
  "MIT",
  "MOR",
  "MUF",
  "MUM",
  "MUT",
  "MUZ",
  "MUŞ",
  "MÜL",
  "MIH",
  "NAH",
  "NAL",
  "NAM",
  "NAN",
  "NAR",
  "NAS",
  "NAZ",
  "NEM",
  "NET",
  "NEV",
  "NEY",
  "NIM",
  "NIŞ",
  "NOM",
  "NOT",
  "NUH",
  "NUR",
  "OBA",
  "ODA",
  "OHA",
  "OJE",
  "OLE",
  "OMA",
  "ONA",
  "ONS",
  "ORA",
  "ORG",
  "OVA",
  "OYA",
  "PAH",
  "PAK",
  "PAL",
  "PAS",
  "PAT",
  "PAY",
  "PEK",
  "PER",
  "PES",
  "PEY",
  "PEÇ",
  "PEŞ",
  "PIK",
  "PIL",
  "PIM",
  "PIR",
  "PIS",
  "PIÇ",
  "POF",
  "POG",
  "POP",
  "POS",
  "POT",
  "POY",
  "POZ",
  "PUF",
  "PUL",
  "PUS",
  "PUT",
  "PÖF",
  "PÖÇ",
  "PÜF",
  "PÜR",
  "PIR",
  "PIT",
  "RAB",
  "RAF",
  "RAM",
  "RAP",
  "RAY",
  "RET",
  "REY",
  "ROL",
  "ROM",
  "ROP",
  "ROT",
  "RUA",
  "RUF",
  "RUH",
  "RUJ",
  "RUM",
  "RUN",
  "RUS",
  "RUZ",
  "RIH",
  "SAC",
  "SAF",
  "SAH",
  "SAK",
  "SAL",
  "SAM",
  "SAN",
  "SAP",
  "SAT",
  "SAV",
  "SAY",
  "SAZ",
  "SAÇ",
  "SAĞ",
  "SEK",
  "SEL",
  "SEM",
  "SEN",
  "SER",
  "SES",
  "SET",
  "SIF",
  "SIM",
  "SIN",
  "SIS",
  "SIT",
  "SIZ",
  "SOF",
  "SOL",
  "SOM",
  "SON",
  "SOS",
  "SOY",
  "SUP",
  "SUR",
  "SUT",
  "SÖR",
  "SÖZ",
  "SÜS",
  "SÜT",
  "SIK",
  "SIR",
  "SIĞ",
  "TAB",
  "TAK",
  "TAL",
  "TAM",
  "TAN",
  "TAR",
  "TAS",
  "TAT",
  "TAV",
  "TAY",
  "TAÇ",
  "TAŞ",
  "TEF",
  "TEK",
  "TEL",
  "TEM",
  "TEN",
  "TER",
  "TEZ",
  "TIK",
  "TIM",
  "TIN",
  "TIP",
  "TIZ",
  "TOK",
  "TOL",
  "TON",
  "TOP",
  "TOR",
  "TOS",
  "TOY",
  "TOZ",
  "TUH",
  "TUL",
  "TUN",
  "TUR",
  "TUZ",
  "TUĞ",
  "TUŞ",
  "TÖR",
  "TÖS",
  "TÖZ",
  "TÜF",
  "TÜH",
  "TÜL",
  "TÜM",
  "TÜN",
  "TÜP",
  "TÜR",
  "TÜY",
  "TIK",
  "TIN",
  "TIP",
  "TIR",
  "TIS",
  "TIĞ",
  "UCA",
  "UDI",
  "ULU",
  "UMU",
  "UZI",
  "UZO",
  "VAH",
  "VAR",
  "VAT",
  "VAY",
  "VAY",
  "VAZ",
  "VIN",
  "VIZ",
  "YAD",
  "YAK",
  "YAL",
  "YAN",
  "YAR",
  "YAS",
  "YAT",
  "YAY",
  "YAZ",
  "YAĞ",
  "YAŞ",
  "YEK",
  "YEL",
  "YEM",
  "YEN",
  "YER",
  "YEĞ",
  "YIV",
  "YOK",
  "YOL",
  "YOM",
  "YOZ",
  "YOĞ",
  "YUF",
  "YUH",
  "YÖN",
  "YÜK",
  "YÜN",
  "YÜZ",
  "YIL",
  "YIR",
  "ZAM",
  "ZAN",
  "ZAR",
  "ZAT",
  "ZAÇ",
  "ZAĞ",
  "ZEM",
  "ZEN",
  "ZER",
  "ZIL",
  "ZIR",
  "ZOM",
  "ZOR",
  "ZUM",
  "ZÜL",
  "ZIH",
  "ZIP",
  "ZIT",
];

module.exports = {
    words
}