import React, { Component } from 'react'

import { connect } from "react-redux";
import counterSelectors from "../modules/counter/counterSelectors";
import counterAction from "../modules/counter/counterAction";
import contactsSelectors from "../modules/contacts/contactsSelectors";
import contactsOperation from "../modules/contacts/contactsOperation";


import App from "./App";

class AppContainer extends Component {

  render() {
    return (
      <App {...this.props} {...this.state} >
        {this.props.children}
      </App>
    )
  }
}

const mapStateToProps = (state) => ({
  counterValue: counterSelectors.getValue(state),
  contacts: contactsSelectors.getContacts(state),
  visibleContacts: contactsSelectors.getVC(state),
  isLoadingContacts: state.contacts.loading,
})

const mapDispatchToprops = {
  onIncrement: counterAction.increment,
  onFetchContacts: contactsOperation.fetchContacts,
  onTheme: contactsOperation.themeConfig,

}

export default connect(mapStateToProps, mapDispatchToprops)(AppContainer);



