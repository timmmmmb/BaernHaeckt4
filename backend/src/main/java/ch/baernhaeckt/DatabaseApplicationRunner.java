package ch.baernhaeckt;

import ch.baernhaeckt.model.Offer;
import ch.baernhaeckt.model.Product;
import ch.baernhaeckt.model.Purchase;
import ch.baernhaeckt.model.Region;
import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.OfferRepository;
import ch.baernhaeckt.repository.ProductRepository;
import ch.baernhaeckt.repository.PurchaseRepository;
import ch.baernhaeckt.repository.RegionRepository;
import ch.baernhaeckt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Random;

@Component
public class DatabaseApplicationRunner implements ApplicationRunner {
    private static final String[] firstnames = {"Tim", "Tom", "Manuel", "Anna", "Reto", "Julian", "David", "Sarah"};
    private static final String[] names = {"Frey", "Frei", "Zug", "Müller", "Meier"};
    private static final String[] emailextension = {"gmail.com", "outlook.com", "mail.com", "mail.ch", "test.com"};
    private Random generator = new Random();
    private List<User> userList = new ArrayList<>();

    @Autowired
    ProductRepository productRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    PurchaseRepository purchaseRepository;
    @Autowired
    OfferRepository offerRepository;
    @Autowired
    RegionRepository regionRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        generator.setSeed(190532336410565L);
        //for(int i = 0; i<10; i++){
            userList.add(userRepository.save(createRandomUser()));
        //}
        Product product = new Product();
        product.setDescription("Dies ist unser Default Pass");
        product.setName("Basic Gästepass");
        product = productRepository.save(product);
        Purchase purchase = new Purchase();
        purchase.setProduct(product);
        purchase.setUser(userList.get(generator.nextInt(userList.size())));
        purchase.setQrCode("dies ist der QR Code in text");
        purchase.setPurchasedOn(Calendar.getInstance().getTime());
        purchase.setValidFrom(parseDate("2020-10-01"));
        purchase.setValidTo(parseDate("2020-10-05"));
        purchaseRepository.save(purchase);
        purchase = new Purchase();
        purchase.setProduct(product);
        purchase.setUser(userList.get(generator.nextInt(userList.size())));
        purchase.setQrCode("dies ist der QR Code in text");
        purchase.setPurchasedOn(Calendar.getInstance().getTime());
        purchase.setValidFrom(parseDate("2020-09-04"));
        purchase.setValidTo(parseDate("2020-09-09"));
        purchaseRepository.save(purchase);

        List<Offer> offerList = new ArrayList<>();

        offerList.add(createOffer("Zibälämärit", "Einmal im Jahr erobern Zwiebeln und Knoblauch die Stadt Bern. Während des Zibelemärits riecht die Stadt nach Zwiebelkuchen, Zwiebelsuppe und Glühwein.", "", "Kultur"));
        createRegion("Bern", "\"Dies ist das Land der Gemütlichkeit. Die Region umfasst das Gelände vom schönen Emmental bis und mit dem gemütlichen Bielersee.\"", "", offerList);

        offerList = new ArrayList<>();
        offerList.add(createOffer("Gratis Dorfrundgang Brienz", "", "", "Kultur"));
        offerList.add(createOffer("Rabatt Brienz Rothornbahn", "20 % für eine Fahrt mit der Brienz Rothornbahn (20 % auf Normaltarif / 10 % auf Halbtaxtarif)", "", "Tranport"));
        offerList.add(createOffer("Rabatt Bootverleih", "10 % auf Bootsverleih bei Pirate Bay Nautical Center & Bootsverleih in Brienz", "", "Sport"));
        offerList.add(createOffer("20 % Standseilbahn Giessbach", "", "", "Transport"));
        offerList.add(createOffer("50 % Eintritt Schweizer Holzbildhauerei Museum", "", "", "Kultur"));
        createRegion("Brienz", "", "", offerList);

        offerList = new ArrayList<>();
        offerList.add(createOffer("Freie Fahrt mit dem PostAuto in der Jungfrau", "", "", "Transport"));
        offerList.add(createOffer("Freie Fahrt mit der Sesselbahn Wiriehorn und Grimmialp während der Sommersaison", "", "", "Transport"));
        offerList.add(createOffer("50 % Tageskarte BLS Schifffahrt", "", "", "Transport"));
        offerList.add(createOffer("20 % Niesenbahn", "", "", "Transport"));
        offerList.add(createOffer("20 % Stockhornbahn", "", "", "Transport"));
        createRegion("Jungfrau", "Der Naturpark Jungfrau bietet dir mit seiner reizvollen, traditionellen Alpwirtschaft eine grosse Erlebnisvielfalt. Mit der NaturparkCard profitierst du von der freien Fahrt mit dem PostAuto in der Jungfrau Region sowie während der Sommersaison mit den Sesselbahnen Wiriehorn und Grimmialp. Zudem warten weitere attraktive Ermässigungen zu erlebnisreichen Ausflugszielen auf dich. Viel Spass beim Entdecken des Naturpark Diemtigtal!", "", offerList);
    }

    private User createRandomUser(){
        User user = new User();
        user.setCreated(Calendar.getInstance().getTime());
        user.setDateOfBirth("01,01,2000");
        user.setFirstname(firstnames[generator.nextInt(firstnames.length)]);
        user.setName(names[generator.nextInt(names.length)]);
        user.setEmail(user.getFirstname()+"."+user.getName()+"@"+emailextension[generator.nextInt(emailextension.length)]);
        user.setPassword(user.encoder().encode("secure"));
        return user;
    }

    public static Date parseDate(String date) {
        try {
            return new SimpleDateFormat("yyyy-MM-dd").parse(date);
        } catch (ParseException e) {
            return null;
        }
    }

    public Offer createOffer(String name, String description, String image, String category){
        Offer offer = new Offer();
        offer.setDescription(description);
        offer.setName(name);
        offer.setCategory(category);
        offer.setImage(image);
        return offerRepository.save(offer);
    }

    public Region createRegion(String name, String description, String image, List<Offer> offerList){
        Region region = new Region();
        region.setName(name);
        region.setDescription(description);
        region.setImage(image);
        region.setOffers(offerList);
        return regionRepository.save(region);
    }
}
