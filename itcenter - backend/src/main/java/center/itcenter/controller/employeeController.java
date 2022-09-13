package center.itcenter.controller;

import center.itcenter.models.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import center.itcenter.service.employeeService;

import java.util.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/employee")
public class employeeController {
     private final employeeService service;

    public employeeController(employeeService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>>getAllEmployees(){
        List<Employee> employees = service.findAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/nocost")
    public ResponseEntity<List<Employee>>getAllNotInCostCenter(){
        List<Employee> employees = service.findAllNotInCostCenter();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/findc/{name}")
    public ResponseEntity<List<Employee>>findByNameContaining(@PathVariable("name") String name)
    {
        List<Employee> employees = service.findByNameContaining(name);
        return new ResponseEntity<>(employees, HttpStatus.OK);}

    @GetMapping("/findc")
    public ResponseEntity<List<Employee>>findByNameContainingEmpty()
    {
        List<Employee> employees = service.findAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/orderByName")
    public ResponseEntity<List<Employee>>OrderByName()
    {
        List<Employee> employees = service.findOrderByName();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/orderByNameDesc")
    public ResponseEntity<List<Employee>>OrderByNameDesc()
    {
        List<Employee> employees = service.findOrderByNameDesc();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/withCostCenter")
    public ResponseEntity<List<Employee>> WithCostCenter()
    {
        List<Employee> employees = service.findEmployeeWithCostCenter();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") Long id)
    {
        Employee employee = service.findEmployeeById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee)
    {
        Employee newEmployee = service.addEmployee(employee);
        return new ResponseEntity<>(newEmployee,HttpStatus.CREATED);
    }


    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee)
    {
        Employee updateEmployee = service.updateEmployee(employee);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id)
    {
        service.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
