// const apiKey = "YOUR_API_KEY";


function displayPlanets(planetDataArray, planetName) {
    const container = document.getElementById('planets-container');
    container.innerHTML = '';

    let earthMass = "5.972×10²⁴"; // 地球质量
    let earthVolume = "1.083×10¹²"

    // 地球数据
    const earthData = {
        distance: {
            min: 147095000,
            max: 152100000
        },
     
        temperature: 288, // K
    };

    // 解析行星数据
    const planetData = {};
    planetDataArray.forEach(item => {
        if (item.key === "Distance from Sun (minimum / maximum)") {
            const distances = item.val.split(" / ");
            planetData.distance = {
                min: parseFloat(distances[0].replace(/,/g, '')),
                max: parseFloat(distances[1].replace(/,/g, ''))
            };
        } else if (item.key === "Mass") {
            planetData.mass = extractBaseAndExponent(item.val);
        } else if (item.key === "Surface Temperature (mean)") {
            planetData.temperature = parseFloat(item.val);
        } else if (item.key === "Volume") {
            planetData.volume = extractBaseAndExponent(item.val);
        }
    });



    const earthMas = extractBaseAndExponent(earthMass);
    const earthVolum = extractBaseAndExponent(earthVolume);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('planet');

    // 计算地球的平均距离
    const earthMeanDistance = (earthData.distance.min + earthData.distance.max) / 2;

    // 计算平均距离
    const meanDistance = (planetData.distance.min + planetData.distance.max) / 2;

    // 距离比较
    const distanceComparisonMean = (meanDistance / earthMeanDistance).toFixed(2); // 计算平均距离的比例

    // 质量比较
    const massComparisonBase = (planetData.mass.base / earthMas.base).toFixed(2); // 计算底数比值
    const massComparisonExponent = planetData.mass.exponent - earthMas.exponent;// 指数相减
    const finalMassComparison = (massComparisonBase * Math.pow(10, massComparisonExponent)).toFixed(2);

    // 将温度从开尔文转换为摄氏度
    const temperatureInCelsius = (planetData.temperature - 273.15).toFixed(2);

    // 体积比较
    const volumeComparisonBase = (planetData.volume.base / earthVolum.base).toFixed(2); // 计算底数比值
    const volumeComparisonExponent = planetData.volume.exponent - earthVolum.exponent;// 指数相减
    const finalVolumeComparison = (volumeComparisonBase * Math.pow(10, volumeComparisonExponent)).toFixed(2);


    console.log(volumeComparisonBase); // 检查底数比值
    console.log(volumeComparisonExponent); // 检查指数差
    console.log("水星体积exponent:"+planetData.volume.exponent); // 检查水星体积指数
    console.log("地球体积exponent:"+earthVolum.exponent); // 检查地球体积指数
    console.log(finalVolumeComparison); // 检查最终计算结果


    // 将信息添加到 DOM 中
    infoDiv.innerHTML = `
        <h1>${planetName}</h1>
        <h3>Distance from Sun (mean):</h3>
        <p>
            ${meanDistance.toLocaleString()} km (${distanceComparisonMean} of "Earth-to-Sun" distance)
        </p>
        <h3>Mass:</h3>
        <p>
            ${planetData.mass.base} × 10^${planetData.mass.exponent.toString().substring(2)} kg (${finalMassComparison} of Earth's mass)
        </p>
        <h3>Surface Temperature (mean):</h3>
        <p>
            ${planetData.temperature} K (${temperatureInCelsius} °C)
        </p>
        <h3>Volume:</h3>
        <p>
            ${planetData.volume.base} × 10^${planetData.volume.exponent.toString().substring(0,2)} km³ (${finalVolumeComparison} of Earth's volume)
        </p>
    `;

    container.appendChild(infoDiv);
}



