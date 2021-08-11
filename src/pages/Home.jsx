import { userService } from '../services/user-service'
import { bitCoinService } from '../services/bitcoin-service'
import userCoins from '../assets/imgs/coins.png'
import bitCoin from '../assets/imgs/bitcoin.png'
import { connect, useDispatch, useSelector } from 'react-redux'
import { signup } from '../store/actions/userActions'
import MovesList from '../cmps/MovesList'
import { useState } from 'react'
import { useEffect } from 'react'

export const Home = () => {
  const [bitcoinRate, setBitcoinRate] = useState(null)
  const { loggedInUser } = useSelector((state) => state.userModule)

  useEffect(() => {
    const loadRate = async () => {
      try {
        const bitcoinRate = await bitCoinService.getRate(loggedInUser.coins)
        setBitcoinRate(bitcoinRate)
      } catch (err) {
        console.log(err)
      }
    }
    loadRate()
  }, [bitcoinRate, loggedInUser.coins])

  if (!loggedInUser) return <div>Loading</div>
  const { name, coins, moves } = loggedInUser
  return (
    <section>
      <section className='home'>
        <div className='user-details'>
          <p>Hello {name}!</p>
          <p>
            <img className='home-icons' src={userCoins} alt='coins' />
            {coins}
          </p>
          <p>
            <img className='home-icons' src={bitCoin} alt='coin' /> BTC :{' '}
            {bitcoinRate}
          </p>
        </div>
      </section>
      <MovesList className='moves' moves={moves} />
    </section>
  )
}
