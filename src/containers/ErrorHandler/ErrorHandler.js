import React from 'react';
import Modal from '../../components/UI/Modal/Modal';

const ErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state={
            error: null
        }
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.state({error: null})
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, err => {
                this.setState({error: err});
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);

        }

        render() {
                return (
                    <React.Fragment>
                        <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                        </Modal>
                        <WrappedComponent {...this.props} />
                    </React.Fragment>
                )
    
        }
    }


}

export default ErrorHandler;
