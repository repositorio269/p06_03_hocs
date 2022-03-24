import React from "react";


const withModal = (Component) => {

    class ComponentWithModal extends React.Component {
       
        constructor(props){
            super(props);
            this.state = {
                isShowModal: false,
                text: ''
            }
            this.handleToggleModal = this.handleToggleModal.bind(this); // Obligatorio "bindear" el método
            this.handleSetModalText = this.handleSetModalText.bind(this);
        }

        handleToggleModal() {
            this.setState({isShowModal: !this.state.isShowModal})
        }

        handleSetModalText(text) {
            this.setState({text});
        }

        render() {
            return(
                <>
                    {this.state.isShowModal ? 
                        <div className="overlay">
                            <div className="modal">
                                <p>{this.state.text}</p>
                                <button onClick={() => this.handleToggleModal()}>Aceptar</button>
                            </div>
                        </div>
                        : null
                    }
                    <Component handleToggleModal={this.handleToggleModal}
                               handleSetModalText={this.handleSetModalText}/>
                </>
            )
        }

    }

    return ComponentWithModal;
}

export default withModal;