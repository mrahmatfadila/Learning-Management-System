// MySQL Course Data — Generated

export const mysqlCourseModules = [
  {
    id: 'mysql-mod-1', title: 'MySQL Tutorial',
    lessons: [
      { id: 'mysql-home',            title: 'MySQL HOME' },
      { id: 'mysql-intro',           title: 'MySQL Intro' },
      { id: 'mysql-rdbms',           title: 'MySQL RDBMS' },
    ]
  },
  {
    id: 'mysql-mod-2', title: 'MySQL SQL',
    lessons: [
      { id: 'mysql-sql-intro',       title: 'MySQL SQL' },
      { id: 'mysql-select',          title: 'MySQL SELECT' },
      { id: 'mysql-select-distinct', title: 'MySQL SELECT DISTINCT' },
      { id: 'mysql-where',           title: 'MySQL WHERE' },
      { id: 'mysql-order-by',        title: 'MySQL ORDER BY' },
      { id: 'mysql-and',             title: 'MySQL AND' },
      { id: 'mysql-or',              title: 'MySQL OR' },
      { id: 'mysql-not',             title: 'MySQL NOT' },
      { id: 'mysql-insert-into',     title: 'MySQL INSERT INTO' },
      { id: 'mysql-null-values',     title: 'MySQL NULL Values' },
      { id: 'mysql-update',          title: 'MySQL UPDATE' },
      { id: 'mysql-delete',          title: 'MySQL DELETE' },
      { id: 'mysql-limit',           title: 'MySQL LIMIT' },
      { id: 'mysql-aggregate-func',  title: 'MySQL Aggregate Functions' },
      { id: 'mysql-min',             title: 'MySQL MIN()' },
      { id: 'mysql-max',             title: 'MySQL MAX()' },
      { id: 'mysql-count',           title: 'MySQL COUNT()' },
      { id: 'mysql-sum',             title: 'MySQL SUM()' },
      { id: 'mysql-avg',             title: 'MySQL AVG()' },
      { id: 'mysql-like',            title: 'MySQL LIKE' },
      { id: 'mysql-wildcards',       title: 'MySQL Wildcards' },
      { id: 'mysql-in',              title: 'MySQL IN' },
      { id: 'mysql-between',         title: 'MySQL BETWEEN' },
      { id: 'mysql-aliases',         title: 'MySQL Aliases' },
      { id: 'mysql-joins',           title: 'MySQL Joins' },
      { id: 'mysql-inner-join',      title: 'MySQL INNER JOIN' },
      { id: 'mysql-left-join',       title: 'MySQL LEFT JOIN' },
      { id: 'mysql-right-join',      title: 'MySQL RIGHT JOIN' },
      { id: 'mysql-cross-join',      title: 'MySQL CROSS JOIN' },
      { id: 'mysql-self-join',       title: 'MySQL Self Join' },
      { id: 'mysql-union',           title: 'MySQL UNION' },
      { id: 'mysql-union-all',       title: 'MySQL UNION ALL' },
      { id: 'mysql-group-by',        title: 'MySQL GROUP BY' },
      { id: 'mysql-having',          title: 'MySQL HAVING' },
      { id: 'mysql-exists',          title: 'MySQL EXISTS' },
      { id: 'mysql-any',             title: 'MySQL ANY' },
      { id: 'mysql-all',             title: 'MySQL ALL' },
      { id: 'mysql-insert-select',   title: 'MySQL INSERT SELECT' },
      { id: 'mysql-case',            title: 'MySQL CASE' },
      { id: 'mysql-null-func',       title: 'MySQL Null Functions' },
      { id: 'mysql-stored-proc',     title: 'MySQL Stored Procedures' },
      { id: 'mysql-comments',        title: 'MySQL Comments' },
      { id: 'mysql-operators',       title: 'MySQL Operators' },
    ]
  },
  {
    id: 'mysql-mod-3', title: 'MySQL Database',
    lessons: [
      { id: 'mysql-create-db',         title: 'MySQL Create DB' },
      { id: 'mysql-drop-db',           title: 'MySQL Drop DB' },
      { id: 'mysql-create-table',      title: 'MySQL Create Table' },
      { id: 'mysql-drop-table',        title: 'MySQL Drop Table' },
      { id: 'mysql-alter-table',       title: 'MySQL Alter Table' },
      { id: 'mysql-constraints',       title: 'MySQL Constraints' },
      { id: 'mysql-not-null',          title: 'MySQL Not Null' },
      { id: 'mysql-unique',            title: 'MySQL Unique' },
      { id: 'mysql-primary-key',       title: 'MySQL Primary Key' },
      { id: 'mysql-foreign-key',       title: 'MySQL Foreign Key' },
      { id: 'mysql-check',             title: 'MySQL Check' },
      { id: 'mysql-default',           title: 'MySQL Default' },
      { id: 'mysql-create-index',      title: 'MySQL Create Index' },
      { id: 'mysql-auto-increment',    title: 'MySQL Auto Increment' },
      { id: 'mysql-dates',             title: 'MySQL Dates' },
      { id: 'mysql-views',             title: 'MySQL Views' },
      { id: 'mysql-injection',         title: 'MySQL Injection' },
      { id: 'mysql-prepared-stmt',     title: 'MySQL Prepared Statements' },
    ]
  },
  {
    id: 'mysql-mod-4', title: 'MySQL Cert',
    lessons: [
      { id: 'mysql-certificate',     title: 'MySQL Certificate' },
    ]
  },
  {
    id: 'mysql-mod-5', title: 'MySQL References',
    lessons: [
      { id: 'mysql-data-types',      title: 'MySQL Data Types' },
      { id: 'mysql-functions',       title: 'MySQL Functions' },
    ]
  },
  {
    id: 'mysql-mod-6', title: 'MySQL Examples',
    lessons: [
      { id: 'mysql-examples',        title: 'MySQL Examples' },
      { id: 'mysql-editor',          title: 'MySQL Editor' },
      { id: 'mysql-quiz',            title: 'MySQL Quiz' },
      { id: 'mysql-exercises',       title: 'MySQL Exercises' },
      { id: 'mysql-syllabus',        title: 'MySQL Syllabus' },
      { id: 'mysql-study-plan',      title: 'MySQL Study Plan' },
    ]
  }
];

