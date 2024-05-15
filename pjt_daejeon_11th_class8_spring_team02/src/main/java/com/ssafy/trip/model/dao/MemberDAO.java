package com.ssafy.trip.model.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.ssafy.trip.model.dto.MemberDTO;

@Mapper
public interface MemberDAO {
	MemberDTO login(@Param("id") String memberId, @Param("pw") String memberPw);
	int insert(MemberDTO memberDTO);
	int update(MemberDTO memberDTO);
	int delete(MemberDTO memberDTO);
	MemberDTO idCheck(String memberId);
	
	MemberDTO selectOne(String memberId);
	
}
