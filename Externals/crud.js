import express from "express";
const app = express();
app.use(express.json());

let restarunts = [
    {
        id:1,
        name:"kfc",
        special:"crispy chicken",
    },
    {
        id:2,
        name:"A2B",
        special:"sweets",
    }
]
//get info // https:localhost:8900/res
app.get("/res",(req,res) => {
    res.send(restarunts);
})

//post info // https:localhost:8900/add/res
app.post("/add/res",(req,res) => {
    let ids = restarunts.length ? restarunts[restarunts.length - 1].id + 1 : 1;
    const newRestarunt = {
        id: ids,
        ...req.body
    }
    restarunts = [...restarunts,newRestarunt]
    res.send(restarunts);
})

//Put info
app.put("/edit/res/:id", (req, res) => {
    const { id } = req.params;
    const findRes = restarunts.find((res) => res.id == id);
    findRes.special = req.body.special;
    res.send(restarunts);
})

//Delete info
app.delete("/delete/res/:id", (req,res) => {
    const { id } = req.params;
    const newSet = restarunts.filter((res) => res.id != id);
    res.send("Deleted the specified Info");
})
//Listen to the server continously
// https:localhost:9000
app.listen(9000, ()=> console.log("server in http://localhost:9000"))