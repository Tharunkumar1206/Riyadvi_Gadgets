package Tharun.Gadget.repository;

import Tharun.Gadget.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {}
