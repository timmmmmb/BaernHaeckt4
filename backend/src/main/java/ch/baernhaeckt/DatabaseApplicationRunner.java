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
    /**
     * this is the application runner.
     */
    @Override
    public void run(ApplicationArguments args) throws Exception {
        generator.setSeed(190532336410565L);
        for(int i = 0; i<10; i++){
            userList.add(createRandomUser());
        }
        Product product = new Product();
        product.setDescription("Dies ist unser Default Pass");
        product.setName("Basic Gästepass");
        product = productRepository.save(product);

        purchaseService.createPurchase(parseDate("2020-10-04"), parseDate("2020-10-09"), product, userList.get(generator.nextInt(userList.size())));
        purchaseService.createPurchase(parseDate("2020-09-04"), parseDate("2020-09-09"), product, userList.get(generator.nextInt(userList.size())));
        purchaseService.createPurchase(parseDate("2020-09-06"), parseDate("2020-09-10"), product, userList.get(generator.nextInt(userList.size())));
        purchaseService.createPurchase(parseDate("2020-09-01"), parseDate("2020-09-09"), product, userList.get(generator.nextInt(userList.size())));
        purchaseService.createPurchase(parseDate("2020-10-07"), parseDate("2020-10-09"), product, userList.get(generator.nextInt(userList.size())));
        purchaseService.createPurchase(parseDate("2020-11-04"), parseDate("2020-11-09"), product, userList.get(generator.nextInt(userList.size())));
        purchaseService.createPurchase(parseDate("2020-02-04"), parseDate("2020-02-09"), product, userList.get(generator.nextInt(userList.size())));

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

        offerList = new ArrayList<>();
        offerList.add(offerService.createOffer("Freie Fahrt mit dem öffentlichen Verkehr gemäss Zonenplan", "", "", "Transport"));
        offerList.add(offerService.createOffer("50 % Bahnfahrt Wiriehorn", "", "", "Transport"));
        offerList.add(offerService.createOffer("37.5 % Bahnfahrt Schynige Platte", "", "", "Transport"));
        offerList.add(offerService.createOffer("30 % Bahnfahrt Harder Kulm", "", "", "Transport"));
        offerList.add(offerService.createOffer("20 % Niederhornbahn", "", "", "Transport"));
        offerList.add(offerService.createOffer("20 % Niesenbahn", "", "", "Transport"));
        regionService.createRegion("Beatenberg", "Von den idyllischen Ferienorten Habkern und Beatenberg geniesst du einen atemberaubenden Blick auf den Thunersee und das imposante Bergpanorama. Erkunde praktisch und unkompliziert sämtliche Ausflugsziele und Aktivitäten der gesamten Region. Profitiere hierbei von den zahlreichen Vergünstigungen mit den Gästekarten und nutze die freie Fahrt mit dem öffentlichen Verkehr gemäss Linienplan.", "", offerList);

        offerList = new ArrayList<>();
        offerList.add(offerService.createOffer("Freie Fahrt mit dem öffentlichen Verkehr in der Region", "", "", "Transport"));
        offerList.add(offerService.createOffer("Besuche kostenlose die öffentliche Altstadtführung in Thun", "", "", "Kultur"));
        offerList.add(offerService.createOffer("50% Spiezer Zügli", "", "", "Transport"));
        offerList.add(offerService.createOffer("50% Panoramabrücke Sigriswil", "", "", "Transport"));
        offerList.add(offerService.createOffer("30% St. Beatus-Höhlen", "", "", "Natur"));
        offerList.add(offerService.createOffer("30% BLS Schifffahrt (Tageskarte Normaltarif)", "", "", "Natur"));
        regionService.createRegion("Thunersee", "Als Gast in der Region Thunersee profitierst du von den vielen Vorteilen der PanoramaCard Thunersee. Nutze beispielsweise die freie Fahrt mit dem STI Bus auf dem gesamten Streckennetz oder mit dem PostAuto im Raum Spiez-Aeschi, um unkompliziert die wunderschöne Landschaft rund um den tiefblauen Thunersee zu erkunden. Mit der PanoramaCard Thunersee erhältst du interessante Ermässigungen bei diversen Ausflugszielen. Viel Spass beim Erkunden der Ferienregion Interlaken!", "", offerList);

        offerList = new ArrayList<>();
        offerList.add(offerService.createOffer("Freie Fahrt mit den öffentlichen Verkehrsmitteln in Interlaken gemäss Linienplan", "", "", "Transport"));
        offerList.add(offerService.createOffer("Freie Fahrt mit dem Skibus in Verbindung mit einem gültigen Sportpass der Jungfrau Skiregion", "", "", "Transport"));
        offerList.add(offerService.createOffer("30% Bahnfahrt Schynige Platte", "", "", "Transport"));
        offerList.add(offerService.createOffer("11–25% Bahnfahrt Harder Kulm", "", "", "Transport"));
        offerList.add(offerService.createOffer("30% Tageskarte BLS Schifffahrt", "", "", "Transport"));
        regionService.createRegion("Interlaken", "In der Ferienregion Interlaken warten unvergessliche Erlebnisse vor schönster Naturkulisse auf dich. Mit der Gästekarte Interlaken profitierst du von der freien Fahrt mit dem öffentlichen Verkehr gemäss Linienplan. Weiter erhältst du diverse Vergünstigungen bei den zahlreichen Ausflugszielen und abwechslungsreichen Aktivitäten in der ganzen Region. Viel Spass beim Entdecken der Ferienregion Interlaken!", "", offerList);
    }

    private User createRandomUser(){
        String firstname = firstnames[generator.nextInt(firstnames.length)];
        String name = names[generator.nextInt(names.length)];
        String email =name+"."+firstname+"@"+emailextension[generator.nextInt(emailextension.length)];
        if(containsMail(userList, email))
            return createRandomUser();
        return userService.createUser(firstname,
                name,
                "01.01.2000",
                email,
                "secure"
                );
    }

    private boolean containsMail(final List<User> list, final String email){
        return list.stream().anyMatch(o -> o.getEmail().equals(email));
    }

    private static Date parseDate(String date) {
        try {
            return new SimpleDateFormat("yyyy-MM-dd").parse(date);
        } catch (ParseException e) {
            return null;
        }
    }

}
