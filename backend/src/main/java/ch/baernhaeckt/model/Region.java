package ch.baernhaeckt.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;
import java.util.Objects;

@Entity
public class Region {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String id;
    @NotBlank(message = "Name is mandatory")
    private String name;
    @Column(length = 2000)
    private String description;
    @OneToMany
    private List<Offer> offers;
    private String image;

    public String getId() {
        return id;
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

    public List<Offer> getOffers() {
        return offers;
    }

    public void setOffers(List<Offer> offers) {
        this.offers = offers;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Region region = (Region) o;
        return getId().equals(region.getId()) &&
                Objects.equals(getName(), region.getName()) &&
                Objects.equals(getDescription(), region.getDescription()) &&
                Objects.equals(getOffers(), region.getOffers()) &&
                Objects.equals(getImage(), region.getImage());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getDescription(), getOffers(), getImage());
    }
}
