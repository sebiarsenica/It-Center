package center.itcenter.controller;

import center.itcenter.models.Asset;
import center.itcenter.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/asset")
public class AssetController {

    private final AssetService assetService;

    @Autowired
    public AssetController(AssetService assetService) {
        this.assetService = assetService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Asset>> getAllAssets()
    {
        List<Asset> assets = assetService.getAllAssets();
        return new ResponseEntity<>(assets, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Asset> getAssetById(@PathVariable("id") Long id)
    {
        Asset asset = assetService.findAssetById(id);
        return new ResponseEntity<>(asset, HttpStatus.OK);
    }

    @GetMapping("/getnae")
    public ResponseEntity<List<Asset>> getNotInAssetEmployee()
    {
        List<Asset> assets = assetService.getNotInAssetEmployee();
        return new ResponseEntity<>(assets, HttpStatus.OK);
    }

    @GetMapping("/orderByNameAsc")
    public ResponseEntity<List<Asset>> getOrderByNameAsc()
    {
        List<Asset> assets = assetService.getOrderByNameAsc();
        return new ResponseEntity<>(assets,HttpStatus.OK);
    }

    @GetMapping("/orderByNameDesc")
    public ResponseEntity<List<Asset>> getOrderByNameDesc()
    {
        List<Asset> assets = assetService.getOrderByNameDesc();
        return new ResponseEntity<>(assets,HttpStatus.OK);
    }

    @GetMapping("/findByName/{name}")
    public ResponseEntity<List<Asset>> findByName(@PathVariable("name") String name)
    {
        List<Asset> assets = assetService.findByNameStartsWith(name);
        return new ResponseEntity<>(assets, HttpStatus.OK);
    }

    @GetMapping("/findByName")
    public ResponseEntity<List<Asset>> findByName2()
    {
        List<Asset> assets = assetService.getAllAssets();
        return new ResponseEntity<>(assets, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Asset> addAsset(@RequestBody Asset asset)
    {
        Asset addAsset = assetService.addAsset(asset);
        return new ResponseEntity<>(addAsset, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Asset> updateAsset(@RequestBody Asset asset)
    {
        Asset updateAsset = assetService.updateAsset((asset));
        return new ResponseEntity<>(updateAsset, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAsset (@PathVariable("id") Long id)
    {
        assetService.deleteAssetById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
