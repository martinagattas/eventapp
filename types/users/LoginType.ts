export type Login = {
    auth: boolean;
    userEmail: string;
    userMenu: null | HTMLElement;
    appBarMenu?:  null | HTMLElement;
    handleAppBarMenu?: (event: React.MouseEvent<HTMLElement>) => void;
    handleUserMenu?: (event: React.MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
    handleLogOut: () => void;
}