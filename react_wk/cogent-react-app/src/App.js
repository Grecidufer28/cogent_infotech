// import logo from './logo.svg';
// import './App.css';

// import Item from './components/Item'
// import Product from './components/Product';

// const App=()=> {
//   const products = [
//     {
//       itemNo: '1001',
//       itemName: 'T-Shirt',
//       itemPrice: '$15',
//       date: new Date(2023, 2, 28)
//     },
//     {
//       itemNo: '1002',
//       itemName: 'Tesla',
//       itemPrice: '$60,000'
//     },
//     {
//       itemNo: '1003',
//       itemName: 'Coffee Tumbler',
//       itemPrice: '$40'
//     }
//   ];

//   return (
//     <div>
//       <h1 >Product Details</h1>
//       <Product itemNo={products[2].itemNo} itemName={products[2].itemName} itemPrice={products[2].itemPrice}></Product>
//     </div>
//   );
// }

// export default App;

import React from "react"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={count: 0}
    this.state={number: 0}
    this.state={translatedNumber:""}
  }

  incrementCount=()=>{
    this.setState({count: this.state.count+1})
  }

  convertNumberToWord(number) {
    const numbersToWords = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety'
    }
    if(number in numbersToWords)
      return numbersToWords[number]
    
    let words = ""
    if(number >=1000) {
      words += this.convertNumberToWord(Math.floor(number/1000)) + " thousand "
      number %= 1000
    }

    if(number >= 100) {
      words += this.convertNumberToWord(Math.floor(number/100)) + " hundred"
      number %= 100
    }

    if(number > 0) {
      if(words!="") {
        words += " and "
      }

      if(number < 20) {
        words += numbersToWords[number]
      } else {
        words += numbersToWords[number - (number%10)]
        number %=10
        if(number > 0) {
          words += "-" + numbersToWords[number]
        }
      }
    }

    return words;
  }

  translateNumber=()=> {
    
    console.log(document.getElementById("amount").value)
    this.setState({
      translatedNumber: this.convertNumberToWord(document.getElementById("amount").value)
    })
  }

  render() {
    return(
    // <div>
    //   <p>{this.state.count}</p>
    //   <button onClick={this.incrementCount}>Increment Count</button>
    // </div>
    <div>
      <label for='amount'>Enter Amount: </label>
      <input type='text' id="amount" name="amount"></input><br></br>
      <button onClick={this.translateNumber}>Translate Number</button><br></br><br></br>
      <p>{this.state.translatedNumber}</p>
    </div>
    );
  }
}

export default App