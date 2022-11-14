
import express from "express";
import cors from "cors";
import router from "./router/index.js";
import bodyParser from "body-parser";
import path from 'path';
import db from "./config/Database.js";
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/views'));



app.get("/", (req, res) => {
    res.render('index')
})

app.get("/cars", (req, res) => {
    res.render('tambah')
})
   

app.use((err, req, res, next) => {
    return res.status(err.code || 500).json({
        message: err.message || 'internal server eror'
    })
})

app.listen(5000, ()=> console.log(`Server nyala di http://localhost:5000`));