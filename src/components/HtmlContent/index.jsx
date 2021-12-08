import * as Styled from './styles';

export const HtmlContent = ({ html }) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};
