export type NavbarT = {
  userId?: number | null,
  userType?: 'client' | 'provider' | null,
  userEmail?: string | null,
  userMenu?: HTMLElement | null,
  appBarMenu?: HTMLElement | null,
  handleAppBarMenu?: (event: React.MouseEvent<HTMLElement>) => void,
  handleUserMenu?: (event: React.MouseEvent<HTMLElement>) => void,
  handleClose: () => void,
  handleLogOut?: () => void
}