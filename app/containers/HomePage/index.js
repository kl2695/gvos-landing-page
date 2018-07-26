/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import H3 from 'components/H3';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import ColumnSection from './columnSection';
import ColumnTwo from './columnTwo';
import ColumnThree from './columnThree';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="GVOS Landing Page"
            content="A Decentralized Exchange Protocol"
          />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.landingPageHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.landingPageTagline} />
            </p>
          </CenteredSection>
          <ColumnSection>
            <Section>
              <H2>
                <FormattedMessage {...messages.whatisGVOS} />
              </H2>
              <FormattedMessage {...messages.gvosDescription} />
            </Section>
            <Section>Picture Goes Here</Section>
          </ColumnSection>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.problemHeader} />
            </H2>
          </CenteredSection>
          <ColumnSection>
            <ColumnThree>
              <H3>Slow Transaction Speeds</H3>
              <FormattedMessage {...messages.problems1} />
            </ColumnThree>
            <ColumnThree>
              <H3>Scalability</H3>
              <FormattedMessage {...messages.problems2} />
            </ColumnThree>
            <ColumnThree>
              <H3>Interoperability</H3>
              <FormattedMessage {...messages.problems3} />
            </ColumnThree>
          </ColumnSection>
          <CenteredSection>
            <H2>Decentralized Exchange</H2>
            <FormattedMessage {...messages.decentralizedExchange} />
          </CenteredSection>
          <ColumnSection>
            <ColumnTwo>
              <H3>Delayed Proof of Work</H3>
              <FormattedMessage {...messages.technology1} />
            </ColumnTwo>
            <ColumnTwo>
              <H3>Network Specific Sidechains</H3>
              <FormattedMessage {...messages.technology2} />
            </ColumnTwo>
          </ColumnSection>
          <ColumnSection>
            <ColumnTwo>
              <H3>Delegated Proof of Stake</H3>
              <FormattedMessage {...messages.technology3} />
            </ColumnTwo>
            <ColumnTwo>
              <H3>Atomic Swap Technology</H3>
              <FormattedMessage {...messages.technology4} />
            </ColumnTwo>
          </ColumnSection>
          <ReposList {...reposListProps} />
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
