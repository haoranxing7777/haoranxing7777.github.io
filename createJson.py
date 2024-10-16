import json

# 行星数据
data = {
    "id": "solar_system_cheat_sheet",
    "name": "Solar System",
    "description": "Basic information about our solar system",
    "metadata": {
        "sourceName": "NASA",
        "sourceUrl": "http://nssdc.gsfc.nasa.gov/planetary/factsheet/"
    },
    "aliases": [
        "solar",
        "planet",
        "planets",
        "solarsystem",
        "sun",
        "earth",
        "mercury",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune"
    ],
    "template_type": "reference",
    "section_order": [
        "Sun",
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ],
    "sections": {
        "Sun": [
            {"key": "Mean distance from earth", "val": "149,597,900 km"},
            {"key": "Mass", "val": "1.989 x 10³⁰ kg"},
            {"key": "Temperature (core)", "val": "1.56×10⁷ K"},
            {"key": "Volume", "val": "1.41×10¹⁸ km³"}
        ],
        "Mercury": [
            {"key": "Distance from Sun (minimum / maximum)", "val": " 46,001,200 / 69,816,900 km"},
            {"key": "Mass", "val": "3.3011×10²³ kg"},
            {"key": "Surface Temperature (mean)", "val": "440 K"},
            {"key": "Volume", "val": "6.083×10¹⁰ km³"}
        ],
        "Venus": [
            {"key": "Distance from Sun (minimum / maximum)", "val": "107,477,000 / 108,939,000 km"},
            {"key": "Mass", "val": "4.8675×10²⁴ kg"},
            {"key": "Surface Temperature (mean)", "val": "737 K"},
            {"key": "Volume", "val": "9.2843×10¹¹ km³"}
        ],
        "Earth": [
            {"key": "Distance from Sun (minimum / maximum)", "val": "147,095,000 / 152,100,000 km"},
            {"key": "Mass", "val": "5.97237×10²⁴ kg"},
            {"key": "Surface Temperature (mean)", "val": "288 K"},
            {"key": "Volume", "val": "1.08321×10¹² km³"}
        ],
        "Mars": [
            {"key": "Distance from Sun (minimum / maximum)", "val": "206,669,000 / 249,209,300 km"},
            {"key": "Mass", "val": "6.4171×10²³ kg"},
            {"key": "Surface Temperature (mean)", "val": "208 K"},
            {"key": "Volume", "val": "1.6318×10¹¹ km³"}
        ],
        "Jupiter": [
            {"key": "Distance from Sun (minimum / maximum)", "val": "740,573,600 / 816,520,800 km"},
            {"key": "Mass", "val": "1.8986×10²⁷ kg"},
            {"key": "Surface Temperature (mean)", "val": "163 K"},
            {"key": "Volume", "val": "1.43128×10¹⁵ km³"}
        ],
        "Saturn": [
            {"key": "Distance from Sun (minimum / maximum)", "val": "1,353,572,956 / 1,513,325,783 km"},
            {"key": "Mass", "val": "5.6846×10²⁶ kg"},
            {"key": "Surface Temperature (mean)", "val": "133 K"},
            {"key": "Volume", "val": "8.2713×10¹⁴ km³"}
        ],
        "Uranus": [
            {"key": "Distance from Sun (minimum / maximum)", "val": "2,748,938,461 / 3,004,419,704 km"},
            {"key": "Mass", "val": "8.68×10²⁵ kg"},
            {"key": "Surface Temperature (mean)", "val": "78 K"},
            {"key": "Volume", "val": "6.833×10¹³ km³"}
        ],
        "Neptune": [
            {"key": "Distance from Sun (minimum / maximum)", "val": "4,452,940,833 / 4,553,946,490 km"},
            {"key": "Mass", "val": "1.0243×10²⁶ kg"},
            {"key": "Surface Temperature (mean)", "val": "73 K"},
            {"key": "Volume", "val": "6.254×10¹³ km³"}
        ]
    }
}

# 将数据写入JSON文件
with open('solar_system.json', 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, indent=4, ensure_ascii=False)


print("数据已成功写入 solar_system.json")

