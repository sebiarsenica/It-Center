package center.itcenter.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
public class Asset_employee implements Serializable {

    @EmbeddedId
    private AssetEmployeeId ids;
    private String fromm;
    private String too;
    @ManyToOne
    @JoinColumn(name = "cstcnr", referencedColumnName = "cstcnr")
    private Costcenter costcenter;
    private Date endoflife;

    public Asset_employee()
    { }

    public Asset_employee(AssetEmployeeId ids, String fromm, String too, Costcenter costcenter, Date endoflife) {
        this.ids = ids;
        this.fromm = fromm;
        this.too = too;
        this.costcenter = costcenter;
        this.endoflife = endoflife;
    }

    public AssetEmployeeId getIds() {
        return ids;
    }

    public void setIds(AssetEmployeeId ids) {
        this.ids = ids;
    }

    public String getFromm() {
        return fromm;
    }

    public void setFromm(String fromm) {
        this.fromm = fromm;
    }

    public String getToo() {
        return too;
    }

    public void setToo(String too) {
        this.too = too;
    }

    public Costcenter getCostcenter() {
        return costcenter;
    }

    public void setCostcenter(Costcenter costcenter) {
        this.costcenter = costcenter;
    }

    public Date getEndoflife() {
        return endoflife;
    }

    public void setEndoflife(Date endoflife) {
        this.endoflife = endoflife;
    }

    @Override
    public String toString() {
        return "Asset_employee{" +
                "ids=" + ids +
                ", fromm='" + fromm + '\'' +
                ", too='" + too + '\'' +
                ", costcenter=" + costcenter +
                ", endoflife=" + endoflife +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Asset_employee)) return false;
        Asset_employee that = (Asset_employee) o;
        return Objects.equals(getIds(), that.getIds()) && Objects.equals(getFromm(), that.getFromm()) && Objects.equals(getToo(), that.getToo()) && Objects.equals(getCostcenter(), that.getCostcenter()) && Objects.equals(getEndoflife(), that.getEndoflife());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIds(), getFromm(), getToo(), getCostcenter(), getEndoflife());
    }
}
