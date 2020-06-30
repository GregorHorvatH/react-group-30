import React from 'react';

const Text = React.memo(({ reset }) => {
  // useEffect(() => console.log('Tesxt did mount'), []); // did mount

  console.log('Text render');

  return (
    <div className="text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure assumenda
        veritatis, fugiat illo exercitationem commodi aut quam, excepturi
        asperiores quas reprehenderit fuga alias sequi, est odit. Facilis ea
        accusantium mollitia?
      </p>
      <button onClick={reset}>Reset</button>
    </div>
  );
});

// class Text extends PureComponent {
//   render() {
//     return (
//       <div className="text">
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
//           assumenda veritatis, fugiat illo exercitationem commodi aut quam,
//           excepturi asperiores quas reprehenderit fuga alias sequi, est odit.
//           Facilis ea accusantium mollitia?
//         </p>
//       </div>
//     );
//   }
// }

export default Text;
