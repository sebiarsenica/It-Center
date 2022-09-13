package center.itcenter.models;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
public class Asset implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long assetid;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String description;
    private Date inputdate;
    @OneToOne
    @JoinColumn (name = "assetcstcnr", referencedColumnName = "cstcnr")
    private Costcenter costcenter;


    public Asset() {}

    public Asset(String name, String description, Date input_date, Costcenter costcenter) {
        this.name = name;
        this.description = description;
        this.inputdate = input_date;
        this.costcenter = costcenter;
    }

    public long getAssetid() {
        return assetid;
    }

    public void setAssetid(long assetid) {
        this.assetid = assetid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getInputdate() {
        return inputdate;
    }

    public void setInputdate(Date inputdate) {
        this.inputdate = inputdate;
    }

    public Costcenter getCostcenter() {
        return costcenter;
    }

    public void setCostcenter(Costcenter costcenter) {
        this.costcenter = costcenter;
    }

    @Override
    public String toString() {
        return "Asset{" +
                "asset_id=" + assetid +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", input_date=" + inputdate +
                ", costcenter=" + costcenter +
                '}';
    }
}
