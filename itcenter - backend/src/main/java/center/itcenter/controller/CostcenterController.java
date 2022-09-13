package center.itcenter.controller;


import center.itcenter.models.Costcenter;
import center.itcenter.service.CostcenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/costcenter")
public class CostcenterController {
    private final CostcenterService costService;

    @Autowired
    public CostcenterController(CostcenterService costService) {
        this.costService = costService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Costcenter>>getAllCostcenter()
    {
        List<Costcenter> costcenters = costService.findAllCostcenters();
        return new ResponseEntity<>(costcenters, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Costcenter> getCostcenterById(@PathVariable("id") Long id)
    {
        Costcenter costcenter = costService.findCostcenterById(id);
        return new ResponseEntity<>(costcenter, HttpStatus.OK);
    }

    @GetMapping("/findempl/{id}")
    public ResponseEntity<Costcenter> getByEmpId(@PathVariable("id") Long id)
    {
        Costcenter costcenter = costService.findCostCenterByEmpId(id);
        return new ResponseEntity<>(costcenter, HttpStatus.OK);
    }

    @GetMapping("/sortByCostCenterName")
    public ResponseEntity<List<Costcenter>> sortByCostCenter()
    {
        List<Costcenter> costs = costService.orderByCostCenterName();
        return new ResponseEntity<>(costs,HttpStatus.OK);
    }

    @GetMapping("/findByEmpName/{name}")
    public ResponseEntity<List<Costcenter>> findByEmployeeName(@PathVariable("name") String name)
    {
        List<Costcenter> costs = costService.searchByEmployeeName(name);
        return new ResponseEntity<>(costs,HttpStatus.OK);
    }

    @GetMapping("/findByEmpName")
    public ResponseEntity<List<Costcenter>> findByEmployeeName()
    {
        List<Costcenter> costs = costService.findAllCostcenters();
        return new ResponseEntity<>(costs,HttpStatus.OK);
    }

    @GetMapping("/findByCostCenterName/{cost}")
    public ResponseEntity<List<Costcenter>> findByCostCenterName(@PathVariable("cost") String cost)
    {
        List<Costcenter> costs = costService.searchByCostCenterName(cost);
        return new ResponseEntity<>(costs,HttpStatus.OK);
    }

    @GetMapping("/findByCostCenterName")
    public ResponseEntity<List<Costcenter>> findByCostCenterName()
    {
        List<Costcenter> costs = costService.findAllCostcenters();
        return new ResponseEntity<>(costs,HttpStatus.OK);
    }

    @GetMapping("/sortByEmployeeName")
    public ResponseEntity<List<Costcenter>> sortByEmployeeName()
    {
        List<Costcenter> costs = costService.orderByEmployeeName();
        return new ResponseEntity<>(costs,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Costcenter> addCostcenter(@RequestBody Costcenter costcenter)
    {
        Costcenter costcenter1 = costService.addCostcenter(costcenter);
        System.out.println(costcenter.getEmployee().getName());
        return new ResponseEntity<>(costcenter1, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Costcenter> updateCostcenter(@RequestBody Costcenter costcenter)
    {
        Costcenter updateCostcenter = costService.updateCostcenter(costcenter);
        return new ResponseEntity<>(updateCostcenter, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCostcenter(@PathVariable("id") Long id)
    {
        costService.deleteCostcenterById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
