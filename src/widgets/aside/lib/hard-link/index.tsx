import { NavigateCategory } from 'widgets/aside/ui/nav-category';
import { PropsLink } from 'types/interfaces/link-props';
import { WrapperLink } from 'widgets/aside/ui/wrapper-link';
import { renderBtnDropDown } from '../button-drop';

export const renderNavHardList = ({ title, path }: PropsLink) => (
  <>
    <WrapperLink title={title} path={path} renderProp={renderBtnDropDown} />
    <NavigateCategory />
  </>
);
