export interface TDrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  child?: TDrawerItem[];
}
