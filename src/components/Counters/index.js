import React, { Component } from 'react';
import Statistics from '../Statistics';
import Counter from '../Counter';
// import Counter from '../CounterHook';

import getId from '../../utils/getId';

import './Counters.scss';

class Counters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  handleAddCounter = () => {
    this.setState(({ items }) => ({
      items: [
        ...items,
        {
          id: getId(),
          Item: Counter,
        },
      ],
    }));
  };

  handleRemoveCounter = (id) => {
    this.setState(({ items }) => ({
      items: items.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <div className="counters">
        <div className="header">
          <h2>Counters</h2>
          <button onClick={this.handleAddCounter}>add</button>
        </div>

        <Statistics value={items.length} />

        {items.map(({ id, Item }) => (
          <Item
            key={id}
            id={id}
            initialValue={~~(Math.random() * 10)}
            onClose={() => this.handleRemoveCounter(id)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
