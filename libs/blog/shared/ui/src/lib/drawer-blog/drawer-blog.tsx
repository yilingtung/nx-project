import { twMerge } from 'tailwind-merge';

import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@nx-project/shared/ui';

import { ReactComponent as ExpandSvg } from '../../assets/icons/sidebar-left-expand.svg';
import { ReactComponent as CollapseSvg } from '../../assets/icons/sidebar-left-collapse.svg';
import { ReactComponent as ExternalLinkSvg } from '../../assets/icons/external-link.svg';
import { ReactComponent as HelpCenterSvg } from '../../assets/icons/help-center.svg';
import { ReactComponent as ProductSvg } from '../../assets/icons/product.svg';
import { ReactComponent as PostSvg } from '../../assets/icons/post.svg';
import { ReactComponent as AccountBoxSvg } from '../../assets/icons/account-box.svg';
import { ReactComponent as NotificationsSvg } from '../../assets/icons/notifications.svg';
import { ReactComponent as PaidSvg } from '../../assets/icons/paid.svg';

export interface DrawerBlogProps {
  className?: string;
  isOpen?: boolean;
  expandWidth?: number;
  collapseWidth?: number;
  toggleDrawer?: () => void;
}

export function DrawerBlog({
  className,
  isOpen = false,
  expandWidth = 240,
  collapseWidth = 80,
  toggleDrawer,
}: DrawerBlogProps) {
  return (
    <Drawer
      className={twMerge(className)}
      isOpen={isOpen}
      expandWidth={expandWidth}
      collapseWidth={collapseWidth}
    >
      <div className="flex h-[79px] flex-shrink-0" />
      <Divider />
      <div className="flex-1 overflow-y-auto">
        <List className={`${isOpen ? '' : 'py-0'}`}>
          <ListItem>
            <ListItemIcon>
              <ExternalLinkSvg />
            </ListItemIcon>
            {isOpen && <ListItemText>查看網站</ListItemText>}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HelpCenterSvg />
            </ListItemIcon>
            {isOpen && <ListItemText>聯繫我們</ListItemText>}
          </ListItem>
        </List>
        <List className={`${isOpen ? '' : 'py-0'}`}>
          {isOpen && (
            <ListItem className="h-[22px] pb-[8px]">
              <ListItemText className="text-[16px] text-netural-80">
                管理
              </ListItemText>
            </ListItem>
          )}
          <ListItem>
            <ListItemIcon>
              <PostSvg />
            </ListItemIcon>
            {isOpen && <ListItemText>貼文</ListItemText>}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ProductSvg />
            </ListItemIcon>
            {isOpen && <ListItemText>產品</ListItemText>}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountBoxSvg />
            </ListItemIcon>
            {isOpen && <ListItemText>個人</ListItemText>}
          </ListItem>
        </List>
        <List className={`${isOpen ? '' : 'py-0'}`}>
          {isOpen && (
            <ListItem className="h-[22px] pb-[8px]">
              <ListItemText>設定</ListItemText>
            </ListItem>
          )}
          <ListItem>
            <ListItemIcon>
              <NotificationsSvg />
            </ListItemIcon>
            {isOpen && <ListItemText>通知</ListItemText>}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PaidSvg />
            </ListItemIcon>
            {isOpen && <ListItemText>金流</ListItemText>}
          </ListItem>
        </List>
      </div>
      <Divider />
      <List>
        <ListItem onClick={toggleDrawer}>
          <ListItemIcon>
            {isOpen ? <ExpandSvg /> : <CollapseSvg />}
          </ListItemIcon>
          {isOpen && <ListItemText>Collapse the sidebar</ListItemText>}
        </ListItem>
      </List>
    </Drawer>
  );
}

export default DrawerBlog;
