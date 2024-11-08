import { BasicStatus, PermissionType } from './enum';

export interface UserToken {
   accessToken?: string;
   refreshToken?: string;
}

export interface UserInfo {
   userId: string;
   email?: string;
   phone?: string;
   fullName?: JSON;
   gender?: string;
   birthday?: string;
   username?: string;
   profileImage?: string;
}

export interface Organization {
   id: string;
   name: string;
   status: 'enable' | 'disable';
   desc?: string;
   order?: number;
   children?: Organization[];
}

export interface Permission {
   id: string;
   parentId: string;
   name: string;
   label: string;
   type: PermissionType;
   route: string;
   status?: BasicStatus;
   order?: number;
   icon?: string;
   component?: string;
   hide?: boolean;
   hideTab?: boolean;
   frameSrc?: string;
   newFeature?: boolean;
   iconNewFeature?: string;
   children?: Permission[];
}

export interface Role {
   id: string;
   name: string;
   label: string;
   status: BasicStatus;
   order?: number;
   desc?: string;
   permission?: Permission[];
}

export interface SalesChannel {
   id: string;
   name: string;
   address: string;
   ward: string;
   deliveryArea: string;
   phone: string;
   email: string;
   company: string;
   supplierGroup: string;
   creator: string;
   notes?: string;
}