package center.itcenter.repository;

import center.itcenter.models.Asset;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AssetRepository extends JpaRepository<Asset, Long> {
    void deleteAssetByassetid(Long id);
    Asset findAssetByassetid(Long id);

    @Query(
            value = "select a.assetid, a.description, a.inputdate, a.name, a.assetcstcnr from asset a left join asset_employee b on a.assetid = b.assetid where b.assetid is null order by a.name asc",
            nativeQuery = true
    )
    List<Asset> getAssetsNotInAssetEmployee();

    @Query(
            value = "select * from asset order by name asc ",
            nativeQuery = true
    )
    List<Asset> orderByNameAsc();

    @Query(
            value = "select * from asset order by name desc ",
            nativeQuery = true
    )
    List<Asset> orderByNameDesc();

    List<Asset> findByNameStartsWith(String name);

}
