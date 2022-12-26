package com.serverspringboot.controllers;

import com.serverspringboot.models.Member;
import com.serverspringboot.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping(value = "/member", consumes = {"application/json"})
@CrossOrigin("*")
public class MemberController {
    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/active-list")
    @ResponseBody
    public Object getActiveMemberList() {
        return memberService.findByCondition("membership_status", true);
    }

    @GetMapping("/inactive-list")
    @ResponseBody
    public Object getInactiveMemberList() {
        return memberService.findByCondition("membership_status", false);
    }

    @GetMapping("/profile/{id}")
    @ResponseBody
    public Object getMemberProfile(@PathVariable("id") String member_id) {
        return memberService.findByMemberId(member_id);
    }

    @PutMapping("/update-info")
    public Object updateMemberInfo(@RequestBody Member member) {
        return memberService.updateMemberInfo(member);
    }

    @PutMapping("/update-pwd")
    public Object updatePassword(@RequestBody Member member) {
        return memberService.updateMemberPassword(member);
    }

    @PutMapping("/reset-pwd")
    public Object resetPassword(@RequestBody Member member) {
        return memberService.resetMemberPassword(member);
    }

    @PutMapping("/deactivate")
    public Object deactivateMember(@RequestBody Member member) {
        return memberService.deactivateMember(member);
    }

    @PutMapping("/activate")
    public Object activateMember(@RequestBody Member member) throws ParseException {
        return memberService.activateMember(member);
    }


}


