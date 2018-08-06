import React from "react"

export const LocaleContext = React.createContext()

class LocaleProvider extends React.Component {
  constructor(props) {
    super(props);

    this.changeLocale = (locale) => {
      this.setState({ locale: locale })
    }

    this.state = {
      locale: 'pl',
      changeLocale: this.changeLocale
    };
  }

  render() {
    return (
      <LocaleContext.Provider value={this.state}>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

export default LocaleProvider;