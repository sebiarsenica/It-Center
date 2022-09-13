package center.itcenter.service;

import center.itcenter.models.Asset;
import center.itcenter.models.Asset_employee;
import center.itcenter.repository.Asset_EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class Asset_EmployeeService {
    private final Asset_EmployeeRepository repo;

    @Autowired
    public Asset_EmployeeService(Asset_EmployeeRepository repo) {
        this.repo = repo;
    }

    public Asset_employee addAsset_Employee(Asset_employee asset) { return repo.save(asset);}

    public List<Asset_employee> getAllAsset_Employees(){return repo.findAll();}

    public List<Asset_employee> getEndOfLife(){ return repo.findAsset_EmployeeEndOfLife();}

    public List<Asset_employee> orderByAssetName(){return repo.findAll(Sort.by(Sort.Direction.ASC, "ids.asset.name"));}

    public List<Asset_employee> orderByEmployeeName(){return repo.findAll(Sort.by(Sort.Direction.ASC, "ids.employee.name"));}

    public List<Asset_employee> findByEmployeeName(String name){return repo.findByIdsEmployeeNameStartsWithOrderByIdsEmployeeName(name);}

    public Asset_employee updateAsset_Employee(Asset_employee asset){return repo.save(asset);}

    public void deleteAsset_EmployeeById(Long emplid, Long assetid){repo.deleteAsset_EmployeeById(emplid,assetid);}

    public Asset_employee findAsset_Employee(Long emplid, Long assetid){return repo.findAsset_Employee(emplid,assetid);}
}
