import { FC } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import styles from './ActionButtonMenu.module.scss';
import { ExternalAction } from '../../../interfaces/external-action';

export type ActionButtonMenuProps = {
  actions: ExternalAction[];
  externalActionSelected: (action: ExternalAction) => void;
};

export const ActionButtonMenu: FC<ActionButtonMenuProps> = ({
  actions,
  externalActionSelected,
}) => {
  const onMenuClick = a => {
    const action = actions.find(x => x.url === a.key);
    externalActionSelected(action);
  };

  const items = actions.map(action => ({
    key: action.url,
    label: (
      <span className={styles.item}>
        {action.icon && <img className={styles.icon} src={action.icon} alt={action.title} />}{' '}
        {action.title}
      </span>
    ),
  }));

  const menu = <Menu items={items} onClick={onMenuClick} />;

  return (
    <Dropdown overlay={menu} placement="bottomRight" trigger={['click']} className={styles.menu}>
      <div className={styles.buttonWrap}>
        <Button
          type="default"
          onClick={e => e.preventDefault()}
          size="large"
          icon={<EllipsisOutlined size={6} style={{ rotate: '90deg' }} />}
        />
      </div>
    </Dropdown>
  );
};
