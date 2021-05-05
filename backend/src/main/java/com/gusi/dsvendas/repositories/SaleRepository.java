package com.gusi.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gusi.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
