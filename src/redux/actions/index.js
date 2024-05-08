export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const GET_JOB = "GET_JOB";

export const addToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITES,
  payload: company,
});

export const removeFromFavourites = (company) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: company,
});

export const getCompaniesAction = (query) => {
  return async (dispatch) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: GET_JOB, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
