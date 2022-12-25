import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class HomePage extends Component {
    state = {array:[[1,2,3,4],[5,0,6,8],[9,10,7,11],[13,14,15,12]],winornot:"Arrange Numbers in Ascending Order an Send 0 to last box"}

    onSlide = (props) =>{
        const {array} = this.state
        const {i} = props
        let c,d,e,f,number,zero
        if(i !== 0){
            for(let a of array){
                for(let b of a){
                    if(b === i){
                        c = array.indexOf(a)
                        d = a.indexOf(b)
                    }
                    if(b === 0){
                        e = array.indexOf(a)
                        f = a.indexOf(b)
                    }
                }
            }
            if (((c === e-1) || (c === e+1)) && (d === f)) {
                number = array[c][d]
                zero = array[e][f]
                array[c][d] = zero
                array[e][f] = number
                this.setState({array:array})
            }
            if ((c === e) && ((d === f-1) || (d === f+1))) {
                number = array[c][d]
                zero = array[e][f]
                array[c][d] = zero
                array[e][f] = number
                this.setState({array:array})
            }
        }
        if(array[array.length - 1][array.length - 1] === 0){
            let g = 0
            let h = 1
            for(let j of array){
                for(let k of j){
                    if(k === 0){
                        continue
                    }
                    if(g<k){
                        g = k
                        h = 1
                    }else{
                        this.setState({winornot:"Arrange elements in Ascending order"})
                        h = 0
                        break
                    }
                }
                if(h === 0){
                    break
                }
            }
            if(h === 1){
                this.setState({winornot:"You Win"})
            }
        }
    }

    restart = () => {
        this.setState({array:[[1,2,3,4],[5,0,6,8],[9,10,7,11],[13,14,15,12]],winornot:"Arrange Numbers in Ascending Order an Send 0 to last box"})
    }

    render(){
        const {array,winornot} = this.state
        
        return(
            <div>
                <h1>Super Puzzle</h1>
                <div className='box'>
                    {array.map(item => (
                        <ul className='unordered-list' key={item}>
                            {item.map((i) => <li className='item' key={i} >
                                <button type="button" className='btn' onClick={() => (this.onSlide({i}))}>
                                {i}                                    
                                </button>
                                </li>)}
                        </ul>
                    ))}
                </div>
                <h1>{winornot}</h1>
                <button type="button" className='button1' onClick={this.restart}>Restart</button>
                <Link to='/'>
                <button type='button' className='button1'>Log Out</button>
                </Link>
                
            </div>
        )
    }
}

export default HomePage