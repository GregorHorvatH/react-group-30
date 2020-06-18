import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';

// import UserDetails from '../UserDetails';
// import { routes } from '../../routes';

import './Users.styles.scss';

class Users extends Component {
  state = {
    userList: [],
    filter: '',
  };

  componentDidMount() {
    fetch('http://localhost:8080/users')
      .then((res) => res.json())
      .then((userList) =>
        this.setState({
          userList,
        }),
      );

    const { filter = '' } = qs.parse(this.props.location.search);
    this.setState({ filter });
  }

  render() {
    const { userList, filter } = this.state;
    const { url } = this.props.match;

    return (
      <div className="users">
        <h3>Users Page</h3>
        <label>
          <span>User name</span>
          <input
            className="input"
            type="text"
            value={filter}
            onChange={(e) => {
              this.setState({
                filter: e.target.value,
              });

              this.props.history.push({
                pathname: this.props.location.pathname,
                search: `filter=${e.target.value}`,
              });
            }}
          />
        </label>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          sapiente, eius illo voluptatem tempora minima cupiditate quidem
          dolorum reiciendis quasi pariatur iusto distinctio! Debitis velit
          voluptatum exercitationem at ipsa quaerat?
        </p>

        <div className="users-wrapper">
          <div>
            <div className="user-list">
              {userList
                .filter(({ name }) =>
                  name.toLowerCase().includes(filter.toLowerCase()),
                )
                .map(({ id, name }) => (
                  <Link
                    to={{
                      pathname: `${url}/${id}`,
                      state: { filter },
                    }}
                    key={id}
                  >
                    {name}
                  </Link>
                ))}
            </div>
          </div>
          {/* <div>
            <Route path={routes.USER_DETAILS} component={UserDetails} />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Users;
