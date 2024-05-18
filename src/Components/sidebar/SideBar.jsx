import React, { useState, useEffect } from "react";
import Page_Heading from "../page-heading/Page_Heading";
import { Button } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setFilters,
  filterProducts,
  resetFilters,
} from "../../store/reducer/productReducer";
import { Slider } from "antd";

function SideBar() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const filters = useSelector((state) => state.products.filters);

  const [selectedColor, setSelectedColor] = useState(null);

  const categories = allProducts.reduce((uniqueCategories, product) => {
    const category = product.category.toUpperCase();
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
    return uniqueCategories;
  }, []);
  const colors = allProducts.reduce((uniqueColors, product) => {
    product.colors.forEach((color) => {
      const colorLowerCase = color.toLowerCase();
      if (!uniqueColors.includes(colorLowerCase)) {
        uniqueColors.push(colorLowerCase);
      }
    });
    return uniqueColors;
  }, []);
  const sizes = allProducts.reduce((acc, product) => {
    product.size.forEach((size) => {
      if (!acc.includes(size)) {
        acc.push(size);
      }
    });
    return acc;
  }, []);

  const handleCategoryClick = (category) => {
    const index = filters.category.indexOf(category);
    if (index === -1) {
      dispatch(
        setFilters({ ...filters, category: [...filters.category, category] })
      );
    } else {
      const updatedCategories = [...filters.category];
      updatedCategories.splice(index, 1);
      dispatch(setFilters({ ...filters, category: updatedCategories }));
    }
  };
  const handleColorClick = (color) => {
    setSelectedColor(color);
    dispatch(setFilters({ ...filters, colors: color }));
  };
  const handleSizeClick = (size) => {
    dispatch(setFilters({ ...filters, size: size }));
  };
  const handlePriceChange = (value) => {
    dispatch(setFilters({ ...filters, prices: value }));
  };
  const resetPriceFilter = () => {
    dispatch(setFilters({ ...filters, prices: [0, 10000] }));
  };
  useEffect(() => {
    dispatch(filterProducts());
    // console.log("filters sidebar", filters);
  }, [filters]);

  return (
    <div>
      <div className="p-5 py-5 rounded-4 border border-light">
        <div className="pb-4 mb-4 mb-4 border-bottom border-light">
          <Button
            style={{ width: "65px", height: "30px" }}
            onClick={() => {
              dispatch(resetFilters());
            }}
            className="bg-transparent p-0 text-dark"
          >
            Reset
          </Button>
        </div>
        <div className=" mb-4 pb-4 border-light">
          <h4 className="mb-3">Categories</h4>
          {categories.map((category) => (
            <div className="form-check mb-2">
              <input
                id={category}
                type="checkbox"
                className="form-check-input"
                value={category}
                defaultChecked={
                  filters.category.includes(category) ? true : false
                }
                onClick={() => handleCategoryClick(category)}
              />
              <label className="form-check-label" key={category}>
                {category}
              </label>
            </div>
          ))}
        </div>
        <div className="mb-4 pb-4 border-bottom">
          <h4 className="mb-3">Price</h4>
          <button
            className="border-0 p-0 bg-transparent btn-link"
            onClick={() => resetPriceFilter()}
          >
            clear
          </button>
          <div className="price_slider_wrapper">
            <Slider
              range
              min={0}
              max={10000}
              defaultValue={filters.prices}
              onChange={(value) => handlePriceChange(value)}
            />
          </div>
        </div>
        <div className="mb-4 pb-4 border-bottom border-light">
          <h4 className="mb-3">Color</h4>
          <ul
            className="list-inline"
            style={{
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "repeat(auto-fill, minmax(40px, 1fr))",
              gridGap: "10px",
            }}
          >
            {colors.map((color) => (
              <li>
                <div className="form-check ">
                  <input
                    type="radio"
                    value={color}
                    className="form-check-input"
                    id={color}
                    style={{
                      background: color,
                      width: "24px",
                      height: "24px",
                      border:
                        filters.colors === color
                          ? "4px solid red" // Use red border if filters.colors matches with color
                          : "4px solid #ccc", // Use default gray border otherwise
                      paddingLeft: "2px",
                      borderRadius: "0",
                    }}
                    checked={filters.colors === color}
                    onChange={() => handleColorClick(color)}
                  />
                </div>
                <small style={{textTransform: 'capitalize'}}>{color}</small>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 pb-4 border-bottom border-light widget-size">
          <h4 className=" mb-3">Size</h4>
          <div
            className="pl-0"
            style={{
              display: "grid",
              justifyContent: "center",
              // height: "40px",
              gridTemplateColumns: "repeat(5, 1fr)", // show 4 items in one row

              //gridAutoFlow: "column",
              paddingBottom: "5px",
              gap: "5px",
            }}
          >
            {sizes.map((size, index) => (
              <li key={index}>
                <input
                  name="size"
                  id={size.toLowerCase() + "-size"}
                  type="radio"
                  className="form-check-input"
                  checked={filters.size === size}
                  style={{ display: "none" }}
                  onChange={() => handleSizeClick(size)}
                />
                <label
                  htmlFor={size.toLowerCase() + "-size"}
                  style={{
                    border: "2px solid #ddd",
                    borderRadius: "5px",
                    //padding: "5px 15px",
                    cursor: "pointer",
                  }}
                >
                  {size}
                </label>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
