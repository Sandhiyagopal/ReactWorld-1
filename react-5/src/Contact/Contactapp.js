import React, { Component } from 'react'
import Contactlist from './Contactlist'
import Contactdetails from './Contactdetails'
import Axios from 'axios'

class Contactapp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            selectedContact: {}
        }
    }
    userSelectedContact = (contact) => {
                this.setState({ selectedContact: contact })
    }
    componentDidMount() {
        let url = 'https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist'
        Axios.get(url).then((response) => {
            this.setState({ contacts: response.data })
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return <div className="container">
            <h1>ContactApp</h1>
            {/* <pre>{JSON.stringify(this.state)}</pre> */}
            <div className="row">
                <div className="col-md-8">
                    {/* ContactList Component  */}

                    <Contactlist contacts={this.state.contacts} methodOne={this.userSelectedContact} />
                </div>
                <div className="col-md-4">
                    {/*   Contact Details Component  */}
                    {
                        Object.keys(this.state.selectedContact).length > 0 ? <>
                            <Contactdetails userSelectedContact={this.state.selectedContact} />
                        </> : null
                    }

                </div>
            </div>
        </div>
    }
}

export default Contactapp