package center.itcenter.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Costcenter implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long cstcnr;
    @OneToOne
    @JoinColumn (name = "cstcemplid", referencedColumnName = "id")
    private Employee employee;
    private boolean cstcdeleteflag;

    public Costcenter () {}

    public Costcenter(Employee employee, boolean cstcdeleteflag) {
        this.employee = employee;
        this.cstcdeleteflag = cstcdeleteflag;
    }

    public long getCstcnr() {
        return cstcnr;
    }

    public void setCstcnr(long cstcnr) {
        this.cstcnr = cstcnr;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public boolean isCstcdeleteflag() {
        return cstcdeleteflag;
    }

    public void setCstcdeleteflag(boolean cstcdeleteflag) {
        this.cstcdeleteflag = cstcdeleteflag;
    }

    @Override
    public String toString() {
        return "Costcenter{" +
                "cstc_nr=" + cstcnr +
                ", employee=" + employee +
                ", cstc_delete_flag=" + cstcdeleteflag +
                '}';
    }
}
