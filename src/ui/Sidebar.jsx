import styled from "styled-components";
import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
import useFetchCabins from "../features/cabins/useFetchCabins.js";
import useFetchSettings from "../features/settings/useFetchSettings.js";
import Uploader from "../data/Uploader.jsx";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const Sidebar = () => {
  const { isPending, cabins } = useFetchCabins();
  const { error, isPending: isSettingsLoaded, settings } = useFetchSettings();
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
};

export default Sidebar;
