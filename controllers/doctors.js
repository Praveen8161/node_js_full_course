import { ObjectId } from "bson";
import { client } from "../db.js";

export async function getAllDoctor(){
    const data = await client.db("Docapp")
        .collection("doctors")
        .find({})
        .toArray();
    return data;
}

export async function addDoctor(req){
    const data = {...req.body,status:"available"};
    const newDoctor = await client.db("Docapp")
        .collection("doctors")
        .insertOne(data);
    return newDoctor;
}

export async function editDoctor(id, data){

    const modified = await client.db("Docapp")
        .collection("doctors")
        .updateOne({_id: new ObjectId(id)},{$set: data})

    return modified;
}

export async function deleteDoctor(id){
    const deleted =  await client.db("Docapp")
    .collection("doctors")
    .deleteOne({_id: new ObjectId(id)})
    return deleted;
}