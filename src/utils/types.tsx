import { MouseEvent } from "react"

export interface IToastProps {
    show: boolean,
    close: any,
    title: string,
    message: string,
    type: string,
    position: string
}

export interface IDashboardLayoutProps {
    Component?: any,
    header?: string,
    text?: string
}

export interface ITopbarProps {
    header?: any,
    text?: string,
    show?: string
}


export interface IModalProps {
    isShow?: boolean,
    closeModal?: any,
    children?: any,
    modalTitle?: any
}

export interface ISkeletonProps {
    height?: string,
    width?: string,
    bgColor?: string,
    animate?: boolean,
    radius?: string,
    className?: any,
    minHeight?: string,
    minWidth?: string,
    marginTop?: string,
    marginBottom?: string
}

export interface IEmptyBoxProps {
    children?: any,
    bgColor?: string,
    size?: string,
    className?: string
}


export interface IListQuery {
    limit?: number,
    page?: number,
    select?: string,
    order?: string,
    type?: string,
    mapped?: boolean
}

export interface IUserContext {
    users: Array<any>,
    loggedInUser: any,
    pagination: any,
    total: number,
    count: number,
    loading: boolean,
    // getUsers(data: IListQuery): any,
    getUsers(): any,
    getLoggedInUser(): any,
    setLoading(): any
}

export interface ICourseContext {
    courses: Array<any>,
    pagination: any,
    total: number,
    count: number,
    loading: boolean,
    getCourses(): any,
    setLoading(): any
}


export interface IPagination {
    next: { page: number, limit: number },
    prev: { page: number, limit: number },
}

export interface IPaginationNav {
    resourceName: string,
    pagination: IPagination,
    count: number,
    total: number
    onNext(e: MouseEvent<HTMLAnchorElement>): void,
    onPrev(e: MouseEvent<HTMLAnchorElement>): void
}