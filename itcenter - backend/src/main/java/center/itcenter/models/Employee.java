package center.itcenter.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String costcenter;
    @Column(nullable = false)
    private String manager;

    public Employee(){}

    public Employee(int id,String name, String costcenter, String manager) {
        this.id = id;
        this.name = name;
        this.costcenter = costcenter;
        this.manager = manager;
    }

    public Employee(String name, String costcenter, String manager) {
        this.name = name;
        this.costcenter = costcenter;
        this.manager = manager;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCostcenter() {
        return costcenter;
    }

    public void setCostcenter(String costcenter) {
        this.costcenter = costcenter;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    @Override
    public String toString() {
        return "employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", costcenter='" + costcenter + '\'' +
                ", manager='" + manager + '\'' +
                '}';
    }
}
