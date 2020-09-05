package ch.baernhaeckt.controller;

import ch.baernhaeckt.model.Region;
import ch.baernhaeckt.repository.RegionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/regions")
@CrossOrigin(origins = "*")
public class RegionController {

    @Autowired
    private RegionRepository regionRepository;

    @GetMapping
    public @ResponseBody
    Region[] list() {
        ArrayList<Region> products = (ArrayList<Region>) regionRepository.findAll();
        return products.toArray(new Region[0]);
    }

    @GetMapping("/{name}")
    public @ResponseBody
    Region[] getByName(@PathVariable String name) {
        return regionRepository.findByNameIgnoreCase(name).toArray(new Region[0]);
    }
}
