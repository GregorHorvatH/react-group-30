// core
import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';

// components
import NewsFilter from './NewsFilter';
// import Loader from '../Loader';

// utils
import { getNews } from '../../utils/newsApi';

// styles
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

class News extends Component {
  state = {
    hits: [],
    page: 0,
    nbPages: 0,
    isLoading: false,
    query: '',
    error: '',
  };

  loadData = (query, page) => {
    this.setState({ isLoading: true, query });

    getNews(query, page)
      .then((data) =>
        this.setState({
          hits: data.hits,
          nbPages: data.nbPages,
        }),
      )
      .then(() =>
        toast.success('News loaded', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }),
      )
      .catch((error) => {
        this.setState({ error: error.message });
        toast.error(error.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handlePageChange = (page) => {
    this.loadData(this.state.query, page.selected);
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    const { hits, isLoading, nbPages } = this.state;

    return (
      <div>
        <NewsFilter onFilter={this.loadData} />

        {isLoading ? (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000} //3 secs
          />
        ) : (
          <ul>
            {hits.map(({ objectID, url, title }) => (
              <li key={objectID}>
                <a href={url}>{title}</a>
              </li>
            ))}
          </ul>
        )}

        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={nbPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={this.handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default News;
