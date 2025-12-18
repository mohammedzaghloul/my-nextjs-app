import React, { useState } from 'react';

function Counter() {
  // State للعداد يبدأ من 0
  const [count, setCount] = useState(0);

  // دالة لزيادة القيمة بمقدار 2
  const increaseByTwo = () => {
    setCount(count + 2);
  };

  // دالة لإنقاص القيمة بمقدار 10
  const decreaseByTen = () => {
    setCount(count - 10);
  };

  return (
    <div className="counter-container">
      <h2>Counter Component</h2>
      
      <div className="count-display">
        <span className="count-number">{count}</span>
      </div>
      
      <div className="buttons-container">
        <button 
          onClick={increaseByTwo} 
          className="increase-button"
        >
          Increase by 2
        </button>
        
        <button 
          onClick={decreaseByTen} 
          className="decrease-button"
        >
          Decrease by 10
        </button>
      </div>
      
      <div className="instructions">
        <p>• Click "Increase by 2" to add 2 to the counter</p>
        <p>• Click "Decrease by 10" to subtract 10 from the counter</p>
      </div>
    </div>
  );
}

export default Counter;