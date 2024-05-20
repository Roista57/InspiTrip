package com.ssafy.trip.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.ssafy.trip.model.dto.MemberReviewDTO;

public interface MemberReviewDAO {
	int insert(MemberReviewDTO dto);
	int update(MemberReviewDTO dto);
	int delete(MemberReviewDTO dto);
	MemberReviewDTO selectOne(@Param("ano")int ano, @Param("mid")String mid);
	List<MemberReviewDTO> selectAll(int ano);
}
