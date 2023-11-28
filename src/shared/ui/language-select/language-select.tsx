import { Icon } from '@iconify/react';
import { Flex, Menu } from '@mantine/core';
import i18next from 'i18next';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../button';

const LANGUAGES = [
  {
    code: 'en',
    label: 'English',
    icon: 'cif:us',
  },
  {
    code: 'ru',
    label: 'Russian',
    icon: 'cif:ru',
  },
];

const LanguageSelect = () => {
  const { language, changeLanguage } = i18next;
  const { t } = useTranslation();

  const [statusModal, setStatusModal] = React.useState(false);

  const changeLanguageMenu = (value: string | null) => {
    if (!value) {
      return;
    }
    changeLanguage(value);
    setStatusModal(false);
  };

  return (
    <Menu opened={statusModal} onChange={setStatusModal} withArrow>
      <Menu.Target>
        <Button
          fullWidth
          variant={statusModal ? 'light' : 'outline'}
          leftSection={<Icon icon="tabler:world" />}
          onClick={() => setStatusModal((prev) => !prev)}
        >
          {t(LANGUAGES.find((elem) => elem.code === language)?.label || language)}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Flex direction="column" gap="xs">
          {LANGUAGES.map((elem) => (
            <Button
              key={elem.code}
              variant="light"
              size="compact-sm"
              fullWidth
              onClick={() => changeLanguageMenu(elem.code)}
            >
              {t(elem.label)}
            </Button>
          ))}
        </Flex>
      </Menu.Dropdown>
    </Menu>
  );
};

export const LanguageSelectMemo = memo(LanguageSelect);
