import React from 'react';

class Form extends React.Component {
   
    render() { 
        return (
            <div>
                <form onSubmit={this.props.result_meteo} >
                    <input type="text" name="country"/>
                    <input type="text" name="city"/>
                    <button>Valider</button>
                </form>
            </div>
          );
    }
}
 
export default Form;