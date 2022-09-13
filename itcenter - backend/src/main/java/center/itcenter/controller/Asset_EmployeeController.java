package center.itcenter.controller;

import center.itcenter.models.Asset;
import center.itcenter.models.Asset_employee;
import center.itcenter.service.Asset_EmployeeService;
import center.itcenter.utility.assetEmployeePdf;
import com.lowagie.text.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/assetEmployee")
public class Asset_EmployeeController {
    private final Asset_EmployeeService service;


    @Autowired
    public Asset_EmployeeController(Asset_EmployeeService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Asset_employee>> getAllAsset_Employees()
    {
        List<Asset_employee> assetemployees = service.getAllAsset_Employees();
        return new ResponseEntity<>(assetemployees, HttpStatus.OK);
    }

    @GetMapping("/find/{emplid}/{assetid}")
    public ResponseEntity<Asset_employee> findAsset_Employee(@PathVariable("emplid")Long emplid, @PathVariable("assetid") Long assetid)
    {
        Asset_employee asset = service.findAsset_Employee(emplid,assetid);
        return new ResponseEntity<>(asset,HttpStatus.OK);
    }

    @GetMapping("/orderByAssetName")
    public ResponseEntity<List<Asset_employee>> orderByAssetName()
    {
        List<Asset_employee> assets = service.orderByAssetName();
        return new ResponseEntity<>(assets, HttpStatus.OK);
    }

    @GetMapping("/orderByEmployeeName")
    public ResponseEntity<List<Asset_employee>> orderByEmployeeName()
    {
        List<Asset_employee> assets = service.orderByEmployeeName();
        return new ResponseEntity<>(assets, HttpStatus.OK);
    }

    @GetMapping("/employeeName")
    public ResponseEntity<List<Asset_employee>> findByAssetName1()
    {
        List<Asset_employee> assets = service.getAllAsset_Employees();
        return new ResponseEntity<>(assets, HttpStatus.OK);
    }

    @GetMapping("/employeeName/{name}")
    public ResponseEntity<List<Asset_employee>> findByAssetName(@PathVariable("name") String name)
    {
        List<Asset_employee> assets = service.findByEmployeeName(name);
        return new ResponseEntity<>(assets, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Asset_employee> addAsset_employee(@RequestBody Asset_employee asset_employee)
    {
        Asset_employee added = service.addAsset_Employee(asset_employee);
        return new ResponseEntity<>(added, HttpStatus.CREATED);
    }

    @GetMapping("/pdf")
    public void pdf(HttpServletResponse response) throws DocumentException, IOException{
        response.setContentType("application/pdf");
        DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-DD:HH:MM:SS");
        String currentDateTime = dateFormat.format(new Date());
        String headerkey = "Content-Disposition";
        String headervalue = "attachment; filename=pdf_"+currentDateTime+".pdf";
        response.setHeader(headerkey, headervalue);
        List<Asset_employee> assetList = service.getEndOfLife();
        assetEmployeePdf generetorUser = new assetEmployeePdf();
        generetorUser.setAssets(assetList);
        generetorUser.generate(response);
    }

    @PutMapping("/update")
    public ResponseEntity<Asset_employee> updateAsset_employee(@RequestBody Asset_employee asset_employee)
    {
        Asset_employee update = service.updateAsset_Employee(asset_employee);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{emplid}/{assetid}")
    public ResponseEntity<?> deleteAsset_EmployeeById(@PathVariable("emplid")Long emplid, @PathVariable("assetid") Long assetid)
    {
        service.deleteAsset_EmployeeById(emplid,assetid);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
