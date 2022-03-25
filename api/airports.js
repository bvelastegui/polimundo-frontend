const data = [
    {
        "code": "ATL",
        "city": "Atlanta GA",
        "country": "US"
    },
    {
        "code": "PEK",
        "city": "Beijing",
        "country": "CN"
    },
    {
        "code": "LHR",
        "city": "London",
        "country": "GB"
    },
    {
        "code": "ORD",
        "city": "Chicago IL",
        "country": "US"
    },
    {
        "code": "HND",
        "city": "Tokyo",
        "country": "JP"
    },
    {
        "code": "LAX",
        "city": "Los Angeles CA",
        "country": "US"
    },
    {
        "code": "CDG",
        "city": "Paris",
        "country": "FR"
    },
    {
        "code": "DFW",
        "city": "Dallas/Fort Worth TX",
        "country": "US"
    },
    {
        "code": "FRA",
        "city": "Frankfurt",
        "country": "DE"
    },
    {
        "code": "HKG",
        "city": "Hong Kong",
        "country": "HK"
    },
    {
        "code": "DEN",
        "city": "Denver CO",
        "country": "US"
    },
    {
        "code": "DXB",
        "city": "Dubai",
        "country": "AE"
    },
    {
        "code": "CGK",
        "city": "Jakarta",
        "country": "ID"
    },
    {
        "code": "AMS",
        "city": "Amsterdam",
        "country": "NL"
    },
    {
        "code": "MAD",
        "city": "Madrid",
        "country": "ES"
    },
    {
        "code": "BKK",
        "city": "Bangkok",
        "country": "TH"
    },
    {
        "code": "JFK",
        "city": "New York NY",
        "country": "US"
    },
    {
        "code": "SIN",
        "city": "Singapore",
        "country": "SG"
    },
    {
        "code": "CAN",
        "city": "Guangzhou",
        "country": "CN"
    },
    {
        "code": "LAS",
        "city": "Las Vegas NV",
        "country": "US"
    },
    {
        "code": "PVG",
        "city": "Shanghai",
        "country": "CN"
    },
    {
        "code": "SFO",
        "city": "San Francisco CA",
        "country": "US"
    },
    {
        "code": "PHX",
        "city": "Phoenix AZ",
        "country": "US"
    },
    {
        "code": "IAH",
        "city": "Houston TX",
        "country": "US"
    },
    {
        "code": "CLT",
        "city": "Charlotte NC",
        "country": "US"
    },
    {
        "code": "MIA",
        "city": "Miami FL",
        "country": "US"
    },
    {
        "code": "MUC",
        "city": "Munich",
        "country": "DE"
    },
    {
        "code": "KUL",
        "city": "Kuala Lumpur",
        "country": "MY"
    },
    {
        "code": "FCO",
        "city": "Rome",
        "country": "IT"
    },
    {
        "code": "IST",
        "city": "Istanbul",
        "country": "TR"
    },
    {
        "code": "SYD",
        "city": "Sydney",
        "country": "AU"
    },
    {
        "code": "MCO",
        "city": "Orlando FL",
        "country": "US"
    },
    {
        "code": "ICN",
        "city": "Incheon",
        "country": "KR"
    },
    {
        "code": "DEL",
        "city": "New Delhi",
        "country": "IN"
    },
    {
        "code": "BCN",
        "city": "Barcelona",
        "country": "ES"
    },
    {
        "code": "LGW",
        "city": "London",
        "country": "GB"
    },
    {
        "code": "EWR",
        "city": "Newark NJ",
        "country": "US"
    },
    {
        "code": "YYZ",
        "city": "Toronto ON",
        "country": "CA"
    },
    {
        "code": "SHA",
        "city": "Shanghai",
        "country": "CN"
    },
    {
        "code": "MSP",
        "city": "Minneapolis MN",
        "country": "US"
    },
    {
        "code": "SEA",
        "city": "Seattle WA",
        "country": "US"
    },
    {
        "code": "DTW",
        "city": "Detroit MI",
        "country": "US"
    },
    {
        "code": "PHL",
        "city": "Philadelphia PA",
        "country": "US"
    },
    {
        "code": "BOM",
        "city": "Mumbai",
        "country": "IN"
    },
    {
        "code": "GRU",
        "city": "São Paulo",
        "country": "BR"
    },
    {
        "code": "MNL",
        "city": "Manila",
        "country": "PH"
    },
    {
        "code": "CTU",
        "city": "Chengdu",
        "country": "CN"
    },
    {
        "code": "BOS",
        "city": "Boston MA",
        "country": "US"
    },
    {
        "code": "SZX",
        "city": "Shenzhen",
        "country": "CN"
    },
    {
        "code": "MEL",
        "city": "Melbourne",
        "country": "AU"
    },
    {
        "code": "NRT",
        "city": "Tokyo",
        "country": "JP"
    },
    {
        "code": "ORY",
        "city": "Paris",
        "country": "FR"
    },
    {
        "code": "MEX",
        "city": "Mexico City",
        "country": "MX"
    },
    {
        "code": "DME",
        "city": "Moscow",
        "country": "RU"
    },
    {
        "code": "AYT",
        "city": "Antalya",
        "country": "TR"
    },
    {
        "code": "TPE",
        "city": "Taipei",
        "country": "TW"
    },
    {
        "code": "ZRH",
        "city": "Zurich",
        "country": "CH"
    },
    {
        "code": "LGA",
        "city": "New York NY",
        "country": "US"
    },
    {
        "code": "FLL",
        "city": "Fort Lauderdale FL",
        "country": "US"
    },
    {
        "code": "IAD",
        "city": "Washington DC",
        "country": "US"
    },
    {
        "code": "PMI",
        "city": "Palma De Mallorca",
        "country": "ES"
    },
    {
        "code": "CPH",
        "city": "Copenhagen",
        "country": "DK"
    },
    {
        "code": "SVO",
        "city": "Moscow",
        "country": "RU"
    },
    {
        "code": "BWI",
        "city": "Baltimore MD",
        "country": "US"
    },
    {
        "code": "KMG",
        "city": "Kunming",
        "country": "CN"
    },
    {
        "code": "VIE",
        "city": "Vienna",
        "country": "AT"
    },
    {
        "code": "OSL",
        "city": "Oslo",
        "country": "NO"
    },
    {
        "code": "JED",
        "city": "Jeddah",
        "country": "SA"
    },
    {
        "code": "BNE",
        "city": "Brisbane",
        "country": "AU"
    },
    {
        "code": "SLC",
        "city": "Salt Lake City UT",
        "country": "US"
    },
    {
        "code": "DUS",
        "city": "Düsseldorf",
        "country": "DE"
    },
    {
        "code": "BOG",
        "city": "Bogota",
        "country": "CO"
    },
    {
        "code": "MXP",
        "city": "Milan",
        "country": "IT"
    },
    {
        "code": "JNB",
        "city": "Johannesburg",
        "country": "ZA"
    },
    {
        "code": "ARN",
        "city": "Stockholm",
        "country": "SE"
    },
    {
        "code": "MAN",
        "city": "Manchester",
        "country": "GB"
    },
    {
        "code": "MDW",
        "city": "Chicago IL",
        "country": "US"
    },
    {
        "code": "DCA",
        "city": "Washington DC",
        "country": "US"
    },
    {
        "code": "BRU",
        "city": "Brussels",
        "country": "BE"
    },
    {
        "code": "DUB",
        "city": "Dublin",
        "country": "IE"
    },
    {
        "code": "GMP",
        "city": "Seoul",
        "country": "KR"
    },
    {
        "code": "DOH",
        "city": "Doha",
        "country": "QA"
    },
    {
        "code": "STN",
        "city": "London",
        "country": "GB"
    },
    {
        "code": "HGH",
        "city": "Hangzhou",
        "country": "CN"
    },
    {
        "code": "CJU",
        "city": "Jeju",
        "country": "KR"
    },
    {
        "code": "YVR",
        "city": "Vancouver BC",
        "country": "CA"
    },
    {
        "code": "TXL",
        "city": "Berlin",
        "country": "DE"
    },
    {
        "code": "SAN",
        "city": "San Diego CA",
        "country": "US"
    },
    {
        "code": "TPA",
        "city": "Tampa FL",
        "country": "US"
    },
    {
        "code": "CGH",
        "city": "São Paulo",
        "country": "BR"
    },
    {
        "code": "BSB",
        "city": "Brasilia",
        "country": "BR"
    },
    {
        "code": "CTS",
        "city": "Sapporo",
        "country": "JP"
    },
    {
        "code": "XMN",
        "city": "Xiamen",
        "country": "CN"
    },
    {
        "code": "RUH",
        "city": "Riyadh",
        "country": "SA"
    },
    {
        "code": "FUK",
        "city": "Fukuoka",
        "country": "JP"
    },
    {
        "code": "GIG",
        "city": "Rio De Janeiro",
        "country": "BR"
    },
    {
        "code": "HEL",
        "city": "Helsinki",
        "country": "FI"
    },
    {
        "code": "LIS",
        "city": "Lisbon",
        "country": "PT"
    },
    {
        "code": "ATH",
        "city": "Athens",
        "country": "GR"
    },
    {
        "code": "AKL",
        "city": "Auckland",
        "country": "NZ"
    },
    {
        "code": "CLE",
        "city": "Cleveland",
        "country": "US"
    },
    {
        "code": "PDX",
        "city": "Portland",
        "country": "US"
    },
    {
        "code": "STL",
        "city": "St Louis",
        "country": "US"
    },
    {
        "code": "HOU",
        "city": "Houston TX",
        "country": "US"
    },
    {
        "code": "OAK",
        "city": "Oakland",
        "country": "US"
    },
    {
        "code": "MCI",
        "city": "Kansas City",
        "country": "US"
    },
    {
        "code": "BNA",
        "city": "Nashville",
        "country": "US"
    },
    {
        "code": "AUS",
        "city": "Austin",
        "country": "US"
    },
    {
        "code": "RDU",
        "city": "Raleigh/Durham",
        "country": "US"
    },
    {
        "code": "SMF",
        "city": "Sacramento",
        "country": "US"
    },
    {
        "code": "SNA",
        "city": "Santa Ana",
        "country": "US"
    },
    {
        "code": "CUN",
        "city": "Cancún",
        "country": "MX"
    },
    {
        "code": "SJU",
        "city": "San Juan",
        "country": "PR"
    },
    {
        "code": "MBJ",
        "city": "Montego Bay",
        "country": "JM"
    },
    {
        "code": "PUJ",
        "city": "Punta Cana",
        "country": "DO"
    },
    {
        "code": "NAS",
        "city": "Nassau",
        "country": "BS"
    }
]

export default {
    getAll() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(data), 1500)
        })
    },
}