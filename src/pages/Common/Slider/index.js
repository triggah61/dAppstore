import React from 'react';

import { actions, selectors } from 'modules/apps';
import { connect } from 'containers/SliderContainer';

const SliderContainer = connect({ actions, selectors });

const CommonSlider = props => <SliderContainer {...props} />;

export default CommonSlider;
