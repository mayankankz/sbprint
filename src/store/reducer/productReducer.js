import { createSlice } from "@reduxjs/toolkit";
import products from "../../api/products";
import { act } from "@testing-library/react";
import portFolioItems from "../../api/portFolioItems";
import { ToastContainer, toast } from "react-toastify";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: products,
    filteredProducts: [],
    selectedProduct: "",
    filters: { category: [], colors: "", size: "", prices: [0, 10000] },
    cart: [],
    wishList: [],
  },
  reducers: {
    setProducts(state, action) {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    addToCart(state, action) {
      const product = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, replace it
        toast("Product goes to cart", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        state.cart[existingProductIndex] = product;
      } else {
        toast("Product goes to cart", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        state.cart.push(product);
      }
      const wishlistIndex = state.wishList.findIndex(
        (item) => item.id === product.id
      );
      if (wishlistIndex !== -1) {
        state.wishList.splice(wishlistIndex, 1);
      }
    },
    addToWishList(state, action) {
      const product = action.payload;
      const existingProductIndex = state.wishList.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        state.wishList[existingProductIndex] = product;
      } else {
        const existingProductIndex = state.cart.findIndex(
          (item) => item.id === product.id
        );

        if (existingProductIndex !== -1) {
          toast("Product is already in cart", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          state.wishList.push(product);
          toast("Product goes to wishList", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    setSelectedPortFolio(state, action) {
      state.selectedPortFolio = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },

    filterProducts(state) {
      const { allProducts, filters } = state;
      const { category, colors, size, prices } = filters;

      const [minPrice, maxPrice] = prices;

      const filteredProducts = allProducts.filter((product) => {
        const isCategoryMatch =
          category.length === 0 ||
          category.some(
            (selectedCategory) =>
              selectedCategory.toLowerCase() === product.category.toLowerCase()
          );

        const isColorMatch =
          !colors ||
          product.colors.some(
            (color) => color.toLowerCase() === colors.toLowerCase()
          );

        const isSizeMatch =
          !size || Array.from(product.size).some((s) => s === size);

        const isPriceInRange =
          product.salePrice >= minPrice && product.salePrice <= maxPrice;
        return isCategoryMatch && isColorMatch && isSizeMatch && isPriceInRange;
      });

      state.filteredProducts = filteredProducts;
    },
    updateCartItemQuantity(state, action) {
      const { index, quantity } = action.payload;
      state.cart[index].quantity = quantity;
    },
    removeCartItem(state, action) {
      const productId = action.payload;
      const index = state.cart.findIndex((item) => item.id === productId);

      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    removeWishListItem(state, action) {
      const productId = action.payload;
      const index = state.wishList.findIndex((item) => item.id === productId);

      if (index !== -1) {
        state.wishList.splice(index, 1);
      }
    },

    resetFilters(state) {
      state.filters = {
        category: [],
        colors: "",
        sizes: "",
        prices: [0, 10000],
      };
      state.filteredProducts = state.allProducts;
    },
  },
});

export const {
  setProducts,
  setFilters,
  filterProducts,
  resetFilters,
  addToCart,
  updateCartItemQuantity,
  removeCartItem,
  setSelectedProduct,
  addToWishList,
  removeWishListItem,
} = productsSlice.actions;

export default productsSlice.reducer;
