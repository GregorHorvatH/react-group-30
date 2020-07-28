import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import axios from 'axios';

const CancelToken = axios.CancelToken;

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  default: {
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

const MaterialComponent = ({
  classes,
  children,
  className,
  items = [],
  ...other
}) => {
  const [checked, setChecked] = useState(true);
  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  let cancel;

  const handleFetch = () =>
    axios
      .get('http://localhost:3030/users', {
        cancelToken: new CancelToken(function executor(c) {
          // An executor function receives a cancel function as a parameter
          cancel = c;
        }),
      })
      .then(console.log)
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          // handle error
        }
      });

  const handleCancel = () => cancel('Operation canceled by the user.');

  useEffect(() => {
    if (items.length > 0) {
      return;
    }

    axios
      .get('http://localhost:3030/users')
      .then(({ data }) => setUsers(data))
      .catch(console.log);
  }, [items]); // componentDidMount

  return (
    <div className="my-component">
      <h3>Hello</h3>
      <Button
        className={clsx(checked ? classes.root : classes.default, className)}
        onClick={handleFetch}
        {...other}
      >
        Fetch
      </Button>

      <Button color="secondary" onClick={handleCancel}>
        Cancel
      </Button>

      <Button color="secondary">New Button</Button>

      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default withStyles(styles)(MaterialComponent);
