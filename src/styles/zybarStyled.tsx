import React from 'react';
import { CacheProvider, withEmotionCache } from '@emotion/react';
import styled, { FilteringStyledOptions, StyledComponent } from '@emotion/styled';
import createCache from '@emotion/cache';

const zybarCache = createCache({
  prepend: true,
  key: 'jams',
});

type Props = {
  [x: string]: unknown;
  children?: React.ReactNode;
};

export const zybarStyled = (component: unknown, options?: FilteringStyledOptions<unknown, never>) => {
  const factory = styled(component as React.ComponentClass<unknown, unknown>, options);
  return (...args: unknown[]) => {
    const Comp: StyledComponent<Props> = factory(...(args as []));

    return withEmotionCache(({ children, ...props }: Props, cache, ref) => {
      return (
        <CacheProvider value={zybarCache}>
          <Comp {...props} ref={ref}>
            <CacheProvider value={cache}>{children}</CacheProvider>
          </Comp>
        </CacheProvider>
      );
    });
  };
};
