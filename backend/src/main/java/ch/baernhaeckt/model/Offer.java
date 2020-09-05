package ch.baernhaeckt.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.util.Objects;

@Entity
public class Offer {
    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid2")
    private String id;
    @NotBlank(message = "Name is mandatory")
    private String name;
    private String description;
    private String image;
    private String category;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

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
        Offer offer = (Offer) o;
        return getId().equals(offer.getId()) &&
                Objects.equals(getName(), offer.getName()) &&
                Objects.equals(getDescription(), offer.getDescription()) &&
                Objects.equals(getImage(), offer.getImage());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getDescription(), getImage());
    }
}
