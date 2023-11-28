import { observer } from 'mobx-react';

import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { LogoutInstance } from './model';
import s from './ui.module.css';
import { Button } from '@/shared/ui/button';

export const Logout = observer(() => {
  const { logout } = LogoutInstance;

  const { t } = useTranslation();

  return (
    <Button
      variant="filled"
      onClick={logout}
      fullWidth
      justify="space-between"
      rightSection={<Icon className={s.icon} icon="material-symbols:logout" />}
    >
      {t('Logout')}
    </Button>
  );
});
