import express from "express";
import { createEmployee, deleteemployee, getEmployee, getemployeeById, Updateemployee } from "../Controllers/EmployeeControl.js"

const router = express.Router()

router.post('/createemp',createEmployee)
router.get('/getallemployee',getEmployee)
router.get('/getemployee/:id',getemployeeById)
router.put('/Updateemployee/:id',Updateemployee)
router.delete('/deleteemployee/:id',deleteemployee)




export default router;