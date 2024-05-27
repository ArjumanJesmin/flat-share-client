const flatSlice = createSlice({
  name: "flats",
  initialState: {
    singleFlat: null,
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(flatApi.endpoints.getSingleFlat.matchPending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(
        flatApi.endpoints.getSingleFlat.matchFulfilled,
        (state, action) => {
          state.isLoading = false;
          state.singleFlat = action.payload;
        }
      )
      .addMatcher(flatApi.endpoints.getSingleFlat.matchRejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default flatSlice.reducer;
