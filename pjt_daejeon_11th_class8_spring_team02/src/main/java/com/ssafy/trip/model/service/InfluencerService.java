package com.ssafy.trip.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.trip.model.dao.InfluencerDAO;
import com.ssafy.trip.model.dto.InfluencerDTO;
import com.ssafy.trip.model.dto.VisitDTO;

@Service
public class InfluencerService {
	InfluencerDAO idao;

	public InfluencerService(InfluencerDAO idao) {
		super();
		this.idao = idao;
	}

	public InfluencerDTO find(int no) {
		return idao.selectOne(no);
	}
	
	public InfluencerDTO findName(String no) {
		return idao.selectOneName(no);
	}

	public int insert(InfluencerDTO influencer) {
		return idao.addTemp(influencer);
	}

	@Transactional
	public int accept(int no) {
		InfluencerDTO tmp = idao.selectTempOne(no);
		idao.deleteTemp(no);
		int result = idao.acceptInfluencer(tmp);
		return result;
	}

	public int insertVisit(VisitDTO visit) {
		return idao.addVisit(visit);
	}
	
	public List<VisitDTO> selectVisits(int no){
		return idao.selectList(no);
	}

	public List<InfluencerDTO> selectAll(){
		return idao.selectAll();
	}
	
}
