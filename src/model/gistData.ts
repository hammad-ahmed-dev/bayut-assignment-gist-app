import { ReactComponentElement, ReactElement } from "react";

interface GistData {
  id?: number;
  owner?: { avatar_url: string; login: string };
  comments?: number;
  files?: object;
  created_at?: string;
  description?: string;
  updated_at?: string;
  isLoading?: boolean;
}

interface GistCardHeader {
  files?: string[];
  comments?: number;
  userAvatar?: string;
  userName?: string;
  isLoading?: boolean;
}
interface GistInfo {
  icon?: object;
  title?: string;
  count?: number;
  files?: string[];
}
interface FileList {
  filesObj?: any;
  files?: string[];
  isLoading?: boolean;
}

export type { GistData, GistCardHeader, GistInfo, FileList };
