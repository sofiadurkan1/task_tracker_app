import React from 'react';
import Button from './Button';
//import PropTypes from 'prop-types';

const Header = ({ title, toggleShow, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? 'red' : 'purple'}
        text={showAddTask ? 'Close Add Task Bar' : 'Show Add Task Bar'}
        toggleShow={toggleShow}
      />
    </header>
  );
};

export default Header;

// Header.defaultProps = {
//   title: 'Task Tracker',
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };