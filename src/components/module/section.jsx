import PropTypes from 'prop-types';

import { SectionStyle } from 'components/module-style/section.styled';

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      <h1>{title}</h1>
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
