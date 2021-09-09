const employeesCtrl = {}

const Employee = require('../models/Employee')

employeesCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.find()
    res.json(employees)
};
employeesCtrl.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.send(employee)

};
employeesCtrl.createEmployee = async(req, res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message: 'Employee Created'})

};
employeesCtrl.editEmployee = async(req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({Status: 'Employee Update'})
};
employeesCtrl.deleteEmployee = async(req, res) => {
    const employee = await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee Deleted'})

};


module.exports = employeesCtrl;