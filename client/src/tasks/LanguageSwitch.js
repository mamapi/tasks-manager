// import React, { Component } from 'react'
// import { Button, ButtonGroup } from 'react-bootstrap'
// import axios from 'axios'

// class LanguageSwitch extends Component {
//     constructor(props) {
//         super(props)
//         this.observer = props.observer
//         this.state = {
//             lang: 'en'
//         }
//     }

//     switchLang(e, lang) {
//         e.preventDefault()
//         this.setState({ lang })
//         axios.defaults.headers.common['language'] = lang
//         this.observer.publish('lang switched', lang)
//     }

//     render() {
//         return (
//             <ButtonGroup>
//                 <Button onClick={(e) => this.switchLang(e, 'pl')}>
//                     Pl
//                 </Button>
//                 <Button onClick={(e) => this.switchLang(e, 'en')}>
//                     En
//                 </Button>
//             </ButtonGroup>
//         )
//     }
// }

// export default LanguageSwitch