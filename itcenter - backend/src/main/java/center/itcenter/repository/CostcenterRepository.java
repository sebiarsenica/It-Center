package center.itcenter.repository;

import center.itcenter.models.Costcenter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface CostcenterRepository extends JpaRepository<Costcenter, Long> {
    void deleteCostcenterBycstcnr(Long cstcnr);
    Costcenter findCostcenterBycstcnr(Long cstcnr);

    @Query(
            value = "select * from costcenter where cstcemplid = ?1",
            nativeQuery = true
    )
    Costcenter findCostCenterBycstcemplid(Long cstcemplid);

    List<Costcenter> findByEmployeeNameStartsWithOrderByEmployeeName(String name);

    List<Costcenter> findByEmployeeCostcenterStartsWithOrderByEmployeeCostcenter(String costcenter);

}
