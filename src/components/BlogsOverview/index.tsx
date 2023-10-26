import { Description, Metadata, Subtitle, Title } from 'components';
import { ReactElement } from 'react';
import { DefBlogs, DefTheme } from 'types';
import { getClassName } from 'utils';

type Props = {
  allBlogs: DefBlogs;
  paramKey: Lowercase<string>;
  theme?: DefTheme;
};

const BlogsOverview = ({ allBlogs, paramKey, theme }: Props): ReactElement => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {allBlogs.map((blog) => (
        <a href={`?${paramKey}=${blog.url}`} key={blog.id}>
          <Title level={2} className={getClassName({ tag: 'h2' })}>
            {blog.title}
          </Title>
          <Subtitle className={getClassName({ tag: 'h4' })}>{blog.subtitle}</Subtitle>
          <Description className={getClassName({ tag: 'p' })}>{blog.description}</Description>
          <Metadata data={blog.metadata} theme={theme} />
        </a>
      ))}
    </section>
  );
};

export default BlogsOverview;
