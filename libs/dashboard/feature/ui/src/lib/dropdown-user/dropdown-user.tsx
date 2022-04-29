import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

import {
  Avatar,
  Divider,
  Dropdown,
  List,
  ListItem,
  ListItemText,
} from '@nx-project/shared/ui';

import { ReactComponent as ArrowSvg } from '../../assets/icons/chevron-down.svg';

export interface DropdownUserProps {
  className?: string;
}

export function DropdownUser({ className }: DropdownUserProps) {
  return (
    <Dropdown
      triggerWrapperClassName={twMerge(className)}
      triggerComponent={
        <div className="flex items-center">
          <Avatar
            className="mr-1"
            src="https://fakeimg.pl/300x100/eee/000/?text=A"
            alt="avatar"
            width={48}
            height={48}
          />
          <ArrowSvg className="" width={20} />
        </div>
      }
      popperOption={{
        placement: 'bottom-end',
        modifiers: [
          {
            name: 'offset',
            enabled: true,
            options: {
              offset: [0, 18],
            },
          },
        ],
      }}
    >
      {({ setVisible }) => (
        <List className="rounded shadow min-w-[120px] py-2 bg-white">
          <Link to="#">
            <ListItem className="px-4 h-8 ">
              <ListItemText className="text-3 hover:text-primary">
                personalPage
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="#">
            <ListItem className="px-4 h-8 ">
              <ListItemText className="text-3 hover:text-primary">
                accountSetting
              </ListItemText>
            </ListItem>
          </Link>
          <ListItem className="px-4 py-2 h-auto">
            <Divider />
          </ListItem>
          <Link
            to="#"
            onClick={() => {
              setVisible(false);
            }}
          >
            <ListItem className="px-4 h-8 ">
              <ListItemText className="text-3 hover:text-primary">
                logout
              </ListItemText>
            </ListItem>
          </Link>
        </List>
      )}
    </Dropdown>
  );
}

export default DropdownUser;
