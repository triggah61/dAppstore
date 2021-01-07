import React from 'react';
import { Formik, Form } from 'formik';

import { CATEGOIES_TO_ARRAY } from 'constants/config';
import * as SC from './styled';
import Card from '~/components/Common/Card';
import Loader from '~/components/Common/Loader';
import FormField from '~/components/Common/FormField';
import SectionAlert from '~/components/Common/SectionAlert';

export default props => (
  <SC.SearchWrapper>
    <div className="container">
      <div className="row">
        <div className="col">
          <Formik
            initialValues={{
              search: '',
            }}
          >
            {formikProps => (
              <Form>
                <SC.SearchBoxWrapper>
                  <FormField name="search" placeholder="Search App" />
                </SC.SearchBoxWrapper>
                {CATEGOIES_TO_ARRAY.map(type => {
                  const allApps =
                    props.fetchedApps && props.fetchedApps[type.value];
                  const filteredApps =
                    allApps &&
                    allApps.filter(app =>
                      app.name
                        .toLowerCase()
                        .includes(formikProps.values.search.toLowerCase())
                    );
                  return (
                    <SC.AppContainer key={type.value}>
                      <SC.Title>{type.text}</SC.Title>
                      <Loader height="10vh" loading={allApps}>
                        <SC.AppInner className="row">
                          {filteredApps && filteredApps.length > 0 ? (
                            filteredApps.map(app => (
                              <Card
                                type={type.value}
                                key={app.id}
                                {...app}
                                className="search"
                              />
                            ))
                          ) : (
                            <SectionAlert>No App found</SectionAlert>
                          )}
                        </SC.AppInner>
                      </Loader>
                    </SC.AppContainer>
                  );
                })}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  </SC.SearchWrapper>
);
