const express = require("express");
const mysql = require('mysql2')
const conn = require("./code/dbcon")
const app = express();
app.use(express.json())

app.get("/student", (req, res) => {
    conn.query("select * from student", (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
})

app.get("/student/:id", (req, res) => {
    const sid = req.params.id
    const sql = `select * from student where id=${sid}`
    conn.query(sql, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            console.log(result)
            if (result.length == 0) {
                res.json("Record not found..")
            }
            else {
                res.json(result)
            }
        }
    })
})

app.post("/student", (req, res) => {
    const obj = req.body
    const sql = `insert into student values(${obj.id},'${obj.name}')`
    conn.query(sql, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json("Record Inserted...")
        }
    })
})

app.put("/student", (req, res) => {
    const obj = req.body
    console.log(obj)
    const sql = `update student set name='${obj.name}' where id=${obj.id}`
    conn.query(sql, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json("Record Updated...")
        }
    })
})

app.delete("/student/:id", (req, res) => {
    const sid = req.params.id
    const sql = `delete from student where id=${sid}`
    conn.query(sql, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json("Record Deleted...")
        }
    })
})

console.log("Serevr Started at 3000....");
app.listen(3000);