package ch.baernhaeckt.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;
import java.util.Objects;

@Entity
public class Purchase {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String id;
    @OneToOne
    private User user;
    @OneToOne
    private Product product;
    private Date purchased_on;
    private Date valid_from;
    private Date valid_to;
    private String qr_code;

    public String getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Date getPurchased_on() {
        return purchased_on;
    }

    public void setPurchased_on(Date purchased_on) {
        this.purchased_on = purchased_on;
    }

    public Date getValid_from() {
        return valid_from;
    }

    public void setValid_from(Date valid_from) {
        this.valid_from = valid_from;
    }

    public Date getValid_to() {
        return valid_to;
    }

    public void setValid_to(Date valid_to) {
        this.valid_to = valid_to;
    }

    public String getQr_code() {
        return qr_code;
    }

    public void setQr_code(String qr_code) {
        this.qr_code = qr_code;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Purchase purchase = (Purchase) o;
        return getId().equals(purchase.getId()) &&
                Objects.equals(getUser(), purchase.getUser()) &&
                Objects.equals(getProduct(), purchase.getProduct()) &&
                Objects.equals(getPurchased_on(), purchase.getPurchased_on()) &&
                Objects.equals(getValid_from(), purchase.getValid_from()) &&
                Objects.equals(getValid_to(), purchase.getValid_to()) &&
                Objects.equals(getQr_code(), purchase.getQr_code());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUser(), getProduct(), getPurchased_on(), getValid_from(), getValid_to(), getQr_code());
    }
}
