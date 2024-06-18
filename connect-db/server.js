const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 5000;

// تنظیمات دیتابیس
const dbConfig = {
    user: 'sa',
    password: '@Hossein2021',
    server: 'DESKTOP-NL7MQT0',
    database: 'radical',
    options: {
        encrypt: false, // برای اتصال به Azure SQL Server
        trustServerCertificate: true, // برای توسعه محلی
    }
};

// Middleware برای Cors و JSON
app.use(cors());
app.use(express.json());

// تست ارتباط با دیتابیس
app.get('/start', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request().query('SELECT * FROM login_code');
        res.json(result.recordset);
    } catch (err) {
        console.error('Database connection or query error:', err);
        res.status(500).send('Server error');
    } finally {
        sql.close();
    }
});


// شروع سرور
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
