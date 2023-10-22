import mongoose from "mongoose";

class _DBUtil {
    private mongoDb = "mongodb://localhost:27017/sso-db";
    
    constructor(){
        mongoose.connect(this.mongoDb);
    }

    public isDbConnected = (): boolean => {
        return mongoose.connection.readyState === 1;
    }
} 

export default new _DBUtil();