import useUser from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-grey-100);
`;
const ProtectedRoute = ({ children }) => {
  // 1. check if user is logged in
  // 2. if not, redirect to login page
  // 3. if yes, render children
  const { user, isLoading, isAuthenticated } = useUser();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      Navigate("/login");
    }
  }, [isAuthenticated, isLoading, Navigate]);
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }
  return isAuthenticated && children;
};

export default ProtectedRoute;
