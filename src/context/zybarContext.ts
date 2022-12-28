import { createContext } from 'react';

export interface ZybarState {
  width: number | string;
  collapsedWidth: number | string;
  collapsed: boolean;
}

export interface ZybarContextProps extends Partial<ZybarState> {
  updateZybarState: (values: ZybarState) => void;
  updateCollapsedState: () => void;
}

export const zybarContext = createContext<ZybarContextProps | undefined>(undefined);
