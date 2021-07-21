import  {useState} from 'react'

function Transaction(){
    const [state, setState] = useState({
        id : 1,
        details:"Gaji",
        category:"income",
        nominal: 5000000
      })
      return [
        state,
        setState
    ]    
}

export default Transaction
