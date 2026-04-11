const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else {
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walkDir(path.join(__dirname, 'frontend/src'));
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let replaced = false;

    // Matches exactly fetch(   "/api/ with any amount of whitespace
    const rx = /fetch\(\s*\"\/api\//g;
    if (rx.test(content)) {
        content = content.replace(rx, 'fetch((import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api/');
        replaced = true;
    }

    if (replaced) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Successfully Force-Patched: ' + file);
    }
});
