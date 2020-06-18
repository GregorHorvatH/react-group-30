import React, { useEffect, useState } from 'react';

const UserDetails = ({ match, history, location }) => {
  const [user, setUser] = useState();
  const { userId } = match.params;

  useEffect(() => {
    fetch(`http://localhost:8080/users/${userId}`)
      .then((res) => res.json())
      .then(setUser);
  }, [userId]);

  const { name = {}, picture = {}, email } = user || {};

  return user ? (
    <div className="user-details">
      <h3>{`${name.title} ${name.first} ${name.last}`}</h3>
      <img src={picture.large} alt="" />
      <p>{email}</p>
      <p>Filter: {location?.state?.filter || 'no filter'}</p>
      <button onClick={history.goBack}>&#60;</button>
    </div>
  ) : null;
};

export default UserDetails;
