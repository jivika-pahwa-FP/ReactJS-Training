import { Component } from "react";
import Axios from "axios";

export default class NLCDataFetch extends Component {
    constructor() {
        super();
        this.state = {
            NLC_Data: {}
        }
    }

    render() {
        return (
            <>
                <h3>{this.state.NLC_Data.company} Power Limited</h3>
                <br />
                <div className="card" style={{ width: '350px', margin: '5px', display: 'inline-block' }}>
                    <div className="card-header">
                        {this.state.NLC_Data.DISPID} {this.state.NLC_Data.SC_SUBSEC}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.NLC_Data.company}</h5>
                        <div class="alert alert-primary" role="alert">
                            Previous Price : {this.state.NLC_Data.priceprevclose}
                        </div>
                        <div class="alert alert-secondary" role="alert">
                            Price Change :  {this.state.NLC_Data.pricechange}
                        </div>
                        <div class="alert alert-success" role="alert">
                            Percentage of Price Change : {this.state.NLC_Data.pricepercentchange}
                        </div>
                        <div class="alert alert-danger" role="alert">

                            Current Price : {this.state.NLC_Data.pricecurrent}
                        </div>
                        <div class="alert alert-warning" role="alert">
                            Last Updated At : {this.state.NLC_Data.lastupd}
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        Year : {this.state.NLC_Data.YR}
                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        setInterval(() => {

            Axios.get(this.props.stockApi).then((response) => {
                // console.log(response.data);
                // console.log(response.data.data.HN);
                this.setState({ NLC_Data: response.data.data })
                // console.log(this.state.NLC_Data)
            })
        }, 1000);
    }

}

