package center.itcenter.repository;

import center.itcenter.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface employeeRepository extends JpaRepository<Employee, Long> {
    Employee findEmployeeByid(Long id);

    @Query(
            value = "SELECT * FROM `employee` order by name asc",
            nativeQuery = true
    )
    List<Employee> orderByNameAsc();

    @Query(
            value = "SELECT * FROM `employee` order by name desc",
            nativeQuery = true
    )
    List<Employee> orderByNameDesc();

    List<Employee>findByNameStartsWithOrderByName(String name);

    @Query(
            value = "select a.id, a.name, a.costcenter, a.manager from employee a left  join costcenter b on a.id = b.cstcemplid where b.cstcemplid is null order by a.name asc",
            nativeQuery = true
    )
    List<Employee> findEmployeesNotInCostcenter();

    @Query(
            value = "SELECT a.id, a.costcenter, a.manager, a.name from employee a inner join costcenter b on a.id = b.cstcemplid order by a.name asc",
            nativeQuery = true
    )
    List<Employee> findEmployeeWithCostCenter();

}
