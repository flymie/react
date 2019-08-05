import React from 'react';

const RefInput = React.forwardRef((props, ref) => (
  <input ref={ref} />
));


RefInput.propTypes = {
};

export default RefInput;
