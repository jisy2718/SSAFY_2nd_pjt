package com.lemonmul.gamulgamul.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.time.LocalDate;

@Entity
@Getter
@NoArgsConstructor
@DiscriminatorValue("country")
public class CountryIndex extends PriceIndex{

    public CountryIndex(LocalDate researchDate, Double value) {
        super(researchDate, value);
    }

    public static CountryIndex createCountryIndex(LocalDate researchDate, Double value) {
        return new CountryIndex(researchDate, value);
    }
}