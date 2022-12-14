import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
const API_URL = 'https://j7d108.p.ssafy.io/api/favorite';
interface FetchItems {
  basicProductId: number;
  goodsId: number;
  goodsName: string;
  img: string;
  measure: string;
  priceGapOff: number;
  priceGapOn: number;
  recentPriceOff: number;
  recentPriceOn: number;
}

interface SelectedGoods {
  goodsId: number;
  goodsName: string;
  img?: string;
}
interface MyKnownError {
  errorMessage: string;
}

interface Initial {
  goods: SelectedGoods[];
  isLoading: boolean;
}

const initialState: Initial = {
  goods: [],
  isLoading: false,
};

export const getFavoritePageDataRedux = createAsyncThunk(
  'getFavorite',
  async () => {
    try {
      const { data } = await axios({
        url: API_URL + '/',
        method: 'GET',
      });
      return data;
    } catch (error) {}
  },
);
export const getFavoriteItemStoreReduxLogin = createAsyncThunk(
  'getFavoriteItemStoreReduxLogin',
  async () => {
    try {
      const { data } = await axios({
        url: API_URL + '/',
        method: 'GET',
      });
      return data.favoriteItems;
    } catch (error) {}
  },
);

export const updateFavoriteItems = createAsyncThunk(
  'updateFavoriteItem',
  async (goodsIdList: number[], thunkAPI) => {
    try {
      const { data } = await axios({
        url: API_URL + '/',
        method: 'post',
        data: {
          goodsIds: goodsIdList,
        },
      });
      return data;
    } catch (error) {}
  },
);

export const updateRecommendItem = createAsyncThunk(
  'updateRecommendItem',
  async (goodsId: number, thunkAPI) => {
    try {
      const { data } = await axios({
        url: API_URL + `/goods/${goodsId}`,
        method: 'POST',
        data: {
          goodsId,
        },
      });
      return data;
    } catch (error) {}
  },
);

export const favoriteGoodsSlice = createSlice({
  name: 'favoriteGoods',
  initialState,
  reducers: {
    addGoods: (state, action: PayloadAction<SelectedGoods>) => {
      const isDuplicate = state.goods.find(
        (goods: { goodsId: number; goodsName: string }) =>
          goods.goodsId == action.payload.goodsId,
      );
      if (isDuplicate) {
      } else {
        state.goods.unshift({
          goodsId: action.payload.goodsId,
          goodsName: action.payload.goodsName,
        });
      }
    },
    removeGoods: (state, action: PayloadAction<{ goodsId: number }>) => {
      const data = state.goods.filter(
        (goods: { goodsId: number; goodsName: string }) => {
          return goods.goodsId != action.payload.goodsId;
        },
      );
      state.goods = data;
    },
    clearAllGoodsList: state => {
      state.goods = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(getFavoritePageDataRedux.fulfilled, (state, action) => {
      const fetchList = action.payload.favoriteItems.map((item: FetchItems) => {
        return item;
      });
      state.isLoading = false;
    });
    builder.addCase(updateFavoriteItems.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateFavoriteItems.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateRecommendItem.fulfilled, (state, action) => {
      state.goods = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updateRecommendItem.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      getFavoriteItemStoreReduxLogin.fulfilled,
      (state, action) => {
        state.goods = action.payload;
      },
    );
  },
});

export const { addGoods, removeGoods, clearAllGoodsList } =
  favoriteGoodsSlice.actions;
export default favoriteGoodsSlice.reducer;
