import mongoose from "mongoose"

const URL = "mongodb+srv://kundanlal96580:n5vsIld5XDzMpqTU@cluster0.iq3ponm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const Conn = async () =>  {
    try {
       await mongoose.connect(URL , {useUnifiedTopology : true , useNewUrlParser : true})
        console.log('database connected successsfulyy.')
    } catch (error) {
        console.log('error while connecting the database' , error)
    }
}

export default Conn;