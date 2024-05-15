package com.ssafy.trip.model.dto;

public class MemberReviewDTO {
	private int no;
	private int rno;
	private String mid;
	private String content;
	private String writeDate;
	private String grade;

	public MemberReviewDTO() {
	}

	public MemberReviewDTO(int no, int rno, String mid, String content, String writeDate, String grade) {
		this.no = no;
		this.rno = rno;
		this.mid = mid;
		this.content = content;
		this.writeDate = writeDate;
		this.grade = grade;
	}

	public int getNo() {
		return no;
	}

	public void setNo(int no) {
		this.no = no;
	}

	public int getRno() {
		return rno;
	}

	public void setRno(int rno) {
		this.rno = rno;
	}

	public String getMid() {
		return mid;
	}

	public void setMid(String mid) {
		this.mid = mid;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

}
