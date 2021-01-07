import React from 'react';

import Scrollspy from 'react-scrollspy';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link, Element } from 'react-scroll';

import * as SC from './styled';

import {
  END_USER_AGREEMENT,
  LICENSE,
  THIRDPARTY_SERVICES,
  TERM_TERMINATION,
  AMENDMENTS_AGREEMENT,
  GOVERNING,
  ENTIRE_AGREEMENT,
  MENU_LIST,
} from './constants';

const TOS = () => (
  <StickyContainer>
    <SC.Container className="container d-flex align-items-center">
      <div className="row">
        <div className="col-3 sidebar  d-none d-lg-block">
          <Sticky topOffset={163} bottomOffset={163}>
            {({ style }) => (
              <div style={style}>
                <div className="logo">
                  <img
                    src="assets/images/logo-beta.png"
                    alt="Dappstore Logo"
                    className="img-fluid"
                  />
                </div>
                <Scrollspy
                  className="side-menu"
                  items={MENU_LIST}
                  currentClassName="current"
                >
                  <li>
                    <Link
                      activeClass="active"
                      to={END_USER_AGREEMENT}
                      smooth
                      duration={500}
                    >
                      End-User Licence Agreement
                    </Link>
                  </li>

                  <li>
                    <Link
                      activeClass="active"
                      to={LICENSE}
                      smooth
                      duration={500}
                    >
                      License
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to={THIRDPARTY_SERVICES}
                      smooth
                      duration={500}
                    >
                      Third Party Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to={TERM_TERMINATION}
                      smooth
                      duration={500}
                    >
                      Term and Termination
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to={AMENDMENTS_AGREEMENT}
                      smooth
                      duration={500}
                    >
                      Amendments to this Agreement
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to={GOVERNING}
                      smooth
                      duration={500}
                    >
                      Governing Law
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to={ENTIRE_AGREEMENT}
                      smooth
                      duration={500}
                    >
                      Entire Agreement
                    </Link>
                  </li>
                </Scrollspy>
              </div>
            )}
          </Sticky>
        </div>

        <div className="col-12 col-lg-9 main">
          <Element name={END_USER_AGREEMENT}>
            <section id={MENU_LIST[0]}>
              <h2>User Agreement</h2>
              <p className="desc-1">
                End-User License Agreement ("Agreement") for Dappstore BC Games
                Rating Platform
              </p>
              <p>Last updated: December 22, 2019</p>
              <p>
                Please read this End-User License Agreement ("Agreement")
                carefully before clicking continuing to use Dappstore blockchain
                games rating website or anything associated with using it.
              </p>
              <p>
                By using Dappstore website and reading our blockchain games
                in-depth reviews, also using our integrated e-wallet, you are
                agreeing to be bound by the terms and conditions of this
                Agreement.
              </p>
              <p>
                This Agreement is a legal agreement between you (either an
                individual or a single entity) and Dappstore website and it
                governs your use of the Application / website made available to
                you by Decenternet.
              </p>
              <p>
                If you do not agree to the terms of this Agreement, do not
                continue to use Dappstore website or any of its BC reviews or
                defer to use the Application.
              </p>
              <p>
                The Application is licensed, not sold, to you by Decenternet for
                use strictly in accordance with the terms of this Agreement.
              </p>
            </section>
          </Element>

          <Element name={LICENSE}>
            <section id={MENU_LIST[1]}>
              <h3 className="section-title">License</h3>
              <p>
                Decenternet grants you a revocable, non-exclusive,
                non-transferable, limited license to download, install and use
                the Application solely for your personal, non-commercial
                purposes strictly in accordance with the terms of this
                Agreement.
              </p>
            </section>
          </Element>

          <Element name={THIRDPARTY_SERVICES}>
            <section id={MENU_LIST[2]}>
              <h3 className="section-title">Third-Party Services</h3>
              <p>
                The Application may display, include or make available
                third-party content (including data, information, applications
                and other products services) or provide links to third-party
                websites or services ("Third-Party Services").
              </p>
              <p>
                You acknowledge and agree that Decenternet shall not be
                responsible for any Third- Party Services, including their
                accuracy, completeness, timeliness, validity, copyright
                compliance, legality, decency, quality or any other aspect
                thereof. Decenternet does not assume and shall not have any
                liability or responsibility to you or any other person or entity
                for any Third-Party Services.
              </p>
              <p>
                Third-Party Services and links thereto are provided solely as a
                convenience to you and you access and use them entirely at your
                own risk and subject to such third parties' terms and
                conditions.
              </p>
            </section>
          </Element>

          <Element name={TERM_TERMINATION}>
            <section id={MENU_LIST[3]}>
              <h3 className="section-title">Term and Termination</h3>
              <p>
                This Agreement shall remain in effect until terminated by you or
                Decenternet.
              </p>
              <p>
                Decenternet may, in its sole discretion, at any time and for any
                or no reason, suspend or terminate this Agreement with or
                without prior notice. This
              </p>
              <p>
                This Agreement will terminate immediately, without prior notice
                from Decenternet, in the event that you fail to comply with any
                provision of this Agreement. You may also terminate this
                Agreement by discontinuing to use the Dappstore website and any
                of its content and wallet application and all copies of its BC
                game reviews thereof from your mobile device or from your
                computer.
              </p>
              <p>
                Upon termination of this Agreement, you shall cease all use of
                the Application and delete all copies of the Application from
                your mobile device or from your computer.
              </p>
              <p>
                Termination of this Agreement will not limit any of
                Decenternet's rights or remedies at law or in equity in case of
                breach by you (during the term of this Agreement) of any of your
                obligations under the present Agreement.
              </p>
            </section>
          </Element>

          <Element name={AMENDMENTS_AGREEMENT}>
            <section id={MENU_LIST[4]}>
              <h3 className="section-title">Amendments to this Agreement</h3>
              <p>
                Decenternet reserves the right, at its sole discretion, to
                modify or replace this Agreement at any time. If a revision is
                material we will provide at least 30 days' notice prior to any
                new terms taking effect. What constitutes a material change will
                be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Application after any
                revisions become effective, you agree to be bound by the revised
                terms. If you do not agree to the new terms, you are no longer
                authorized to use the Application.
              </p>
            </section>
          </Element>

          <Element name={GOVERNING}>
            <section id={MENU_LIST[5]}>
              <h3 className="section-title">Governing Law</h3>
              <p>
                The laws of Philippines and South Korea excluding its conflicts
                of law rules, shall govern this Agreement and your use of the
                Application. Your use of the Application may also be subject to
                other local, state, national, or international laws.
              </p>
            </section>
          </Element>

          <Element name={ENTIRE_AGREEMENT}>
            <section id={MENU_LIST[6]}>
              <h3 className="section-title">Entire Agreement</h3>
              <p>
                The Agreement constitutes the entire agreement between you and
                Decenternet regarding your use of the Application and supersedes
                all prior and contemporaneous written or oral agreements between
                you and Decenternet.
              </p>
              <p>
                You may be subject to additional terms and conditions that apply
                when you use or purchase other Decenternet's services, which
                Decenternet will provide to you at the time of such use or
                purchase.
              </p>
            </section>
          </Element>
        </div>
      </div>
    </SC.Container>
  </StickyContainer>
);

export default TOS;
