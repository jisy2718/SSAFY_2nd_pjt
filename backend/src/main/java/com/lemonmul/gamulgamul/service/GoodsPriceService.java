package com.lemonmul.gamulgamul.service;

import com.lemonmul.gamulgamul.entity.BusinessType;
import com.lemonmul.gamulgamul.entity.goods.Goods;
import com.lemonmul.gamulgamul.entity.goods.GoodsPrice;
import com.lemonmul.gamulgamul.repo.GoodsPriceRepo;
import com.lemonmul.gamulgamul.repo.GoodsRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class GoodsPriceService {
    private final GoodsPriceRepo goodsPriceRepo;
    private final GoodsRepo goodsRepo;

    // 상품Id와 업태 타입으로 상품 가격을 받아오는 함수
    public List<GoodsPrice> getGoodsPrices(Long goodsId, BusinessType businessType) {
        Optional<Goods> optional = goodsRepo.findById(goodsId);
        if(optional.isPresent()) {
            return goodsPriceRepo.findByGoodsAndBusinessTypeOrderByResearchDate(optional.get(), businessType);
        }else{
            //todo
            throw new NullPointerException();
        }
    }

    /**
     * 선택 품목, 업태의 상품 가격 정보 (날짜 오름차순)
     */
    public List<GoodsPrice> goodsPricesByBusinessType(Goods goods,BusinessType businessType){
        return goodsPriceRepo.findByGoodsAndBusinessTypeOrderByResearchDate(goods,businessType);
    }

    /**
     * 선택 품목, 온라인 업태의 상품 최신 가격 정보
     */
    public GoodsPrice goodsCheapPrice(Goods goods){
        Optional<GoodsPrice> optional = goodsPriceRepo.findFirstByGoodsAndBusinessTypeOrderByResearchDateDesc(goods,BusinessType.o);
        if(optional.isPresent()){
            return optional.get();
        }else{
            //todo
            throw new NullPointerException();
        }
    }
}
