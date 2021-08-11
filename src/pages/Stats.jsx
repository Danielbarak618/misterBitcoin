import  { Component } from 'react'
import {Chart} from '../cmps/Chart'
import { bitCoinService } from '../services/bitcoin-service.js'

export  class Stats extends Component {
    state = {
        marketPrice:{},
        transactions:{}
    }

    async componentDidMount(){
        try{
        const marketPrice = await bitCoinService.getMarketPrice()
        const transactions = await bitCoinService.getConfirmedTransactions()
        this.setState({marketPrice , transactions})
        }catch(err){
            console.log(err);
        }
    }

    pricePerDay(){
        return this.state.marketPrice.values.map(coord => coord.y)
    }
    transactionsPerDay(){
        return this.state.transactions.values.map(coord => coord.y)
    }
    isChartLoading(){
        const {marketPrice , transactions} = this.state
        return !marketPrice || !marketPrice.values || !transactions || !transactions.values
    }


    render() {
        
        return this.isChartLoading() ? <div>Loading..</div>
        : (
            <div>
                <Chart data={this.pricePerDay()} color='#8ed53f' title="Market Price(USD)"/>
                <Chart data={this.transactionsPerDay()} color='red' title="Confirmed Transactions Per Day"/>
            </div>
        )
    }
}
