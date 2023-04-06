import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import './index.styl'

const items: MenuProps['items'] = [
  {
    label: 'HOME',
    key: '/',
  },
  {
    label: 'TEAM MEMBERS',
    key: '/members',
  },
  {
    label: 'SOURCE CODES',
    key: '/codes',
  },
  {
    label: 'PUBLICATIONS',
    key: '/publications',
    children: [
      {
        label: 'Previous List',
        key: '/publications/previous',
      },
      {
        label: 'Journal Articles',
        key: '/publications/journal',
      },
      {
        label: 'Conference Papers',
        key: '/publications/conference'
      }
    ],
  },
];

export default function Header() {
  const [current, setCurrent] = useState('/');
  const [showMenu, setShowMenu] = useState(false);
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e.key);
    setCurrent(e.key);
    setShowMenu(false)
  };
  return (
    <>
      <div className="header bg-homepage-primary">
        <i className="fa-solid fa-house-user"></i>
        <div>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
        <p className='text-homepage-title'>Your name</p>
      </div>
      <div className='header-mobile'>
        <p>Your name</p>
        <i className="fa-solid fa-bars" onClick={() => setShowMenu(!showMenu)}></i>
        {
          showMenu && <Menu
            className='menu-mobile'
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        }
      </div>
    </>
    
  )
}