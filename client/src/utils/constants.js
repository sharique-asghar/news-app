import BusinessIcon from '@material-ui/icons/Business';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import SportsIcon from '@material-ui/icons/Sports';
import WebIcon from '@material-ui/icons/Web';

export const API_CONSTANTS = {
  getTopHeadlines: '/api/top-headlines',
  getAnyNews: '/api/everything'
}

export const sidebarCategoryList = {
  // country: [
  //   { id: 0, title: "United Kingdom", code: "gb" },
  //   { id: 1, title: "United States", code: "us" },
  //   { id: 2, title: "India", code: "in" }
  // ],
  category: [
    { id: 0, title: "Business", value: "business", icon: BusinessIcon },
    { id: 1, title: "Entertainment", value: "entertainment", icon: MovieFilterIcon },
    { id: 2, title: "Sports", value: "sports", icon: SportsIcon },
    { id: 3, title: "Technology", value: "technology", icon: WebIcon }
  ],
}