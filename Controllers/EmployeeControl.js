import Empolyee from "../Models/EmpShema.js"


// Create POST method
export const createEmployee = async (req,res)=>{
    try {
        // const {} = req.body
        const newEmployee = new Empolyee(req.body)
        await newEmployee.save()
        res.status(200).json({messsage:"Add New Employee",result:[newEmployee]})
        
    } catch (error) {
        console.log(error);
        res.status(404).json({messsage:"Not Found POST"})
    }
}

// Get details GET Method
export const getEmployee = async (req,res)=>{

    try {
        const getemp = await Empolyee.find();
        res.status(200).json({messsage:"Get Details Employee" , result:[getemp]})
        
    } catch (error) {
        console.log(error);
        res.status(404).json({messsage:"Not Fount GET"})
        
    }
}

// getemployee id

export const getemployeeById = async (req,res)=>{
    try {

        const empid = req.params.id
        const getemp = await Empolyee.findById(empid)
        res.status(200).json({messsage:"Get one Employee detail", result:[getemp]})
        
    } catch (error) {
        console.log(error);
        res.status(404).json({messsage:"Not Fount GET By Id"})
        
    }
}

// Updateemployee 

export const Updateemployee = async (req,res)=>{
    try {
        const epmId = req.params.id
        const {employeeFirstName,employeelastName,employeeEmail,employeeDesignation} = req.body

        const result = await Empolyee.updateOne({epmId},{employeeFirstName,employeelastName,employeeEmail,employeeDesignation})
        res.status(200).json({messsage:"Update Successfully",result:[result]})

        
    } catch (error) {
        console.log(error);
        res.status(404).json({messsage:"Not Fount Edite PUT Method"})
        
    }
}

// deleteemployee 

export const deleteemployee = async (req,res) =>{
    try {

        const empID = req.params.id;
        const deleteEmp = await Empolyee.deleteOne({_id:empID})  
        res.status(200).json({messsage:"Delete successfully", result:[deleteEmp]})
        
    } catch (error) {
        console.log(error);
        res.status(200).json({messsage:"Not Found DELETE Method"})
        
    }
}