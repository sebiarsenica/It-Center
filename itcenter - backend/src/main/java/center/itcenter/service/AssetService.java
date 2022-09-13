package center.itcenter.service;

import center.itcenter.models.Asset;
import center.itcenter.repository.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AssetService {

    private final AssetRepository assetRepository;

    @Autowired
    public AssetService(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    public Asset addAsset(Asset asset) { return assetRepository.save(asset);}

    public List<Asset> getAllAssets(){return assetRepository.findAll();}

    public List<Asset> getNotInAssetEmployee(){return assetRepository.getAssetsNotInAssetEmployee();}

    public List<Asset> getOrderByNameAsc(){return assetRepository.orderByNameAsc();}

    public List<Asset> getOrderByNameDesc(){return assetRepository.orderByNameDesc();}

    public List<Asset> findByNameStartsWith(String name){return assetRepository.findByNameStartsWith(name);}

    public Asset findAssetById(Long id){return assetRepository.findAssetByassetid(id);}

    public Asset updateAsset(Asset asset){return assetRepository.save(asset);}

    public void deleteAssetById(Long id){assetRepository.deleteAssetByassetid(id);}
}
