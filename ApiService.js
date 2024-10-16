const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

// 读取 JSON 文件
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, 'solar_system.json'), 'utf8'));

// 定义 API 路由，获取整个数据
app.get('/api/space/solar-system', (req, res) => {
    res.json(jsonData);
});

// 定义 API 路由，获取指定行星的数据
app.get('/api/space/solar-system/:planet', (req, res) => {
    const planet = req.params.planet.charAt(0).toUpperCase() + req.params.planet.slice(1); // 确保首字母大写
    const planetData = jsonData.sections[planet]; // 根据输入获取对应的行星数据

    if (planetData) {
        res.json(planetData);
    } else {
        res.status(404).json({ error: 'Planet not found' });
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
