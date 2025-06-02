import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ArrowDropDown } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import {
  Construction,
  LockOutlined,
  HistoryEduOutlined,
  StarBorder,
  CreditCard,
  Code,
  ViewInAr,
  SettingsPower,
} from '@mui/icons-material';

export default function DropDown() {
    const [user, setUser] = React.useState<{ name: string } | null>(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, []);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // React.useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await fetch('http://localhost:4000/user/signature', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         setUser(data.name);
  //       } else {
  //         console.error('Failed to fetch user');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user:', error);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ margin: '15px', color: '#000', textAlign: 'center' }}>
        <h1 className="logo"> {user ? ` ${user.name}` : ''} </h1>
        <ArrowDropDown sx={{ color: 'black'[100] }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        slotProps={{
          paper: {
            sx: {
              width: 210,
              paddingTop: 0,
              paddingBottom: 0,
              color: 'var(--secondary-color)',
              fontSize: '14px',
              fontWeight: 400,
            },
          },
        }
      }
      >
        <MenuItem
          onClick={handleClose}
          sx={{
            '&:hover': {
              backgroundColor: '#ced4da',
            },
          }}
        >
          <Link href="/">Exit Business</Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: '#00083D',
            background: '#E8EFF6',
            borderBottom: '1px solid #8c8c8c',
            '&:hover': {
              backgroundColor: '#ced4da',
            },
          }}
        >
          Logged In as:
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: '#00083D',
            background: '#E8EFF6',
            paddingLeft: '7px',
            '&:hover': {
              backgroundColor: '#ced4da',
            },
          }}
        >
          <Link href="/user" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Construction sx={{ color: grey[800] }} />
            User Settings
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            color: '#00083D',
            background: '#E8EFF6',
            paddingLeft: '7px',
            '&:hover': {
              backgroundColor: '#ced4da',
            },
          }}
        >
          <Link href="/signature" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <HistoryEduOutlined sx={{ color: grey[800] }} />
            Signature
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            paddingLeft: '7px',
            '&:hover': {
              backgroundColor: '#ced4da',
            },
          }}
        >
          <Link href="/account/edit" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <LockOutlined sx={{ color: grey[800] }} />
            Account
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            paddingLeft: '7px',
            '&:hover': {
              backgroundColor: '#ced4da',
            },
          }}
        >
          <Link href="" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <StarBorder sx={{ color: grey[800] }} />
            Subscription
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            paddingLeft: '7px',
            '&:hover': {
              backgroundColor: '#ced4da',
            },
          }}
        >
          <Link href="" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <CreditCard sx={{ color: grey[800] }} />
            Billing
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            paddingLeft: '7px',
            '&:hover': {
              backgroundColor: '#ced4da',
            },
          }}
        >
          <Link href="" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Code sx={{ color: grey[800] }} />
            Developer
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            paddingLeft: '7px',
            '&:hover': {
              backgroundColor: '#ced4da',
            },
          }}
        >
          <Link href="" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <ViewInAr sx={{ color: grey[800] }} /> Connected Apps
          </Link>
        </MenuItem>
      <MenuItem
  onClick={() => {
    localStorage.clear();
    window.location.href = '/';
  }}
  sx={{
    background: '#E8EFF6',
    paddingLeft: '7px',
    '&:hover': {
      backgroundColor: '#ced4da',
    },
  }}
>
  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    <SettingsPower sx={{ color: grey[800] }} />
    Logout
  </div>
</MenuItem>

      </Menu>
    </div>
  );
}
