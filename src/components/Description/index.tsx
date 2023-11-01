import useGetClassName from 'hooks/useGetClassName';
import { ReactElement, useState } from 'react';
import { isLabelInProps } from 'utils';

const [test, setTest] = useState();

export type DescriptionProps = {
  children?: string | ReactElement;
  className?: string;
  props?: unknown;
};

const Description = ({ children, className, ...props }: DescriptionProps): ReactElement | null => {
  const processedClassName = useGetClassName({ tag: 'p' });

  if (!children) {
    return null;
  }

  if (typeof children === 'string') {
    return (
      <p className={processedClassName} {...isLabelInProps(props)}>
        {children}
      </p>
    );
  }

  return children;
};

export { test, setTest }
export default Description;
