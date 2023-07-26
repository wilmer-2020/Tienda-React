import { useId } from "react";
//import { useState } from "react"
import { useFilters } from "../assets/useFilters.js";

export function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceID = useId();
  const categoryID = useId();

  function changeMinPrice(e) {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  }

  function changeCategory(e) {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio</label>
        <input
          type="range"
          id={minPriceID}
          min="0"
          max="1000"
          onChange={changeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryID}></label>
        <select name="" id="category" onChange={changeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
