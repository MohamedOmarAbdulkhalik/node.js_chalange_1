// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// إنشاء الخادم
const server = http.createServer((req, res) => {
    // الحصول على المسار الصحيح لملف index.html
    const filePath = path.join(__dirname, 'index.html');
    
    // قراءة الملف بشكل غير متزامن
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // في حالة حدوث خطأ
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
            console.error('Error reading file:', err);
            return;
        }
        
        // إرسال الاستجابة بنجاح
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

// تشغيل الخادم على المنفذ 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});