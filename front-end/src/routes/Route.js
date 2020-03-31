import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// layouts
import AuthLayout from '~/pages/_layouts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = useSelector((state) => state.auth.signed);

  if (!signed && isPrivate) return <Redirect to="/" />;
  if (signed && !isPrivate) return <Redirect to="/encomendas" />;

  const Layout = AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
