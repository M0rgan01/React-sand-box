import React, { useContext, useState } from 'react';

const theme = {
  dark: {
    background: 'black',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'black',
  },
};

// https://www.youtube.com/watch?v=WayVzizZRLk&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=23

// création d'un context, avec une valeur par défault
const ThemeContext = React.createContext(theme.dark);

// version classique
function ThemedButton ({children}) {
  // utilisation du context, avec en value la valeur par défaut OU la valeur du provider si renseigné
  return <ThemeContext.Consumer>
    {value => {
     return <button style={value}>{children}</button>
    }}
  </ThemeContext.Consumer>
}

// version hook
function ThemedButtonWithHook ({children}) {
  const value = useContext(ThemeContext);
  return <button style={value}>{children}</button>
}
// version class
class ThemedButtonWithClass extends React.Component {
  render() {
    const {children} = this.props;
    const value = this.context;
    return (<button style={value}>{children}</button>);
  }
}

ThemedButtonWithClass.contextType = ThemeContext;

export function Context() {

  const [useTheme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light');
  }
  const currentTheme = useTheme === 'light' ? theme.light : theme.dark;

  // si aucun provider -> utilisation du theme par défault
  return <div>
    <ThemeContext.Provider value={currentTheme}>
      <ContextToolbar />
    </ThemeContext.Provider>
    <ThemedButtonWithHook>Test hook</ThemedButtonWithHook>
    <ThemedButtonWithClass>Test class</ThemedButtonWithClass>
    <button onClick={toggleTheme}>Changer le theme</button>
  </div>
}

function ContextToolbar() {
  return <div>
    <SearchForm />
    <ThemedButton>test1</ThemedButton>
  </div>
}

function SearchForm() {
  return <div>
    <ThemedButton>test2</ThemedButton>
  </div>
}