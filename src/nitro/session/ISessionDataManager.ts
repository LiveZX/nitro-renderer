import { INitroManager } from '@nitrots/api';
import { Resource, Texture } from '@pixi/core';
import { INitroCommunicationManager } from '../communication/INitroCommunicationManager';
import { IFurnitureData } from './furniture/IFurnitureData';
import { IFurnitureDataListener } from './furniture/IFurnitureDataListener';
import { GroupInformationManager } from './GroupInformationManager';
import { IgnoredUsersManager } from './IgnoredUsersManager';
import { IProductData } from './product/IProductData';

export interface ISessionDataManager extends INitroManager
{
    getAllFurnitureData(listener: IFurnitureDataListener): IFurnitureData[];
    removePendingFurniDataListener(listener: IFurnitureDataListener): void;
    getFloorItemData(id: number): IFurnitureData;
    getFloorItemDataByName(name: string): IFurnitureData;
    getWallItemData(id: number): IFurnitureData;
    getWallItemDataByName(name: string): IFurnitureData;
    getProductData(type: string): IProductData;
    getBadgeUrl(name: string): string;
    getGroupBadgeUrl(name: string): string;
    getBadgeImage(name: string): Texture<Resource>;
    loadBadgeImage(name: string): string;
    getGroupBadgeImage(name: string): Texture<Resource>;
    loadGroupBadgeImage(name: string): string;
    hasSecurity(level: number): boolean;
    giveRespect(userId: number): void;
    givePetRespect(petId: number): void;
    sendSpecialCommandMessage(text: string, styleId?: number): void;
    sendChatStyleUpdate(styleId: number): void;
    ignoreUser(name: string): void;
    unignoreUser(name: string): void;
    isUserIgnored(name: string): boolean;
    getGroupBadge(groupId: number): string;
    communication: INitroCommunicationManager;
    userId: number;
    userName: string;
    figure: string;
    gender: string;
    isGodMode: boolean;
    realName: string;
    ignoredUsersManager: IgnoredUsersManager;
    groupInformationManager: GroupInformationManager;
    respectsReceived: number;
    respectsLeft: number;
    respectsPetLeft: number;
    canChangeName: boolean;
    clubLevel: number;
    securityLevel: number;
    isAmbassador: boolean;
    isSystemOpen: boolean;
    isSystemShutdown: boolean;
    isAuthenticHabbo: boolean;
    isModerator: boolean;
    isCameraFollowDisabled: boolean;
    chatStyle: number;
    uiFlags: number;
}
