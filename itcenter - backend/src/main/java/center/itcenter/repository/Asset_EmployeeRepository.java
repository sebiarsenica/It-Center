package center.itcenter.repository;

import center.itcenter.models.Asset;
import center.itcenter.models.AssetEmployeeId;
import center.itcenter.models.Asset_employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface Asset_EmployeeRepository extends JpaRepository<Asset_employee, AssetEmployeeId> {

    @Modifying
    @Transactional
    @Query("delete from Asset_employee where emplid = ?1 and assetid = ?2")
    void deleteAsset_EmployeeById(Long emplid, Long assetid);

    @Query(
            value = "select * from Asset_employee where emplid = ?1 and assetid = ?2",
            nativeQuery = true
    )
    Asset_employee findAsset_Employee(Long emplid, Long assetid);

    @Query(
            value = "select * from asset_employee where endoflife > NOW()",
            nativeQuery = true
    )
    List<Asset_employee> findAsset_EmployeeEndOfLife();

    List<Asset_employee> findByIdsEmployeeNameStartsWithOrderByIdsEmployeeName(String name);
}
