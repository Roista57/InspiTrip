package com.ssafy.trip.model.dto;

public class VisitDTO {
	private int no;
	private String mid;
	private int ino;
	private int ano;
	private String url;

	public VisitDTO() {
	}

	public VisitDTO(int no, String mid, int ino, int ano, String url) {
		this.no = no;
		this.mid = mid;
		this.ino = ino;
		this.ano = ano;
		this.url = url;
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public String getMid() {
		return mid;
	}

	public void setMid(String mid) {
		this.mid = mid;
	}

	public int getIno() {
		return ino;
	}

	public void setIno(int ino) {
		this.ino = ino;
	}

	public int getAno() {
		return ano;
	}

	public void setAno(int ano) {
		this.ano = ano;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
