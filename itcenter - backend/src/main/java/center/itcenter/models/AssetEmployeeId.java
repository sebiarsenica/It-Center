package center.itcenter.models;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class AssetEmployeeId implements Serializable {

    @OneToOne
    @JoinColumn(name = "assetid", referencedColumnName = "assetid")
    private Asset asset;
    @OneToOne
    @JoinColumn(name = "emplid", referencedColumnName = "id")
    private Employee employee;

    public AssetEmployeeId() {
    }

    public AssetEmployeeId(Asset asset, Employee employee) {
        this.asset = asset;
        this.employee = employee;
    }

    public Asset getAsset() {
        return asset;
    }

    public void setAsset(Asset asset) {
        this.asset = asset;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "AssetEmployeeId{" +
                "asset=" + asset +
                ", employee=" + employee +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AssetEmployeeId)) return false;
        AssetEmployeeId that = (AssetEmployeeId) o;
        return Objects.equals(getAsset(), that.getAsset()) && Objects.equals(getEmployee(), that.getEmployee());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getAsset(), getEmployee());
    }
}
