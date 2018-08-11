import React from 'react';
import { Menu } from 'semantic-ui-react'
import { LocaleContext } from './LocaleContext';

const ToggleLocale = () => (
    <LocaleContext.Consumer>
        {(context) => (
            <Menu.Menu position='right'>
                <MenuItem locale='en' {...context} />
                <MenuItem locale='pl' {...context} />
            </Menu.Menu>
        )}
    </LocaleContext.Consumer>
)

const MenuItem = ({ locale, currentLocale, changeLocale }) => (
    
    <Menu.Item disabled={currentLocale === locale} onClick={(e) => {
        e.preventDefault()
        changeLocale(locale)
    }}>{locale.toUpperCase()}</Menu.Item>

)

export default ToggleLocale