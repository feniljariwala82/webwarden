import { JSX, useState } from 'react'
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconReceipt2,
  IconSettings,
  IconSwitchHorizontal
} from '@tabler/icons-react'
import { Code, Group } from '@mantine/core'
import './Navbar.css'
import Versions from '@renderer/components/Versions'

const data = [
  { link: '', label: 'Notifications', icon: IconBellRinging },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
  { link: '', label: 'Databases', icon: IconDatabaseImport },
  { link: '', label: 'Authentication', icon: Icon2fa },
  { link: '', label: 'Other Settings', icon: IconSettings }
]

export function Navbar(): JSX.Element {
  const [active, setActive] = useState('Notifications')

  const links = data.map((item) => (
    <a
      className={'link'}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={'linkIcon'} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <div style={{ display: 'flex' }}>
      <nav id={'navbar'} className={'navbar'}>
        <div className={'navbarMain'}>
          <Group className={'header'} justify="space-between">
            {/*<MantineLogo size={28} />*/}
            <div>WebWarden</div>
            <Code fw={700}>v3.1.2</Code>
          </Group>
          {links}
        </div>

        <div className={'footer'}>
          <a href="#" className={'link'} onClick={(event) => event.preventDefault()}>
            <IconSwitchHorizontal className={'linkIcon'} stroke={1.5} />
            <span>Change account</span>
          </a>

          <a href="#" className={'link'} onClick={(event) => event.preventDefault()}>
            <IconLogout className={'linkIcon'} stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>
      </nav>
      <div id="main-content">
        <Versions />
      </div>
    </div>
  )
}
