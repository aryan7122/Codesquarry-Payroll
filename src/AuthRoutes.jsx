import { Navigate } from 'react-router-dom';

export const ProtectedRouteForUser = ({ children }) => {

  const storedAccessToken = localStorage.getItem('AccessToken');

  // Check if either the stored access token or URL access token exists
  if (!storedAccessToken ) {
    return <Navigate to="/login" replace={true} />
    // const url = `${externalUrlWithHome}/?isLogout=1`;
    // window.location.href = url;
  }

  return children;
};