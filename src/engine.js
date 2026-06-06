const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data.json');

const getTemplates = () => ({
    desktop: [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chrome} Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:{firefox}) Gecko/20100101 Firefox/{firefox}",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/{safari} Safari/605.1.15"
    ],
    mobile: [
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/{safari} Mobile/15E148 Safari/604.1",
        "Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{chrome} Mobile Safari/537.36"
    ]
});

const getRandomVersion = (versions, browser) => {
    const config = versions[browser] || { major: 100, minorRange: 10 };
    return `${config.major}.${Math.floor(Math.random() * config.minorRange)}.${Math.floor(Math.random() * 500)}.${Math.floor(Math.random() * 100)}`;
};

const generate = (device = 'desktop') => {
    try {
        const versions = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
        const pool = getTemplates()[device] || getTemplates().desktop;
        let ua = pool[Math.floor(Math.random() * pool.length)];

        return ua.replace(/{chrome}|{firefox}|{safari}/g, (match) => {
            return getRandomVersion(versions, match.replace(/[{}]/g, ''));
        });
    } catch (e) {
        return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36";
    }
};

module.exports = { generate };
