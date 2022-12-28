import React, { useCallback, useMemo, useState } from 'react';
import { zybarContext, ZybarState } from '../';

interface ZybarProviderProps {
  children?: React.ReactNode;
}

export const ZybarProvider: React.FC<ZybarProviderProps> = ({ children }) => {
  const [zybarState, setZybarState] = useState<ZybarState>();

  const updateZybarState = useCallback((values: Partial<ZybarState>) => {
    setZybarState((prev) => ({ ...prev, ...values }));
  }, []);

  const updateCollapseState = useCallback(() => {
    setZybarState((prev) => ({ ...prev, collapsed: !prev?.collapsed }));
  }, []);

  const value = useMemo(() => ({ ...zybarState, updateZybarState, updateCollapseState }), [zybarState, updateZybarState, updateCollapseState]);

  return <zybarContext.Provider value={value}>{children}</zybarContext.Provider>;
};
