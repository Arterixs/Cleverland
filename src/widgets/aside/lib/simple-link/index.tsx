import { PropsLink } from 'types/interfaces/link-props';
import { WrapperLink } from 'widgets/aside/ui/wrapper-link';

export const renderNavSimpleList = ({ title, path }: PropsLink) => <WrapperLink title={title} path={path} />;
