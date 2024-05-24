// import User from "../schema/user-schema.js";
import Ticker from "../Model/TickerModel.js";
 

export const getuser = async (req , res) => {
    try{
        const getUser = await Ticker.find({});
        res.status(201).json(getUser);
    }catch(e){
        res.status(404).json(e);
    }
} 
