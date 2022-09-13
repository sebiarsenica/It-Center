package center.itcenter.service;

import center.itcenter.models.Costcenter;
import center.itcenter.repository.CostcenterRepository;
import center.itcenter.repository.employeeRepository;
import center.itcenter.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@Service
@Transactional
public class employeeService {
    private final employeeRepository employeeRepo;

    @Autowired
    public employeeService(employeeRepository employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees()
    {
        return employeeRepo.findAll();
    }

    public List<Employee> findAllNotInCostCenter(){return employeeRepo.findEmployeesNotInCostcenter();}

    public List<Employee> findByNameContaining(String name){return employeeRepo.findByNameStartsWithOrderByName(name);}

    public List<Employee> findOrderByName(){ return employeeRepo.orderByNameAsc();}

    public List<Employee> findOrderByNameDesc(){return employeeRepo.orderByNameDesc();}

    public List<Employee> findEmployeeWithCostCenter(){return employeeRepo.findEmployeeWithCostCenter();}

    public Employee updateEmployee(Employee employee) {return employeeRepo.save(employee);}

    public Employee findEmployeeById(long id)
    {
        return employeeRepo.findEmployeeByid(id);
    }

    public void deleteEmployee(Long id)
    {
        employeeRepo.deleteById(id);
    }








}
