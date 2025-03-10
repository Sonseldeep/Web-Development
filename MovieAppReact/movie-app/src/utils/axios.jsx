import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mjk0YzhlZjA1MDY1YjlkZGFmMzNlYjI1YjQ0YzEyYiIsIm5iZiI6MTc0MTU4NTg0My4xNDksInN1YiI6IjY3Y2U3ZGIzOGQwYzQ0Y2Y4ZjExMTlhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hM6RDMIaVO8TsMZTfRwlBWYGiC0_0eQdENQGlQDtDcE",
  },
});

export default instance;
