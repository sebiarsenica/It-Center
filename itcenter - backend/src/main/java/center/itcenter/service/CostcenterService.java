package center.itcenter.service;

import center.itcenter.models.Costcenter;
import center.itcenter.models.Employee;
import center.itcenter.repository.CostcenterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CostcenterService {
    private final CostcenterRepository costcenterRepoo;

    @Autowired
    public CostcenterService(CostcenterRepository costcenterRepoo) {
        this.costcenterRepoo = costcenterRepoo;
    }

    public Costcenter addCostcenter(Costcenter costcenter){
        return costcenterRepoo.save(costcenter);
    }

    public List<Costcenter> findAllCostcenters()
    {
        return costcenterRepoo.findAll();
    }

    public Costcenter findCostCenterByEmpId(Long id) { return costcenterRepoo.findCostCenterBycstcemplid(id);}

    public List<Costcenter> orderByCostCenterName(){return costcenterRepoo.findAll(Sort.by(Sort.Direction.ASC, "employee.costcenter"));}

    public List<Costcenter> orderByEmployeeName(){return costcenterRepoo.findAll(Sort.by(Sort.Direction.ASC, "employee.name"));}

    public List<Costcenter> searchByEmployeeName(String name){return costcenterRepoo.findByEmployeeNameStartsWithOrderByEmployeeName(name);}

    public List<Costcenter> searchByCostCenterName(String costcenter) { return costcenterRepoo.findByEmployeeCostcenterStartsWithOrderByEmployeeCostcenter(costcenter);}

    public Costcenter findCostcenterById(Long id){return costcenterRepoo.findCostcenterBycstcnr(id);}

    public Costcenter updateCostcenter(Costcenter costcenter)
    {
        return costcenterRepoo.save(costcenter);
    }

    public void deleteCostcenterById(Long cstc_nr)
    {
        costcenterRepoo.deleteCostcenterBycstcnr(cstc_nr);
    }

}
