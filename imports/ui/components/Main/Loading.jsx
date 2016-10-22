import React from 'react';

const Spinner = () => (
  <div>
		Loading...
	</div>
);

const Loading = (props) => (
  props.isLoading ? <Spinner /> : <div> {props.children} </div>
);

Loading.propTypes = {
  children: React.PropTypes.node,
  isLoading: React.PropTypes.bool,
};

Loading.defaultProps = {
  isLoading: false,
};

export default Loading;
