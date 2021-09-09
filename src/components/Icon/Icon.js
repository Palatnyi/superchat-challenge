import React from 'react';
import PropTypes from 'prop-types';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

const icons = {
  alarm: AccessAlarmIcon,
  threeD: ThreeDRotation,
};

function SuperchatIcon({ icon }) {
  if (!icons[icon]) {
    return null;
  }
    
  return (
    icons[icon]
  );
}

SuperchatIcon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default SuperchatIcon;
export { icons };