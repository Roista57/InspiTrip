package com.ssafy.trip.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.trip.model.dao.MemberReviewDAO;
import com.ssafy.trip.model.dto.MemberReviewDTO;
import com.ssafy.trip.model.dto.ReviewImageDTO;

@Service
public class ReviewService {
	@Autowired
	private MemberReviewDAO rdao;
	
	
	public List<MemberReviewDTO> selectAll(int ano){
		return rdao.selectAll(ano);
	}
	
	public List<ReviewImageDTO> getImage(int rno){
		return rdao.getImage(rno);
	}
}
