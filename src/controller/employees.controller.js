import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
    try {
        // throw new Error()
        const [listEmployee] = await pool.query("SELECT * FROM employee")
        res.json(listEmployee)
    } catch (error) {
        return res.status(500).json({
            message : "Somthing goes wrong"
        })
    }
    
}

export const getEmployeeByID = async (req, res) => {
    try {
        // throw new Error()
        const [listEmployeeByID] = await pool.query("SELECT * FROM employee WHERE id = ?", [req.params.id])
        if (listEmployeeByID.length <= 0){
        return res.status(404).json({
            message: "Employee not found"
        })
    }
    res.send(listEmployeeByID[0])
    } catch (error) {
        return res.status(500).json({
            message : "Somthing goes wrong"
        })
    }
    
    
}

export const createEmployees = async (req, res) => {
    const {name, salary} = req.body

    try {
        // throw new Error()
        const [rows] = await pool.query("INSERT INTO employee (nombre, salary) VALUES (?, ?)", [name, salary])
        // console.log({name , salary})
         res.send({
        id: rows.insertId,
        name,
        salary
    })
    } catch (error) {
        return res.status(500).json({
            message : "Somthing goes wrong"
        })
    }
    
}
export const updateEmployees = async (req, res) => {
    const {id} = req.params //! es lo mismo que const id =  req.params.id
    const {name, salary} = req.body

    try {
        // throw new Error()
        const [result] = await pool.query("UPDATE employee SET nombre = IFNULL(?, nombre), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id])
     
        if (result.affectedRows === 0) return res.status(404).json({
            message : "Employee not found"
        })

        const [rows] = await pool.query("SELECT * FROM employee WHERE id= ?", [id])

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message : "Somthing goes wrong"
        })
    }

    
}

export const deleteEmployees = async (req, res) => {
    try {
        // throw new Error()
        const [resultado] = await pool.query("DELETE FROM employee WHERE id = ?", [req.params.id])

        if (resultado.affectedRows <= 0) return res.status(404).json({
        message: "Employee not found"
    })

         res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message : "Somthing goes wrong"
        })
    }
    
}