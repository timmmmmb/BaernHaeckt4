package ch.baernhaeckt.controller;

import ch.baernhaeckt.model.Product;
import ch.baernhaeckt.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public @ResponseBody
    Product[] list() {
        ArrayList<Product> products = (ArrayList<Product>) productRepository.findAll();
        return products.toArray(new Product[0]);
    }

    @GetMapping("/{id}")
    public @ResponseBody
    Product getById(@PathVariable String id) {
        return productRepository.findById(id).get();
    }


}
