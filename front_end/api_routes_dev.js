const express = require('express');
const router = express.Router();
const fs = require('fs');

// read JSON data
let rawdata = fs.readFileSync('./info.json');
let employee = JSON.parse(rawdata);

// get all employees
router.get('/', (req, res) => {
  res.json({ employees: employee.data });
});

// filter by name
router.get('/by_name/:qname', (req, res) => {
  let query = req.params.qname;

  let filtered_employees = employee.data.filter(e =>
    e.employee_name.includes(query)
  );

  res.json({ employees: filtered_employees });
});

// filter by age range
router.get('/by_age/:start_age/:end_age', (req, res) => {
  let start_age = parseInt(req.params.start_age);
  let end_age = parseInt(req.params.end_age);

  let filtered_employees = employee.data.filter(e =>
    e.employee_age > start_age && e.employee_age < end_age
  );

  res.json({ employees: filtered_employees });
});

module.exports = router;
