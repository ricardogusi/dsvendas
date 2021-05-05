package com.gusi.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gusi.dsvendas.dtos.SaleDTO;
import com.gusi.dsvendas.dtos.SaleSuccessDTO;
import com.gusi.dsvendas.dtos.SaleSumDTO;
import com.gusi.dsvendas.entities.Sale;
import com.gusi.dsvendas.repositories.SaleRepository;
import com.gusi.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly=true) //tira a necessidade do banco fazer locking de escrita
	public Page<SaleDTO> findAll(Pageable pageable){ 
		sellerRepository.findAll();  //corrige o problema de buscar 5 vezes os vendedores (há 5 vendedores)
		Page<Sale> result =  repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x)); 
	}
	
	@Transactional(readOnly=true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		return repository.amountGroupedBySeller();
	};
	
	@Transactional(readOnly=true)
	public List<SaleSuccessDTO> successGroupedBySeller(){
		return repository.successGroupedBySeller();
	};
}
