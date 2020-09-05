package ch.baernhaeckt;

import ch.baernhaeckt.model.Offer;
import ch.baernhaeckt.model.Product;
import ch.baernhaeckt.model.User;
import ch.baernhaeckt.repository.ProductRepository;
import ch.baernhaeckt.service.OfferService;
import ch.baernhaeckt.service.PurchaseService;
import ch.baernhaeckt.service.RegionService;
import ch.baernhaeckt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
    OfferService offerService;
    @Autowired
    UserService userService;
    @Autowired
    RegionService regionService;
    @Autowired
    PurchaseService purchaseService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        generator.setSeed(190532336410565L);
        //for(int i = 0; i<10; i++){
            userList.add(createRandomUser());
        //}
        Product product = new Product();
        product.setDescription("Dies ist unser Default Pass");
        product.setName("Basic Gästepass");
        product = productRepository.save(product);

        purchaseService.createPurchase(parseDate("2020-10-04"), parseDate("2020-10-09"), product, userList.get(generator.nextInt(userList.size())));
        purchaseService.createPurchase(parseDate("2020-09-04"), parseDate("2020-09-09"), product, userList.get(generator.nextInt(userList.size())));

        List<Offer> offerList = new ArrayList<>();
        offerList.add(offerService.createOffer("Zibälämärit", "Einmal im Jahr erobern Zwiebeln und Knoblauch die Stadt Bern. Während des Zibelemärits riecht die Stadt nach Zwiebelkuchen, Zwiebelsuppe und Glühwein.", "", "Kultur"));
        regionService.createRegion("Bern", "\"Dies ist das Land der Gemütlichkeit. Die Region umfasst das Gelände vom schönen Emmental bis und mit dem gemütlichen Bielersee.\"", "", offerList);

        offerList = new ArrayList<>();
        offerList.add(offerService.createOffer("Gratis Dorfrundgang Brienz", "", "", "Kultur"));
        offerList.add(offerService.createOffer("Rabatt Brienz Rothornbahn", "20 % für eine Fahrt mit der Brienz Rothornbahn (20 % auf Normaltarif / 10 % auf Halbtaxtarif)", "", "Transport"));
        offerList.add(offerService.createOffer("Rabatt Bootverleih", "10 % auf Bootsverleih bei Pirate Bay Nautical Center & Bootsverleih in Brienz", "", "Sport"));
        offerList.add(offerService.createOffer("20 % Standseilbahn Giessbach", "", "", "Transport"));
        offerList.add(offerService.createOffer("50 % Eintritt Schweizer Holzbildhauerei Museum", "", "", "Kultur"));
        regionService.createRegion("Brienz", "", "", offerList);

        offerList = new ArrayList<>();
        offerList.add(offerService.createOffer("Freie Fahrt mit dem PostAuto im Diemtigtal", "", "", "Transport"));
        offerList.add(offerService.createOffer("Freie Fahrt mit der Sesselbahn Wiriehorn und Grimmialp während der Sommersaison", "", "", "Transport"));
        offerList.add(offerService.createOffer("50 % Tageskarte BLS Schifffahrt", "", "", "Transport"));
        offerList.add(offerService.createOffer("20 % Niesenbahn", "", "", "Transport"));
        offerList.add(offerService.createOffer("20 % Stockhornbahn", "", "", "Transport"));
        regionService.createRegion("Diemtigtal", "Der Naturpark Diemtigtal bietet dir mit seiner reizvollen, traditionellen Alpwirtschaft eine grosse Erlebnisvielfalt. Mit der NaturparkCard profitierst du von der freien Fahrt mit dem PostAuto im Diemtigtal sowie während der Sommersaison mit den Sesselbahnen Wiriehorn und Grimmialp. Zudem warten weitere attraktive Ermässigungen zu erlebnisreichen Ausflugszielen auf dich. Viel Spass beim Entdecken des Naturpark Diemtigtal!", "", offerList);
    }

    private User createRandomUser(){
        String firstname = firstnames[generator.nextInt(firstnames.length)];
        String name = names[generator.nextInt(names.length)];
        String email =name+firstname+"@"+emailextension[generator.nextInt(emailextension.length)];
        return userService.createUser(firstname,
                name,
                "01,01,2000",
                email,
                "secure"
                );
    }

    private static Date parseDate(String date) {
        try {
            return new SimpleDateFormat("yyyy-MM-dd").parse(date);
        } catch (ParseException e) {
            return null;
        }
    }

}
