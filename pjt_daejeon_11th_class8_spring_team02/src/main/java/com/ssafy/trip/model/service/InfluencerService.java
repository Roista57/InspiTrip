package com.ssafy.trip.model.service;

import java.util.List;

import java.net.URL;

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
	
    public static String extractChannelId(String url) {
        try {
            URL youtubeURL = new URL(url);
            String path = youtubeURL.getPath();
            if (path.startsWith("/channel/")) {
                return path.substring("/channel/".length());
            } else {
                throw new IllegalArgumentException("URL does not contain a channel ID.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
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
		String youtubeURL = tmp.getUrl();
        String[] parts = youtubeURL.split("/");
		tmp.setYoutubeId(parts[parts.length-1]);
		System.out.println(tmp.getYoutubeId());
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
