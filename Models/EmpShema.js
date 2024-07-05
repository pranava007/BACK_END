import mongoose from "mongoose";

const employeeShema = mongoose.Schema({
    employeeFirstName:String,
    employeelastName:String,
    employeeEmail:String,
    employeeDesignation:String,
})

const Employee = mongoose.model("Employee",employeeShema)
export default  Employee;