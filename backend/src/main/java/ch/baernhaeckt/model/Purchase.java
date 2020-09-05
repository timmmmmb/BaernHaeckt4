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
    private Date purchasedOn;
    private Date validFrom;
    private Date validTo;
    private String qrCode;

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

    public Date getPurchasedOn() {
        return purchasedOn;
    }

    public void setPurchasedOn(Date purchasedOn) {
        this.purchasedOn = purchasedOn;
    }

    public Date getValidFrom() {
        return validFrom;
    }

    public void setValidFrom(Date validFrom) {
        this.validFrom = validFrom;
    }

    public Date getValidTo() {
        return validTo;
    }

    public void setValidTo(Date validTo) {
        this.validTo = validTo;
    }

    public String getQrCode() {
        return qrCode;
    }

    public void setQrCode(String qrCode) {
        this.qrCode = qrCode;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Purchase purchase = (Purchase) o;
        return getId().equals(purchase.getId()) &&
                Objects.equals(getUser(), purchase.getUser()) &&
                Objects.equals(getProduct(), purchase.getProduct()) &&
                Objects.equals(getPurchasedOn(), purchase.getPurchasedOn()) &&
                Objects.equals(getValidFrom(), purchase.getValidFrom()) &&
                Objects.equals(getValidTo(), purchase.getValidTo()) &&
                Objects.equals(getQrCode(), purchase.getQrCode());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUser(), getProduct(), getPurchasedOn(), getValidFrom(), getValidTo(), getQrCode());
    }
}
