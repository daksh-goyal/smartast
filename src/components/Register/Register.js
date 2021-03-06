import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: "",
            name: '',
            isError: false,
            errorValue: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onSubmitSignIn = () => {
        fetch('https://murmuring-atoll-41071.herokuapp.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                } else {
                    this.setState({
                        isError: true,
                        errorValue: user
                    })
                }
            })
            // .catch(err => console.log(err))
    }

    render() {
        const { onRouteChange } = this.props;
        let errorMessage;
        if (this.state.isError) {
            errorMessage = <p className='center w-90 br2 pa3 ma2 red' role='alert'>{`*${this.state.errorValue}*`}</p>;
        }
        return (
            <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 shadow-5 center' style={{ width: '90%', maxWidth: '24rem' }}>
                <main className="pa4 black-80">
                    {errorMessage}
                    <form className="measure" onSubmit={(e) => e.preventDefault()}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f3 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-near-white hover-black w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-near-white hover-black w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-near-white hover-black w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => onRouteChange('signin')} className="f6 link dim black db pointer">Sign In Instead?</p>
                        </div>
                    </form>
                </main>
            </article>
        );
    }
}

export default Register;