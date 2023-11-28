import express from "express";
import { 
    getAllDoctor, addDoctor, editDoctor, deleteDoctor 
} from "../controllers/doctors.js";

//Initializing Router
const router = express.Router();

//get All Coctors
router.get("/all", async (req,res) => {
    try{
        // get data from db
        const doctors = await getAllDoctor();
        if(doctors.length <= 0 ) return res.status(404).json("no data available");

        res.status(200).json({data:doctors});
    }catch(err){
        res.status(500).json(`Internal Server Error: ${err}` );
    }
    
})

//Add Doctor
router.post("/add", async (req,res) => {
    try{
        //Checking the user Input for data
        if(Object.keys(req.body).length<=0) return res.status(400).json({Error:"check request body"});

        //Adding New Doctor
        let newDoctor = await addDoctor(req);
        if(!newDoctor.acknowledged) return res.status(400).json({Error:"Error in adding data"});

        res.status(201).json({data:newDoctor});
    }catch(err){
        res.status(400).json({ErrorOccured: err});
    }
})

//Edit Doctor
router.put("/edit/:id", async (req,res) => {
    try{
        const { id } = req.params;
        if (Object.keys(req.body).length <= 0) {
            return res.status(400).json({ error: "Check request body" });
        }

        const modified = await editDoctor(id,req.body)

        if(!modified.acknowledged){
            return res.status(404).json("Error updating data");
        }

        res.status(201).json(modified)
    }catch(err){
        res.status(500).json({Error:"Internal Server Error"});
    }
})

//Delete Doctor
router.delete("/delete/:id", async(req,res) => {
    try{
        const { id } = req.params;
        const deleted = await deleteDoctor(id);
        if(!deleted.acknowledged) return res.status(404).json("Error deleting data");
            
        res.status(201).json(deleted);
    }catch(err){
        res.status(500).json({Error:"Internal Server Error"});
    }
})

export const doctorRouter = router;