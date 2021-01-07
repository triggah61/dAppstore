import React from 'react';

import { actions, selectors } from '../Common/Presale/modules';
import { connect } from '~/containers/CartContainer';

const CartContainer = connect({ actions, selectors });

export default () => <CartContainer />;
