package com.lefutiyu.sevenbu.mp.service;

import com.lefutiyu.sevenbu.mp.dao.SignUpUserDAO;
import com.lefutiyu.sevenbu.mp.dto.SignUpUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by guoqing on 2019/3/20.
 */
@Service
public class LoveSportsService {
    @Autowired
    private SignUpUserDAO signUpUserDAO;

    public void signUpUserInfo(SignUpUserDTO signUpUserDTO){
        int count = signUpUserDAO.insert(signUpUserDTO);
    }
}