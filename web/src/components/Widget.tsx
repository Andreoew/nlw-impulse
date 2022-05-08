import { ChatTeardropDots } from 'phosphor-react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { usePersistedState } from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { Popover } from '@headlessui/react';

import { WidgetForm } from './WidgetForm'
import  GlobalStyle  from './styles/global'
import { Header } from './Header'

export function Widget(){ 
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',dark);

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
      <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover></>
    </ThemeProvider>      
    )
}