function getBaseFromScientificNotation(value) {
    // 替换Unicode字符为标准字符
    const normalizedValue = value.replace('×', 'e').replace(/(¹|²|³)/g, (match) => {
        switch (match) {
            case '¹': return '1';
            case '²': return '2';
            case '³': return '3';
            default: return ''; // 对于其他字符不进行处理
        }
    });

    // 使用字符串分割方法提取底数
    const parts = normalizedValue.split('e');
    if (parts.length > 0) {
        return parseFloat(parts[0]); // 返回底数
    }

    // 如果没有匹配，返回 undefined
    return undefined;
}



function getExponentFromScientificNotation(value) {
    // 替换Unicode字符为标准字符
    const normalizedValue = value.replace('×', 'e').replace(/(¹|²|³)/g, (match) => {
        switch (match) {
            case '¹': return '1';
            case '²': return '2';
            case '³': return '3';
            default: return ''; // 对于其他字符不进行处理
        }
    });

    // 使用字符串分割方法提取指数
    const parts = normalizedValue.split('e');
    if (parts.length > 1) {
        return parseInt(parts[1], 10); // 返回指数
    }

    // 如果没有匹配，返回 undefined
    return undefined;
}



// 测试
const result = getBaseFromScientificNotation('1.43128×10¹⁵');
console.log("This is the result: " + result); // 应输出 1.43128




let mercuryMass = "3.3011×10²³"; // 水星质量
let earthMass = "5.972×10²⁴"; // 地球质量

// 提取底数和指数的函数
function extractBaseAndExponent(value) {
    // 处理 Unicode 上标字符为标准字符
    const normalizedValue = value.replace('×', 'e').replace(/(¹|²|³|⁴|⁵|⁶|⁷|⁸|⁹|⁰)/g, (match) => {
        switch (match) {
            case '¹': return '1';
            case '²': return '2';
            case '³': return '3';
            case '⁴': return '4';
            case '⁵': return '5';
            case '⁶': return '6';
            case '⁷': return '7';
            case '⁸': return '8';
            case '⁹': return '9';
            case '⁰': return '0'; // 处理10⁰等情况
            default: return ''; 
        }
    });

    // 将其拆分为底数和指数部分
    const parts = normalizedValue.split('e');
    const base = parseFloat(parts[0]);  // 解析底数
    const exponent = parts.length > 1 ? parseInt(parts[1]) : 0; // 解析指数部分
    return { base, exponent };
}
// // 提取水星和地球的质量
// const mercury = extractBaseAndExponent(mercuryMass);
// const earth = extractBaseAndExponent(earthMass);

// // 计算质量比值
// const massComparisonBase = (mercury.base / earth.base).toFixed(2);
// const massComparisonExponent = mercury.exponent - earth.exponent; // 指数相减


let plutoVolume = "6.39×10⁹";  // 冥王星体积示例
let earthVolume = "1.08321×10¹²";  // 地球体积



// 解析冥王星和地球的体积
const pluto = extractBaseAndExponent(plutoVolume);
const earth = extractBaseAndExponent(earthVolume);

// 计算体积比值
const volumeComparisonBase = pluto.base / earth.base; // 计算底数比值
const volumeComparisonExponent = pluto.exponent - earth.exponent; // 指数相减

// 计算最终比值
const finalVolumeComparison = (volumeComparisonBase * Math.pow(10, volumeComparisonExponent));

// 保留较高精度，显示两位小数
console.log(`Pluto to Earth volume ratio: ${finalVolumeComparison.toExponential(2)}`);


async function fetchPlanets(planetName) {


    const apiUrl = `http://localhost:3000/api/space/solar-system/${planetName}`;
    console.log("API URL:", apiUrl);
    try {
        const response = await fetch(apiUrl, {


            method: 'GET',
            headers: {
                // 'X-Api-key': apiKey,
                'Content-Type': 'application/json',
            },
        })



        if (!response.ok) {
            throw new Error('Network response was not OK !');

        }


        const planet = await response.json();

        displayPlanets(planet, planetName);

    }


    catch (error) {
        console.error('Error Fetching planet data:', error);

    }

}


//
// // Fetch planets when the page loads
// fetchPlanets();


