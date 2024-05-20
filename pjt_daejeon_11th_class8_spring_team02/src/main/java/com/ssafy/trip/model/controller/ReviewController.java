package com.ssafy.trip.model.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/review")
@Tag(name = "리뷰", description = "관광지에 작성하는 리뷰")
@CrossOrigin("*")
public class ReviewController {

}