export const mysqlLessonsData: Record<string, any> = {
  "mysql-home": {
  "courseId": "mysql",
  "title": "MySQL HOME",
  "chapter": "MySQL Tutorial",
  "color": "teal",
  "theory": "<h2>MySQL Home</h2><p>Selamat datang di materi pembelajaran MySQL. MySQL adalah sistem manajemen basis data relasional (RDBMS) yang populer dan open-source. Materi ini akan memandu Anda mulai dari pengenalan hingga perintah dasar SQL.</p>",
  "code": "",
  "quiz": {
    "question": "Apa itu MySQL?",
    "options": [
      "Sebuah bahasa pemrograman.",
      "Sistem manajemen basis data relasional.",
      "Sebuah framework web.",
      "Alat untuk desain grafis."
    ],
    "correctIndex": 1,
    "explanation": "MySQL adalah Sistem Manajemen Basis Data Relasional (RDBMS) yang digunakan untuk menyimpan, mengelola, dan mengambil data."
  },
  "prevPath": null,
  "nextPath": "mysql-intro"
},
  "mysql-intro": {
  "courseId": "mysql",
  "title": "MySQL Intro",
  "chapter": "MySQL Tutorial",
  "color": "teal",
  "theory": "<h2>Pengenalan MySQL</h2><p>MySQL adalah salah satu RDBMS paling populer di dunia. Dikenal karena kecepatan, keandalan, dan kemudahan penggunaannya. MySQL digunakan dalam berbagai aplikasi, mulai dari situs web sederhana hingga aplikasi perusahaan yang kompleks.</p><p>Beberapa keuntungan menggunakan MySQL:</p><ul><li>Open-source dan gratis (untuk edisi Community).</li><li>Performa tinggi.</li><li>Skalabilitas yang baik.</li><li>Dukungan komunitas yang luas.</li></ul>",
  "code": "",
  "quiz": {
    "question": "Manakah dari berikut ini yang BUKAN merupakan keuntungan utama MySQL?",
    "options": [
      "Open-source.",
      "Performa tinggi.",
      "Kurva belajar yang sangat sulit.",
      "Dukungan komunitas yang luas."
    ],
    "correctIndex": 2,
    "explanation": "MySQL dikenal karena kemudahan penggunaannya dan kurva belajarnya yang relatif landai, bukan sangat sulit."
  },
  "prevPath": "mysql-home",
  "nextPath": "mysql-rdbms"
},
  "mysql-rdbms": {
  "courseId": "mysql",
  "title": "MySQL RDBMS",
  "chapter": "MySQL Tutorial",
  "color": "teal",
  "theory": "<h2>Apa itu RDBMS?</h2><p>RDBMS adalah singkatan dari Relational Database Management System. Ini adalah sistem manajemen basis data yang didasarkan pada model relasional, yang diperkenalkan oleh E.F. Codd. Dalam model relasional, data disimpan dalam tabel yang terdiri dari baris dan kolom. Tabel-tabel ini dapat dihubungkan satu sama lain menggunakan kunci primer dan kunci asing.</p><p>Fitur utama RDBMS:</p><ul><li><strong>Struktur Tabel:</strong> Data diorganisir dalam tabel (relasi).</li><li><strong>Hubungan:</strong> Tabel dapat saling berhubungan.</li><li><strong>Integritas Data:</strong> Aturan untuk memastikan akurasi dan konsistensi data.</li><li><strong>SQL:</strong> Bahasa standar untuk berinteraksi dengan RDBMS.</li></ul>",
  "code": "",
  "quiz": {
    "question": "Dalam RDBMS, data biasanya diorganisir dalam bentuk apa?",
    "options": [
      "File teks.",
      "Tabel yang terdiri dari baris dan kolom.",
      "Objek JSON.",
      "Grafik."
    ],
    "correctIndex": 1,
    "explanation": "Dalam model relasional yang digunakan oleh RDBMS, data diorganisir dalam struktur tabel."
  },
  "prevPath": "mysql-intro",
  "nextPath": null
},
  "mysql-sql-intro": {
  "courseId": "mysql",
  "title": "MySQL SQL",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>Pengenalan SQL</h2><p>SQL (Structured Query Language) adalah bahasa standar yang digunakan untuk mengelola dan memanipulasi basis data. Hampir semua RDBMS, termasuk MySQL, menggunakan SQL untuk berinteraksi dengan basis data.</p><p>Perintah SQL dapat dikategorikan menjadi:</p><ul><li><strong>DDL (Data Definition Language):</strong> Untuk mendefinisikan struktur basis data (misalnya, CREATE, ALTER, DROP).</li><li><strong>DML (Data Manipulation Language):</strong> Untuk memanipulasi data (misalnya, SELECT, INSERT, UPDATE, DELETE).</li><li><strong>DCL (Data Control Language):</strong> Untuk mengontrol akses ke data (misalnya, GRANT, REVOKE).</li><li><strong>TCL (Transaction Control Language):</strong> Untuk mengelola transaksi (misalnya, COMMIT, ROLLBACK).</li></ul><p>Dalam materi ini, kita akan fokus pada perintah DML, khususnya perintah SELECT.</p>",
  "code": "",
  "quiz": {
    "question": "Bahasa standar apa yang digunakan untuk berinteraksi dengan basis data relasional seperti MySQL?",
    "options": [
      "Python",
      "Java",
      "SQL",
      "HTML"
    ],
    "correctIndex": 2,
    "explanation": "SQL (Structured Query Language) adalah bahasa standar yang digunakan untuk mengelola basis data relasional."
  },
  "prevPath": null,
  "nextPath": "mysql-select"
},
  "mysql-select": {
  "courseId": "mysql",
  "title": "MySQL SELECT",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>Perintah SELECT</h2><p>Perintah <code>SELECT</code> digunakan untuk mengambil data dari satu atau lebih tabel dalam basis data. Ini adalah salah satu perintah SQL yang paling sering digunakan.</p><p>Sintaks dasar <code>SELECT</code> adalah:</p><p><code>SELECT column1, column2, ... FROM table_name;</code></p><p>Untuk memilih semua kolom dari sebuah tabel, Anda bisa menggunakan tanda bintang (<code>*</code>):</p><p><code>SELECT * FROM table_name;</code></p>",
  "code": "SELECT * FROM customers;",
  "quiz": {
    "question": "Perintah SQL manakah yang digunakan untuk mengambil data dari tabel?",
    "options": [
      "INSERT",
      "UPDATE",
      "DELETE",
      "SELECT"
    ],
    "correctIndex": 3,
    "explanation": "Perintah SELECT digunakan untuk mengambil (memilih) data dari satu atau lebih tabel."
  },
  "prevPath": "mysql-sql-intro",
  "nextPath": "mysql-select-distinct"
},
  "mysql-select-distinct": {
  "courseId": "mysql",
  "title": "MySQL SELECT DISTINCT",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>Perintah SELECT DISTINCT</h2><p>Kata kunci <code>DISTINCT</code> digunakan bersama dengan <code>SELECT</code> untuk mengembalikan hanya nilai-nilai yang unik (berbeda) dalam kolom yang ditentukan. Ini berguna ketika Anda ingin menghindari duplikasi dalam hasil query Anda.</p><p>Sintaks:</p><p><code>SELECT DISTINCT column1, column2, ... FROM table_name;</code></p><p>Contoh:</p><p><code>SELECT DISTINCT country FROM customers;</code> Akan menampilkan daftar negara yang unik dari tabel customers.</p>",
  "code": "SELECT DISTINCT city FROM employees;",
  "quiz": {
    "question": "Apa fungsi kata kunci DISTINCT dalam perintah SELECT?",
    "options": [
      "Untuk menampilkan semua baris, termasuk duplikat.",
      "Untuk mengurutkan hasil secara descending.",
      "Untuk mengembalikan hanya nilai-nilai unik (berbeda).",
      "Untuk memfilter data berdasarkan kondisi tertentu."
    ],
    "correctIndex": 2,
    "explanation": "DISTINCT digunakan untuk menghilangkan baris duplikat dari hasil query, sehingga hanya nilai-nilai unik yang ditampilkan."
  },
  "prevPath": "mysql-select",
  "nextPath": "mysql-where"
},
  "mysql-where": {
  "courseId": "mysql",
  "title": "MySQL WHERE",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>Perintah WHERE</h2><p>Klausa <code>WHERE</code> digunakan untuk memfilter record. Ini hanya mengambil record yang memenuhi kondisi yang ditentukan. Jika Anda menghilangkan klausa <code>WHERE</code>, pernyataan <code>SELECT</code> akan menampilkan semua record di tabel.</p><p>Sintaks:</p><p><code>SELECT column1, column2, ... FROM table_name WHERE condition;</code></p><p>Contoh:</p><p><code>SELECT name, email FROM users WHERE country = 'Indonesia';</code> Akan mengambil nama dan email dari pengguna yang berasal dari Indonesia.</p>",
  "code": "SELECT product_name FROM products WHERE price > 10000;",
  "quiz": {
    "question": "Klausa mana yang digunakan untuk memfilter baris berdasarkan kondisi tertentu dalam query SQL?",
    "options": [
      "SELECT",
      "FROM",
      "WHERE",
      "ORDER BY"
    ],
    "correctIndex": 2,
    "explanation": "Klausa WHERE digunakan untuk menentukan kondisi yang harus dipenuhi agar sebuah baris disertakan dalam hasil query."
  },
  "prevPath": "mysql-select-distinct",
  "nextPath": "mysql-order-by"
},
  "mysql-order-by": {
  "courseId": "mysql",
  "title": "MySQL ORDER BY",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>Perintah ORDER BY</h2><p>Klausa <code>ORDER BY</code> digunakan untuk mengurutkan hasil dari sebuah query. Anda bisa mengurutkan berdasarkan satu atau lebih kolom, baik secara ascending (ASC) atau descending (DESC).</p><p>Sintaks:</p><p><code>SELECT column1, column2, ... FROM table_name ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;</code></p><p><code>ASC</code> adalah default (urutan naik). <code>DESC</code> untuk urutan turun.</p><p>Contoh:</p><p><code>SELECT name, age FROM users ORDER BY age DESC;</code> Akan mengurutkan pengguna berdasarkan usia dari yang tertua ke termuda.</p>",
  "code": "SELECT customer_name, signup_date FROM customers ORDER BY signup_date ASC;",
  "quiz": {
    "question": "Bagaimana cara mengurutkan hasil query berdasarkan kolom 'nama' secara descending?",
    "options": [
      "SELECT * FROM table ORDER BY nama ASC;",
      "SELECT * FROM table WHERE nama DESC;",
      "SELECT * FROM table ORDER BY nama DESC;",
      "SELECT * FROM table GROUP BY nama DESC;"
    ],
    "correctIndex": 2,
    "explanation": "Klausa ORDER BY dengan kata kunci DESC digunakan untuk mengurutkan hasil secara descending."
  },
  "prevPath": "mysql-where",
  "nextPath": "mysql-and"
},
  "mysql-and": {
  "courseId": "mysql",
  "title": "MySQL AND",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>Operator AND</h2><p>Operator <code>AND</code> digunakan dalam klausa <code>WHERE</code> untuk menggabungkan dua atau lebih kondisi. Semua kondisi harus bernilai BENAR (TRUE) agar baris dimasukkan dalam hasil.</p><p>Sintaks:</p><p><code>SELECT column1, column2, ... FROM table_name WHERE condition1 AND condition2 AND condition3 ...;</code></p><p>Contoh:</p><p><code>SELECT product_name FROM products WHERE category = 'Electronics' AND price < 500;</code> Akan mengambil nama produk yang termasuk dalam kategori 'Electronics' DAN harganya kurang dari 500.</p>",
  "code": "SELECT * FROM orders WHERE status = 'Shipped' AND order_date >= '2023-01-01';",
  "quiz": {
    "question": "Operator SQL manakah yang mengharuskan SEMUA kondisi terpenuhi agar sebuah baris dipilih?",
    "options": [
      "OR",
      "NOT",
      "AND",
      "XOR"
    ],
    "correctIndex": 2,
    "explanation": "Operator AND memastikan bahwa semua kondisi yang digabungkan dengannya harus bernilai TRUE agar hasil query mencakup baris tersebut."
  },
  "prevPath": "mysql-order-by",
  "nextPath": "mysql-or"
},
  "mysql-or": {
  "courseId": "mysql",
  "title": "MySQL OR",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>Operator OR</h2><p>Operator <code>OR</code> digunakan dalam klausa <code>WHERE</code> untuk menggabungkan dua atau lebih kondisi. Minimal SATU kondisi harus bernilai BENAR (TRUE) agar baris dimasukkan dalam hasil.</p><p>Sintaks:</p><p><code>SELECT column1, column2, ... FROM table_name WHERE condition1 OR condition2 OR condition3 ...;</code></p><p>Contoh:</p><p><code>SELECT customer_name FROM customers WHERE country = 'USA' OR country = 'Canada';</code> Akan mengambil nama pelanggan yang berasal dari USA ATAU Kanada.</p>",
  "code": "SELECT * FROM employees WHERE department = 'Sales' OR department = 'Marketing';",
  "quiz": {
    "question": "Operator SQL manakah yang akan memilih baris jika SALAH SATU dari kondisi yang digabungkan terpenuhi?",
    "options": [
      "AND",
      "OR",
      "LIKE",
      "IN"
    ],
    "correctIndex": 1,
    "explanation": "Operator OR mengembalikan baris jika setidaknya salah satu kondisi yang diuji bernilai TRUE."
  },
  "prevPath": "mysql-and",
  "nextPath": "mysql-not"
},
  "mysql-not": {
  "courseId": "mysql",
  "title": "MySQL NOT",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL NOT Operator</h2><p>Operator <code>NOT</code> digunakan untuk membalikkan hasil dari kondisi Boolean. Ini berarti <code>NOT</code> digunakan untuk mengembalikan semua baris KECUALI baris yang mengembalikan nilai yang ditentukan dalam kondisi. Ini dapat digunakan dalam klausa <code>WHERE</code> dari pernyataan SQL seperti <code>SELECT</code>, <code>UPDATE</code>, dan <code>DELETE</code>.</p>",
  "code": "SELECT * FROM Customers WHERE NOT Country = 'Mexico';",
  "quiz": {
    "question": "Manakah pernyataan SQL yang benar untuk memilih semua pelanggan yang TIDAK berasal dari Jerman?",
    "options": [
      "SELECT * FROM Customers WHERE Country <> 'Germany';",
      "SELECT * FROM Customers WHERE NOT Country = 'Germany';",
      "SELECT * FROM Customers WHERE Country IS NOT 'Germany';",
      "SELECT * FROM Customers WHERE Country != 'Germany';"
    ],
    "correctIndex": 1,
    "explanation": "Operator NOT membalikkan kondisi Boolean. Klausa WHERE NOT Country = 'Germany' akan mengembalikan baris di mana Country BUKAN 'Germany'."
  },
  "prevPath": "mysql-or",
  "nextPath": "mysql-insert-into"
},
  "mysql-insert-into": {
  "courseId": "mysql",
  "title": "MySQL INSERT INTO",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL INSERT INTO Statement</h2><p>Pernyataan <code>INSERT INTO</code> digunakan untuk menambahkan baris data baru ke dalam tabel dalam database MySQL. Anda dapat menentukan nilai untuk setiap kolom yang ingin Anda masukkan. Ada dua sintaks utama:</p><ul><li>Menentukan nama kolom dan nilai: <code>INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...);</code></li><li>Jika Anda memasukkan nilai untuk semua kolom dalam urutan yang sama seperti yang didefinisikan dalam tabel, Anda dapat menghilangkan nama kolom: <code>INSERT INTO table_name VALUES (value1, value2, value3, ...);</code></li></ul>",
  "code": "INSERT INTO Customers (CustomerName, ContactName, Country)\nVALUES ('Cardinal', 'Tom B. Smith', 'USA');",
  "quiz": {
    "question": "Sintaks mana yang benar untuk menyisipkan data ke dalam tabel 'Produk' dengan nilai 'Laptop' untuk 'NamaProduk' dan 1200 untuk 'Harga'?",
    "options": [
      "INSERT INTO Produk (NamaProduk, Harga) VALUES ('Laptop', 1200);",
      "INSERT INTO Produk VALUES ('Laptop', 1200);",
      "INSERT INTO Produk SET NamaProduk = 'Laptop', Harga = 1200;",
      "INSERT Produk ('Laptop', 1200) INTO Produk;"
    ],
    "correctIndex": 0,
    "explanation": "Sintaks yang benar menentukan nama kolom yang akan diisi dan nilai yang sesuai."
  },
  "prevPath": "mysql-not",
  "nextPath": "mysql-null-values"
},
  "mysql-null-values": {
  "courseId": "mysql",
  "title": "MySQL NULL Values",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL NULL Values</h2><p>Kolom dalam tabel MySQL dapat berisi nilai <code>NULL</code>. Nilai <code>NULL</code> berarti kolom tersebut kosong atau tidak memiliki nilai. Penting untuk dicatat bahwa <code>NULL</code> berbeda dari nilai kosong (misalnya string kosong '') atau angka nol (0). Anda dapat menguji nilai <code>NULL</code> menggunakan operator <code>IS NULL</code> atau <code>IS NOT NULL</code>.</p>",
  "code": "SELECT CustomerName FROM Customers WHERE ContactName IS NULL;",
  "quiz": {
    "question": "Manakah pernyataan SQL yang benar untuk memilih semua pelanggan yang memiliki nilai NULL di kolom 'Kota'?",
    "options": [
      "SELECT * FROM Customers WHERE City = NULL;",
      "SELECT * FROM Customers WHERE City IS NULL;",
      "SELECT * FROM Customers WHERE City = '';",
      "SELECT * FROM Customers WHERE City IS NOT NULL;"
    ],
    "correctIndex": 1,
    "explanation": "Untuk memeriksa apakah suatu kolom berisi nilai NULL, Anda harus menggunakan operator 'IS NULL'."
  },
  "prevPath": "mysql-insert-into",
  "nextPath": "mysql-update"
},
  "mysql-update": {
  "courseId": "mysql",
  "title": "MySQL UPDATE",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL UPDATE Statement</h2><p>Pernyataan <code>UPDATE</code> digunakan untuk memodifikasi data yang ada dalam tabel. Anda dapat memperbarui satu atau beberapa baris sekaligus. Sangat penting untuk menggunakan klausa <code>WHERE</code> saat memperbarui data. Jika Anda tidak menggunakan <code>WHERE</code>, SEMUA baris dalam tabel akan diperbarui!</p>",
  "code": "UPDATE Customers\nSET ContactName = 'Alfred Schmidt', City = 'Frankfurt'\nWHERE CustomerName = 'Alfreds Futterkiste';",
  "quiz": {
    "question": "Perintah SQL manakah yang akan memperbarui harga produk bernama 'Keyboard' menjadi 75?",
    "options": [
      "UPDATE Produk SET Harga = 75 WHERE NamaProduk = 'Keyboard';",
      "UPDATE Produk SET NamaProduk = 'Keyboard' WHERE Harga = 75;",
      "UPDATE Produk SET Harga = 'Keyboard' WHERE NamaProduk = 75;",
      "UPDATE Produk WHERE NamaProduk = 'Keyboard' SET Harga = 75;"
    ],
    "correctIndex": 0,
    "explanation": "Klausa SET menentukan kolom mana yang akan diperbarui dan nilai baru, sedangkan klausa WHERE menentukan baris mana yang akan diperbarui."
  },
  "prevPath": "mysql-null-values",
  "nextPath": "mysql-delete"
},
  "mysql-delete": {
  "courseId": "mysql",
  "title": "MySQL DELETE",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL DELETE Statement</h2><p>Pernyataan <code>DELETE</code> digunakan untuk menghapus baris yang ada dari tabel. Mirip dengan pernyataan <code>UPDATE</code>, sangat penting untuk menggunakan klausa <code>WHERE</code> saat menghapus data. Jika Anda tidak menggunakan <code>WHERE</code>, SEMUA baris dalam tabel akan dihapus!</p><p>Untuk menghapus semua baris dari sebuah tabel, tetapi tabel itu sendiri tetap ada, Anda dapat menggunakan <code>DELETE FROM table_name;</code> atau <code>TRUNCATE TABLE table_name;</code>.</p>",
  "code": "DELETE FROM Customers WHERE CustomerName = 'Alfreds Futterkiste';",
  "quiz": {
    "question": "Manakah pernyataan SQL yang benar untuk menghapus semua pesanan dengan ID pesanan lebih besar dari 1000?",
    "options": [
      "DELETE FROM Orders WHERE OrderID > 1000;",
      "DELETE Orders WHERE OrderID > 1000;",
      "DELETE FROM Orders WHERE OrderID < 1000;",
      "DELETE FROM Orders WHERE OrderID = 1000;"
    ],
    "correctIndex": 0,
    "explanation": "Klausa WHERE menentukan baris mana yang akan dihapus. 'DELETE FROM NamaTabel WHERE Kondisi;' adalah sintaks yang benar."
  },
  "prevPath": "mysql-update",
  "nextPath": "mysql-limit"
},
  "mysql-limit": {
  "courseId": "mysql",
  "title": "MySQL LIMIT",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL LIMIT Clause</h2><p>Klausa <code>LIMIT</code> digunakan untuk membatasi jumlah baris yang dikembalikan oleh pernyataan <code>SELECT</code>. Ini sangat berguna ketika Anda hanya perlu menampilkan sejumlah kecil data, misalnya, untuk menampilkan 5 produk teratas. Anda dapat menentukan satu argumen (jumlah baris) atau dua argumen (offset, jumlah baris).</p>",
  "code": "SELECT * FROM Products\nORDER BY Price DESC\nLIMIT 5;",
  "quiz": {
    "question": "Manakah pernyataan SQL yang akan mengembalikan 10 pelanggan teratas dari tabel 'Pelanggan'?",
    "options": [
      "SELECT * FROM Pelanggan LIMIT 10;",
      "SELECT * FROM Pelanggan ORDER BY CustomerID DESC LIMIT 10;",
      "SELECT * FROM Pelanggan LIMIT 0, 10;",
      "SELECT * FROM Pelanggan ORDER BY 10 DESC;"
    ],
    "correctIndex": 1,
    "explanation": "Untuk mendapatkan 10 pelanggan teratas, Anda perlu mengurutkan data (misalnya berdasarkan ID) dan kemudian menggunakan LIMIT 10."
  },
  "prevPath": "mysql-delete",
  "nextPath": "mysql-aggregate-func"
},
  "mysql-aggregate-func": {
  "courseId": "mysql",
  "title": "MySQL Aggregate Functions",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL Aggregate Functions</h2><p>Fungsi agregat melakukan perhitungan pada sekumpulan nilai dan mengembalikan satu nilai tunggal. Fungsi-fungsi ini sering digunakan dengan klausa <code>GROUP BY</code> untuk melakukan perhitungan pada subset data. Beberapa fungsi agregat umum meliputi <code>COUNT()</code>, <code>SUM()</code>, <code>AVG()</code>, <code>MIN()</code>, dan <code>MAX()</code>.</p>",
  "code": "SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;",
  "quiz": {
    "question": "Fungsi mana yang digunakan untuk menghitung jumlah baris dalam sebuah tabel?",
    "options": [
      "SUM()",
      "AVG()",
      "COUNT()",
      "MAX()"
    ],
    "correctIndex": 2,
    "explanation": "Fungsi COUNT() digunakan untuk menghitung jumlah baris yang memenuhi kriteria tertentu atau jumlah baris dalam sebuah grup."
  },
  "prevPath": "mysql-limit",
  "nextPath": "mysql-min"
},
  "mysql-min": {
  "courseId": "mysql",
  "title": "MySQL MIN()",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL MIN() Function</h2><p>Fungsi <code>MIN()</code> mengembalikan nilai terkecil dari kolom yang dipilih. Anda dapat menggunakan fungsi ini pada kolom numerik, tanggal, atau string. Jika ada nilai <code>NULL</code> dalam kolom, fungsi ini akan mengabaikannya.</p>",
  "code": "SELECT MIN(Price) AS SmallestPrice FROM Products;",
  "quiz": {
    "question": "Manakah pernyataan SQL yang akan menemukan harga terendah dari semua produk?",
    "options": [
      "SELECT MIN(Price) FROM Products;",
      "SELECT Price FROM Products ORDER BY Price ASC LIMIT 1;",
      "SELECT MIN(Price) FROM Products WHERE Price IS NOT NULL;",
      "All of the above"
    ],
    "correctIndex": 3,
    "explanation": "Semua opsi di atas akan secara efektif menemukan harga terendah. MIN() secara inheren mengabaikan NULL. Mengurutkan dan mengambil yang pertama juga akan berhasil."
  },
  "prevPath": "mysql-aggregate-func",
  "nextPath": "mysql-max"
},
  "mysql-max": {
  "courseId": "mysql",
  "title": "MySQL MAX()",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL MAX() Function</h2><p>Fungsi <code>MAX()</code> mengembalikan nilai terbesar dari kolom yang dipilih. Mirip dengan <code>MIN()</code>, fungsi ini dapat digunakan pada kolom numerik, tanggal, atau string dan mengabaikan nilai <code>NULL</code>.</p>",
  "code": "SELECT MAX(Price) AS HighestPrice FROM Products;",
  "quiz": {
    "question": "Manakah pernyataan SQL yang akan menemukan tanggal pesanan terbaru dari tabel 'Orders'?",
    "options": [
      "SELECT MAX(OrderDate) FROM Orders;",
      "SELECT OrderDate FROM Orders ORDER BY OrderDate DESC LIMIT 1;",
      "SELECT MAX(OrderDate) FROM Orders WHERE OrderDate IS NOT NULL;",
      "All of the above"
    ],
    "correctIndex": 3,
    "explanation": "Sama seperti MIN(), semua opsi ini akan menghasilkan tanggal pesanan terbaru. MAX() secara default mengabaikan NULL, dan mengurutkan lalu mengambil yang pertama juga valid."
  },
  "prevPath": "mysql-min",
  "nextPath": "mysql-count"
},
  "mysql-count": {
  "courseId": "mysql",
  "title": "MySQL COUNT()",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL COUNT() Function</h2><p>Fungsi <code>COUNT()</code> mengembalikan jumlah baris yang cocok dengan kriteria yang ditentukan. Anda dapat menghitung semua baris dengan <code>COUNT(*)</code>, atau Anda dapat menghitung baris yang memiliki nilai non-<code>NULL</code> dalam kolom tertentu dengan <code>COUNT(column_name)</code>.</p>",
  "code": "SELECT COUNT(*) AS NumberOfCustomers FROM Customers;",
  "quiz": {
    "question": "Manakah pernyataan SQL yang akan menghitung jumlah pelanggan di 'USA'?",
    "options": [
      "SELECT COUNT(*) FROM Customers WHERE Country = 'USA';",
      "SELECT COUNT(CustomerID) FROM Customers WHERE Country = 'USA';",
      "SELECT COUNT(Country) FROM Customers WHERE Country = 'USA';",
      "All of the above"
    ],
    "correctIndex": 3,
    "explanation": "Semua pernyataan ini akan memberikan hasil yang sama dalam kasus ini karena kita hanya menghitung baris di mana Country adalah 'USA', dan COUNT(*) atau COUNT(kolom_unik) atau COUNT(kolom_sama_dengan_filter) semuanya akan memberikan jumlah baris yang benar."
  },
  "prevPath": "mysql-max",
  "nextPath": "mysql-sum"
},
  "mysql-sum": {
  "courseId": "mysql",
  "title": "MySQL SUM()",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL SUM()</h2><p>Fungsi <code>SUM()</code> digunakan untuk menghitung total dari nilai-nilai dalam sebuah kolom numerik. Fungsi ini mengabaikan nilai NULL.</p>",
  "code": "SELECT SUM(nama_kolom) FROM nama_tabel;",
  "quiz": {
    "question": "Fungsi MySQL apa yang digunakan untuk menjumlahkan semua nilai dalam sebuah kolom?",
    "options": [
      "AVG()",
      "COUNT()",
      "SUM()",
      "MAX()"
    ],
    "correctIndex": 2,
    "explanation": "Fungsi SUM() digunakan untuk menghitung total penjumlahan nilai dalam sebuah kolom."
  },
  "prevPath": "mysql-count",
  "nextPath": "mysql-avg"
},
  "mysql-avg": {
  "courseId": "mysql",
  "title": "MySQL AVG()",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL AVG()</h2><p>Fungsi <code>AVG()</code> digunakan untuk menghitung nilai rata-rata dari nilai-nilai dalam sebuah kolom numerik. Fungsi ini mengabaikan nilai NULL.</p>",
  "code": "SELECT AVG(nama_kolom) FROM nama_tabel;",
  "quiz": {
    "question": "Fungsi MySQL apa yang digunakan untuk menghitung nilai rata-rata dari sebuah kolom?",
    "options": [
      "SUM()",
      "AVG()",
      "MIN()",
      "COUNT()"
    ],
    "correctIndex": 1,
    "explanation": "Fungsi AVG() digunakan untuk menghitung nilai rata-rata dari sekumpulan nilai."
  },
  "prevPath": "mysql-sum",
  "nextPath": "mysql-like"
},
  "mysql-like": {
  "courseId": "mysql",
  "title": "MySQL LIKE",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL LIKE</h2><p>Operator <code>LIKE</code> digunakan dalam klausa <code>WHERE</code> untuk mencari pola tertentu dalam sebuah kolom string. Ini adalah bagian penting dari pencarian teks yang fleksibel.</p>",
  "code": "SELECT nama_kolom1, nama_kolom2 FROM nama_tabel WHERE nama_kolom_string LIKE 'pola%';",
  "quiz": {
    "question": "Operator MySQL mana yang digunakan untuk mencocokkan pola string?",
    "options": [
      "IN",
      "BETWEEN",
      "LIKE",
      "AND"
    ],
    "correctIndex": 2,
    "explanation": "Operator LIKE digunakan untuk mencocokkan nilai string dengan pola yang ditentukan."
  },
  "prevPath": "mysql-avg",
  "nextPath": "mysql-wildcards"
},
  "mysql-wildcards": {
  "courseId": "mysql",
  "title": "MySQL Wildcards",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL Wildcards</h2><p>Wildcards digunakan bersama dengan operator <code>LIKE</code> untuk mencocokkan karakter tertentu dalam pencarian string. Dua wildcard utama adalah:</p><ul><li><code>%</code>: Mewakili nol, satu, atau beberapa karakter.</li><li><code>_</code>: Mewakili tepat satu karakter.</li></ul>",
  "code": "SELECT nama_kolom FROM nama_tabel WHERE nama_kolom LIKE 'A%';",
  "quiz": {
    "question": "Wildcard apa yang mewakili nol, satu, atau beberapa karakter dalam MySQL LIKE?",
    "options": [
      "?",
      "*",
      "%",
      "_"
    ],
    "correctIndex": 2,
    "explanation": "Tanda persen (%) digunakan sebagai wildcard untuk nol, satu, atau beberapa karakter."
  },
  "prevPath": "mysql-like",
  "nextPath": "mysql-in"
},
  "mysql-in": {
  "courseId": "mysql",
  "title": "MySQL IN",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL IN</h2><p>Operator <code>IN</code> memungkinkan Anda menentukan beberapa nilai dalam klausa <code>WHERE</code>. Ini adalah cara singkat untuk menulis beberapa kondisi <code>OR</code>.</p>",
  "code": "SELECT nama_kolom1, nama_kolom2 FROM nama_tabel WHERE nama_kolom IN (nilai1, nilai2, nilai3);",
  "quiz": {
    "question": "Operator MySQL mana yang memungkinkan Anda menentukan beberapa nilai dalam klausa WHERE?",
    "options": [
      "LIKE",
      "BETWEEN",
      "OR",
      "IN"
    ],
    "correctIndex": 3,
    "explanation": "Operator IN memungkinkan pencocokan nilai terhadap daftar nilai yang ditentukan."
  },
  "prevPath": "mysql-wildcards",
  "nextPath": "mysql-between"
},
  "mysql-between": {
  "courseId": "mysql",
  "title": "MySQL BETWEEN",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL BETWEEN</h2><p>Operator <code>BETWEEN</code> memilih nilai dalam rentang tertentu. Rentangnya inklusif, artinya nilai awal dan akhir juga termasuk.</p>",
  "code": "SELECT nama_kolom1, nama_kolom2 FROM nama_tabel WHERE nama_kolom BETWEEN nilai_awal AND nilai_akhir;",
  "quiz": {
    "question": "Operator MySQL mana yang digunakan untuk memilih nilai dalam rentang tertentu (inklusif)?",
    "options": [
      "IN",
      "LIKE",
      "RANGE",
      "BETWEEN"
    ],
    "correctIndex": 3,
    "explanation": "Operator BETWEEN digunakan untuk memilih nilai dalam rentang yang ditentukan, termasuk nilai batas."
  },
  "prevPath": "mysql-in",
  "nextPath": "mysql-aliases"
},
  "mysql-aliases": {
  "courseId": "mysql",
  "title": "MySQL Aliases",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL Aliases</h2><p>Alias tabel atau kolom digunakan untuk memberikan nama sementara pada tabel atau kolom dalam sebuah kueri SQL. Ini sangat berguna untuk membuat kueri lebih mudah dibaca, terutama saat menggunakan JOIN atau ekspresi kolom.</p>",
  "code": "SELECT nama_kolom AS alias_kolom FROM nama_tabel AS alias_tabel;",
  "quiz": {
    "question": "Kata kunci apa yang digunakan di MySQL untuk memberikan nama sementara pada kolom atau tabel?",
    "options": [
      "RENAME",
      "ALIAS",
      "AS",
      "NAME"
    ],
    "correctIndex": 2,
    "explanation": "Kata kunci AS digunakan untuk menetapkan alias ke kolom atau tabel."
  },
  "prevPath": "mysql-between",
  "nextPath": "mysql-joins"
},
  "mysql-joins": {
  "courseId": "mysql",
  "title": "MySQL Joins",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL Joins</h2><p><code>JOIN</code> digunakan untuk menggabungkan baris dari dua atau lebih tabel berdasarkan kolom terkait di antara mereka. Ini adalah konsep fundamental dalam basis data relasional.</p>",
  "code": "SELECT tabel1.kolom, tabel2.kolom FROM tabel1 JOIN tabel2 ON tabel1.kolom_kunci = tabel2.kolom_kunci;",
  "quiz": {
    "question": "Dalam MySQL, klausa apa yang digunakan untuk menggabungkan baris dari dua tabel atau lebih berdasarkan kolom terkait?",
    "options": [
      "UNION",
      "WHERE",
      "GROUP BY",
      "JOIN"
    ],
    "correctIndex": 3,
    "explanation": "Klausa JOIN digunakan untuk menggabungkan baris dari dua atau lebih tabel berdasarkan kolom yang cocok."
  },
  "prevPath": "mysql-aliases",
  "nextPath": "mysql-inner-join"
},
  "mysql-inner-join": {
  "courseId": "mysql",
  "title": "MySQL INNER JOIN",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL INNER JOIN</h2><p><code>INNER JOIN</code> mengembalikan semua baris ketika ada kecocokan di kedua tabel. Jika ada baris di salah satu tabel yang tidak memiliki kecocokan di tabel lain, baris tersebut akan dihapus dari hasil.</p>",
  "code": "SELECT * FROM tabel1 INNER JOIN tabel2 ON tabel1.kolom_kunci = tabel2.kolom_kunci;",
  "quiz": {
    "question": "Jenis JOIN mana yang hanya mengembalikan baris yang cocok di kedua tabel?",
    "options": [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL OUTER JOIN"
    ],
    "correctIndex": 2,
    "explanation": "INNER JOIN mengembalikan hanya baris yang memiliki nilai yang cocok di kedua tabel."
  },
  "prevPath": "mysql-joins",
  "nextPath": "mysql-left-join"
},
  "mysql-left-join": {
  "courseId": "mysql",
  "title": "MySQL LEFT JOIN",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL LEFT JOIN</h2><p><code>LEFT JOIN</code> (atau <code>LEFT OUTER JOIN</code>) mengembalikan semua baris dari tabel kiri, dan baris yang cocok dari tabel kanan. Jika tidak ada kecocokan, hasilnya adalah NULL di sisi kanan.</p>",
  "code": "SELECT * FROM tabel_kiri LEFT JOIN tabel_kanan ON tabel_kiri.kolom_kunci = tabel_kanan.kolom_kunci;",
  "quiz": {
    "question": "Jenis JOIN mana yang mengembalikan semua baris dari tabel kiri, dan baris yang cocok dari tabel kanan?",
    "options": [
      "INNER JOIN",
      "RIGHT JOIN",
      "LEFT JOIN",
      "CROSS JOIN"
    ],
    "correctIndex": 2,
    "explanation": "LEFT JOIN mengembalikan semua baris dari tabel kiri dan baris yang cocok dari tabel kanan. Jika tidak ada kecocokan, NULL akan dikembalikan untuk kolom dari tabel kanan."
  },
  "prevPath": "mysql-inner-join",
  "nextPath": "mysql-right-join"
},
  "mysql-right-join": {
  "courseId": "mysql",
  "title": "MySQL RIGHT JOIN",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL RIGHT JOIN</h2><p>MySQL <code>RIGHT JOIN</code> mengembalikan semua baris dari tabel kanan, dan baris yang cocok dari tabel kiri. Jika tidak ada kecocokan, hasilnya adalah NULL di sisi kiri.</p><ul><li><code>RIGHT JOIN</code> (atau <code>RIGHT OUTER JOIN</code>) digunakan untuk mengembalikan semua baris dari tabel kanan, dan baris yang cocok dari tabel kiri.</li><li>Jika tidak ada kecocokan untuk baris di tabel kiri, kolom dari tabel kiri akan bernilai <code>NULL</code>.</li></ul>",
  "code": "SELECT Customers.CustomerName, Orders.OrderID FROM Customers RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;",
  "quiz": {
    "question": "Perbedaan utama antara RIGHT JOIN dan LEFT JOIN adalah?",
    "options": [
      "RIGHT JOIN mengembalikan semua baris dari tabel kiri.",
      "RIGHT JOIN mengembalikan semua baris dari tabel kanan.",
      "RIGHT JOIN tidak bisa mengembalikan NULL.",
      "RIGHT JOIN hanya cocokkan baris yang sama persis."
    ],
    "correctIndex": 1,
    "explanation": "RIGHT JOIN mengembalikan semua baris dari tabel kanan dan baris yang cocok dari tabel kiri. Jika tidak ada kecocokan, sisi kiri akan bernilai NULL."
  },
  "prevPath": "mysql-left-join",
  "nextPath": "mysql-cross-join"
},
  "mysql-cross-join": {
  "courseId": "mysql",
  "title": "MySQL CROSS JOIN",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL CROSS JOIN</h2><p>MySQL <code>CROSS JOIN</code> menghasilkan produk Kartesian dari dua tabel. Ini berarti ia menggabungkan setiap baris dari tabel pertama dengan setiap baris dari tabel kedua.</p><ul><li><code>CROSS JOIN</code> tidak memerlukan klausa <code>ON</code>, meskipun bisa digunakan untuk memfilter hasil.</li><li>Hasilnya bisa sangat besar jika tabelnya memiliki banyak baris.</li></ul>",
  "code": "SELECT Products.ProductName, Colors.ColorName FROM Products CROSS JOIN Colors;",
  "quiz": {
    "question": "Apa yang dihasilkan oleh CROSS JOIN?",
    "options": [
      "Hanya baris yang cocok di kedua tabel.",
      "Produk Kartesian (setiap baris dari tabel pertama dengan setiap baris dari tabel kedua).",
      "Baris unik dari kedua tabel.",
      "Baris dari tabel kiri saja."
    ],
    "correctIndex": 1,
    "explanation": "CROSS JOIN menghasilkan produk Kartesian, menggabungkan setiap baris dari tabel pertama dengan setiap baris dari tabel kedua."
  },
  "prevPath": "mysql-right-join",
  "nextPath": "mysql-self-join"
},
  "mysql-self-join": {
  "courseId": "mysql",
  "title": "MySQL Self Join",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL Self Join</h2><p><code>Self Join</code> adalah join di mana sebuah tabel di-join dengan dirinya sendiri. Ini berguna ketika tabel memiliki kolom yang merujuk ke kolom lain di tabel yang sama.</p><ul><li>Gunakan alias untuk membedakan kedua instance dari tabel yang sama.</li><li>Biasanya digunakan untuk membandingkan baris dalam tabel yang sama.</li></ul>",
  "code": "SELECT A.EmployeeName, B.EmployeeName AS ManagerName FROM Employees A JOIN Employees B ON A.ManagerID = B.EmployeeID;",
  "quiz": {
    "question": "Kapan Anda akan menggunakan Self Join?",
    "options": [
      "Untuk menggabungkan dua tabel yang berbeda.",
      "Untuk membandingkan baris dalam tabel yang sama.",
      "Untuk menggabungkan semua baris tanpa kondisi.",
      "Untuk memfilter data berdasarkan tanggal."
    ],
    "correctIndex": 1,
    "explanation": "Self Join digunakan ketika Anda perlu membandingkan baris dalam tabel yang sama, misalnya untuk mencari hierarki atau hubungan antar data dalam satu tabel."
  },
  "prevPath": "mysql-cross-join",
  "nextPath": "mysql-union"
},
  "mysql-union": {
  "courseId": "mysql",
  "title": "MySQL UNION",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL UNION</h2><p><code>UNION</code> digunakan untuk menggabungkan hasil dari dua atau lebih pernyataan <code>SELECT</code>. Secara default, <code>UNION</code> menghapus baris duplikat dari hasil akhir.</p><ul><li>Semua pernyataan <code>SELECT</code> dalam <code>UNION</code> harus memiliki jumlah kolom yang sama.</li><li>Kolom dalam setiap pernyataan <code>SELECT</code> harus memiliki urutan dan tipe data yang sama.</li><li>Nama kolom dalam hasil akan diambil dari pernyataan <code>SELECT</code> pertama.</li></ul>",
  "code": "SELECT column_name FROM table1 UNION SELECT column_name FROM table2;",
  "quiz": {
    "question": "Apa fungsi utama UNION di MySQL?",
    "options": [
      "Menggabungkan tabel secara horizontal.",
      "Menggabungkan hasil dari dua SELECT dan menghapus duplikat.",
      "Menggabungkan tabel secara vertikal tanpa menghapus duplikat.",
      "Memfilter baris berdasarkan kondisi."
    ],
    "correctIndex": 1,
    "explanation": "UNION menggabungkan hasil dari dua atau lebih pernyataan SELECT dan secara otomatis menghapus baris duplikat."
  },
  "prevPath": "mysql-self-join",
  "nextPath": "mysql-union-all"
},
  "mysql-union-all": {
  "courseId": "mysql",
  "title": "MySQL UNION ALL",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL UNION ALL</h2><p><code>UNION ALL</code> mirip dengan <code>UNION</code>, tetapi tidak menghapus baris duplikat dari hasil akhir. Ini berarti semua baris dari semua pernyataan <code>SELECT</code> akan disertakan, termasuk duplikat.</p><ul><li><code>UNION ALL</code> umumnya lebih cepat daripada <code>UNION</code> karena tidak perlu melakukan pemrosesan untuk menghapus duplikat.</li><li>Persyaratan jumlah dan tipe kolom sama seperti <code>UNION</code>.</li></ul>",
  "code": "SELECT column_name FROM table1 UNION ALL SELECT column_name FROM table2;",
  "quiz": {
    "question": "Perbedaan utama antara UNION dan UNION ALL adalah?",
    "options": [
      "UNION ALL menghapus duplikat, UNION tidak.",
      "UNION menghapus duplikat, UNION ALL tidak.",
      "UNION hanya bisa digunakan untuk tabel dengan tipe data yang sama.",
      "UNION ALL tidak memerlukan klausa WHERE."
    ],
    "correctIndex": 1,
    "explanation": "Perbedaan utamanya adalah UNION ALL menyertakan semua baris, termasuk duplikat, sedangkan UNION menghapus baris duplikat."
  },
  "prevPath": "mysql-union",
  "nextPath": "mysql-group-by"
},
  "mysql-group-by": {
  "courseId": "mysql",
  "title": "MySQL GROUP BY",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL GROUP BY</h2><p>Klausa <code>GROUP BY</code> digunakan bersama dengan fungsi agregat (seperti <code>COUNT</code>, <code>MAX</code>, <code>MIN</code>, <code>SUM</code>, <code>AVG</code>) untuk mengelompokkan baris yang memiliki nilai yang sama dalam satu atau lebih kolom menjadi baris ringkasan.</p><ul><li><code>GROUP BY</code> mengelompokkan baris berdasarkan nilai dalam kolom yang ditentukan.</li><li>Fungsi agregat kemudian diterapkan pada setiap grup.</li><li>Setiap kolom dalam pernyataan <code>SELECT</code> harus berupa kolom yang dikelompokkan atau fungsi agregat.</li></ul>",
  "code": "SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;",
  "quiz": {
    "question": "Apa fungsi dari klausa GROUP BY?",
    "options": [
      "Mengurutkan hasil.",
      "Menggabungkan hasil dari dua tabel.",
      "Mengelompokkan baris yang memiliki nilai yang sama untuk dikalkulasi oleh fungsi agregat.",
      "Menyembunyikan baris duplikat."
    ],
    "correctIndex": 2,
    "explanation": "GROUP BY mengelompokkan baris berdasarkan nilai kolom tertentu agar fungsi agregat (seperti COUNT, SUM, AVG) dapat diterapkan pada setiap grup."
  },
  "prevPath": "mysql-union-all",
  "nextPath": "mysql-having"
},
  "mysql-having": {
  "courseId": "mysql",
  "title": "MySQL HAVING",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL HAVING</h2><p>Klausa <code>HAVING</code> digunakan untuk memfilter grup yang dibuat oleh klausa <code>GROUP BY</code>. Ini mirip dengan klausa <code>WHERE</code>, tetapi <code>WHERE</code> memfilter baris sebelum dikelompokkan, sedangkan <code>HAVING</code> memfilter grup setelah dikelompokkan.</p><ul><li><code>HAVING</code> hanya dapat digunakan jika ada klausa <code>GROUP BY</code>.</li><li><code>HAVING</code> digunakan untuk memfilter berdasarkan hasil fungsi agregat.</li></ul>",
  "code": "SELECT Country, COUNT(CustomerID) FROM Customers HAVING COUNT(CustomerID) > 5;",
  "quiz": {
    "question": "Kapan Anda menggunakan klausa HAVING?",
    "options": [
      "Untuk memfilter baris sebelum dikelompokkan.",
      "Untuk memfilter grup berdasarkan kondisi (seringkali melibatkan fungsi agregat).",
      "Untuk mengurutkan hasil secara menurun.",
      "Untuk menampilkan semua kolom dari tabel."
    ],
    "correctIndex": 1,
    "explanation": "HAVING digunakan untuk memfilter grup yang dihasilkan oleh GROUP BY, biasanya berdasarkan hasil dari fungsi agregat. WHERE digunakan untuk memfilter baris sebelum pengelompokan."
  },
  "prevPath": "mysql-group-by",
  "nextPath": "mysql-exists"
},
  "mysql-exists": {
  "courseId": "mysql",
  "title": "MySQL EXISTS",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL EXISTS</h2><p>Operator <code>EXISTS</code> digunakan untuk menguji apakah sebuah subkueri mengembalikan baris apa pun. Operator <code>EXISTS</code> mengembalikan TRUE jika subkueri mengembalikan satu atau lebih baris, dan FALSE jika subkueri tidak mengembalikan baris apa pun.</p><ul><li><code>EXISTS</code> sering digunakan dalam klausa <code>WHERE</code>.</li><li>Ini efisien karena berhenti segera setelah menemukan baris pertama yang cocok.</li></ul>",
  "code": "SELECT column_name FROM table_name WHERE EXISTS (SELECT column_name FROM table_name1 WHERE condition);",
  "quiz": {
    "question": "Apa hasil dari operator EXISTS?",
    "options": [
      "Jumlah baris yang dikembalikan oleh subkueri.",
      "Nilai pertama dari subkueri.",
      "TRUE jika subkueri mengembalikan setidaknya satu baris, FALSE jika tidak.",
      "NULL jika subkueri kosong."
    ],
    "correctIndex": 2,
    "explanation": "EXISTS mengembalikan TRUE jika subkueri mengembalikan satu atau lebih baris, dan FALSE jika tidak ada baris yang dikembalikan oleh subkueri."
  },
  "prevPath": "mysql-having",
  "nextPath": "mysql-any"
},
  "mysql-any": {
  "courseId": "mysql",
  "title": "MySQL ANY",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL ANY</h2><p>Operator <code>ANY</code> digunakan dalam klausa <code>WHERE</code> untuk mengembalikan nilai yang memenuhi kondisi yang ditentukan oleh perbandingan.</p><ul><li><code>ANY</code> mengharuskan nilai yang dibandingkan cocok dengan <code>SALAH SATU</code> nilai yang dikembalikan oleh subkueri.</li><li>Operator perbandingan yang umum digunakan dengan <code>ANY</code> adalah <code>= ANY</code>, <code>&lt;&gt; ANY</code>, <code>&gt; ANY</code>, <code>&lt; ANY</code>, <code>&gt;= ANY</code>, dan <code>&lt;= ANY</code>.</li></ul>",
  "code": "SELECT ProductName FROM Products WHERE ProductID = ANY (SELECT ProductID FROM OrderDetails WHERE Quantity &gt; 50);",
  "quiz": {
    "question": "Kapan kondisi dengan ANY akan bernilai TRUE?",
    "options": [
      "Jika nilai cocok dengan SEMUA nilai dalam subkueri.",
      "Jika nilai cocok dengan SALAH SATU nilai dalam subkueri.",
      "Jika subkueri mengembalikan nilai NULL.",
      "Jika subkueri kosong."
    ],
    "correctIndex": 1,
    "explanation": "Kondisi dengan ANY bernilai TRUE jika nilai yang dibandingkan cocok dengan setidaknya satu dari nilai-nilai yang dikembalikan oleh subkueri."
  },
  "prevPath": "mysql-exists",
  "nextPath": "mysql-all"
},
  "mysql-all": {
  "courseId": "mysql",
  "title": "MySQL ALL",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL ALL</h2><p>Operator <code>ALL</code> digunakan dalam klausa <code>WHERE</code> untuk mengembalikan nilai yang memenuhi semua kondisi yang ditentukan oleh perbandingan.</p><ul><li><code>ALL</code> mengharuskan nilai yang dibandingkan cocok dengan <code>SEMUA</code> nilai yang dikembalikan oleh subkueri.</li><li>Operator perbandingan yang umum digunakan dengan <code>ALL</code> adalah <code>= ALL</code>, <code>&lt;&gt; ALL</code>, <code>&gt; ALL</code>, <code>&lt; ALL</code>, <code>&gt;= ALL</code>, dan <code>&lt;= ALL</code>.</li></ul>",
  "code": "SELECT ProductName FROM Products WHERE ProductID = ALL (SELECT ProductID FROM OrderDetails WHERE Quantity &lt; 10);",
  "quiz": {
    "question": "Kapan kondisi dengan ALL akan bernilai TRUE?",
    "options": [
      "Jika nilai cocok dengan SALAH SATU nilai dalam subkueri.",
      "Jika nilai cocok dengan SEMUA nilai dalam subkueri.",
      "Jika subkueri mengembalikan nilai MAX.",
      "Jika subkueri mengembalikan nilai MIN."
    ],
    "correctIndex": 1,
    "explanation": "Kondisi dengan ALL bernilai TRUE jika nilai yang dibandingkan cocok dengan semua nilai yang dikembalikan oleh subkueri."
  },
  "prevPath": "mysql-any",
  "nextPath": "mysql-insert-select"
},
  "mysql-insert-select": {
  "courseId": "mysql",
  "title": "MySQL INSERT SELECT",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL INSERT SELECT</h2><p>Perintah <code>INSERT INTO ... SELECT</code> digunakan untuk menyalin data dari satu atau lebih tabel ke tabel lain. Ini adalah cara yang efisien untuk memindahkan atau menggandakan data.</p><ul><li>Sintaks dasar: <code>INSERT INTO target_table (kolom1, kolom2, ...) SELECT kolomA, kolomB, ... FROM source_table WHERE kondisi;</code></li><li>Jumlah kolom dan tipe data pada klausa <code>SELECT</code> harus sesuai dengan jumlah kolom dan tipe data pada klausa <code>INSERT INTO</code>.</li><li>Klausa <code>WHERE</code> bersifat opsional untuk memfilter baris yang akan disalin.</li></ul>",
  "code": "INSERT INTO pelanggan_baru (nama, email) SELECT nama_pelanggan, email_pelanggan FROM pelanggan_lama WHERE status = 'aktif';",
  "quiz": {
    "question": "Perintah SQL apa yang digunakan untuk menyalin data dari tabel 'asal' ke tabel 'tujuan'?",
    "options": [
      "INSERT INTO tujuan SELECT * FROM asal;",
      "COPY tujuan FROM asal;",
      "INSERT INTO tujuan (kolom) SELECT kolom FROM asal;",
      "SELECT * INTO tujuan FROM asal;"
    ],
    "correctIndex": 2,
    "explanation": "Perintah INSERT INTO ... SELECT memungkinkan penyalinan data dari satu tabel ke tabel lain, dengan opsi untuk menentukan kolom yang disalin."
  },
  "prevPath": "mysql-all",
  "nextPath": "mysql-case"
},
  "mysql-case": {
  "courseId": "mysql",
  "title": "MySQL CASE",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL CASE</h2><p><code>CASE</code> adalah pernyataan kondisional di MySQL yang memungkinkan Anda menulis logika IF-THEN-ELSE dalam pernyataan SQL. Ini sangat berguna dalam klausa <code>SELECT</code>, <code>WHERE</code>, atau <code>ORDER BY</code>.</p><ul><li><strong>Simple CASE:</strong> Membandingkan suatu ekspresi dengan serangkaian nilai.</li><li><strong>Searched CASE:</strong> Mengevaluasi sekumpulan ekspresi boolean.</li><li>Sintaks umum: <code>CASE WHEN kondisi1 THEN hasil1 WHEN kondisi2 THEN hasil2 ELSE hasil_default END</code></li></ul>",
  "code": "SELECT nama_produk, CASE WHEN harga > 100000 THEN 'Mahal' ELSE 'Murah' END AS kategori_harga FROM produk;",
  "quiz": {
    "question": "Bagaimana cara menggunakan pernyataan CASE untuk mengkategorikan nilai kolom 'skor' menjadi 'Baik' jika skor >= 80, dan 'Cukup' jika tidak?",
    "options": [
      "CASE WHEN skor >= 80 THEN 'Baik' ELSE 'Cukup' END",
      "IF skor >= 80 THEN 'Baik' ELSE 'Cukup' END",
      "CASE skor WHEN >= 80 THEN 'Baik' ELSE 'Cukup' END",
      "WHEN skor >= 80 THEN 'Baik' ELSE 'Cukup'"
    ],
    "correctIndex": 0,
    "explanation": "Pernyataan CASE WHEN ... THEN ... ELSE ... END adalah sintaks yang benar untuk logika kondisional di MySQL."
  },
  "prevPath": "mysql-insert-select",
  "nextPath": "mysql-null-func"
},
  "mysql-null-func": {
  "courseId": "mysql",
  "title": "MySQL Null Functions",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL Null Functions</h2><p>Fungsi-fungsi NULL di MySQL digunakan untuk menangani nilai-nilai NULL dalam data. Nilai NULL mewakili data yang hilang atau tidak diketahui.</p><ul><li><strong><code>IS NULL</code> / <code>IS NOT NULL</code>:</strong> Operator untuk memeriksa apakah suatu nilai adalah NULL atau bukan.</li><li><strong><code>COALESCE(arg1, arg2, ...)</code>:</strong> Mengembalikan argumen non-NULL pertama dalam daftar. Berguna untuk memberikan nilai default jika suatu kolom bernilai NULL.</li><li><strong><code>IFNULL(arg1, arg2)</code>:</strong> Mengembalikan <code>arg1</code> jika <code>arg1</code> tidak NULL, jika tidak, mengembalikan <code>arg2</code>. Mirip dengan <code>COALESCE</code> tetapi hanya untuk dua argumen.</li><li><strong><code>NULLIF(arg1, arg2)</code>:</strong> Mengembalikan NULL jika <code>arg1</code> sama dengan <code>arg2</code>, jika tidak, mengembalikan <code>arg1</code>.</li></ul>",
  "code": "SELECT nama, IFNULL(email, 'Tidak Ada Email') AS kontak_email FROM pengguna;",
  "quiz": {
    "question": "Fungsi mana yang mengembalikan argumen non-NULL pertama dari daftar argumennya?",
    "options": [
      "IFNULL",
      "COALESCE",
      "NULLIF",
      "IS NULL"
    ],
    "correctIndex": 1,
    "explanation": "COALESCE dirancang untuk mengembalikan argumen non-NULL pertama dari daftar argumen yang diberikan."
  },
  "prevPath": "mysql-case",
  "nextPath": "mysql-stored-proc"
},
  "mysql-stored-proc": {
  "courseId": "mysql",
  "title": "MySQL Stored Procedures",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL Stored Procedures</h2><p>Stored Procedure adalah sekumpulan pernyataan SQL yang disimpan di database. Prosedur ini dapat dipanggil dengan nama, sehingga mengurangi kebutuhan untuk menulis ulang kode yang sama berulang kali dan meningkatkan kinerja.</p><ul><li><strong>Keuntungan:</strong> Keamanan yang ditingkatkan, pengurangan lalu lintas jaringan, kinerja yang lebih baik, modularitas.</li><li><strong>Pernyataan Penting:</strong> <code>CREATE PROCEDURE</code>, <code>CALL</code>, <code>DELIMITER</code>, <code>IN</code>, <code>OUT</code>, <code>INOUT</code> parameter.</li><li><code>DELIMITER</code> digunakan untuk mengubah pemisah pernyataan SQL sementara, karena prosedur itu sendiri berisi titik koma (;).</li></ul>",
  "code": "DELIMITER //\nCREATE PROCEDURE DapatkanPelanggan(IN id_pelanggan INT)\nBEGIN\n  SELECT * FROM pelanggan WHERE id = id_pelanggan;\nEND //\nDELIMITER ;\nCALL DapatkanPelanggan(101);",
  "quiz": {
    "question": "Kata kunci apa yang digunakan untuk mengeksekusi Stored Procedure yang sudah ada?",
    "options": [
      "RUN",
      "EXECUTE",
      "CALL",
      "INVOKE"
    ],
    "correctIndex": 2,
    "explanation": "Perintah CALL digunakan untuk memanggil dan mengeksekusi Stored Procedure di MySQL."
  },
  "prevPath": "mysql-null-func",
  "nextPath": "mysql-comments"
},
  "mysql-comments": {
  "courseId": "mysql",
  "title": "MySQL Comments",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL Comments</h2><p>Komentar dalam MySQL digunakan untuk menambahkan penjelasan pada kode SQL. Komentar diabaikan oleh MySQL Server saat mengeksekusi query, tetapi sangat membantu bagi pengembang untuk memahami logika kode.</p><ul><li><strong>Tipe Komentar:</strong><ul><li>Komentar satu baris: Dimulai dengan <code>--</code> (perhatikan spasi setelah --) atau <code>#</code>.</li><li>Komentar multi-baris: Dimulai dengan <code>/*</code> dan diakhiri dengan <code>*/</code>.</li></ul></li><li>Komentar digunakan untuk menjelaskan tujuan query, parameter, atau bagian kode yang kompleks.</li></ul>",
  "code": "SELECT nama, email FROM pengguna; -- Memilih nama dan email dari tabel pengguna\n/*\nIni adalah\nkomentar multi-baris\nyang menjelaskan\nlebih detail.\n*/\nSELECT COUNT(*) FROM produk # Menghitung jumlah total produk",
  "quiz": {
    "question": "Bagaimana cara membuat komentar satu baris di MySQL?",
    "options": [
      "// Komentar",
      "/* Komentar */",
      "-- Komentar",
      "# Komentar"
    ],
    "correctIndex": 2,
    "explanation": "Tanda -- (diikuti spasi) atau # digunakan untuk komentar satu baris di MySQL. Komentar multi-baris menggunakan /* ... */."
  },
  "prevPath": "mysql-stored-proc",
  "nextPath": "mysql-operators"
},
  "mysql-operators": {
  "courseId": "mysql",
  "title": "MySQL Operators",
  "chapter": "MySQL SQL",
  "color": "teal",
  "theory": "<h2>MySQL Operators</h2><p>Operator di MySQL adalah simbol khusus yang digunakan untuk melakukan operasi pada nilai atau variabel. Operator ini digunakan dalam ekspresi SQL.</p><ul><li><strong>Operator Aritmatika:</strong> +, -, *, /, % (modulo)</li><li><strong>Operator Perbandingan:</strong> =, !=, <>, <, >, <=, >=, <code>BETWEEN</code>, <code>LIKE</code>, <code>IN</code>, <code>IS NULL</code>, <code>IS NOT NULL</code></li><li><strong>Operator Logika:</strong> <code>AND</code>, <code>OR</code>, <code>NOT</code></li><li><strong>Operator Lainnya:</strong> <code>ALL</code>, <code>ANY</code>, <code>EXISTS</code>, <code>IN</code>, <code>LIKE</code>, <code>SOME</code>, <code>UNION</code>, dll.</li><li>Operator digunakan dalam klausa WHERE, HAVING, SELECT, dan lainnya untuk memanipulasi dan memfilter data.</li></ul>",
  "code": "SELECT * FROM produk WHERE harga BETWEEN 50000 AND 100000 AND nama LIKE 'A%';",
  "quiz": {
    "question": "Operator mana yang digunakan untuk mencocokkan pola string?",
    "options": [
      "IN",
      "BETWEEN",
      "LIKE",
      "AND"
    ],
    "correctIndex": 2,
    "explanation": "Operator LIKE digunakan untuk pencocokan pola string menggunakan wildcard seperti % (nol atau lebih karakter) dan _ (satu karakter)."
  },
  "prevPath": "mysql-comments",
  "nextPath": null
},
  "mysql-create-db": {
  "courseId": "mysql",
  "title": "MySQL Create DB",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Create DB</h2><p>Perintah <code>CREATE DATABASE</code> digunakan untuk membuat database baru di server MySQL. Database adalah kontainer untuk tabel dan objek database lainnya.</p><ul><li>Sintaks: <code>CREATE DATABASE nama_database;</code></li><li>Opsional, Anda dapat menambahkan klausa <code>IF NOT EXISTS</code> untuk mencegah kesalahan jika database dengan nama yang sama sudah ada: <code>CREATE DATABASE IF NOT EXISTS nama_database;</code></li><li>Setelah database dibuat, Anda perlu memilihnya menggunakan perintah <code>USE nama_database;</code> sebelum membuat tabel di dalamnya.</li></ul>",
  "code": "CREATE DATABASE IF NOT EXISTS toko_online;",
  "quiz": {
    "question": "Perintah SQL untuk membuat database baru bernama 'perpustakaan' adalah:",
    "options": [
      "CREATE TABLE perpustakaan;",
      "NEW DATABASE perpustakaan;",
      "CREATE DATABASE perpustakaan;",
      "ADD DATABASE perpustakaan;"
    ],
    "correctIndex": 2,
    "explanation": "Sintaks yang benar untuk membuat database baru di MySQL adalah CREATE DATABASE nama_database."
  },
  "prevPath": null,
  "nextPath": "mysql-drop-db"
},
  "mysql-drop-db": {
  "courseId": "mysql",
  "title": "MySQL Drop DB",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Drop DB</h2><p>Perintah <code>DROP DATABASE</code> digunakan untuk menghapus database beserta seluruh isinya (tabel, data, dll.) dari server MySQL. Perintah ini bersifat destruktif dan harus digunakan dengan hati-hati.</p><ul><li>Sintaks: <code>DROP DATABASE nama_database;</code></li><li>Opsional, Anda dapat menambahkan klausa <code>IF EXISTS</code> untuk mencegah kesalahan jika database tidak ada: <code>DROP DATABASE IF EXISTS nama_database;</code></li><li>Pastikan Anda telah memilih database yang benar sebelum menghapus, atau tentukan nama database secara eksplisit.</li></ul>",
  "code": "DROP DATABASE IF EXISTS toko_lama;",
  "quiz": {
    "question": "Perintah manakah yang akan menghapus database 'arsip' dan semua isinya?",
    "options": [
      "DELETE DATABASE arsip;",
      "DROP DATABASE arsip;",
      "REMOVE DATABASE arsip;",
      "TRUNCATE DATABASE arsip;"
    ],
    "correctIndex": 1,
    "explanation": "Perintah DROP DATABASE digunakan untuk menghapus database beserta seluruh isinya di MySQL."
  },
  "prevPath": "mysql-create-db",
  "nextPath": "mysql-create-table"
},
  "mysql-create-table": {
  "courseId": "mysql",
  "title": "MySQL Create Table",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Create Table</h2><p>Perintah <code>CREATE TABLE</code> digunakan untuk membuat tabel baru di dalam database. Tabel digunakan untuk menyimpan data yang terstruktur dalam baris dan kolom.</p><ul><li>Sintaks dasar: <code>CREATE TABLE nama_tabel ( kolom1 tipe_data [batasan], kolom2 tipe_data [batasan], ... );</code></li><li><strong>Tipe Data Umum:</strong> <code>INT</code> (integer), <code>VARCHAR(panjang)</code> (string), <code>TEXT</code>, <code>DATE</code>, <code>DATETIME</code>, <code>DECIMAL(presisi, skala)</code>, <code>BOOLEAN</code>.</li><li><strong>Batasan Umum:</strong> <code>PRIMARY KEY</code> (kunci utama), <code>FOREIGN KEY</code> (kunci asing), <code>NOT NULL</code> (tidak boleh kosong), <code>UNIQUE</code> (unik), <code>AUTO_INCREMENT</code> (otomatis bertambah).</li></ul>",
  "code": "CREATE TABLE produk (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  nama VARCHAR(255) NOT NULL,\n  harga DECIMAL(10, 2),\n  stok INT DEFAULT 0\n);",
  "quiz": {
    "question": "Manakah dari berikut ini yang BUKAN tipe data MySQL yang umum?",
    "options": [
      "INT",
      "VARCHAR",
      "STRING",
      "DECIMAL"
    ],
    "correctIndex": 2,
    "explanation": "STRING bukan tipe data standar di MySQL. Tipe data yang umum digunakan untuk teks adalah VARCHAR atau TEXT."
  },
  "prevPath": "mysql-drop-db",
  "nextPath": "mysql-drop-table"
},
  "mysql-drop-table": {
  "courseId": "mysql",
  "title": "MySQL Drop Table",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Drop Table</h2><p>Perintah <code>DROP TABLE</code> digunakan untuk menghapus tabel beserta seluruh data dan strukturnya dari database. Perintah ini bersifat permanen dan tidak dapat dibatalkan.</p><ul><li>Sintaks: <code>DROP TABLE nama_tabel;</code></li><li>Opsional, Anda dapat menambahkan klausa <code>IF EXISTS</code> untuk mencegah kesalahan jika tabel tidak ada: <code>DROP TABLE IF EXISTS nama_tabel;</code></li><li>Menghapus tabel juga akan menghapus semua indeks, pemicu (trigger), dan batasan yang terkait dengannya.</li></ul>",
  "code": "DROP TABLE IF EXISTS pesanan_lama;",
  "quiz": {
    "question": "Perintah mana yang digunakan untuk menghapus tabel bernama 'pengguna' dan semua datanya?",
    "options": [
      "DELETE TABLE pengguna;",
      "REMOVE TABLE pengguna;",
      "DROP TABLE pengguna;",
      "CLEAR TABLE pengguna;"
    ],
    "correctIndex": 2,
    "explanation": "Perintah DROP TABLE adalah cara standar di SQL dan MySQL untuk menghapus tabel beserta seluruh isinya."
  },
  "prevPath": "mysql-create-table",
  "nextPath": "mysql-alter-table"
},
  "mysql-alter-table": {
  "courseId": "mysql",
  "title": "MySQL Alter Table",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Alter Table</h2><p>Perintah <code>ALTER TABLE</code> di MySQL digunakan untuk memodifikasi struktur tabel yang sudah ada. Ini mencakup penambahan kolom baru, penghapusan kolom, pengubahan tipe data kolom, penamaan ulang kolom, penambahan atau penghapusan constraint, dan banyak lagi.</p><ul><li>Menambah kolom baru: <code>ALTER TABLE nama_tabel ADD COLUMN nama_kolom tipe_data;</code></li><li>Menghapus kolom: <code>ALTER TABLE nama_tabel DROP COLUMN nama_kolom;</code></li><li>Mengubah tipe data kolom: <code>ALTER TABLE nama_tabel MODIFY COLUMN nama_kolom tipe_data_baru;</code></li><li>Mengganti nama kolom: <code>ALTER TABLE nama_tabel CHANGE COLUMN nama_lama nama_baru tipe_data;</code></li></ul>",
  "code": "ALTER TABLE pelanggan ADD COLUMN email VARCHAR(100);",
  "quiz": {
    "question": "Perintah SQL manakah yang digunakan untuk menambah kolom 'alamat' dengan tipe data VARCHAR(255) ke tabel 'karyawan'?",
    "options": [
      "ALTER TABLE karyawan DROP COLUMN alamat VARCHAR(255);",
      "ALTER TABLE karyawan ADD COLUMN alamat VARCHAR(255);",
      "CREATE TABLE karyawan ADD COLUMN alamat VARCHAR(255);",
      "MODIFY TABLE karyawan ADD COLUMN alamat VARCHAR(255);"
    ],
    "correctIndex": 1,
    "explanation": "Perintah ALTER TABLE dengan klausa ADD COLUMN digunakan untuk menambah kolom baru ke tabel yang sudah ada."
  },
  "prevPath": "mysql-drop-table",
  "nextPath": "mysql-constraints"
},
  "mysql-constraints": {
  "courseId": "mysql",
  "title": "MySQL Constraints",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Constraints</h2><p>Constraint adalah aturan yang diterapkan pada kolom data untuk membatasi tipe data yang dapat dimasukkan ke dalam tabel. Constraint memastikan akurasi dan keandalan data dalam database.</p><p>Jenis-jenis constraint utama di MySQL meliputi:</p><ul><li><code>NOT NULL</code>: Memastikan bahwa kolom tidak boleh berisi nilai NULL.</li><li><code>UNIQUE</code>: Memastikan bahwa semua nilai dalam kolom adalah unik.</li><li><code>PRIMARY KEY</code>: Kombinasi <code>UNIQUE</code> dan <code>NOT NULL</code>. Setiap tabel sebaiknya memiliki primary key.</li><li><code>FOREIGN KEY</code>: Menghubungkan data di satu tabel dengan data di tabel lain.</li><li><code>CHECK</code>: Memastikan bahwa nilai dalam kolom memenuhi kondisi tertentu. (Dukungan penuh sejak MySQL 8.0.16).</li><li><code>DEFAULT</code>: Menetapkan nilai default untuk kolom jika tidak ada nilai yang ditentukan saat penambahan baris.</li></ul>",
  "code": "CREATE TABLE produk (\n    id INT PRIMARY KEY,\n    nama VARCHAR(255) NOT NULL,\n    harga DECIMAL(10, 2) CHECK (harga >= 0)\n);",
  "quiz": {
    "question": "Constraint manakah yang memastikan bahwa setiap nilai dalam sebuah kolom harus berbeda dari nilai lainnya dalam kolom yang sama?",
    "options": [
      "NOT NULL",
      "PRIMARY KEY",
      "UNIQUE",
      "DEFAULT"
    ],
    "correctIndex": 2,
    "explanation": "Constraint UNIQUE memastikan bahwa semua nilai dalam kolom harus unik."
  },
  "prevPath": "mysql-alter-table",
  "nextPath": "mysql-not-null"
},
  "mysql-not-null": {
  "courseId": "mysql",
  "title": "MySQL Not Null",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Not Null</h2><p>Constraint <code>NOT NULL</code> memastikan bahwa sebuah kolom tidak boleh memiliki nilai NULL. Ini berguna untuk kolom yang wajib diisi, seperti nama pengguna atau tanggal pembuatan.</p><p>Ketika Anda membuat tabel atau memodifikasi tabel yang ada, Anda dapat menerapkan constraint <code>NOT NULL</code> pada kolom tertentu.</p>",
  "code": "CREATE TABLE pengguna (\n    id INT PRIMARY KEY,\n    username VARCHAR(50) NOT NULL,\n    email VARCHAR(100)\n);",
  "quiz": {
    "question": "Jika sebuah kolom didefinisikan sebagai NOT NULL, apa yang akan terjadi jika Anda mencoba memasukkan baris tanpa memberikan nilai untuk kolom tersebut?",
    "options": [
      "Nilai NULL akan dimasukkan secara otomatis.",
      "Baris akan dimasukkan dengan nilai default.",
      "Akan terjadi error dan baris tidak akan dimasukkan.",
      "Nilai akan diabaikan."
    ],
    "correctIndex": 2,
    "explanation": "Constraint NOT NULL mencegah nilai NULL dimasukkan. Jika tidak ada nilai yang diberikan, MySQL akan mengembalikan error."
  },
  "prevPath": "mysql-constraints",
  "nextPath": "mysql-unique"
},
  "mysql-unique": {
  "courseId": "mysql",
  "title": "MySQL Unique",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Unique</h2><p>Constraint <code>UNIQUE</code> memastikan bahwa semua nilai dalam sebuah kolom (atau kombinasi kolom) harus unik. Ini berarti tidak ada dua baris yang dapat memiliki nilai yang sama di kolom yang diberi constraint <code>UNIQUE</code>. Namun, kolom ini masih boleh berisi nilai NULL (hanya satu nilai NULL yang diizinkan jika kolom didefinisikan sebagai UNIQUE tunggal, atau beberapa nilai NULL jika itu adalah bagian dari unique constraint multi-kolom, tergantung versi MySQL dan konfigurasi).</p>",
  "code": "CREATE TABLE karyawan (\n    id INT PRIMARY KEY,\n    nomor_induk VARCHAR(20) UNIQUE,\n    nama VARCHAR(100)\n);",
  "quiz": {
    "question": "Manakah dari pernyataan berikut yang BENAR mengenai constraint UNIQUE di MySQL?",
    "options": [
      "Memungkinkan beberapa nilai NULL dalam kolom.",
      "Mencegah nilai NULL sama sekali.",
      "Hanya mengizinkan satu nilai NULL dalam kolom.",
      "Setiap baris harus memiliki nilai yang unik dan tidak NULL."
    ],
    "correctIndex": 2,
    "explanation": "Secara default, constraint UNIQUE mengizinkan satu nilai NULL. Jika Anda ingin semua nilai unik dan tidak NULL, Anda harus menggunakan PRIMARY KEY atau kombinasi UNIQUE NOT NULL."
  },
  "prevPath": "mysql-not-null",
  "nextPath": "mysql-primary-key"
},
  "mysql-primary-key": {
  "courseId": "mysql",
  "title": "MySQL Primary Key",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Primary Key</h2><p><code>PRIMARY KEY</code> adalah constraint yang secara unik mengidentifikasi setiap baris dalam sebuah tabel. Sebuah tabel hanya boleh memiliki satu <code>PRIMARY KEY</code>. Constraint ini secara otomatis memiliki properti <code>UNIQUE</code> dan <code>NOT NULL</code>.</p><p><code>PRIMARY KEY</code> sangat penting untuk integritas data dan sering digunakan untuk menghubungkan tabel menggunakan <code>FOREIGN KEY</code>.</p>",
  "code": "CREATE TABLE pesanan (\n    id_pesanan INT AUTO_INCREMENT PRIMARY KEY,\n    tanggal_pesanan DATE NOT NULL,\n    id_pelanggan INT\n);",
  "quiz": {
    "question": "Manakah dari pernyataan berikut yang paling akurat mendeskripsikan Primary Key di MySQL?",
    "options": [
      "Mengizinkan nilai duplikat tetapi tidak NULL.",
      "Mencegah nilai NULL dan memastikan keunikan setiap baris.",
      "Menetapkan nilai default untuk kolom.",
      "Menghubungkan tabel dengan tabel lain."
    ],
    "correctIndex": 1,
    "explanation": "Primary Key harus unik dan tidak boleh NULL, menjadikannya pengenal unik untuk setiap baris."
  },
  "prevPath": "mysql-unique",
  "nextPath": "mysql-foreign-key"
},
  "mysql-foreign-key": {
  "courseId": "mysql",
  "title": "MySQL Foreign Key",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Foreign Key</h2><p><code>FOREIGN KEY</code> adalah constraint yang digunakan untuk menautkan dua tabel. <code>FOREIGN KEY</code> di satu tabel merujuk pada <code>PRIMARY KEY</code> atau <code>UNIQUE</code> constraint di tabel lain. Ini menciptakan hubungan antar tabel dan memastikan integritas referensial, artinya Anda tidak dapat membuat entri di tabel 'anak' yang menunjuk ke entri yang tidak ada di tabel 'induk'.</p>",
  "code": "CREATE TABLE pesanan (\n    id_pesanan INT AUTO_INCREMENT PRIMARY KEY,\n    tanggal_pesanan DATE NOT NULL,\n    id_pelanggan INT,\n    FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id_pelanggan)\n);",
  "quiz": {
    "question": "Dalam konteks relasi database, apa fungsi utama dari Foreign Key?",
    "options": [
      "Memastikan keunikan data dalam tabel itu sendiri.",
      "Membuat kolom tidak boleh kosong.",
      "Membangun hubungan dan menjaga integritas data antar tabel.",
      "Menetapkan nilai default jika tidak ada data yang dimasukkan."
    ],
    "correctIndex": 2,
    "explanation": "Foreign Key digunakan untuk menautkan tabel dan memastikan bahwa data yang direferensikan di tabel lain memang ada, sehingga menjaga integritas referensial."
  },
  "prevPath": "mysql-primary-key",
  "nextPath": "mysql-check"
},
  "mysql-check": {
  "courseId": "mysql",
  "title": "MySQL Check",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Check</h2><p>Constraint <code>CHECK</code> digunakan untuk memastikan bahwa nilai dalam sebuah kolom memenuhi kondisi tertentu. Jika nilai yang dimasukkan tidak memenuhi kondisi ini, maka nilai tersebut tidak akan diizinkan. Dukungan penuh untuk <code>CHECK constraints</code> diperkenalkan di MySQL versi 8.0.16.</p><p>Contohnya, Anda bisa menggunakan <code>CHECK</code> untuk memastikan bahwa harga produk selalu positif atau usia pengguna tidak negatif.</p>",
  "code": "CREATE TABLE produk (\n    id INT PRIMARY KEY,\n    nama VARCHAR(100),\n    harga DECIMAL(10, 2) CHECK (harga >= 0)\n);",
  "quiz": {
    "question": "Manakah dari pernyataan berikut yang paling tepat menggambarkan kegunaan constraint CHECK?",
    "options": [
      "Memastikan semua nilai dalam kolom berbeda.",
      "Membuat kolom wajib diisi.",
      "Menerapkan batasan logika pada nilai yang diizinkan dalam kolom.",
      "Menetapkan nilai awal untuk kolom."
    ],
    "correctIndex": 2,
    "explanation": "Constraint CHECK digunakan untuk memvalidasi data berdasarkan kondisi logis yang ditentukan, memastikan hanya nilai yang memenuhi syarat yang dapat dimasukkan."
  },
  "prevPath": "mysql-foreign-key",
  "nextPath": "mysql-default"
},
  "mysql-default": {
  "courseId": "mysql",
  "title": "MySQL Default",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Default</h2><p>Constraint <code>DEFAULT</code> digunakan untuk menetapkan nilai default untuk sebuah kolom. Jika tidak ada nilai yang secara eksplisit ditentukan saat sebuah baris baru dimasukkan, nilai default ini akan digunakan secara otomatis.</p><p>Ini sangat berguna untuk kolom seperti tanggal pembuatan record, status default, atau nilai numerik awal.</p>",
  "code": "CREATE TABLE tugas (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    deskripsi TEXT,\n    status VARCHAR(20) DEFAULT 'Belum Selesai',\n    tanggal_dibuat TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
  "quiz": {
    "question": "Jika sebuah kolom didefinisikan dengan DEFAULT 'Aktif', dan sebuah baris baru dimasukkan tanpa menentukan nilai untuk kolom tersebut, apa nilai yang akan dimiliki kolom tersebut?",
    "options": [
      "NULL",
      "Aktif",
      "Akan terjadi error",
      "Nilai akan ditentukan oleh sistem secara otomatis"
    ],
    "correctIndex": 1,
    "explanation": "Constraint DEFAULT menetapkan nilai yang akan digunakan jika tidak ada nilai lain yang diberikan saat penyisipan baris."
  },
  "prevPath": "mysql-check",
  "nextPath": "mysql-create-index"
},
  "mysql-create-index": {
  "courseId": "mysql",
  "title": "MySQL Create Index",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Create Index</h2><p><code>CREATE INDEX</code> digunakan untuk membuat indeks pada satu atau lebih kolom dalam sebuah tabel. Indeks mempercepat operasi pengambilan data (seperti <code>SELECT</code>) dengan membuat pointer ke data tersebut. Namun, pembuatan indeks dapat memperlambat operasi penulisan data (<code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>) karena indeks juga perlu diperbarui.</p><p>Indeks sangat disarankan untuk kolom yang sering digunakan dalam klausa <code>WHERE</code>, <code>JOIN</code>, atau <code>ORDER BY</code>.</p>",
  "code": "CREATE INDEX idx_nama_pelanggan ON pelanggan (nama);",
  "quiz": {
    "question": "Manakah dari perintah berikut yang digunakan untuk membuat indeks pada kolom 'email' di tabel 'pengguna'?",
    "options": [
      "ALTER TABLE pengguna ADD INDEX (email);",
      "CREATE INDEX idx_email ON pengguna (email);",
      "MODIFY TABLE pengguna ADD INDEX idx_email (email);",
      "UNIQUE INDEX idx_email ON pengguna (email);"
    ],
    "correctIndex": 1,
    "explanation": "Perintah CREATE INDEX digunakan untuk membuat indeks baru pada satu atau lebih kolom."
  },
  "prevPath": "mysql-default",
  "nextPath": "mysql-auto-increment"
},
  "mysql-auto-increment": {
  "courseId": "mysql",
  "title": "MySQL Auto Increment",
  "chapter": "MySQL Database",
  "color": "teal",
  "theory": "<h2>MySQL Auto Increment</h2><p><code>AUTO_INCREMENT</code> adalah atribut kolom khusus di MySQL yang secara otomatis menghasilkan nilai numerik unik untuk setiap baris baru yang dimasukkan ke dalam tabel. Biasanya digunakan pada kolom <code>PRIMARY KEY</code>.</p><p>Nilai auto-increment dimulai dari 1 secara default dan bertambah 1 untuk setiap baris baru. Anda dapat mengatur nilai awal dan nilai peningkatan.</p>",
  "code": "CREATE TABLE kategori (\n    id_kategori INT AUTO_INCREMENT PRIMARY KEY,\n    nama_kategori VARCHAR(100) NOT NULL\n);",
  "quiz": {
    "question": "Apa fungsi utama dari atribut AUTO_INCREMENT pada kolom di MySQL?",
    "options": [
      "Memastikan kolom tidak boleh kosong.",
      "Menghasilkan nilai numerik unik secara otomatis untuk setiap baris baru.",
      "Membuat kolom dapat memiliki nilai NULL.",
      "Menghubungkan tabel ini dengan tabel lain."
    ],
    "correctIndex": 1,
    "explanation": "AUTO_INCREMENT menghasilkan nilai numerik unik secara otomatis untuk setiap baris baru, menjadikannya ideal untuk Primary Key."
  },
  "prevPath": "mysql-create-index",
  "nextPath": "mysql-dates"
},
};

