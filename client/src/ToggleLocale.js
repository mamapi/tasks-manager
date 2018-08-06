import React from 'react';
import { Menu, Dropdown, Button } from 'semantic-ui-react'
import { LocaleContext } from './LocaleContext';

export default () => {
    return (
        <LocaleContext.Consumer>
            {localeVal => (
                <Menu.Menu position='right'>

                    <Menu.Item disabled={localeVal.locale === 'en'} onClick={(e) => {
                        e.preventDefault()
                        localeVal.changeLocale('en')
                    }}>EN</Menu.Item>
                    <Menu.Item disabled={localeVal.locale === 'pl'} onClick={(e) => {
                        e.preventDefault()
                        localeVal.changeLocale('pl')
                    }}>PL</Menu.Item>

                </Menu.Menu>

            )}
        </LocaleContext.Consumer>
    );
}
