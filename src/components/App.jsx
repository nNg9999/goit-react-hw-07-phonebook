// Core
import React, { Component } from 'react';

// Components
import Layout from './Layout';
import Section from './Section';
import ContactForm from './ContactForm/ContactFormContainer';
import ContactList from './ContactList';
import Filter from './Filter';
import ThemeToggler from './ThemeToggler';
import Timer from './Timer';
import Button from './Button';
import StepSelector from './StepSelector';
import Modal from './Modal';

// utils
// import storage from '../utils/storage';
import { ToastContainer } from 'react-toastify';
import Toggler from "../hoc/Toggler";


//styles
import 'react-toastify/dist/ReactToastify.css';

const stepOptions = [5, 10, 15, 20, 25, 30];


class App extends Component {

  componentDidMount() {
    //fetch
    this.props.onFetchContacts();
    this.props.onTheme();

  }

  render() {
    const { contacts, isLoadingContacts, visibleContacts, onIncrement, counterValue } = this.props;
    return (
      <Layout  >

        {isLoadingContacts && <Modal />}
        <ThemeToggler />
        <Section title={"Phonebook"}>
          <ContactForm />
        </Section>
        <Section title={"Contacts"}>
          {contacts.length > 1 && <Filter />}
          {contacts.length > 0 && < ContactList />}
          {!visibleContacts.length && <div>Not faund</div>}
        </Section>
        <Toggler>
          {({ isOpen, onToggle }) => (
            <>
              <Button label={"Timer"} onToggle={onToggle} isOpen={isOpen} />
              {isOpen && (
                <>
                  <Section title={"Timer"}>
                    <Timer />
                    <StepSelector options={stepOptions} />
                  </Section>
                  <Section title={"Counter"}>
                    <button type="button" onClick={() => onIncrement()}>Counter value : {counterValue} </button>
                  </Section>
                </>
              )}
            </>
          )}
        </Toggler>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Layout >
    );
  }
}


export default App;

