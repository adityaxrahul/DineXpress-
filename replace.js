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

    // Direct match
    if (content.includes('fetch("/api/')) {
        content = content.replace(/fetch\("\/api\//g, 'fetch((import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api/');
        replaced = true;
    }
    
    // Newline match
    if (content.includes('fetch(\r\n        "/api/')) {
         content = content.replace(/fetch\(\r\n        "\/api\//g, 'fetch(\n        (import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api/');
         replaced = true;
    }
    if (content.includes('fetch(\n        "/api/')) {
         content = content.replace(/fetch\(\n        "\/api\//g, 'fetch(\n        (import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api/');
         replaced = true;
    }

    if (replaced) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Patched API_URL: ' + file);
    }
});
