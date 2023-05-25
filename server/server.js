import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer';

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

const app = express()
// app.use(express.json());
// app.use(cors());
// app.get('/', (req, res) => {
//     return res.json("from backend side")
// })
app.use(express.static('public'))


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nft",
})

db.connect(error => {
    if (error) {
        console.log('error connecting to database', error);
        return
    }
    else {
        console.log('connected to database!')
    }
})

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './public/images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     },
// })

const upload = multer();


// app.get('/', (req, res) => {

//     res.sendFile(path.join(__dirname, '../frontend/src', 'imageUpload.jsx'));

// })

app.post('/upload', upload.single('image'), (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const photographer = req.body.photographer;
    const price = req.body.price;
    const duration = req.body.duration;
    const image = req.file.buffer;
    db.query('INSERT INTO upload (photoname, description, photographer, floorprice, auctiondate, image) VALUES (?, ?, ?, ?, ?, ?)',
    [name, description, photographer, price, duration, image], (err, result) => {
        if (err) {
            console.log('error inserting info', err);
            return;
        }
        console.log("Info added to database");
    })
})

app.get('/fetch', (req, res) => {
    const sql = 'select * from upload where id = max(id)';
    db.query(sql, (err, result) => {
        if (err) return res.json('Error');
        return express.json(result);
    })
})

app.listen(8081, () => {
    console.log("server started on port 3000")
})

// app.post('/infoUpload',(req, res) => {
//     console.log("registering")

//     const name = req.body.name;
//     const description = req.body.description;
//     const photographer = req.body.photographer;
//     const resprice = photographer + ',';
//     const price = req.body.price;
//     const duration = req.body.duration;
    
//     const sql = "INSERT INTO upload VALUES ?";
//     const values = [['null', name, description, photographer, price, duration,'null']]
//     db.query(sql, [values], (err, results, fields) => {
//         if (err) {
//             console.log('failed to register new image: ', err);
//             res.sendStatus(500)
//             return;
//         }
//         console.log("you have successfully uploaded new image", results.insertId);
//         res.end()
//     })   
// })

// app.post('/upload', upload.single('image'), (req, res) => {
//     const image = req.file.filename;
//     const sql = "INSERT into upload SET image = ?";
//     db.query(sql, [image], (err, result) => {
//         if(err) return res.json({Message: "Error"});
//         else res.json({Status: "Success"});
//     })
// })

// app.use((req, res, next) => {
//     res.status(404).send('page not found')
// });

// app.listen(8081, () => {
//     console.log("Running")
// })