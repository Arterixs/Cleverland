import { NavigateCategory } from 'widgets/aside/ui/navigate-category';
import { PropsLink } from 'types/interfaces/link-props';
import { WrapperLink } from 'widgets/aside/ui/wrapper-link';
import { DropDownMenu } from 'feature/drop-down/model';
import { renderBtnDropDown } from '../button-drop';

export const renderNavHardList = ({ title, path }: PropsLink) => (
  <DropDownMenu>
    <WrapperLink title={title} path={path} renderProp={renderBtnDropDown} />
    <NavigateCategory />
  </DropDownMenu>
);
