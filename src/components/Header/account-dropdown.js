import React from 'react';
import { Link } from '@reach/router';

import { ENABLE_PRESALE } from 'constants/config';
import { getUserName } from '~/utils';
import { SessionContext } from 'contexts/sessionContext';

import * as SC from './styled';

export default ({ onClick }) => (
  <SessionContext.Consumer>
    {({ userProfile, isLogin, logout }) =>
      isLogin ? (
        <SC.AccountDropddownWrapper>
          <div className="dropdown header-dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              id="account-dropdown"
              data-toggle="dropdown"
            >
              <i className="fa fa-user" />
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <SC.UserName className="dropdown-item disabled">
                <small>{getUserName(userProfile)}</small>
              </SC.UserName>

              {/* for show wallet balance | still static */}
              <div className="dropdown-item d-none">Wallet Balance: $0</div>

              <Link className="dropdown-item" onClick={onClick} to="/account">
                Account
              </Link>
              {userProfile.isAdmin && (
                <a className="dropdown-item" href="/admin">
                  Admin Panel
                </a>
              )}

              {/* needed menu items for presale vouchers */}
              {ENABLE_PRESALE && (
                <>
                  <Link
                    className="dropdown-item"
                    onClick={onClick}
                    to="/redeem-voucher"
                  >
                    Redeem Voucher
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={onClick}
                    to="/my-vouchers"
                  >
                    My Vouchers
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={onClick}
                    to="/order-history"
                  >
                    Order History
                  </Link>
                </>
              )}
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="/" onClick={logout}>
                Logout
              </a>
            </div>
          </div>
        </SC.AccountDropddownWrapper>
      ) : (
          <SC.LinkStyled className="nav-link" onClick={onClick} to="/login">
            Login
          </SC.LinkStyled>
        )
    }
  </SessionContext.Consumer>
);
