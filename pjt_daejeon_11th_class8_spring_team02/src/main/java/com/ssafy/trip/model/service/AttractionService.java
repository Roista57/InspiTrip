package com.ssafy.trip.model.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Service;
import com.ssafy.trip.model.dao.AttractionDAO;
import com.ssafy.trip.model.dto.AttractionDto;
import com.ssafy.trip.model.dto.GunguDto;
import com.ssafy.trip.model.dto.SearchInfoDto;
import com.ssafy.trip.model.dto.SidoDto;

@Service
public class AttractionService {

	AttractionDAO adao;

	public AttractionService(AttractionDAO adao) {
		super();
		this.adao = adao;
	}

	public List<SidoDto> sidoList() {
		return adao.getSidoList();
	}

	public List<GunguDto> gunguList(int sido) {
		return adao.getGunguList(sido);
	}

	public List<AttractionDto> getAttractionListBySidoGungu(SearchInfoDto attr) {
		List<AttractionDto> result;
		if (attr.getContentTypeId() == 0) {
			result = adao.getAttractionListBySidoGungu(attr.getSidoCode(), attr.getGunguCode());
		} else {
			result = adao.getAttractionListBySidoGunguTypeId(attr.getSidoCode(), attr.getGunguCode(),
					attr.getContentTypeId());
		}
		return result;
	}

	public List<AttractionDto> getAttractionListByLocation(SearchInfoDto attr) {

		BigDecimal minLatitue = attr.getLatitude().subtract(BigDecimal.valueOf(0.0045));
		BigDecimal maxLatitue = attr.getLatitude().add(BigDecimal.valueOf(0.0045));
		BigDecimal minLongitue = attr.getLongitude().subtract(BigDecimal.valueOf(0.0045));
		BigDecimal maxLongitue = attr.getLongitude().add(BigDecimal.valueOf(0.0045));

		List<AttractionDto> result;

		if (attr.getContentTypeId() == 0) {
			result = adao.getAttractionListByLocation(minLongitue, maxLongitue, minLatitue, maxLatitue);
		} else {
			result = adao.getAttractionListByLocationTypeId(minLongitue, maxLongitue, minLatitue, maxLatitue,
					attr.getContentTypeId());
		}

		return result;
	}
	
	public List<AttractionDto> getAttractionListByInfluencer(int ano) {
		return adao.getAttractionListByInfluencer(ano);
	}

	public AttractionDto getAttraction(int contentId) {
		AttractionDto result = adao.getAttraction(contentId);
		return result;
	}

}
